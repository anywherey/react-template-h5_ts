import { FC, useEffect } from "react";
import { setToken } from "@/utils/authority";
import { useNavigate, NavigateFunction, useLocation, useParams } from "react-router";
import "./index.less";
const Login: FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();
  const { from } = useParams();
  useEffect(() => {
    console.log(location);
  }, []);
  return (
    <div className="login-page">
      login
      <div onClick={() => setToken("token") && navigate(`/${from}`)} className="login-page-to">
        set token后并继续跳转到page2
      </div>
      <div onClick={() => navigate(-1)} className="login-page-back">
        后退
      </div>
    </div>
  );
};
export default Login;
