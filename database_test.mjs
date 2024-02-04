import postgres from 'postgres';

const sql = postgres('postgres://marf:Vienna2024@localhost:5432/ecommerce_db');

console.log(
  await sql`
    SELECT
      *
    FROM
      products
  `,
);
