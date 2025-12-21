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

<hr>

