import { FC, useEffect } from "react";
import { setToken } from "@/utils/authority";
import { useNavigate, NavigateFunction, useLocation, useParams } from "react-router";
const Login: FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();
  const { from } = useParams();
  useEffect(() => {
    console.log(location);
  }, []);
  return (
    <div>
      login
      <div
        onClick={() => setToken("token") && navigate(`/${from}`)}
        style={{
          cursor: "pointer",
          height: "400px",
          lineHeight: "400px",
          textAlign: "center",
          backgroundColor: "pink",
        }}
      >
        set token后并继续跳转到page2
      </div>
      <div
        onClick={() => navigate(-1)}
        style={{
          cursor: "pointer",
          height: "400px",
          lineHeight: "400px",
          textAlign: "center",
          backgroundColor: "skyblue",
        }}
      >
        后退
      </div>
    </div>
  );
};
export default Login;
