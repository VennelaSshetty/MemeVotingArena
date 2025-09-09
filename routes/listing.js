const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,ValidateListing}=require("../middleware.js");
const multer  = require('multer')
const {storage}=require("../cloudConfig");
const upload = multer({storage});

const listingController=require("../controllers/listing.js");

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(isLoggedIn,ValidateListing,upload.single("image"),wrapAsync(listingController.createListing));

router.get("/new",isLoggedIn,listingController.renderNewForm);

router.get("/search",wrapAsync(listingController.showSearchListings));

router.get("/leaderboard",wrapAsync(listingController.showLeaderboard));

router.get("/category/:category",wrapAsync(listingController.showListingsCategory));

router.post("/favorites/:id/toggle",wrapAsync(listingController.favoriteListings));

router.get("/favorites",wrapAsync(listingController.showFavListings));

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(isLoggedIn,isOwner,ValidateListing,upload.single("image"),wrapAsync(listingController.updateListing))
  .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editForm));

router.get("/:id/votes",isLoggedIn,wrapAsync(listingController.renderVotes));

router.post("/:id/upvote",wrapAsync(listingController.renderUpvotes));

router.post("/:id/downvote",wrapAsync(listingController.renderDownvotes));

module.exports=router;  