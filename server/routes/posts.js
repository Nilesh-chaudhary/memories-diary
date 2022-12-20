import express from "express";
import {
  createPosts,
  getPosts,
  updatePosts,
  deletePost,
  likePost,
} from "../controllers/posts.js";
const router = express.Router();

//localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePosts);
router.delete("/:id", deletePost);
router.delete("/:id/likePost", likePost);

export default router;
