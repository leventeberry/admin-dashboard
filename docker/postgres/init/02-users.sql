-- App auth users (NextAuth Credentials). Runs on first cluster init only.
-- For existing volumes: run `npm run db:seed` or apply this SQL manually.

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

