import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import { User } from "models/user";
import fetchJson from "lib/fetchJson";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR<User>("/api/user");

  const logout = async () => {
    mutateUser(await fetchJson("/api/logout", { method: "POST" }), false);
  };

  useEffect(() => {
    if (!redirectTo || !user) return;

    if (
      (redirectTo && !redirectIfFound && !user?.token) ||
      (redirectIfFound && user?.token)
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser, logout };
}
