import { FC } from "react";
import "./index.less";
import imgerro from "@/assets/pics/404.png";
import { useNavigate, NavigateFunction } from "react-router-dom";

const NotFound: FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...rest }) => {
  const navigate: NavigateFunction = useNavigate();
  function back() {
    navigate(-1);
  }
  return (
    <div {...rest} className={`missing-page ${rest.className}`}>
      <img className="missing-page-pic" src={imgerro} alt="" />
      <div className="missing-page-title">页面出错</div>
      <button className="missing-page-subtitle" onClick={back}>
        回到上一页
      </button>
    </div>
  );
};
export default NotFound;
