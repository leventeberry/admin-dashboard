/**
 * Upserts the Learn-tutorial demo user (user@nextmail.com / 123456).
 * Usage: DATABASE_URL=postgresql://... node scripts/seed-auth-user.cjs
 * Or: npm run db:seed (loads .env via Node --env-file when supported).
 */
const postgres = require('postgres');
const bcrypt = require('bcrypt');

async function main() {
  const sql = postgres(process.env.DATABASE_URL, { max: 1 });
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;
    const password = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
    await sql`
      INSERT INTO users (name, email, password)
      VALUES ('User', ${process.env.ADMIN_EMAIL}, ${password})
      ON CONFLICT (email) DO UPDATE SET
        password = EXCLUDED.password,
        name = EXCLUDED.name;
    `;
    console.log(`Seeded user: ${process.env.ADMIN_EMAIL}`);
  } finally {
    await sql.end({ timeout: 5 });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
