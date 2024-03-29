import { readFileSync } from 'node:fs';
import dotenv from 'dotenv';
import postgres from 'postgres';

function setEnvironmentVariables() {
  dotenv.config();

  const unconfiguredEnvVars = Object.keys(
    dotenv.parse(readFileSync('./.env.example')),
  ).filter((exampleKey) => !process.env[exampleKey]);

  if (unconfiguredEnvVars.length > 0) {
    throw new Error(
      `.env.example environment ${
        unconfiguredEnvVars.length > 1 ? 'variables' : 'variable'
      } ${unconfiguredEnvVars.join(', ')} not configured in .env file`,
    );
  }
}

setEnvironmentVariables();

const sql = postgres();

console.log(
  await sql`
    SELECT
      *
    FROM
      products
  `,
);
