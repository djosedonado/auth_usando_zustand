import axios from "../libs/axios";

interface userAuth {
  email: string;
  password: string;
}

export const LoginRequest = async (user: userAuth) => {
  return axios.post("/login", {
    email: user.email,
    password: user.password,
  });
};

export const ProfileRequest = async () => {
  return await axios.get("/centrosformacion");
};
