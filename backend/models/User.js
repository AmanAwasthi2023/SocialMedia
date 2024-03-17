const mongoose = require("mongoose");
<<<<<<< HEAD
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
=======
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
const crypto = require("crypto");

const userSchema = new mongoose.Schema({

    name:{
<<<<<<< HEAD
        type:String,
        required: [true,"Please enter a name"],
    },

    avatar:{
=======
        type: String,
        required: [true,"Please enter a name"],
    },

    avatar: {
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        public_id: String,
        url: String,
    },

<<<<<<< HEAD
    email:{
        type: String,
        required: [true,"Please enter an email"],
        unique: [true, "Email already exists"],
=======
    email: {
        type: String,
        required: [true,"Please enter an email"],
        unique: [true,"Email already exists"],
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
    },

    password: {
        type: String,
        required: [true, "Please enter a password"],
<<<<<<< HEAD
        minleangth: [6, "Password must be at least 6 characters"],
=======
        minlength: [6, "Password must be atleast atleast 6 characters"],
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        select: false,
    },

    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
            ref: 'Post',
=======
            ref:"Post",
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        }
    ],

    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
            ref: 'User',
=======
            ref: "User",
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
        }
    ],

    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
            ref: 'User',
        }
    ],

    resetPasswordToken: String,
    resetPasswordExpire: Date,

});

userSchema.pre('save', async function (next){

    if(this.isModified("password"))
    {

        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

userSchema.methods.matchPassword = async function (password){

    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken = function(){

    return jwt.sign({_id: this._id }, process.env.JWT_SECRET)
};

=======
            ref: "User",
        }
    ],
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    
});

userSchema.pre('save', async function(next) {

    if(this.isModified("password")){

        this.password = await bcrypt.hash(this.password,10);
    };
    next();

});


userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function() {

    return jwt.sign({_id:this._id.toString()},process.env.JWT_SECRET);
};


>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
userSchema.methods.getResetPasswordToken = function() {

    const resetToken = crypto.randomBytes(20).toString("hex");

<<<<<<< HEAD
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now()+10*60*1000;

    return resetToken;

};

module.exports = mongoose.model("User", userSchema);
=======

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = (Date.now() +10*60*1000);

    return resetToken;
};
module.exports = mongoose.model("User",userSchema);
>>>>>>> f40df9c274aacb4a6783911b97e5310b4b3e2689
