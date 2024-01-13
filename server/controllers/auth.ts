import { RequestHandler } from 'express';
import { UserCredentials, UserData } from '../interfaces/IRegister';
import User from '../model/User';
import { hashPassword, comparePassword } from '../helpers/auth';
import jwt from "jsonwebtoken";


export const Register: RequestHandler = async (req, res) => {
  const { name, email, password }: UserCredentials = req.body;  
  try {
    if (!name) {
      return res.json({
        error: 'Name is required',
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: 'Password is required and should be 6 characters long',
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: true,
        message: " User already exists"
      });
    }

    // hash password
    const hashedPassword = await hashPassword(password);    

    const user = await User.create({ name, email, password: hashedPassword });
    const { password: newPass, ...rest } = user;

    if(!user) {
      return res.json({
      error: true,
      message: 'Failed to create user',
    });
    }

    return res.status(201).json({
      error: false,
      message: 'User created successfully',
      user: rest,
    });

  } catch (err) {
    return res.json({
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
      message: "Invalid password"
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