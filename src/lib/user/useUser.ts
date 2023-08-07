import fetchJson from "@lib/fetchJson";

import { User } from "@models/user";

import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR<User>("/api/user");

  const router = useRouter();

  const logout = async () => {
    mutateUser(await fetchJson("/api/logout", { method: "POST" }), false);
    router.push("/login");
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
