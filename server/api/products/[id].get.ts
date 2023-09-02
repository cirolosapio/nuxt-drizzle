import { eq } from 'drizzle-orm'
import { products } from '~/drizzle'

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  return await db()
    .select()
    .from(products)
    .where(eq(products.id, id))
})
