import { Request, Response } from "express"; // Import the Request and Response types from the "express" package
import prisma from "../database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { Buffer } from "buffer";

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const register = async (req: Request, res: Response) => {
    const { name, email, password, mobileNumber, hostelBlock, image } = req.body;

    try {
        // Generate salt
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = crypto.randomBytes(32).toString("hex");

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                mobileNumber,
                hostelBlock,
                image,
                verificationToken,
            },
        });

        const token = jwt.sign(
            { userId: user.id },
            JWT_SECRET,
            {
            expiresIn: "30d",
            }
        );

        res.status(201).json({
            message: "User registered. Please verify your email.",
            ...user,
            token,
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const authController = {
    register,
};
