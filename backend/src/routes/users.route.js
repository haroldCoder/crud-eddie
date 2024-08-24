import { Router } from "express";
import { getUsers } from "../controllers/users.controller.js";

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
});


