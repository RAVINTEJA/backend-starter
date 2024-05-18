import { Prisma } from "@prisma/client";
import prisma from "../database";
async function createUser(data: Prisma.UserCreateInput) {
    return await prisma.user.create({
        data,
    });
}

async function getUserById(id: number) {
    return await prisma.user.findUnique({
        where: { id },
    });
}

async function updateUser(id: number, data: Prisma.UserUpdateInput) {
    return await prisma.user.update({
        where: { id },
        data,
    });
}

async function deleteUser(id: number) {
    return await prisma.user.delete({
        where: { id },
    });
}

async function getUserByEmail(email: string) {
    return await prisma.user.findUnique({
        where: { email },
    });
}

async function getUsersByRole(
    role: "STUDENT" | "WARDEN" | "SECURITY_GUARD"
) {
    return await prisma.user.findMany({
        where: { role },
    });
}

export const userServices = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail,
    getUsersByRole,
};