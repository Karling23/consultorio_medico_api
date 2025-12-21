<div align="center">

<img src="https://ute.edu.ec/wp-content/uploads/2021/08/LogoUteTrans.png" alt="UTE - Escuela de Tecnologías" width="250"/>

</div>

<hr>
<br>

<div style="border-left: 4px solid #1e88e5; padding-left: 15px; margin-top: 20px;">

<p><strong>Universidad Tecnológica Equinoccial</strong></p>

<p><strong>Escuela de Tecnologías</strong></p>

<p><strong>Carrera:</strong> Desarrollo de Software</p>

<p><strong>Asignatura:</strong> Programación III</p>

</div>

<br><br>

<p><strong>Tema:</strong> Construcción Backend Proyecto Integrador.</p>

<br><br>

<p><strong>Trabajo:</strong> N-001</p>

<p><strong>Fecha:</strong> 20/12/2025</p>

<p><strong>Presentado por:</strong></p>

<ul>
  <li>Alquinga Carlos</li>
  <li>Gomez Sergio</li>
  <li>Mikaela Zurita</li>
</ul>

<p><strong>Docente:</strong> Francisco Javier Higuera González </p>

<hr>

# API Consultorio Médico

## Descripción

API REST para la gestión integral de un consultorio médico, que incluye la administración de pacientes, doctores, citas médicas, historiales clínicos, recetas médicas, medicamentos, especialidades y consultorios.

## Información General

- **Base URL**: `http://localhost:3000`
- **Puerto**: 3000
- **Autenticación**: JWT (JSON Web Tokens)
- **ID de Colección Postman**: `8c3d9780-9b78-4239-ab69-b72669364363`

## Instalación

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Instalar dependencias
npm install
npm install @nestjs/typeorm typeorm pg
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt class-validator class-transformer
npm install @nestjs/config
npm install --save-dev @types/bcrypt
npm install nestjs-typeorm-paginate
npm install multer
npm install --save-dev @types/express @types/multer
npm install @nestjs/platform-express
nest g module mail
nest g service mail --no-spec
nest g controller mail --no-spec
npm install --save nodemailer

# Configurar variables de entorno
.env

//Coneccion a Posgrest SQL
DB_HOST=localhost
DB_PORT=5432
DB_USER=user_name
DB_PASS=password
DB_NAME=nombre_de_la_base_de_datos
JWT_SECRET=supersecret
JWT_EXPIRES_IN=3600s

//Coneccion a MongoDB
MONGO_URI=mongodb://localhost:27017/nombre_de_la_base_de_datos

//Credenciales para uso del modulo Mail
MAIL_USER=su_correo@gmail.com
MAIL_PASS=qclave_servicio_gmail

SENDGRID_API_KEY=SG.clave_generada_por_la_api
SENDGRID_SENDER=correo_dominio@gmail.com

# Iniciar el servidor
npm run start:dev
```

## Autenticación

La API utiliza JWT (JSON Web Tokens) para la autenticación. Los endpoints que requieren autenticación deben incluir el token en el header:

```
Authorization: Bearer {token_acceso}
```

### Registro de usuario

```http
POST /auth/register
Content-Type: application/json

{
  "nombre_usuario": "admin1",
  "password": "123456"
}
```

### Inicio de sesión

```http
POST /auth/login
Content-Type: application/json

