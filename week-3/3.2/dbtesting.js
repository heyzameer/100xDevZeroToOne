// creating user in the data base

const mongoose = require("mongoose");


const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://zameer:pHYM95hMFBu6rudP@cluster0.kwt2q.mongodb.net/");

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error.message);
    }
};
connectToMongoDB();

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

 const user = new User({
name: "John Doe", 
username: "johnnyboy", 
password: "myPassword"
});
user.save();