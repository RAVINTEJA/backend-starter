import { Request, Response } from "express"; // Import the Request and Response types from the "express" package
import prisma from "../database";
import { Prisma } from "@prisma/client";

// interface CustomRequest extends Request {
//     body: {
//         email: string;
//         password: string;
//     };
// }

const register = async (req: Request, res: Response) => {
    const { email, password } = req.body; // No need to specify the type of req.body anymore
    // console.log(email, password);
    try {
        const user = await prisma.user.create({
            data: {
                email,
                password,
            },
        });
        // Rest of the code...
        res.json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }

    // Rest of the code...

};

export const authController = {
    register,
};