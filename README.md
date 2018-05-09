# docker-ized postgres node fullstack

Run with
```
docker-compose up
```

Connect from an app with: 

```
postgres://myapp_user:password@db/myapp_db
```
or
```
connection: {
  host: process.DB_HOST,
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'postgres'
}
```

Or with `psql` from host:
```
psql postgres://myapp_user:password@localhost:15432/myapp_db
```

The database files are persisted on the host and mapped to the container in the `docker-compose.yml` 
with:
```
volumes:
  - "/tmp/pgdata:/var/lib/postgresql/data"

```


