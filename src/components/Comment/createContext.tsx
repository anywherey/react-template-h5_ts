import { createContext } from "react";
import { CommentProps } from "./interface";
import { ReactNode } from "react";
type ComponentConfig = {
  Comment: CommentProps;
};
interface ConfigProviderProps {
  /**
   * @zh 用于全局配置所有组件的默认参数
   * @en Default parameters for global configuration of all components
   */
  componentConfig?: ComponentConfig;
  /**
   * @zh 配置组件的默认尺寸，只会对支持`size`属性的组件生效。
   * @en Configure the default size of the component, which will only take effect for components that support the `size` property.
   * @defaultValue default
   */
  size?: "mini" | "small" | "default" | "large";
  /**
   * @zh 全局组件类名前缀
   * @en Global ClassName prefix
   */
  prefixCls?: string;
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
  /**
   * @zh 全局弹出框挂载的父级节点。
   * @en The parent node of the global popup.
   * @defaultValue () => document.body
   */
  getPopupContainer?: (node: HTMLElement) => Element;
  /**
   * @zh 全局的加载中图标，作用于所有组件。
   * @en Global loading icon.
   */
  rtl?: boolean;
  loadingElement?: ReactNode;
  renderEmpty?: (componentName?: string) => ReactNode;
  zIndex?: number;
  children?: ReactNode;
}
const defaultProps: ConfigProviderProps = {
  getPopupContainer: () => document.body,
  size: "default",
  renderEmpty,
};
function renderEmpty(componentName?: string) {
  switch (componentName) {
    default:
      return <div>none</div>;
  }
}
export const ConfigContext = createContext<ConfigProviderProps>({
  getPrefixCls: (componentName: string, customPrefix?: string) => `${customPrefix || "arco"}-${componentName}`,
  ...defaultProps,
});
