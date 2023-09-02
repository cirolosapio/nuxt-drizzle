import type { Config } from 'drizzle-kit'
import 'dotenv/config'

export default {
  schema: './drizzle/schema/*',
  // out: './supabase/migrations',
  driver: 'pg',
  dbCredentials: {
    host: process.env.NUXT_HOST,
    database: process.env.NUXT_DATABASE,
    user: process.env.NUXT_USER,
    password: process.env.NUXT_PASSWORD
  }
} satisfies Config
