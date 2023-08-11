import { Header } from "@components/Header/Header";

import useUser from "@lib/user/useUser";

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUser();
  return (
    <>
      <Header token={user?.token} />
      {children}
    </>
  );
}
