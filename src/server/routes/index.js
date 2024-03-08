import express from "express";
import { check, validationResult } from "express-validator";
const router = express.Router();

//will receive all the users input info from the frontend
//do input validation
//need to encrypt the password
//will use the info and send the info to the database
//send the standard response to the frontend
router.post(
  "/users/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Enter a valid email address"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Password must be atleast 8 characters"),
    check("name")
      .not()
      .isEmpty()
      .withMessage("Please provide a nama")
      .isString()
      .withMessage("Name must be a valid string")
      .matches(/^[A-Za-z\s]+$/)
      .withMessage("Name must contain letters and spaces"),
    check("country")
      .not()
      .isEmpty()
      .withMessage("Please provide a country")
      .isString()
      .withMessage("Country must be a valid string")
  ],
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }
);

export default router;
