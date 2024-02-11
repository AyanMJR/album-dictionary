import { fetchUsers } from "@/app/lib/api";
import UsersList from "@/app/components/Templates/UsersList";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const users = await fetchUsers();

  if (users.length === 0) {
    return (
      <div>No users found</div>
    )
  }

  return (
    <UsersList users={users} />
  );
}
