import express from "express";
import { activeCheck, createComment, createPost, deleteComment,deletePost, getAllPosts, getCommentsByPostId, getMyPosts, likePost } from "../controllers/postControllers.js";
import multer from "multer";
import { protectUser } from "../middleware/protectUser.js";


const upload = multer({
  storage: multer.memoryStorage()   // ✅ buffer enable
});



const postRouter = express.Router();


postRouter.get("/",activeCheck)
postRouter.post("/postUpload",protectUser,upload.single("media"),createPost)
postRouter.get("/getAllPosts",protectUser,getAllPosts)
// routes/postRoutes.js
postRouter.get("/getMyPosts", protectUser, getMyPosts); 
postRouter.delete("/delete", protectUser, deletePost);
postRouter.post("/comment", protectUser, createComment);
postRouter.get("/comments", getCommentsByPostId);

postRouter.post("/deletecomment", protectUser, deleteComment);
postRouter.put("/like", protectUser, likePost);
export default postRouter;