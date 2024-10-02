const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://backupamanforweb:ar6Hu4CUIkGOOv4l@cluster0.74ndf.mongodb.net/Post");

postSchema = new mongoose.Schema({
    title: String,
    content: String
},{timestamps: { createdAt: true, updatedAt: false }});
const Post = mongoose.model("Post", postSchema);
module.exports = { Post }
