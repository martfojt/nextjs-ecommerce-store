import { Sql } from 'postgres';

const products = [
  {
    id: 1,
    productName: 'Middle-Earth',
    productPrice: 399,
    currency: 'EUR',
    productDescription: '',
    imageUrl: '',
  },
  {
    id: 2,
    productName: 'Cadia',
    productPrice: 499,
    currency: 'EUR',
    productDescription: '',
    imageUrl: '',
  },
  {
    id: 3,
    productName: 'Hogwarts',
    productPrice: 299,
    currency: 'EUR',
    productDescription: '',
    imageUrl: '',
  },
  {
    id: 4,
    productName: 'Azeroth',
    productPrice: 599,
    currency: 'EUR',
    productDescription: '',
    imageUrl: '',
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
      INSERT INTO
        products (
          product_name,
          product_price,
          currency,
          product_description,
          imageurl
        )
      VALUES
        (
          ${product.productName},
          ${product.productPrice},
          ${product.currency},
          ${product.productDescription},
          ${product.imageUrl}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        id = ${product.id}
    `;
  }
}
