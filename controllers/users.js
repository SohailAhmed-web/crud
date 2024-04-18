const { v4: uuidv4 } = require('uuid');
const User = require("../models/user");


let users = [];

// export const getUsers = (req, res) => {
//   //  res.send(users);
// };  

exports.create = async (req, res) => {
    try {
        const { fname, lname, age } = req.body;

   const newUser = new User({
    fname,
    lname,
    age,
    
});

await newUser.save();

    res.send(newUser);
} catch (error) {
    res.status(500).json({ message: error.message });
}
};

exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully", deletedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const { fname, lname, age } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, { fname, lname, age }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// export const getUser = (req, res) => {
//     const { id } = req.params;
//     const foundUser = users.find((user) => user.id === id);
//     res.send(foundUser);
// };

// export const deleteUser = (req, res) => {
//     const { id } = req.params;
//     users = users.filter((user) => user.id !== id);
//     res.send(`User with the id ${id} deleted from the database.`);
// };

// export const updateUser = (req, res) => {
//     const { id } = req.params;
//     const { firstName, lastName, age } = req.body;
//     const user = users.find((user) => user.id === id);

//     if (firstName) {
//         user.firstName = firstName;
//     }

//     if (lastName) {
//         user.lastName = lastName;
//     }

//     if (age) {
//         user.age = age;
//     }

//     res.send(`User with the id ${id} has been updated`);
// }