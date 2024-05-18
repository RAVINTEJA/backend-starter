import { Router } from 'express';
import { userController } from '../controllers/user.contoller';

const router = Router();

router.post("/create", userController.createUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/email/:email", userController.getUserByEmail);
router.get("/role/:role", userController.getUsersByRole);

export default router;