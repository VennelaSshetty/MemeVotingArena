const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    image:{
       url:String,
       filename:String
    },
    category: {
       type: String,
       enum: ["Study", "Family", "Love", "Pets" ,"Internet" , "Gaming" , "Food" , "Life" , "Movies" , "School","Tech"],
       required: true,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    votes: {
    type: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            type: { type: String, enum: ["upvote", "downvote"] }
        }
    ],
    default: []
    }
});

const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;

