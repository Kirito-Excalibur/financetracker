import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
export default function LoginBtn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session?.user.email}
        <button onClick={() => signOut()}>SignOut</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>SignIn</button>
    </>
  );
}
