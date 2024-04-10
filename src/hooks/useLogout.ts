import { useAuthContext } from "./useAuthContex";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  async function logout() {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  }

  return { logout };
};
