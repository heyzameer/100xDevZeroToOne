const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User Schema
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course', // Reference to the Course model
    },
  ],
});

// Define Course Schema
const CourseSchema = new mongoose.Schema({
  title: String,
  price: Number,
});

// Create Models
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

// CRUD Operations

// FIND - Find a user by email
async function findUserByEmail(email) {
  const user = await User.findOne({ email }).populate('purchasedCourses');
  console.log('Found User:', user);
  return user;
}

// FIND - Find a course by title
async function findCourseByTitle(title) {
  const course = await Course.findOne({ title });
  console.log('Found Course:', course);
  return course;
}

// UPDATE - Update a user's email by ID
async function updateUserEmail(userId, newEmail) {
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { email: newEmail },
    { new: true } // Option to return the updated document
  );
  console.log('Updated User:', updatedUser);
  return updatedUser;
}

// UPDATE - Update a course's price by ID
async function updateCoursePrice(courseId, newPrice) {
  const updatedCourse = await Course.findByIdAndUpdate(
    courseId,
    { price: newPrice },
    { new: true } // Option to return the updated document
  );
  console.log('Updated Course:', updatedCourse);
  return updatedCourse;
}

// DELETE - Delete a user by ID
async function deleteUserById(userId) {
  await User.findByIdAndDelete(userId);
  console.log(`User with ID ${userId} deleted`);
}

// DELETE - Delete a course by ID
async function deleteCourseById(courseId) {
  await Course.findByIdAndDelete(courseId);
  console.log(`Course with ID ${courseId} deleted`);
}

// Example Usage
async function main() {
  await mongoose.connection.dropDatabase(); // Clear the database (for testing)

  // Create a course and a user
  const course = await new Course({ title: 'JavaScript Basics', price: 5999 }).save();
  const user = await new User({ email: 'user@example.com', password: 'password123' }).save();

  // Add the course to the user's purchasedCourses
  user.purchasedCourses.push(course._id);
  await user.save();

  // Perform CRUD operations
  await findUserByEmail('user@example.com');
  await findCourseByTitle('JavaScript Basics');
  
  await updateUserEmail(user._id, 'newuser@example.com');
  await updateCoursePrice(course._id, 6999);

  await deleteUserById(user._id);
  await deleteCourseById(course._id);

  mongoose.connection.close();
}

main().catch((err) => console.error(err));
