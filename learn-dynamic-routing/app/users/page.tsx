import getAllUsers from "@/lib/getAllUsers";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  console.log("hello");
  const content = (
    <section>
      <h2>
        <Link href={"/"}>Back to Home</Link>
      </h2>
      <br />
      {users.map((users) => {
        return (
          <>
            <p>
              <Link href={`users/${users.id}`}>{users.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
}
