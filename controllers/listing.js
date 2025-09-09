const Listing=require("../models/listing.js");
const User=require("../models/user.js");

module.exports.index= async(req, res) => {
    let allListings=await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm=(req, res) => {
    res.render("listings/new.ejs");
};

module.exports.createListing= async (req, res) => {
    try {
        const { title, category } = req.body;
        const newListing = new Listing({
            title,
            category,
            owner: req.user._id, 
            image: {
                url: req.file.path,     
                filename: req.file.filename 
            }
        });

        await newListing.save();
        req.flash("success","New listing created!");
        res.redirect("/listings");
    } catch (err) {
        console.log(err);
        res.send("Error uploading meme");
    }
};

module.exports.showSearchListings=async(req,res)=>{
  let searchRes=req.query.q;
  allListings=await Listing.find({$or:[{title:{ $regex:searchRes ,$options:"i"}},
                                      {category:{ $regex:searchRes ,$options:"i"}},
                                    ]});
  if(allListings.length==0){
    req.flash("error",`No listings found with ${searchRes}`);
    return res.redirect("/listings");
  }
  res.render("listings/index.ejs",allListings);
};

module.exports.showLeaderboard=async (req, res) => {
  const listings = await Listing.find({}).lean();

  listings.forEach(l => {
    l.votes = Array.isArray(l.votes) ? l.votes : []; 
    l.netVotes = l.votes.filter(v => v.type === "upvote").length 
               - l.votes.filter(v => v.type === "downvote").length;
  });

  listings.sort((a, b) => b.netVotes - a.netVotes);
  const top5 = listings.slice(0, 5);

  res.render("listings/leaderboard.ejs", { top5 });
};


module.exports.showListingsCategory=async(req,res)=>{
  let {category}=req.params;
  allListings=await Listing.find({category:category});
  res.render("listings/index.ejs",allListings);
};

module.exports.favoriteListings= async (req, res) => {
  let {id} = req.params;

  if(!req.user){
    return res.redirect("/login");
  }

  const user = await User.findById(req.user._id);
  const memeId = req.params.id;

  if(user.favorites.includes(memeId)){
    user.favorites.pull(memeId); 
  } else {
    user.favorites.push(memeId); 
  }

  await user.save();
  if(req.headers.referer && req.headers.referer.includes("/favorites")){
    return res.redirect("/listings/favorites"); 
  } else {
    return res.redirect(`/listings/${id}`); 
  }
};

module.exports.showFavListings=async (req, res) => {
  if (!req.user) {
    return res.redirect("/login");
  }
  const user = await User.findById(req.user._id).populate("favorites");
  res.render("listings/favorites.ejs", { favorites: user.favorites || [] });
};

module.exports.showListing=async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("owner");
    if(!listing){
    req.flash("error","Listing you requested for does not exist");
    res.redirect("/listings");
    }else{
    res.render("listings/show.ejs",{listing});
    }
};

module.exports.editForm=async (req, res) => {
   let {id}=req.params;
  const listing=await Listing.findById(id);
   if(!listing){
    req.flash("error","Listing you requested for does not exist");
    res.redirect("/listings");
  }else{
    let originalUrl=listing.image.url;
    originalUrl=originalUrl.replace("/upload","/upload/h_250,w_250");
    res.render("listings/edit.ejs",{listing,originalUrl});
  }
};

module.exports.updateListing= async (req, res) => {
    const { id } = req.params;
    const { title, category } = req.body;

    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    listing.title = title;
    listing.category = category;
    
    if (req.file) {
        listing.image = {
            url: req.file.path,       
            filename: req.file.filename
        };
    }
    await listing.save();
    req.flash("success","Listing Updated successfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing=async (req,res)=>{
  let {id}=req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success","Listing deleted successfully");
  res.redirect("/listings");
};

module.exports.renderVotes= async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    const userVote = req.user
        ? listing.votes.find(v => v.user.equals(req.user._id))?.type || null
        : null;

    res.json({
        upvotes: listing.votes.filter(v => v.type === "upvote").length,
        downvotes: listing.votes.filter(v => v.type === "downvote").length,
        userVote
    });
};

module.exports.renderUpvotes= async (req, res) => {
    const { id } = req.params;
    if (!req.user) {
        req.flash("error", "You must login to vote.");
        return res.redirect(`/listings/${id}`);
    }

    
    const userId = req.user._id;
    const listing = await Listing.findById(id);

    const existingVote = listing.votes.find(v => v.user.equals(userId));

    if (!existingVote) {
        listing.votes.push({ user: userId, type: "upvote" });
    } else if (existingVote.type === "upvote") {
        listing.votes = listing.votes.filter(v => !v.user.equals(userId));
    } else if (existingVote.type === "downvote") {
        existingVote.type = "upvote";
    }

    await listing.save();
    res.redirect(`/listings/${id}`);  
};

module.exports.renderDownvotes=  async (req, res) => {
    const { id } = req.params;
    if (!req.user) {
        req.flash("error", "You must login to vote.");
        return res.redirect(`/listings/${id}`);
    }
   
    const userId = req.user._id;
    const listing = await Listing.findById(id);

    const existingVote = listing.votes.find(v => v.user.equals(userId));

    if (!existingVote) {
        listing.votes.push({ user: userId, type: "downvote" });
    } else if (existingVote.type === "downvote") {
        listing.votes = listing.votes.filter(v => !v.user.equals(userId));
    } else if (existingVote.type === "upvote") {
        existingVote.type = "downvote";
    }

    await listing.save();
    res.redirect(`/listings/${id}`); 
};




