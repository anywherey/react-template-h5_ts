import { FC } from "react";
import { getTestApi, getTestApi2 } from "@/api/test/test";
import { cancelRequest } from "@/http";
import { useNavigate, NavigateFunction } from "react-router";
import { getToken, removeToken } from "@/utils/authority";
import "./index.less";
const Home: FC = () => {
  const navRoute: NavigateFunction = useNavigate();
  const clickCancel = async () => {
    getTestApi();
    getTestApi();
    getTestApi();
    getTestApi();
    setTimeout(() => {
      cancelRequest("/test");
    }, 500);
  };
  return (
    <div className="home-page">
      <div className="home-page-first">home</div>
      <div onClick={() => (getToken() ? console.log("gettoken") : "")}>getToken</div>
      <div onClick={() => removeToken()} className="home-page-remove">
        removeToken
      </div>
      <div className="mgt30">
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
        <button onClick={clickCancel}>一键测试多个接口并取消</button>
      </div>
      <div className="home-page-nav1" onClick={() => navRoute("/page1")}>
        去page1无权限页面
      </div>
      <div className="home-page-nav2" onClick={() => navRoute("/page2")}>
        去page2权限页面
      </div>
    </div>
  );
};
export default Home;
