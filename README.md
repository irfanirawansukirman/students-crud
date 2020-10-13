# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Install `Adonis`

```bash
npm i -g @adonisjs/cli
```

Use the adonis command to install the blueprint

```bash
git clone https://github.com/irfanirawansukirman/students-crud.git
```

clone the repo and then run `npm install`.

```bash
adonis serve --dev
```

## Migration

Run the following command to run startup migrations.

```js
adonis migration:run
```

That's all. Now you get all apis of your models.

## Documentation

> Base uri: `http://localhost:3333/api/v1`

| METHOD | URL | DESCRIPTION |
| --- | --- | --- |
| GET | /students | Get all students |
| GET | /students/:id | Get a student |
| POST | /students | Create a student |
| PUT | /students/:id | Update a student |
| DELETE | /students/:id | Delete a student |

You should have a table like this :

```bash
mysql> describe posts;
+------------+------------------+------+-----+---------+----------------+
| Field      | Type             | Null | Key | Default | Extra          |
+------------+------------------+------+-----+---------+----------------+
| id         | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| nisn       | varchar(255)     | YES  |     | NULL    |                |
| name       | varchar(255)     | YES  |     | NULL    |                |
| study      | varchar(255)     | YES  |     | NULL    |                |
| created_at | datetime         | YES  |     | NULL    |                |
| updated_at | datetime         | YES  |     | NULL    |                |
+------------+------------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)
```

## License
```xml
Designed and developed by 2020 skydoves (Jaewoong Eum)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.