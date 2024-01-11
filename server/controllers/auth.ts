import { RequestHandler } from 'express';
import { UserCredentials } from '../interfaces/IRegister';
import User from '../model/User';
import { hashPassword, comparePassword } from '../helpers/auth';

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
    return res.status(201).json({
      error: false,
      message: 'User created successfully',
      user: rest,
    });

  } catch (err) {
    return res.json({
      error: true,
      message: 'Failed to create user',
      err,
    });
  }
};
