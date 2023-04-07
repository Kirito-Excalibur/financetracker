import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
import { authOptions } from "~/server/auth";

export default async (req: any, res: any) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    res.send({
      content:
        "This page is protected. You can access this content because you are logged in",
    });
  } else {
    res.send({
      content:
        "Ypu must be signed in to view the protected content on this page",
    });
  }
};
