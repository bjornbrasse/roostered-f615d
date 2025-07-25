import {type Route} from "../../.react-router/types/app/routes/+types/bjorn.ts"
import { prisma } from "~/utils/db.server.ts"


export async function loader() {
  const user = await prisma.user.findFirst({where: {id: '1'}})
  return {user}
}

export default function TestComponent({loaderData}: Route.ComponentProps) {
  return (
    <div>
      <h1>Test Component</h1>
      <p>User ID: {loaderData.user.id}</p>
      <p>User Email: {loaderData.user.email}</p>
      <p>User First Name: {loaderData.user.firstName}</p>
      <p>User Last Name: {loaderData.user.lastName}</p>
    </div>)
}