{
  "nombre_usuario": "admin1",
  "password": "123456"
}
```

**Respuesta exitosa:**
```json
{
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Nota para Postman:** Configura un script en la pestaña "Tests" del endpoint de login para guardar automáticamente el token:

```javascript
const response = pm.response.json();
pm.environment.set("token_acceso", response.data.access_token);
```

---

## Endpoints

### Módulo: Pacientes

#### Listar todos los pacientes

```http
GET /pacientes?page=1&limit=10&search=La Floresta
```

**Parámetros de consulta:**
- `page` (opcional): Número de página (default: 1)
- `limit` (opcional): Cantidad de registros por página (default: 10)
- `search` (opcional): Término de búsqueda para filtrar por dirección u otros campos

**Respuesta esperada:**
```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50
  }
}
```

#### Obtener paciente por ID

```http
GET /pacientes/1?page=1&limit=10&search=La Floresta
```

**Parámetros de ruta:**
- `id`: ID del paciente

#### Crear nuevo paciente

```http
POST /pacientes
Content-Type: application/json

{
  "id_usuario": 4,
  "cedula": "1781576398",
  "fecha_nacimiento": "2000-04-12",
  "telefono": "0987545646",
  "direccion": "Moya"
}
```

**Campos requeridos:**
- `id_usuario`: ID del usuario asociado
- `cedula`: Cédula de identidad del paciente
- `fecha_nacimiento`: Fecha de nacimiento (formato: YYYY-MM-DD)
- `telefono`: Número de teléfono
- `direccion`: Dirección del paciente

#### Actualizar paciente

```http
PUT /pacientes/2
Content-Type: application/json

{
  "telefono": "0988888888",
  "direccion": "Guayaquil, Urdesa Central"
}
```

**Nota:** Solo se actualizan los campos enviados en el body.

#### Eliminar paciente

```http
DELETE /pacientes/1
Content-Type: application/json

{
  "id_paciente": 1,
  "cedula": "0102030405"
}
```

---

### Módulo: Consultorios

#### Listar todos los consultorios

```http
GET /consultorios?page=1&limit=10&search=Planta Baja
```

**Parámetros de consulta:**
- `page` (opcional): Número de página
- `limit` (opcional): Cantidad de registros por página
- `search` (opcional): Término de búsqueda para filtrar por ubicación o nombre

#### Obtener consultorio por ID

```http
GET /consultorios/3
```

#### Crear nuevo consultorio

```http
POST /consultorios
Content-Type: application/json

{
  "nombre": "Consultorio Ginecologico",
  "ubicacion": "Segundo Piso",
  "estado": "activo"
}
```

**Campos requeridos:**
- `nombre`: Nombre del consultorio
- `ubicacion`: Ubicación física del consultorio
- `estado`: Estado del consultorio (activo/inactivo)

#### Actualizar consultorio

```http
PUT /consultorios/3
Content-Type: application/json

{
  "ubicacion": "Primer piso",
  "estado": "inactivo"
}
```

#### Eliminar consultorio

```http
DELETE /consultorios/4
```

---

### Módulo: Citas Médicas

#### Listar todas las citas médicas

```http
GET /citas-medicas?page=1&limit=5&search=Pendiente
```

**Parámetros de consulta:**
- `page` (opcional): Número de página
- `limit` (opcional): Cantidad de registros por página
- `search` (opcional): Término de búsqueda para filtrar por estado

#### Obtener cita médica por ID

```http
GET /citas-medicas/1
```

#### Crear nueva cita médica

```http
POST /citas-medicas
Content-Type: application/json

{
  "id_paciente": 1,
  "id_doctor": 2,
  "id_consultorio": 3,
  "fecha_cita": "2026-01-15",
  "hora_cita": "09:30",
  "estado": "Pendiente",
  "motivo": "Control médico general"
}
```

**Campos requeridos:**
- `id_paciente`: ID del paciente
- `id_doctor`: ID del doctor
- `id_consultorio`: ID del consultorio
- `fecha_cita`: Fecha de la cita (formato: YYYY-MM-DD)
- `hora_cita`: Hora de la cita (formato: HH:MM)
- `estado`: Estado de la cita (Pendiente, Confirmada, Cancelada, etc.)
- `motivo`: Motivo de la consulta

#### Actualizar cita médica

```http
PUT /citas-medicas/2
Content-Type: application/json

{
  "estado": "Confirmada",
  "hora_cita": "10:00"
}
```

#### Eliminar cita médica

```http
DELETE /citas-medicas/1
Content-Type: application/json

{
  "id_cita": 1,
  "estado": "Pendiente",
  "fecha_cita": "2025-01-15"
}
```

---

### Módulo: Especialidades

#### Listar todas las especialidades

```http
GET /especialidades?page=1&limit=10&search=Cardiología
```

**Parámetros de consulta:**
- `page` (opcional): Número de página
- `limit` (opcional): Cantidad de registros por página
- `search` (opcional): Término de búsqueda para filtrar por nombre

#### Obtener especialidad por ID

```http
GET /especialidades/2
```

#### Crear nueva especialidad

```http
POST /especialidades
Content-Type: application/json

{
  "nombre": "Cardiología",
  "descripcion": "Especialidad del corazón"
}
```

**Campos requeridos:**
- `nombre`: Nombre de la especialidad
- `descripcion`: Descripción de la especialidad

#### Actualizar especialidad

```http
PATCH /especialidades/2
Content-Type: application/json

{
  "descripcion": "Especialidad médica que trata enfermedades del corazón y del aparato circulatorio"
}
```

#### Eliminar especialidad

```http
DELETE /especialidades/2
```

---

### Módulo: Doctores

#### Listar todos los doctores

```http
GET /doctores?page=1&limit=10&search=Lunes
```

**Parámetros de consulta:**
- `page` (opcional): Número de página
- `limit` (opcional): Cantidad de registros por página
- `search` (opcional): Término de búsqueda para filtrar por días disponibles

#### Obtener doctor por ID

```http
GET /doctores/1
```

#### Crear nuevo doctor

```http
POST /doctores
Content-Type: application/json

{
  "id_usuario": 1,
  "id_especialidad": 10,
  "horario_inicio": "08:00:00",
  "horario_fin": "16:00:00",
  "dias_disponibles": "Lunes, Martes, Miércoles"
}
```

**Campos requeridos:**
- `id_usuario`: ID del usuario asociado al doctor
- `id_especialidad`: ID de la especialidad del doctor
- `horario_inicio`: Hora de inicio del horario laboral (formato: HH:MM:SS)
- `horario_fin`: Hora de fin del horario laboral (formato: HH:MM:SS)
- `dias_disponibles`: Días disponibles para consultas

#### Actualizar doctor

```http
PATCH /doctores/1
Content-Type: application/json

{
  "horario_fin": "18:00:00",
  "dias_disponibles": "Lunes, Viernes"
}
```

#### Eliminar doctor

```http
DELETE /doctores/1
```

---

### Módulo: Recetas

#### Listar recetas por historial

```http
GET /recetas/101?page=1&limit=10&seacher=101
```

**Parámetros de ruta:**
- `id_historial`: ID del historial clínico

**Parámetros de consulta:**
- `page` (opcional): Número de página
- `limit` (opcional): Cantidad de registros por página
- `seacher` (opcional): Término de búsqueda

#### Obtener receta por ID

```http
GET /recetas/1
```

#### Crear nueva receta

```http
POST /recetas
Content-Type: application/json

{
  "id_historial": 101,
  "fecha_emision": "2024-05-20"
}
```

**Campos requeridos:**
- `id_historial`: ID del historial clínico asociado
- `fecha_emision`: Fecha de emisión de la receta (formato: YYYY-MM-DD)

#### Actualizar receta

```http
PATCH /recetas/1
Content-Type: application/json

{
  "fecha_emision": "2025-05-21"
}
```

#### Eliminar receta

```http
DELETE /recetas/1
```

---

### Módulo: Doctores-Consultorios

Este módulo maneja la relación entre doctores y consultorios (asignaciones).

#### Listar todas las asignaciones

```http
GET /doctoresConsultorios?page=1&limit=10&search=1
```

**Parámetros de consulta:**
- `page` (opcional): Número de página
- `limit` (opcional): Cantidad de registros por página
- `search` (opcional): Término de búsqueda

#### Obtener asignación por ID

```http
GET /doctoresConsultorios/2
```

#### Crear nueva asignación

```http
POST /doctoresConsultorios
Content-Type: application/json

{
  "id_doctor": 1,
  "id_consultorio": 5
}
```

**Campos requeridos:**
- `id_doctor`: ID del doctor
- `id_consultorio`: ID del consultorio

#### Actualizar asignación

```http
PATCH /doctoresConsultorios/2
Content-Type: application/json

{
  "id_consultorio": 99
}
```

#### Eliminar asignación

```http
DELETE /doctoresConsultorios/2
```

---

### Módulo: Usuarios

**Nota:** La mayoría de operaciones de este módulo requieren autenticación.

#### Listar todos los usuarios

```http
GET /usuarios?page=1&limit=10&search=carlos&sort=nombre_usuario
```

**Parámetros de consulta:**
- `page` (opcional): Número de página
- `limit` (opcional): Cantidad de registros por página
- `search` (opcional): Término de búsqueda para filtrar por nombre
- `sort` (opcional): Campo por el cual ordenar (ej: nombre_usuario)

#### Obtener usuario por ID

```http
GET /usuarios/1
```

#### Crear nuevo usuario

```http
POST /usuarios
Authorization: Bearer {token_acceso}
Content-Type: application/json

{
  "nombre_usuario": "Evelyn Daniela",
  "password": "0000",
  "rol": " "
}
```

**Campos requeridos:**
- `nombre_usuario`: Nombre del usuario
- `password`: Contraseña del usuario
- `rol`: Rol del usuario (admin, doctor, paciente, etc.)

#### Actualizar usuario

```http
PUT /usuarios/3
Authorization: Bearer {token_acceso}
Content-Type: application/json

{
  "nombre_usuario": "Sergio",
  "rol": "admin"
}
```

#### Eliminar usuario

```http
DELETE /usuarios/3
Authorization: Bearer {token_acceso}
```

#### Subir foto de perfil

```http
PUT /usuarios/11/profile
Authorization: Bearer {token_acceso}
Content-Type: multipart/form-data

profile: [archivo de imagen]
```

**Campos requeridos:**
- `profile`: Archivo de imagen (form-data)

**Ejemplo en Postman:**
1. Selecciona el tipo de body como "form-data"
2. Agrega una key llamada "profile"
3. Cambia el tipo a "File"
4. Selecciona el archivo de imagen

---

### Módulo: Historial Clínico

**Nota:** Este módulo requiere autenticación para operaciones de creación, actualización y eliminación.

#### Listar todos los historiales clínicos

```http
GET /historial-clinico?page=1&limit=10&search=resfriado
```

**Parámetros de consulta:**
- `page` (opcional): Número de página
- `limit` (opcional): Cantidad de registros por página
- `search` (opcional): Término de búsqueda para filtrar por diagnóstico

#### Obtener historial clínico por ID

```http
GET /historial-clinico/3
```

#### Crear nuevo historial clínico

```http
POST /historial-clinico
Authorization: Bearer {token_acceso}
Content-Type: application/json

{
  "id_cita": 3,
  "diagnostico": "Gripe común",
  "tratamiento": "Paracetamol cada 8 horas por 3 días",
  "observaciones": "Paciente presenta fiebre leve "
}
```

**Campos requeridos:**
- `id_cita`: ID de la cita médica asociada
- `diagnostico`: Diagnóstico médico
- `tratamiento`: Tratamiento prescrito
- `observaciones`: Observaciones adicionales del médico

#### Actualizar historial clínico

```http
PUT /historial-clinico/1
Authorization: Bearer {token_acceso}
Content-Type: application/json

{
  "diagnostico": "Resfriado",
  "tratamiento": "Paracetamol cada 8 horas por 3 días"
}
```

#### Eliminar historial clínico

```http
DELETE /historial-clinico/2
Authorization: Bearer {token_acceso}
```

---

### Módulo: Medicamentos

**Nota:** Este módulo requiere autenticación para operaciones de creación, actualización y eliminación.

#### Listar todos los medicamentos

```http
GET /medicamentos?page=1&limit=10&search=paracetamol
```

**Parámetros de consulta:**
- `page` (opcional): Número de página
- `limit` (opcional): Cantidad de registros por página
- `search` (opcional): Término de búsqueda para filtrar por nombre

#### Obtener medicamento por ID

```http
GET /medicamentos/2
```

#### Crear nuevo medicamento

```http
POST /medicamentos
Authorization: Bearer {token_acceso}
Content-Type: application/json

{
  "nombre": "Ibuprofeno",
  "descripcion": "Analgésico y antipirético utilizado para aliviar dolor leve a moderado y fiebre"
}
```

**Campos requeridos:**
- `nombre`: Nombre del medicamento
- `descripcion`: Descripción del medicamento y sus usos

#### Actualizar medicamento

```http
PUT /medicamentos/1
Authorization: Bearer {token_acceso}
Content-Type: application/json

{
  "descripcion": "Analgésico utilizado para aliviar dolor y fiebre"
}
```

#### Eliminar medicamento

```http
DELETE /medicamentos/2
Authorization: Bearer {token_acceso}
```

---

### Módulo: Receta Detalle

**Nota:** Este módulo requiere autenticación para operaciones de creación, actualización y eliminación.

#### Listar todos los detalles de recetas

```http
GET /receta-detalle
```

#### Obtener detalle de receta por ID

```http
GET /receta-detalle/1
```

#### Crear nuevo detalle de receta

```http
POST /receta-detalle
Authorization: Bearer {token_acceso}
Content-Type: application/json

{
  "medicamento": "Amoxicilina",
  "dosis": "875 mg",
  "frecuencia": "Cada 12 horas",
  "duracion": "7 días"
}
```

**Campos requeridos:**
- `medicamento`: Nombre del medicamento
- `dosis`: Dosis del medicamento
- `frecuencia`: Frecuencia de administración
- `duracion`: Duración del tratamiento

#### Actualizar detalle de receta

```http
PUT /receta-detalle/2
Authorization: Bearer {token_acceso}
Content-Type: application/json

{
  "medicamento": "Ibuprofeno",
  "duracion": "6 días"
}
```

#### Eliminar detalle de receta

```http
DELETE /receta-detalle/2
Authorization: Bearer {token_acceso}
```

---

## Códigos de Estado HTTP

La API utiliza los siguientes códigos de estado HTTP:

- `200 OK`: La solicitud se procesó correctamente
- `201 Created`: El recurso se creó correctamente
- `400 Bad Request`: La solicitud contiene datos inválidos
- `401 Unauthorized`: No se proporcionó autenticación o el token es inválido
- `403 Forbidden`: El usuario no tiene permisos para realizar la acción
- `404 Not Found`: El recurso solicitado no existe
- `500 Internal Server Error`: Error interno del servidor

## Formato de Respuestas

### Respuesta Exitosa

```json
{
  "success": true,
  "data": {
    "id": 1,
    "nombre": "Ejemplo"
  },
  "message": "Operación exitosa"
}
```

### Respuesta con Paginación

```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "totalPages": 5
  }
}
```

### Respuesta de Error

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Descripción del error"
  }
}
```

## Configuración de Variables de Entorno en Postman

Para facilitar el uso de la colección en Postman, se recomienda configurar las siguientes variables de entorno:

1. `base_url`: `http://localhost:3000`
2. `token_acceso`: Se guarda automáticamente después del login (ver script en sección de Autenticación)

