<<<<<<< HEAD
const Post = require("../models/Post");
const User = require("../models/User");
const {sendEmail} = require("../middleware/sendEmail");
const crypto = require("crypto");

exports.register = async (req, res)=>{

    try{

        const {name,email,password} = req.body;

        let user = await User.findOne({email});

        if(user) return res.status(400).json({success:false, message: "User already exists"});

        user = await User.create({name, email, password, avatar:{public_id:"sample_id", url:"sampleurl"}});

        
=======
const User = require("../models/User");
const Post = require("../models/Post");
const {sendEmail} = require("../middlewares/sendEmail");
const crypto = require("crypto");

exports.register = async (req, res) => {

    try {
        
        const {name, email, password} = req.body;

        let user = await User.findOne({email});

        if(user){
            return res.status(400)
            .json({success:false, message: "User already exists"});
        }

        user = await User.create({name, email, password, avatar: {public_id:"sample_id",url:"sampleurl"}});

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        const token = await user.generateToken();

        const options = {
            expires:new Date(Date.now()+90*24*60*60*1000),
<<<<<<< HEAD
            httpOnly: true,
        };

        res.status(201).cookie("token", token, options).json({
            success: true,
            user,
            token,
    });

    }catch(error){
        res.status(500).json({
            success: false,
            message:error.message,
        });
    }
}

exports.login = async (req, res) => {

    try{

=======
            httpOnly:true,};

        res.status(201).cookie("token", token,options).json({
            success: true,
            user,
            token,
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }

};

exports.login = async (req, res) => {
    try {
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        const {email, password} = req.body;

        const user = await User.findOne({email}).select("+password");

<<<<<<< HEAD
        if(!user)
        {
            return res.status(400).json({
                success: false,
                message: "User does not exist"
=======
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User does not exist",
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            });
        }

        const isMatch = await user.matchPassword(password);
<<<<<<< HEAD

        if(!isMatch)
        {
            return res.status(400).json({
                succesS: false,
                message: "incorrect password",
=======
        
        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"Incorrect password",
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            });
        }

        const token = await user.generateToken();

        const options = {
            expires:new Date(Date.now()+90*24*60*60*1000),
<<<<<<< HEAD
            httpOnly: true,
        };

        res.status(200).cookie("token", token, options).json({
            success: true,
            user,
            token,
    });

    } catch(error) {

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.logout = async (req, res) => {
    try {
        
        res.status(200).cookie("token",null,{expires:new Date(Date.now()),httpOnly:true})
        .json({
            success:true,
            message: "Logged Out",
=======
            httpOnly:true,};

        res.status(200).cookie("token", token,options).json({
            success: true,
            user,
            token,
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
<<<<<<< HEAD
}

exports.followUsers = async (req, res) => {

    try {

        const userToFollow = await User.findById(req.params.id);
        const loggedInUser = await User.findById(req.user._id);

        if(!userToFollow)
        {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if(loggedInUser.following.includes(userToFollow._id))
        {
            const indexfollowing = loggedInUser.following.indexOf(userToFollow._id);
            loggedInUser.following.splice(indexfollowing, 1);

            const indexFollowers = userToFollow.followers.indexOf(loggedInUser._id);
            userToFollow.followers.splice(indexFollowers, 1);
=======
};

exports.logout = async (req, res) => {

    try {
        
        res.status(200)
        .cookie("token", null, {expires: new Date(Date.now()), httpOnly: true})
        .json({
            success: true,
            message: "Logged out",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }

}

exports.followUser = async (req, res) => {
    try {
        
        const userToFollow = await User.findById(req.params.id);

        const loggedInUser = await User.findById(req.user._id);

        if(!userToFollow){
            return res.status(400).json({
                success:false,
                message: "User not found",
            });
        }

        if(loggedInUser.following.includes(userToFollow._id)){

            const indexFollowing = loggedInUser.following.indexOf(userToFollow._id);
            loggedInUser.following.splice(indexFollowing, 1);

            const indexFollowers = userToFollow.followers.indexOf(loggedInUser._id);
            userToFollow.followers.splice(indexFollowers,1);
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689

            await loggedInUser.save();
            await userToFollow.save();

            res.status(200).json({
                success: true,
<<<<<<< HEAD
                message: "User unfollowed",
            });

        }

        else{

=======
                message: "User Unfollowed",
            });

        }else{
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            loggedInUser.following.push(userToFollow._id);
            userToFollow.followers.push(loggedInUser._id);

            await loggedInUser.save();
            await userToFollow.save();

            res.status(200).json({
                success: true,
                message: "User followed",
            });
<<<<<<< HEAD

        }
        
        
=======
        }

        

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
<<<<<<< HEAD

=======
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
};


exports.updatePassword = async (req, res) => {
<<<<<<< HEAD
=======

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
    try {
        
        const user = await User.findById(req.user._id).select("+password");

        const {oldPassword, newPassword} = req.body;

        if(!oldPassword || !newPassword){
            return res.status(400).json({
                success: false,
                message: "Please provide old and new password",
<<<<<<< HEAD
            })
=======
            });
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        }

        const isMatch = await user.matchPassword(oldPassword);

<<<<<<< HEAD
        if(!isMatch)
        {
            return res.status(400).json({
                success: false,
=======
        if(!isMatch){
            return res.status(400).json({
                success: true,
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
                message: "Incorrect old password",
            });
        }

        user.password = newPassword;
<<<<<<< HEAD

        await user.save();

        res.status(200).json({
            success:true,
            message:"Password updated",
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }
=======
        await user.save();

        res.status(200).json({
            success: true,
            message: "Password updated",
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
};

exports.updateProfile = async (req, res) => {

    try {
<<<<<<< HEAD

=======
        
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        const user = await User.findById(req.user._id);

        const {name, email} = req.body;

<<<<<<< HEAD
        

        if(name)
        {
            user.name = name;
        }

        if(email)
        {
            user.email = email;
        }

        //User Avatar TODO
=======
        if(name){
            user.name = name;
        }

        if(email){
            user.email = email;
        }

        //User avatar TODO
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689

        await user.save();

        res.status(200).json({
            success: true,
            message: "Profile Updated",
        });
<<<<<<< HEAD
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }
=======

    } catch (error) {
        res.status(500).json({
            success: true,
            message: error.message,
        });
    }

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
};

exports.deleteMyProfile = async (req, res) => {

    try {
<<<<<<< HEAD

=======
        
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        const user = await User.findById(req.user._id);
        const posts = user.posts;
        const followers = user.followers;
        const userId = user._id;
        const following = user.following;

        await user.deleteOne();

<<<<<<< HEAD
        res.status(200).cookie("token",null,{expires:new Date(Date.now()),httpOnly:true});
        

        for(let i=0; i<posts.length; i++)
        {
=======
        //logout user after deleting profile
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true
        });
        

        //Delete all posts of the User
        for(let i=0; i< posts.length; i++){
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            const post = await Post.findById(posts[i]);
            await post.deleteOne();
        }

<<<<<<< HEAD
        //removing user from followers' following
        for(let i=0; i<followers.length; i++)
        {
            const follower = await User.findById(followers[i]);

            const index = follower.following.indexOf(userId);
=======
        //removing user from follower's following
        for(let i=0; i<followers.length; i++){
            const follower = await User.findById(followers[i]);

            const index = follower.following.indexOf(userId);

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            follower.following.splice(index, 1);
            await follower.save();
        }

<<<<<<< HEAD

        //removing users from following's followers
        for(let i=0; i<following.length; i++)
        {
            const follows = await User.findById(following[i]);

            const index = follows.followers.indexOf(userId);
            follows.followers.splice(index, 1);
            await follows.save();
        }

        res.status(200).json({
            success: true,
            message: "Profile deleted",
        });
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message,
        });
    }

};

exports.myProfile = async (req, res) => {
=======
        //removing user from following's follower
        if (following != null) {
            for(let i=0; i<following.length; i++)
            {
                const follows = await User.findById(following[i]);
    
                const index = follows.followers.indexOf(userId);
    
                follows.followers.splice(index, 1);
                await follows.save();
            }
        }
        else {
            

        }
        
        

        res.status(200).json({
            success: true,
            message: "Profile Deleted",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


exports.myProfile = async (req, res) => {

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
    try {

        const user = await User.findById(req.user._id).populate("posts");

        res.status(200).json({
            success: true,
            user,
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getUserProfile = async (req, res) => {
<<<<<<< HEAD
    try {

=======

    try {
        
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        const user = await User.findById(req.params.id).populate("posts");

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            user,
        });
<<<<<<< HEAD
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getAllUsers = async (req, res) => {
    try {

=======

    } catch (error) {
        
        res.status(500).json({
            success: false,
            mssage: error.message,
        });

    }

};

exports.getAllUsers = async (req, res) => {

    try {
        
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        const users = await User.find({});

        res.status(200).json({
            success: true,
            users,
<<<<<<< HEAD
        })
        
=======
        });

>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
<<<<<<< HEAD
        });
    }
};

exports.ForgotPasword = async (req, res) => {

    try {

        const user = await User.findOne({email: req.body.email});

        if(!user){
            return res.status(404).json({
                success: true,
=======
        })
    }

};

exports.forgotPassword = async (req, res) => {
    try {

        const user = await User.findOne({
            email:req.body.email
        });

        if(!user){
            return res.status(404).json({
                success: false,
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
                message: "User not found",
            });
        }

        const resetPasswordToken = user.getResetPasswordToken();

        await user.save();

        const resetUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetPasswordToken}`;

<<<<<<< HEAD
        const message  = `Reset Your Password by clicking on the link below: \n\n ${resetUrl}`;

        try {

            await sendEmail({
                email:user.email, 
                subject: "Reset Password", 
                message});
=======
        const message = `Reset your password by clicking on the link below: \n\n ${resetUrl}`;

        try {
            
            await sendEmail({
                email: user.email,
                subject: "Reset Password",
                message,
            });
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689

            res.status(200).json({
                success: true,
                message: `Email sent to ${user.email}`,
            });
<<<<<<< HEAD
            
        } catch (error) {

            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();

            res.status(500).json({
                success: false,
                message: error.message,
            });
            
        }
        
    } catch (error) {
=======

        } catch (error) {

            user.resetPasswordToken= undefined;
            user.resetPasswordExpire= undefined;
            
            await user.save();

            res.status(500).json({
                success:false,
                message: error.message,
            });
            };
        }
        
     catch (error) {
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
<<<<<<< HEAD

=======
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
};

exports.resetPassword = async (req, res) => {

    try {

        const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: {$gt: Date.now()},
        });

<<<<<<< HEAD
        if(!user)
        {
=======
        if(!user){
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
            return res.status(401).json({
                success: false,
                message: "Token is invalid or has expired",
            });
        }

        user.password = req.body.password;

        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(200).json({
            success: true,
<<<<<<< HEAD
            message: "Password Updated",
        });
=======
            message: "Password Updated Successfully"
        })
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
<<<<<<< HEAD
        });
    }

};
=======
        })
    }

}
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
