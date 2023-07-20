To run a nest js project

```bash
$ yarn start:dev
```

# to create a nest js module

fist create a module with the extention .module.ts and export it
and thent that exported module import in the app.module.ts

# to create a module using a command line

```bash
$ nest g module user
```

it will create a module named user and import it automatically in the app.module.ts

controllers are responsible for the returning response or get request
where the services or providers are responsible for logic

--> for the controllers we have to use a controller decoratar from the nest
--> for the services we have to use a Injectable decorator from the nes

# how to use a controllers and services in nest js

to use a controllers and services we have to import it in the module.ts
and in the module controller have to add in controllrs array of module and for the services we have to add it in the providers array

--> for the content type in express it automatically detect the content type and set response acording to it

# prisma

we have to use a two library prisma-cli for runnig migrations and etc and prisma-client ex:-js

to initialize prisma

```bash
$ npx prisma init
```

to get a help for prisma

```bash
$ npx prisma --help
```

below comand read the schema and generate a migration here dev migration delete all the old data so that for the production we have to use diffrent command

```bash
$ npx prisma migrate dev
```

when we run above command it automatically run below command
it creates typescript types for our schema

```bash
$ npx prisma generate
```

it connects our server with the database using URL link from the env file use database in browser

```bash
$ npx prisma studio
```

# to connect database with database service we can extend it with PrismaClient

after taht we have to import our databse module to the module where we have to use it

next js using dto where we data is push in object and can validate our data
# nestjs-and-prisma