## Importar Colección en Postman

1. Abrir Postman
2. Click en "Import"
3. Seleccionar el archivo JSON de la colección
4. La colección se importará con todos los endpoints configurados

**Link de la colección:** `https://karling-349996.postman.co/workspace/Proyecto_Integrador~068f54a8-1463-4700-96c3-96cb7eb6b5e9/collection/44456971-8c3d9780-9b78-4239-ab69-b72669364363`

## Notas Importantes

1. **Autenticación**: Los endpoints marcados con "Requiere autenticación" necesitan el token JWT en el header
2. **Formato de Fechas**: Todas las fechas deben enviarse en formato ISO 8601 (YYYY-MM-DD)
3. **Formato de Horas**: Las horas deben enviarse en formato 24 horas (HH:MM o HH:MM:SS)
4. **Validaciones**: Asegúrate de enviar todos los campos requeridos en las peticiones POST
5. **Métodos HTTP**: 
   - Algunos módulos usan `PUT` para actualizar
   - Otros módulos usan `PATCH` para actualizar
   - Verifica el método correcto según el módulo

## Estructura de la Base de Datos

### Tablas Principales

1. **usuarios**: Almacena información de todos los usuarios del sistema
2. **pacientes**: Información específica de los pacientes
3. **doctores**: Información específica de los doctores
4. **especialidades**: Catálogo de especialidades médicas
5. **consultorios**: Información de los consultorios disponibles
6. **citas_medicas**: Registro de citas médicas
7. **historial_clinico**: Historial médico de los pacientes
8. **medicamentos**: Catálogo de medicamentos
9. **recetas**: Recetas médicas emitidas
10. **receta_detalle**: Detalle de medicamentos por receta
11. **doctores_consultorios**: Relación entre doctores y consultorios


