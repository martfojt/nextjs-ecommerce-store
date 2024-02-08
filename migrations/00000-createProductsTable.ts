import { Sql } from 'postgres';

export type Product = {
  id: number;
  productName: string;
  productPrice: number;
  currency: string;
  productDescription: string | null;
  imageUrl: string | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY key generated always AS identity,
      product_name varchar(20) NOT NULL,
      product_price numeric(10, 2) NOT NULL,
      currency varchar(3) NOT NULL,
      product_description varchar(1500),
      imageurl varchar(255)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE products`;
}
