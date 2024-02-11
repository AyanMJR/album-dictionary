'use client';

import { User } from "@/app/lib/types";
import Link from 'next/link';
import Tiles from "@/app/components/Atoms/Tiles";
import Container from "@/app/components/Atoms/Container";
import UserIcon from "@/app/assets/user.svg";

type userListProps = {
  users: User[]
}

function UsersList({ users }: userListProps) {

  return (
    <Container>
      {users.map(user => (
        <Link key={user.id} href={`/${user.id}`} role="link">
          <Tiles icon={UserIcon}>{user.name}</Tiles>
        </Link>
      ))}
    </Container>
  )
}

export default UsersList;