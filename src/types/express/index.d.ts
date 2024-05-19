import { Prisma } from '@prisma/client';
import { Request } from 'express';

declare module 'express' {
  export interface Request {
    body: {
      email: string;
      password: string;
    };
  }
}