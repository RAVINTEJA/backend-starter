import { Request, Response } from "express";
import { userServices } from "../services/user.services";

async function createUser(req: Request, res: Response) {
    const user = await userServices.createUser(req.body);
    res.json(user);
}

async function getUserById(req: Request, res: Response) {
    const user = await userServices.getUserById(Number(req.params.id));
    res.json(user);
}

async function updateUser(req: Request, res: Response) {
    const user = await userServices.updateUser(Number(req.params.id), req.body);
    res.json(user);
}

async function deleteUser(req: Request, res: Response) {
    await userServices.deleteUser(Number(req.params.id));
    res.json({ message: "User deleted" });
}

async function getUserByEmail(req: Request, res: Response) {
    const user = await userServices.getUserByEmail(req.params.email);
    res.json(user);
}

async function getUsersByRole(req: Request, res: Response) {
    const users = await userServices.getUsersByRole(
        req.params.role as "STUDENT" | "WARDEN" | "SECURITY_GUARD"
    );
    res.json(users);
}

export const userController = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail,
    getUsersByRole,
};
