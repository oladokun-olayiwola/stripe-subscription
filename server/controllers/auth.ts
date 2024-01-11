import { RequestHandler } from "express";
import { UserCredentials } from "../interfaces/IRegister";
import User from "../model/User"
import { hashPassword, comparePassword } from "../helpers/auth";

const register: RequestHandler = async (req, res) => {
    const {name, email, password}: UserCredentials = req.body
    try {
        if (!name) {
          return res.json({
            error: "Name is required",
          });
        }
        if (!password || password.length < 6) {
          return res.json({
            error: "Password is required and should be 6 characters long",
          });
        }
        const exist = await User.findOne({ email });
        if (exist) {
          return res.json({
            error: "Email is taken",
          });
        }
        // hash password
        const hashedPassword = await hashPassword(password);
    
        try {
          const user = await new User({
            name,
            email,
            password: hashedPassword,
          }).save();
    
          //   console.log(user);
          const { password, ...rest } = user;
          return res.json({
            user: rest,
          });
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        console.log(err);
      }
    };