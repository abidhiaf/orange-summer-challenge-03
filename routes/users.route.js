const express = require("express");
const {
    FindAllUser,
    FindSingleUser,
    UpdateUser,
    DeleteUser,
    AddUser,
} = require('../controllers/users.controller')
const router = express.Router();

/* adduser */
router.post("/users", AddUser);

/* find all users */
router.get("/users", FindAllUser);

/* find single user */
router.get("/users/:id", FindSingleUser);

/* updateuser */
router.put("/users/:id", UpdateUser);

/* deleteuser */
router.delete("/users/:id", DeleteUser);

module.exports = router;
