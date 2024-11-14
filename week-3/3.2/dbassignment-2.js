const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://user:aTyyAyQNthPykVyO@cluster0.iriaonw.mongodb.net/cohortapp?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

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
// GET request to fetch all users
app.get("/users", async function(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/signup', async function(req, res) {
    const { name, username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const user = new User({
            name:name,
            username:username,
            password:password
        });

        await user.save();

        res.json({
            "msg": "User created successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});