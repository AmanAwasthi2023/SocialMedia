const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    caption: String,

<<<<<<< HEAD
    image: {
=======
    image:{
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        public_id:String,
        url:String,
    },

    owner:{
        type: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
        ref: "User",
    },

    createdAt:{
        type:Date,
        default: Date.now,
    },

    likes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
    },
],

    comments:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            comment:{
                type: String,
                required: true,
            }
        }
    ]
});

module.exports = mongoose.model("Post", postSchema);
=======
        ref: "user",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    likes: [
        {
                type: mongoose.Schema.Types.ObjectId,
                ref:"User",
        },
    ],

    comments: [
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"User",
            },
            comment: {
                type:String,
                required: true,
            },
        },
    ],


});

module.exports = mongoose.model("Post",postSchema);
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
