// import { useRouter } from "next/navigation";
// import React from "react";
// import { useEffect } from "react";
// import { usesetLogInSessionContext } from "../..d/admin/stateManagement/logIn-Log-out";

// export default function useAuthGuard() {
//   const { LogInSessionHolder } = usesetLogInSessionContext();
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("x-auth-token");

//     if (!token) {
//       router.replace("/landing-page"); // Redirect if no token
//       return;
//     }
//   }, []);
// }
import React from "react";

const page = () => {
  return <div>he</div>;
};

export default page;
