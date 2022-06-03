import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const handelLogin = () => {
    auth.login(user);
    navigate("/");
  };
  return (
    <>
      <label>
        User: {<input type="text" onChange={(e) => setUser(e.target.value)} />}
      </label>
      <button onClick={handelLogin}>Login</button>
    </>
  );
};
export default Login;
