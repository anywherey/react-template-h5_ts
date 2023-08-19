import { FC } from "react";
import { getTestApi } from '@/api/test/test'
import { cancelRequest } from '@/http'
import { useNavigate, NavigateFunction } from "react-router";
import './index.less'
const Home: FC = () => {
    const navRoute: NavigateFunction = useNavigate()
    return (
        <div className="home">
            <div className="home-first">home</div>
            <div style={{ marginTop: '30px' }}>
                <button onClick={() => { getTestApi() }}>测试接口</button>
                <button onClick={() => { cancelRequest('/test') }}>取消该测试接口</button>
                <button onClick={() => { cancelRequest() }}>取消所有接口</button>
            </div>
            <div style={{ width: '300px', height: '300px', background: 'skyblue', display:"flex",alignItems:"center",justifyContent:"center", marginTop: '50px' }} onClick={() => navRoute('/page1')}>去page1页面</div>
        </div >
    )
}
export default Home;