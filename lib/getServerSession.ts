import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const getSession = async () => {
    const session = await getServerSession(options)
    //@ts-ignore
    return session?.user?.email
};
