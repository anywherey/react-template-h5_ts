import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../redux/slice/counter";
import "./page1.less";
import { useEffect } from "react";
const Page1 = (data: any) => {
  const count = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("testtttt");
  }, []);
  return (
    <div className="page1" onClick={() => dispatch(increment())}>
      {count.value}
    </div>
  );
};
export default Page1;
