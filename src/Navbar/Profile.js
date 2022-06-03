import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

const Profile = ({ setUser }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <h1> Welcome {auth.user}</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
export default Profile;
