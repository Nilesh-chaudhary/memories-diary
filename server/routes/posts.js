import express from "express";
import { createPosts, getPosts } from "../controllers/posts.js";
const router = express.Router();

//localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPosts);

export default router;
