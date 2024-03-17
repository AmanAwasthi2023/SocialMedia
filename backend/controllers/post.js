const Post = require("../models/Post");
const User = require("../models/User");

<<<<<<< HEAD

exports.createPost = async (req, res) => {

    try{

        const newPostData = {
            caption: req.body.caption,
            image:{
                public_id:"req.body.public_id",
                url: "req.body.url"
            },
            owner:req.user._id
        };

        const post = await Post.create(newPostData);

        const user = await User.findById(req.user._id);

        user.posts.push(post._id);

        await user.save();



        res.status(201).json({
            success:true,
            post,
        });

    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.deletePost = async (req, res) => {

=======
exports.createPost = async (req, res) => {

    try {
        
        const newPostData = {
            caption: req.body.caption,
            image:{
                public_id: "req.body.public_id",
                url: "req.body.url"
            },
            owner: req.user._id
        }

        const newPost = await Post.create(newPostData);

        const user = await User.findById(req.user._id);

        user.posts.push(newPost._id);

        await user.save();

        res.status(201).json({
            success:true,
            post:newPost,
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

};

exports.deletePost = async (req, res) => {
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
    try {
        
        const post = await Post.findById(req.params.id);

<<<<<<< HEAD
        if(!post)
        {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            })
        }

        if(post.owner.toString() !== req.user._id.toString())
        {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
=======
        if(!post){
            return res.status(400).json({
                success: false,
                message: "Post not found",
            });
        }

        if(post.owner.toString() !== req.user._id.toString()){
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        }

        await post.deleteOne();

        const user = await User.findById(req.user._id);

        const index = user.posts.indexOf(req.params.id);

        user.posts.splice(index, 1);

        await user.save();

        res.status(200).json({
<<<<<<< HEAD
            sucess: true,
            message: "Post deleted",
        });


=======
            success: true,
            message: "Post deleted",
        });

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
<<<<<<< HEAD
    });
    }

=======
        });
    }
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
}


exports.likeAndUnlikePost = async (req, res) => {
<<<<<<< HEAD
=======

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
    try {
        
        const post = await Post.findById(req.params.id);

        if(!post){
<<<<<<< HEAD
            return res.status(404).json({
=======
            res.status(404).json({
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
                success: false,
                message: "Post not found",
            });
        }

<<<<<<< HEAD
        if(post.likes.includes(req.user._id))
        {
=======
        if(post.likes.includes(req.user._id)){

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            const index = post.likes.indexOf(req.user._id);

            post.likes.splice(index, 1);

            await post.save();

            return res.status(200).json({
                success: true,
<<<<<<< HEAD
                message: "Post Unliked"
            });
        }
=======
                message: "Post Unliked",
            });
        }

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        else{
            post.likes.push(req.user._id);

            await post.save();

            return res.status(200).json({
                success: true,
<<<<<<< HEAD
                message: "Post Liked"
            });
        }

        

    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: error.message,
        })

    }
};

exports.getPostOfFollowing = async (req, res) => {
    try{
        const user = await User.findById(req.user._id);
        user.following;

        const posts = await Post.find({
            owner:{
                $in: user.following,
            },
        }).populate("owner likes comments.user");

        res.status(200).json({
            success: true, 
            posts:posts.reverse(),
        })

    }catch(error){
=======
                message:"Post Liked",
            })
        }

    } catch (error) {
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
<<<<<<< HEAD
}

exports.updateCaption = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({
=======
};


exports.getPostOfFollowing = async (req, res) => {

    try {
        
        const user = await User.findById(req.user._id);

        const posts = await Post.find({
            owner: {
                $in: user.following,
            }
        })

        res.status(200).json({
            success: true,
            posts,
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }

};

exports.updateCaption = async (req, res) => {

    try {
        
        const post = await Post.findById(req.params.id);

        if(!post){
            res.status(404).json({
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
                success:false,
                message: "Post not found",
            });
        }

<<<<<<< HEAD
        if(post.owner.toString() !== req.user._id.toString())
        {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
=======
        if(post.owner.toString() !== req.user._id.toString()){
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            });
        }

        post.caption = req.body.caption;
<<<<<<< HEAD
=======

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        await post.save();

        res.status(200).json({
            success: true,
            message: "Post updated",
        });
<<<<<<< HEAD
        
    } catch (error) {
=======

    } catch (error) {
       
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        res.status(500).json({
            success: false,
            message: error.message,
        });
<<<<<<< HEAD
    }
=======

    }

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
};

exports.commentOnPost = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        let commentIndex = -1;

        //checking if comment already exists
<<<<<<< HEAD
        post.comments.forEach((item, index) => {
            if(item.user.toString() === req.user._id.toString())
                commentIndex = index;
        });

        if (commentIndex !== -1) {

=======
        post.comments.forEach((item,index) => {
            if(item.user.toString() === req.user._id.toString()){
                commentIndex = index;
            }
        });

        if(commentIndex !== -1){
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            post.comments[commentIndex].comment = req.body.comment;

            await post.save();

            return res.status(200).json({
                success: true,
                message: "Comment Updated",
            });
<<<<<<< HEAD
            
        } else {
=======
        }
        else{
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            post.comments.push({
                user: req.user._id,
                comment: req.body.comment,
            });

            await post.save();
<<<<<<< HEAD

            return res.status(200).json({
                success: true,
                message: "Comment Added",
            });
        }

        
=======
            return res.status(200).json({
                success:true,
                message: "Comment Added",
            });
        }
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

};

<<<<<<< HEAD
exports.deleteComment = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);

        if(!post)
        {
=======
exports.deleteComments = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);
        
        if(!post){
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

<<<<<<< HEAD
        if(post.owner.toString() === req.user._id.toString())
        {


            if(req.body.commentId==undefined)
            {
                return res.status(404).json({
=======
        //checking if owner wants to delete
        if(post.owner.toString() === req.user._id.toString()){

            if(req.body.commentId==undefined){
                return res.status(400).json({
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
                    success: false,
                    message: "Comment Id is required",
                });
            }

<<<<<<< HEAD

            post.comments.forEach((item, index) => {
                if(item._id.toString() === req.body.commentId.toString())
                    return post.comments.splice(index, 1);
=======
            post.comments.forEach((item, index) => {
                if(item._id.toString() === req.body.commentId.toString()){
                    return post.comments.splice(index, 1);
                }
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            });

            await post.save();

            return res.status(200).json({
                success: true,
<<<<<<< HEAD
                message: "Selected Comment is Deleted",
=======
                message: "Selected comment is deleted",
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            });

        }
        else{
<<<<<<< HEAD
            post.comments.forEach((item, index) => {
                if(item.user.toString() === req.user._id.toString())
                    return post.comments.splice(index, 1);
=======

            post.comments.forEach((item, index) => {
                if(item.user.toString() === req.user._id.toString()){
                    return post.comments.splice(index, 1);
                }
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            });

            await post.save();

<<<<<<< HEAD
            return res.status(200).json({
                success: true,
                message: "Your Comment is deleted",
            });
     
        }
        
=======
            res.status(200).json({
                success:true,
                message: "Your Comment is Deleted",
            })

        }

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
<<<<<<< HEAD
};
=======

}
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
