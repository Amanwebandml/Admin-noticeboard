const express = require("express");
const { Post } = require("../db.js");
const router = express.Router()

const adminUser = {
    username: "admin",
    password: "1234"
}

router.post("/signin", async (req, res) => {

    let success = false;
    const body = req.body;

    if (body.username == adminUser.username && body.password == adminUser.password) {
        success = true;
    }
    
    // Always send a response
    res.json({
        flag: success
    });
});
router.post("/post", async (req, res) => {
    console.log("here");
    
    const body = req.body;
    await Post.create({
        title: body.title,
        content: body.content
    })
    
    res.json({
        msg:"post added"
    })
})
router.get("/posts", async (req, res) => {
    const posts = await Post.findOne().sort({createdAt: -1})
    res.json({
        posts
    })
})
module.exports = router
