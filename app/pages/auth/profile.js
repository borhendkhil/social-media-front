import { useSession } from "next-auth/react";

export default async function Profile() {
  const { data: session } = useSession();

  if (!session) return <p>You are not logged in!</p>;

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
      {/* Add fields for editing profile details */}
    </div>
  );
}
