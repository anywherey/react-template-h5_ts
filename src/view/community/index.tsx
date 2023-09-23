import { FC, useState } from "react";
import { Comment } from "@/components";
import "./index.less";
const Community: FC = () => {
  const [like, setLike] = useState(false);
  const [star, setStar] = useState(false);
  const actions = [
    <button className="custom-comment-action" key="heart" onClick={() => setLike(!like)}>
      {like ? <div style={{ color: "#f53f3f" }}>like</div> : <div>like</div>}
      {83 + (like ? 1 : 0)}
    </button>,
    <button className="custom-comment-action" key="star" onClick={() => setStar(!star)}>
      {star ? <div style={{ color: "#ffb400" }}>star</div> : <div>star</div>}
      {3 + (star ? 1 : 0)}
    </button>,
    <button className="custom-comment-action" key="reply">
      Reply
    </button>,
  ];
  return (
    <Comment
      actions={actions}
      author="Socrates"
      className={"com-main"}
      avatar={
        <img
          style={{ maxWidth: "100%", height: "200px" }}
          alt="avatar"
          src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
        />
      }
      content={<div>Community</div>}
      datetime="1 hour"
    />
  );
};
export default Community;
