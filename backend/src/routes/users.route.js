import { Router } from "express";
import { getUsers, postUsers } from "../controllers/users.controller.js";

export const router = Router();

router.route("/api/users").get(async(req, res) => {
  try {
    res.status(200).json(await getUsers());
  } catch (error) {
    console.log(error);
    
    res.status(500).json({
      msg: "error contact support",
    });
  }
}).post(async(req, res) => {
  const {name, last_name, age} = req.body
  try {
    res.status(201).json(await postUsers(name, last_name, age));
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "error contact support",
    });
  }
});



