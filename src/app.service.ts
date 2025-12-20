import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<img src="http://localhost:3000/profile/1766247723689-Deadpool.jpg" alt="Foto de perfil" />';
  }
}
