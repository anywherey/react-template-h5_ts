import { makeAutoObservable, runInAction } from "mobx";

class Global {
  constructor() {
    // makeAutoObservable: 自动将所有属性和方法转换为可观察对象。
    makeAutoObservable(this);
  }
  count: number = 0;
  name: string = "react";
  data: any[] = [];
  loading: boolean = true;

  addCount = () => {
    this.count++;
  };
  setName = (data: string) => {
    this.name = data;
  };

  getFetchGetTest = async () => {
    try {
      const result = {
        name: "2321",
        gg: "4",
        results: ["test"],
      };
      const { results } = result;
      // 在 MobX 中，不管是同步还是异步操作，都可以放到 action 中，
      // 只是异步操作在修改属性时，需要将赋值操作放到 runInAction 中。
      runInAction(() => {
        this.data = results;
        this.loading = false;
      });
    } catch (err) {
      console.warn(err);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const globalStore = new Global();
export { globalStore };