<hr>

<p align="center"><em>— Colección de Postman —</em></p>

<pre>
{
	"info": {
		"_postman_id": "8c3d9780-9b78-4239-ab69-b72669364363",
		"name": "Consultorio_Medico",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "44456971",
		"_collection_link": "https://karling-349996.postman.co/workspace/Proyecto_Integrador~068f54a8-1463-4700-96c3-96cb7eb6b5e9/collection/44456971-8c3d9780-9b78-4239-ab69-b72669364363?action=share&source=collection_link&creator=44456971"
	},
	"item": [
		{
			"name": "pacientes_M",
			"item": [
				{
					"name": "crear pacientes",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"id_usuario\": 4,\r\n  \"cedula\": \"1781576398\",\r\n  \"fecha_nacimiento\": \"2000-04-12\",\r\n  \"telefono\": \"0987545646\",\r\n  \"direccion\": \"Moya\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/pacientes",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"pacientes"
							]
						}
					},
					"response": []
				},
				{
					"name": "list pacientes",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"id_usuario\": 1,\r\n  \"cedula\": \"1718972597\",\r\n  \"fecha_nacimiento\": \"2000-12-05\",\r\n  \"telefono\": \"0987800233\",\r\n  \"direccion\": \"Conocoto\"\r\n}\r\n"
						},
						"url": {
							"raw": "http://localhost:3000/pacientes/?page=1&limit=10&search=La Floresta",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"pacientes",
								""
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "search",
									"value": "La Floresta"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "pacientes by id",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/pacientes/1?page=1&limit=10&search=La Floresta",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"pacientes",
								"1"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "search",
									"value": "La Floresta"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "delete by id",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"id_paciente\": 1,\r\n  \"cedula\": \"0102030405\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/pacientes/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"pacientes",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "update by id",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"telefono\": \"0988888888\",\r\n  \"direccion\": \"Guayaquil, Urdesa Central\"\r\n}\r\n\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/pacientes/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"pacientes",
								"2"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "consultorios_M",
			"item": [
				{
					"name": "crear consultorio",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nombre\": \"Consultorio Ginecologico\",\r\n  \"ubicacion\": \"Segundo Piso\",\r\n  \"estado\": \"activo\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/consultorios",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"consultorios"
							]
						}
					},
					"response": []
				},
				{
					"name": "list consultorios",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/consultorios?page=1&limit=10&search=Planta Baja",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"consultorios"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "search",
									"value": "Planta Baja"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "consultorio by id",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/consultorios/3",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"consultorios",
								"3"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete by id",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/consultorios/4",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"consultorios",
								"4"
							]
						}
					},
					"response": []
				},
				{
					"name": "update by id",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"ubicacion\": \"Primer piso\",\r\n  \"estado\": \"inactivo\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/consultorios/3",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"consultorios",
								"3"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "citas_medicas_M",
			"item": [
				{
					"name": "crear citas-medicas",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"id_paciente\": 1,\r\n  \"id_doctor\": 2,\r\n  \"id_consultorio\": 3,\r\n  \"fecha_cita\": \"2026-01-15\",\r\n  \"hora_cita\": \"09:30\",\r\n  \"estado\": \"Pendiente\",\r\n  \"motivo\": \"Control médico general\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/citas-medicas",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"citas-medicas"
							]
						}
					},
					"response": []
				},
				{
					"name": "list citas-medicas",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:3000/citas-medicas?page=1&limit=5&search=Pendiente",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"citas-medicas"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "5"
								},
								{
									"key": "search",
									"value": "Pendiente"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "citas by id",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:3000/citas-medicas/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"citas-medicas",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete by id",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"id_cita\": 1,\r\n  \"estado\": \"Pendiente\",\r\n  \"fecha_cita\": \"2025-01-15\"\r\n}\r\n\r\n\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/citas-medicas/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"citas-medicas",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "update by id",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"estado\": \"Confirmada\",\r\n  \"hora_cita\": \"10:00\"\r\n}\r\n\r\n\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/citas-medicas/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"citas-medicas",
								"2"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "especialidades_S",
			"item": [
				{
					"name": "Crear",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nombre\": \"Cardiología\",\r\n  \"descripcion\": \"Especialidad del corazón\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/especialidades",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"especialidades"
							]
						}
					},
					"response": []
				},
				{
					"name": "Listar",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/especialidades?page=1&limit=10&search=Cardiología",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"especialidades"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "search",
									"value": "Cardiología"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Detalle",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/especialidades/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"especialidades",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "Actualizar",
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"descripcion\": \"Especialidad médica que trata enfermedades del corazón y del aparato circulatorio\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/especialidades/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"especialidades",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "Eliminar",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/especialidades/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"especialidades",
								"2"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "doctores_S",
			"item": [
				{
					"name": "Crear",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"id_usuario\": 1,\r\n  \"id_especialidad\": 10,\r\n  \"horario_inicio\": \"08:00:00\",\r\n  \"horario_fin\": \"16:00:00\",\r\n  \"dias_disponibles\": \"Lunes, Martes, Miércoles\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/doctores",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"doctores"
							]
						}
					},
					"response": []
				},
				{
					"name": "Listar",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/doctores?page=1&limit=10&search=Lunes",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"doctores"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "search",
									"value": "Lunes"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Detalle",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/doctores/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"doctores",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Actualizar",
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"horario_fin\": \"18:00:00\",\r\n  \"dias_disponibles\": \"Lunes, Viernes\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/doctores/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"doctores",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Eliminar",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/doctores/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"doctores",
								"1"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "recetas_S",
			"item": [
				{
					"name": "Crear",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"id_historial\": 101,\r\n  \"fecha_emision\": \"2024-05-20\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/recetas",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"recetas"
							]
						}
					},
					"response": []
				},
				{
					"name": "Listar",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/recetas/101?page=1&limit=10&seacher=101",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"recetas",
								"101"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "seacher",
									"value": "101"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Detalle",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/recetas/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"recetas",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Actualizar",
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"fecha_emision\": \"2025-05-21\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/recetas/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"recetas",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Eliminar",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/recetas/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"recetas",
								"1"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "doctores_consultorios_S",
			"item": [
				{
					"name": "Crear",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"id_doctor\": 1,\r\n  \"id_consultorio\": 5\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/doctoresConsultorios",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"doctoresConsultorios"
							]
						}
					},
					"response": []
				},
				{
					"name": "Listar",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/doctoresConsultorios?page=1&limit=10&search=1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"doctoresConsultorios"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "search",
									"value": "1"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Detalle",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/doctoresConsultorios/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"doctoresConsultorios",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "Actualizar",
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"id_consultorio\": 99\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/doctoresConsultorios/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"doctoresConsultorios",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "Eliminar",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/doctoresConsultorios/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"doctoresConsultorios",
								"2"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "usuarios_C",
			"item": [
				{
					"name": "Get Usuarios List",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:3000/usuarios?page=1&limit=10&search=carlos&sort=nombre_usuario",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"usuarios"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "search",
									"value": "carlos"
								},
								{
									"key": "sort",
									"value": "nombre_usuario"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Create usuario",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_acceso}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nombre_usuario\": \"Evelyn Daniela\",\r\n  \"password\": \"0000\",\r\n  \"rol\": \" \"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/usuarios",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"usuarios"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get usuarios by id",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:3000/usuarios/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"usuarios",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update usuarios",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_acceso}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nombre_usuario\": \"Sergio\",\r\n  \"rol\": \"admin\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/usuarios/3",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"usuarios",
								"3"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete usuarios",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_acceso}}",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:3000/usuarios/3",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"usuarios",
								"3"
							]
						}
					},
					"response": []
				},
				{
					"name": "Upload file",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_acceso}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "profile",
									"type": "file",
									"src": "/C:/Users/luisk/OneDrive/Imágenes/Deadpool.jpg"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/usuarios/11/profile",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"usuarios",
								"11",
								"profile"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "historial_clinico_C",
			"item": [
				{
					"name": "Get historialClinico list",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:3000/historial-clinico?page=1&limit=10&search=resfriado",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"historial-clinico"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "search",
									"value": "resfriado"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Get historialClinico by id",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:3000/historial-clinico/3",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"historial-clinico",
								"3"
							]
						}
					},
					"response": []
				},
				{
					"name": "Create historialClinico",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_acceso}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"id_cita\": 3,\r\n  \"diagnostico\": \"Gripe común\",\r\n  \"tratamiento\": \"Paracetamol cada 8 horas por 3 días\",\r\n  \"observaciones\": \"Paciente presenta fiebre leve \"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/historial-clinico",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"historial-clinico"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update historial clinico",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_acceso}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"diagnostico\": \"Resfriado\",\r\n  \"tratamiento\": \"Paracetamol cada 8 horas por 3 días\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/historial-clinico/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"historial-clinico",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete historialClinico",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_acceso}}",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/historial-clinico/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"historial-clinico",
								"2"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "medicamentos_C",
			"item": [
				{
					"name": "Get medicamentos list",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:3000/medicamentos?page=1&limit=10&search=paracetamol",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"medicamentos"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "10"
								},
								{
									"key": "search",
									"value": "paracetamol"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Creacion medicamento",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_acceso}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nombre\": \"Ibuprofeno\",\r\n  \"descripcion\": \"Analgésico y antipirético utilizado para aliviar dolor leve a moderado y fiebre\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/medicamentos",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"medicamentos"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get medicamento by id",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nombre\": \"Ibuprofeno\",\r\n  \"descripcion\": \"Analgésico y antipirético utilizado para aliviar dolor leve a moderado y fiebre\"\r\n}\r\n"
						},
						"url": {
							"raw": "http://localhost:3000/medicamentos/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"medicamentos",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update medicmanto",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_acceso}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"descripcion\": \"Analgésico utilizado para aliviar dolor y fiebre\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/medicamentos/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"medicamentos",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete medicamento",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_acceso}}",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/medicamentos/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"medicamentos",
								"2"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "receta_detalle_C",
			"item": [
				{
					"name": "Get receta detalle list",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:3000/receta-detalle",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"receta-detalle"
							]
						}
					},
					"response": []
				},
				{
					"name": "Create receta detalle",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_acceso}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"medicamento\": \"Amoxicilina\",\r\n  \"dosis\": \"875 mg\",\r\n  \"frecuencia\": \"Cada 12 horas\",\r\n  \"duracion\": \"7 días\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/receta-detalle",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"receta-detalle"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get Detakke receta by id",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:3000/receta-detalle/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"receta-detalle",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update receta detalle",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_acceso}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"medicamento\": \"Ibuprofeno\",\r\n  \"duracion\": \"6 días\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/receta-detalle/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"receta-detalle",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete detalle receta",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{token_acceso}}",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:3000/receta-detalle/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"receta-detalle",
								"2"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Auth",
			"item": [
				{
					"name": "Auth - register",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nombre_usuario\": \"admin1\",\r\n  \"password\": \"123456\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/auth/register",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"auth",
								"register"
							]
						}
					},
					"response": []
				},
				{
					"name": "Auth - login",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"const response = pm.response.json();\r",
									"pm.environment.set(\"token_acceso\", response.data.access_token);\r",
									""
								],
								"type": "text/javascript",
								"packages": {},
								"requests": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nombre_usuario\": \"admin1\",\r\n  \"password\": \"123456\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/auth/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"auth",
								"login"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}

</pre>

<hr>


