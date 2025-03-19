// import { useAuth } from "@/contexts";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = false;

  if (!isLoggedIn) return <>Not logged in</>;

  return children;
};

export default AuthGuard;
