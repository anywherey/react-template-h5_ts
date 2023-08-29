import { FC } from "react";
import { Tabbar } from "react-vant";
import { HomeO, SettingO } from "@react-vant/icons";
import { Outlet, useNavigate, NavigateFunction } from "react-router-dom";
const MainPage: FC = () => {
  const navRoute: NavigateFunction = useNavigate();
  return (
    <>
      <Outlet></Outlet>
      <Tabbar>
        <Tabbar.Item onClick={() => navRoute("/home")} icon={<HomeO />}>
          首页
        </Tabbar.Item>
        <Tabbar.Item onClick={() => navRoute("/community")} icon={<HomeO />}>
          社区
        </Tabbar.Item>
        <Tabbar.Item onClick={() => navRoute("/my")} icon={<SettingO />}>
          我的
        </Tabbar.Item>
      </Tabbar>
    </>
  );
};
export default MainPage;
