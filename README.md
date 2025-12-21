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
Entregar un README con:

Cómo instalar y ejecutar el backend.

Ejemplos de uso de la API (con token).

Listado de endpoints.

Colección de Postman o Thunder Client.
<hr>

<p align="center"><em>— Guia de instalación y ejecución del backend —</em></p>

<hr>

<p align="center"><em>— Listado de endpoints —</em></p>

<p><strong>Módulo:</strong> Pacientes </p>
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/pacientes</td>
      <td>Obtener todos los pacientes, también se puede aplicar filtros de búsqueda.</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/pacientes/:id</td>
      <td>Obtener paciente por id.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/pacientes</td>
      <td>Crear un nuevo paciente.</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/pacientes/:id</td>
      <td>Actualizar información del paciente.</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/pacientes/:id</td>
      <td>Eliminar paciente.</td>
    </tr>
  </tbody>
</table>

<p><strong>Módulo:</strong> Consultorios </p>
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/consultorios</td>
      <td>Obtener todos los consultorios, también se puede aplicar filtros de búsqueda.</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/consultorios/:id</td>
      <td>Obtener consultorio por id.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/consultorios</td>
      <td>Crear un nuevo consultorio.</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/consultorios/:id</td>
      <td>Actualizar información del consultorio.</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/consultorios/:id</td>
      <td>Eliminar consultorios.</td>
    </tr>
  </tbody>
</table>

<p><strong>Módulo:</strong> Citas Medicas </p>
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/citas-medicas</td>
      <td>Obtener todas las citas médicas, también se puede aplicar filtros de búsqueda</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/citas-medicas/:id</td>
      <td>Obtener citas médicas por id.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/citas-medicas</td>
      <td>Crear un nueva cita médica.</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/citas-medicas/:id</td>
      <td>Actualizar información de la cita médica.</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/citas-medicas/:id</td>
      <td>Eliminar citas médicas.</td>
    </tr>
  </tbody>
</table>

<p><strong>Módulo:</strong> Especialidades </p>
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/especialidades</td>
      <td>Obtener todos las especialidades, también se puede aplicar filtros de búsqueda.</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/especialidades/:id</td>
      <td>Obtener especialidades por id.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/especialidades</td>
      <td>Crear una nueva especialidad.</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/especialidades/:id</td>
      <td>Actualizar información de la especialidad.</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/especialidades/:id</td>
      <td>Eliminar especialidades.</td>
    </tr>
  </tbody>
</table>

<p><strong>Módulo:</strong> Doctores </p>
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/doctores</td>
      <td>Obtener todos los doctores, también se puede aplicar filtros de búsqueda.</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/doctores/:id</td>
      <td>Obtener doctores por id.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/doctores</td>
      <td>Crear un nuevo doctor.</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/doctores/:id</td>
      <td>Actualizar información del doctor.</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/doctores/:id</td>
      <td>Eliminar doctores.</td>
    </tr>
  </tbody>
</table>

<p><strong>Módulo:</strong> Recetas </p>
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/recetas</td>
      <td>Obtener todos las recetas, también se puede aplicar filtros de búsqueda.</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/recetas/:id</td>
      <td>Obtener recetas por id.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/recetas</td>
      <td>Crear un nueva receta.</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/recetas/:id</td>
      <td>Actualizar información de la receta.</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/recetas/:id</td>
      <td>Eliminar recetas.</td>
    </tr>
  </tbody>
</table>

<p><strong>Módulo:</strong> Doctores Consultorios </p>
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/doctoresConsultorios</td>
      <td>Obtener todos los doctores-consultorios, también se puede aplicar filtros de búsqueda.</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/doctoresConsultorios/:id</td>
      <td>Obtener doctores-consultorios por id.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/doctoresConsultorios</td>
      <td>Crear un nuevo doctores-consultorios.</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/doctoresConsultorios/:id</td>
      <td>Actualizar información del doctores-consultorios.</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/doctoresConsultorios/:id</td>
      <td>Eliminar doctores-consultorios.</td>
    </tr>
  </tbody>
</table>

<p><strong>Módulo:</strong> Usuarios </p>
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/usuarios</td>
      <td>Obtener todos los usuarios, también se puede aplicar filtros de búsqueda.</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/usuarios/:id</td>
      <td>Obtener usuario por id.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/usuarios</td>
      <td>Crear un nuevo usuario.</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/usuarios/:id</td>
      <td>Actualizar información del usuario.</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/usuarios/:id</td>
      <td>Eliminar usuarios.</td>
    </tr>
  </tbody>
</table>

<p><strong>Módulo:</strong> Historial Clinico </p>
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/historial-clinico</td>
      <td>Obtener todos los historial-clinico y se puede aplicar filtros de búsqueda.</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/historial-clinico/:id</td>
      <td>Obtener historial-clinico por id.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/historial-clinico</td>
      <td>Crear un nuevo historial-clinico.</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/historial-clinico/:id</td>
      <td>Actualizar información del historial-clinico.</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/historial-clinico/:id</td>
      <td>Eliminar historial-clinico.</td>
    </tr>
  </tbody>
</table>

<p><strong>Módulo:</strong> Medicamentos </p>
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/medicamentos</td>
      <td>Obtener todos los medicamentos, también se puede aplicar filtros de búsqueda.</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/medicamentos/:id</td>
      <td>Obtener medicamento por id.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/medicamentos</td>
      <td>Crear un nuevo medicamento.</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/medicamentos/:id</td>
      <td>Actualizar información del medicamento.</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/medicamentos/:id</td>
      <td>Eliminar medicamentos.</td>
    </tr>
  </tbody>
</table>

<p><strong>Módulo:</strong> Receta Detalle </p>
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/receta-detalle</td>
      <td>Obtener todos los receta-detalle, también se puede aplicar filtros de búsqueda.</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/receta-detalle/:id</td>
      <td>Obtener receta-detalle por id.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/receta-detalle</td>
      <td>Crear un nuevo receta-detalle.</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/receta-detalle/:id</td>
      <td>Actualizar información del receta-detalle.</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/receta-detalle/:id</td>
      <td>Eliminar receta-detalle.</td>
    </tr>
  </tbody>
</table>

<p><strong>Módulo:</strong> Auth </p>
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>/auth/register</td>
      <td>Registra la información del usuario y reconoce el rol registrado.</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/auth/login</td>
      <td>Inicia sesión en el sistema y genera un token único.</td>
    </tr>
  </tbody>
</table>

<hr>

<p align="center"><em>— Colección de Postman —</em></p>

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

# Configurar variables de entorno
cp .env.example .env

# Iniciar el servidor
npm start
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

