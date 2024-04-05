import { LoginRequest, ProfileRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

function LoginPages() {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navegation = useNavigate();

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    console.log(email, password);
    const response = await LoginRequest({ email, password });
    console.log(response);
    setToken(response.data.token);
    const resProfile = await ProfileRequest();
    setProfile(resProfile.data.profile);
    console.log(resProfile);
    navegation("/profile");
  };
  return (
    <form onSubmit={HandleSubmit}>
      <input type="email" placeholder="email@gmail.com" />
      <input type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPages;
