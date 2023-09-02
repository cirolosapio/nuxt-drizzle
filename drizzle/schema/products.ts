import { doublePrecision, pgTable, serial, text } from 'drizzle-orm/pg-core'

export const products = pgTable('products', {
  id: serial('id').primaryKey().notNull(),
  name: text('name'),
  price: doublePrecision('price')
})
