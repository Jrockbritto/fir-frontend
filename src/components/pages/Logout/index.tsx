"use client";

import useUser from "@lib/user/useUser";

export const LogoutComponent = () => {
  const { logout } = useUser();
  const onClick = () => {
    logout();
  };

  return (
    <>
      <button onClick={onClick}>Logout</button>
    </>
  );
};
