import axios from "axios";

const url = "https://backend-self-eta.vercel.app/posts";
//  "http://localhost:5000/posts";
// "https://backend-6wpt-95klxtlm5-nileshother123-gmailcom.vercel.app/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
