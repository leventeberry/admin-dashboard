import Image from "next/image";
import LoginPage from "./login/page";
import Dashboard from "./dashboard/page";

export default function Home() {

  const isAuthenticated = true;
  return (
    <div>
      {isAuthenticated ? <Dashboard /> : <LoginPage />}
    </div>
  );
}
