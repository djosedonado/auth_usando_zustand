import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const LoginHandler = (req: Request, res: Response) => {
  const token = jwt.sign({ test: "test" }, "secret", {
    expiresIn: 60 * 60 * 24,
  });
  return res.json({
    token,
  });
};

export const profileHandler = (req: Request, res: Response) => {
  return res.json({
    profile: req.user,
    message: "profile data",
  });
};
