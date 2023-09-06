import { ReactNode } from "react";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Vending Locator",
  description: "Generated by Vending Locator",
};


export default async function ForgotPasswordLayout({
  children,
}: {
  children: ReactNode;
}) {
//   await getToken();

  return <>{children}</>;
}

// async function getToken() {
//   const nextCookies = cookies(); // Get cookies object
//   const cookie = nextCookies.get(AUTH_KEY); // Find cookie
//   if (cookie && cookie.value) {
//     cookie.value && redirect("/servers");
//   }
// }