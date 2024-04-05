import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

function ProfilePages() {
  const logout = useAuthStore((state) => state.logout);
  const navegate = useNavigate();
  return (
    <div>
      ProfilePages
      <button
        type="button"
        onClick={() => {
          logout();
          navegate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default ProfilePages;
