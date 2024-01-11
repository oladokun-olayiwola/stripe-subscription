import bcrypt from "bcrypt";
import { Hash } from "../interfaces/IRegister";

export const  hashPassword = async (password: string) => {

  try {
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
  } catch (error) {
console.log(error);
  }

  
};

export const comparePassword = ({password, hashed}: Hash) => {
  return bcrypt.compare(password, hashed);
};
