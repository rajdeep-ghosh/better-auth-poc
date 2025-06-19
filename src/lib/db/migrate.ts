import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from "drizzle-orm/libsql/migrator";

const migrationClient = createClient({ url: "file:src/data.db" });

async function main() {
  const db = drizzle(migrationClient);
  await migrate(db, { migrationsFolder: 'src/lib/db/migrations' });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
