import { FC } from "react";
import { getTestApi, getTestApi2, getMockApi } from "@/api/test/test";
import { cancelRequest } from "@/http";
import { useNavigate, NavigateFunction } from "react-router";
import { getToken, removeToken } from "@/utils/authority";
import "./index.less";
const Home: FC = () => {
  const navRoute: NavigateFunction = useNavigate();
  const getMockData = () => {
    getMockApi().then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="home">
      <div className="home-first">home</div>
      <div onClick={() => (getToken() ? console.log("gettoken") : "")}>getToken</div>
      <div onClick={() => removeToken()}>removeToken</div>
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => {
            getTestApi();
            getTestApi2();
          }}
        >
          测试/test、/test2接口
        </button>
        <button
          onClick={() => {
            cancelRequest("/test");
          }}
        >
          取消/test测试接口
        </button>
        <button
          onClick={() => {
            cancelRequest();
          }}
        >
          取消所有接口
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            getTestApi();
            getTestApi();
            getTestApi();
            getTestApi();
          }}
        >
          测试多个接口
        </button>
        <button
          onClick={() => {
            cancelRequest(["/test", "/test", "/test", "/test"]);
          }}
        >
          取消该多个接口
        </button>
      </div>
      <button
        onClick={() => {
          getMockData();
        }}
      >
        测试Mock了的/test4接口
      </button>
      <div
        style={{
          height: "300px",
          background: "skyblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
        onClick={() => navRoute("/page1")}
      >
        去page1无权限页面
      </div>
      <div
        style={{
          height: "300px",
          background: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
        onClick={() => navRoute("/page2")}
      >
        去page2权限页面
      </div>
    </div>
  );
};
export default Home;
