# PostgreSQL Example App
Basic PostgreSQL instance with inserting and selecting from a table containerized in Docker

## To Begin
Make sure you have Docker installed on your system
[Click here to download for Windows from the Docker homepage.](https://www.docker.com/)

Install all relevent dependencies
```sh
npm install
```

Then, run 
```sh
docker run --publish 5432:5432 --name node-postgres --env POSTGRES_PASSWORD=PASSWORD --detach postgres:122
```
to create a docker container with a PostgreSQL instance

---

[Here is a link to the documentation for Docker's PostgreSQL Image](https://hub.docker.com/_/postgres)

--- 
##### Create a .env file with the following declarations

```
PGUSER=postgres
PGPASSWORD=PASSWORD
PGPORT=5432
```
Postgres will automatically detect these for you

---

## Interacting with your Database
To view the contents of your database, simply run
```sh
node tasks.js
```
To insert some data in the form of jsonb, run
```sh
node tasks '{"placholder":"Your data here."}'
```
The function ```checkForDogs()``` is an example function of searching for a specific value in your newly created table.

See if you can create your own custom functionality with your new database!
[Here is a reference to the PostgreSQL npm package documentation](https://www.npmjs.com/package/pg)

## When you are finished playing with your Docker instance
Stop your container
```sh
docker stop <ContainerID>
```
and remove it with
```sh
docker rm --force <ContainerID>
```
You can check your current Docker containers and their ID's with the desktop app downloaded from the [Docker Website](https://www.docker.com/), or by running
```sh
docker ps
```

---

##### Enjoy, and don't forget to reference proper documentation
https://www.docker.com/

https://hub.docker.com/_/postgres

https://www.npmjs.com/package/pg

---

###### This short and simple example project was created with the help of Node.js cookbook (4th Edition) by *Bethany Griggs*
*I take no credit for this code and encourage everyone to [check out her book](https://www.packtpub.com/product/node-cookbook-fourth-edition/9781838558758) as it is a great way to learn Node.js*