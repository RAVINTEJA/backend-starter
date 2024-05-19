import { Prisma } from '@prisma/client';
import { Request } from 'express';

declare module 'express' {
  export interface Request {
    body: {
      email: string;
      password: string;
      name: string;
      mobileNumber: string;
      hostelBlock: string;
      image: string;
    };
  }
}