import { auth } from "@/app/auth";
import { Session } from "next-auth";
const session = (await auth()) as Session & { accessToken?: string };
export const approveLibrarian = async (payload: {
  id: string;
  role: string;
}) => {
  try {
    if (!session.accessToken) {
      throw new Error("Unauthorized: No session token found");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/librarians/approve/${payload.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify({ role: payload.role }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();

      throw new Error(errorData.message || "Failed to approve librarian");
    }
  } catch (error) {
    console.error("Approve librarian error:", error);
    throw new Error(error.message || "Something went wrong");
  }
};
