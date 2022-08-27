import express from "express";
import {
  creatUser,
  getUser,
  specificView,
  deleteUser,
  updateUser
} from "../controllers/users.js";

const users = [];

//initialize router
const router = express.Router();

router.get("/", getUser);

router.post("/", creatUser);

//router to view the specific users data
router.get("/:id", specificView);

//to delete the user
router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

//to modify the data(Update)
export default router;
