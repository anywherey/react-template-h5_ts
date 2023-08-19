import {makeAutoObservable, runInAction} from 'mobx';

class Global {
    constructor() {
        // makeAutoObservable: 自动将所有属性和方法转换为可观察对象。
        makeAutoObservable(this);
    }
    count = 0;
    name = 'react';
    data= [];
    loading = true;

    addCount = () => {
        this.count++;
    };
    setName = (data) => {
        this.name = data;
    };

    getFetchGetTest = async (params) => {
        try {
            const result ={
                name:'2321',
                gg:'4'
            };
            const {results} = result;
            // 在 MobX 中，不管是同步还是异步操作，都可以放到 action 中，
            // 只是异步操作在修改属性时，需要将赋值操作放到 runInAction 中。
            runInAction(() => {
                this.data = results;
                this.loading = false;
            });
        } catch (err) {
            console.log(err);
            runInAction(() => {
                this.loading = false;
            });
        }
    };
}

const globalStore = new Global();
export {globalStore};
