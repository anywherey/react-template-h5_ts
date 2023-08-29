import { FC } from "react";
import { setToken } from "@/utils/authority";
import { useNavigate, NavigateFunction } from "react-router";
const Login: FC = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div>
      login
      <div onClick={() => setToken("token")}>set token</div>
      <div onClick={() => navigate(-1)}>后退</div>
    </div>
  );
};
export default Login;
