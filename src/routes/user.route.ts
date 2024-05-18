import { Router, Request, Response } from 'express';
import { userServices } from '../services/user.services';

const router = Router();

router.post("/create", async (req: Request, res: Response) => {
    const user = await userServices.createUser(req.body);
    res.json(user);
});

router.get("/:id", async (req: Request, res: Response) => {
    const user = await userServices.getUserById(Number(req.params.id));
    res.json(user);
});

router.put("/:id", async (req: Request, res: Response) => {
    const user = await userServices.updateUser(Number(req.params.id), req.body);
    res.json(user);
});

router.delete("/:id", async (req: Request, res: Response) => {
    await userServices.deleteUser(Number(req.params.id));
    res.json({ message: 'User deleted' });
});

router.get("/email/:email", async (req: Request, res: Response) => {
    const user = await userServices.getUserByEmail(req.params.email);
    res.json(user);
});

router.get("/role/:role", async (req: Request, res: Response) => {
    const users = await userServices.getUsersByRole(req.params.role as "STUDENT" | "WARDEN" | "SECURITY_GUARD");
    res.json(users);
});

export default router;