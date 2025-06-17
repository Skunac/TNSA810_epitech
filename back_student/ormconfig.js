module.exports = {
   type: "postgres",
   host: "192.168.2.12",
   port: 5432,
   username: "gitea",
   password: "gitea_secure_password_2024",
   database: "myapp_db",
   synchronize: true,
   logging: false,
   migrationsRun: true,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
};