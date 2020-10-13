# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

### Setup

Install `Adonis`

```bash
npm i -g @adonisjs/cli
```

Use the adonis command to install the blueprint

```bash
git clone https://github.com/hypermine-bc/adonis-rest-template.git
```

clone the repo and then run `npm install`.

```bash
adonis serve --dev
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

That's all. Now you get all apis of your models.

## Documentations

> Base uri: `http://localhost:3333/api/v1`

| METHOD | URL | DESCRIPTION |
| --- | --- | --- |
| GET | /students | Get all students |
| GET | /students/:id | Get a student |
| POST | /students | Create a student |
| PUT | /students/:id | Update a student |
| DELETE | /students/:id | Delete a student |
