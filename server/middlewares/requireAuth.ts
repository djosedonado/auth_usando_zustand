import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({
      message: "Invalid authorization",
    });
  const token = authHeader.split(" ")[1];
  if (!token)
    return res.status(401).json({
      message: "Invalid authorization",
    });

  jwt.verify(token, "secret", (err, users) => {
    if (err)
      return res.status(401).json({
        message: "Invalid authorization",
      });
    req.user = users;
    next();
  });
};
