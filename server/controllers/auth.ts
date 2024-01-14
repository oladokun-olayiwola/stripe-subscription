import { RequestHandler } from 'express';
import { UserCredentials, UserData } from '../interfaces/IRegister';
import User from '../model/User';
import { hashPassword, comparePassword } from '../helpers/auth';
import jwt from "jsonwebtoken";
  
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
  export const Register: RequestHandler = async (req, res) => {

    const { name, email, password }: UserCredentials = req.body;

    if (!isValidEmail(email)) {
    return res.status(400).json({
      error: true,
      message: 'Invalid email format',
    });
  }
  
    try {
      if (!name) {
        return res.status(400).json({
          error: true,
          message: 'Please provide your name.',
        });
      }
  
      if (!password || password.length < 6) {
        return res.status(400).json({
          error: true,
          message: 'Your password is required and should be at least 6 characters long.',
        });
      }

      if(!email) {
        return res.status(400).json({
          error: true,
          message: 'Please provide your email address.',
        });
      }
        const exist = await User.findOne({ email });
      if (exist) {
        return res.status(400).json({
          error: true,
          message: 'User already exists',
        });
      }
        let hashedPassword;
      try {
        hashedPassword = await hashPassword(password);
      } catch (hashError) {
        console.error('Error hashing password:', hashError);
        return res.status(500).json({
          error: true,
          message: 'Error creating user',
        });
      }
  
      // Create user
      const user = await User.create({ name, email, password: hashedPassword });
  
      if (!user) {
        return res.status(500).json({
          error: true,
          message: 'Failed to create user',
        });
      }
  
      const userObject = user.toObject();
const { password: newPass, ...rest } = userObject;
  
      return res.status(201).json({
        error: false,
        message: 'User created successfully',
        user: rest,
      });
    } catch (err) {
      return res.status(500).json({
        error: true,
        message: 'Something went wrong',
      });
    }
  }; 

export const Login: RequestHandler = async (req, res) => {
  const {email, password } = req.body
  const userExists: UserData | null = await User.findOne({email})
  if(!userExists) {
    return res.status(400).json({
      error: true,
      message: "Email has not been registered"
    })
  }
  
  const isPasswordMatch = await comparePassword({password, hashed: userExists.password})

  if (!isPasswordMatch) {
    return res.status(400).json({
      error: true,
      message : "The provided password is incorrect. Please try again."
          })
  }

  // create signed token
  const token = jwt.sign({ _id: userExists._id }, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });

  return res.status(200).json({
    error: false,
    message: "User logged in successfully"
  })
}