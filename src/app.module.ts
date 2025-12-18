import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { EspecialidadesModule } from './especialidades/especialidades.module';
import { DoctoresConsultoriosModule } from './doctoresConsultorios/doctores-consultorios.module';
import { DoctoresModule } from './doctores/doctores.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      //ssl: { rejectUnauthorized: false },
    }),
    AuthModule,
    MailModule,
    EspecialidadesModule,
    DoctoresConsultoriosModule,
    DoctoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
