const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();


// http://localhost:3000/admin/signup{
//     "username": "harkirat@gmail.com",
//     "password": "123"
//   }
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })
    
});
//post
// http://localhost:3000/admin/courses
// header user name and password
// "harkirat@gmail.com""123"
router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

//get
// http://localhost:3000/admin/courses
// header user name and password
// "harkirat@gmail.com""123"
router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});


module.exports = router;