import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

export default function () {
  const { host, database, user, password } = useRuntimeConfig()

  return drizzle(
    postgres({
      host,
      database,
      user,
      password
    })
  )
}
