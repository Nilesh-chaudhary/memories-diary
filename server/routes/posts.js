import express from "express";
import { createPosts, getPosts, updatePosts } from "../controllers/posts.js";
const router = express.Router();

//localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePosts);

export default router;
