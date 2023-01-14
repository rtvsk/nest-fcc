import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(req: { a: string; b: string }) {
    console.log(req.a);
    console.log(req.b);
    return { msg: 'I am signed up' };
  }

  signin() {
    return { msg: 'I am signed in' };
  }
}
