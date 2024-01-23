import bcrypt from "bcrypt";
import { PasswordHash } from "../interfaces/IRegister";
import { Request } from "express"

export const  hashPassword = async (password: string) => {

  try {
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
  } catch (error) {
    throw new Error("Password hash failed")
  }

  
};

export const comparePassword = async ({password, hashed}: PasswordHash) => {
  return await bcrypt.compare(password, hashed);
};