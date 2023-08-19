import { useSelector,useDispatch } from "react-redux";
import {increment} from '../../redux/slice/counter'
import './page1.less'
const Page1 = (data:any) => {
  const count=useSelector((state:any)=>state.counter)
  const state=useSelector((state:any)=>state)
  const dispatch=useDispatch()
  return (
    <>
      <div className="page1" onClick={()=>dispatch(increment())}>{count.value}</div>
    </>
  );
};
export default Page1;
