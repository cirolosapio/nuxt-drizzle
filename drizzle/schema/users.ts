import { pgTable, text, bigint, timestamp } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint('id', { mode: 'number' }).primaryKey().notNull(),
  name: text('name'),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
})
