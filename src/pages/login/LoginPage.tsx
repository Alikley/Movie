import { Link } from "react-router";
import useAuthStore from "./store";

function LoginPage() {
  const { user, login } = useAuthStore();
  if (user)
    return (
      <div>
        <span className="mx-2">{user}</span>
      </div>
    );
  return (
    <div>
      <Link to="/">
        <button onClick={() => login()}>Login</button>
      </Link>
    </div>
  );
}

export default LoginPage;
