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
import { RecetasModule } from './recetas/recetas.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { ConsultoriosModule } from './consultorios/consultorios.module';
import { CitasMedicasModule } from './citas-medicas/citas-medicas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HistorialClinicoModule } from './historial-clinico/historial-clinico.module';
import { MedicamentosModule } from './medicamentos/medicamentos.module';
import { RecetaDetalleModule } from './receta-detalle/receta-detalle.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
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
    RecetasModule,
    PacientesModule,
    ConsultoriosModule,
    CitasMedicasModule,
    UsuariosModule,
    HistorialClinicoModule,
    MedicamentosModule,
    RecetaDetalleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
