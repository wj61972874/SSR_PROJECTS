// import React, { ComponentType, useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";

// let _isPop = false; //是否触发过popState
// let _isMount = false; //组件是否挂载完成
// let _this: any = null;

// const popStateCallback = () => {
//   console.log("popStateFn", _this);
//   _isPop = true;
//   // 使用 popStateCallback 保存函数防止 addEventListener 重复注册
//   // if (_this && _this.default.getInitialProps) {
//   //   console.log("popStateFn22");
//   //   _isPop = true;
//   //   if (_isMount) {
//   //     //只有当前组件挂载后才能执行数据预取，否则会报错
//   //     _this.default.getInitialProps();
//   //   }
//   // }
// };

// const withInitialProps = (WrappedComponent: any) => {
//   const WithInitialProps = (props: any) => {
//     console.log("WrappedComponent====高阶组件进来了");
//     const [initialData, setInitialData] = useState(
//       props.staticContext?.initialData || window.__INITIAL_DATA__ || null
//     );

//     const [cachedData, setCachedData] = useState({
//       initialData: {},
//       canClientFetch: false,
//     });

//     let _props = { ...props };
//     let params: {} | null = null;
//     let location = null;

//     if (!__SERVER__) {
//       console.log(
//         "WithInitialProps====客户端：",
//         props.staticContext,
//         window.__INITIAL_DATA__
//       );
//       params = useParams();
//       location = useLocation();
//       if (cachedData.canClientFetch) {
//         _props.initialData = cachedData.initialData || {};
//       } else {
//         _props.initialData = window.__INITIAL_DATA__ || {};
//       }
//     } else {
//       console.log("WithInitialProps====服务端：", props.staticContext);
//       _props.initialData = props.staticContext || {};
//     }

//     useEffect(() => {
//       _isMount = true; //组件挂载完成
//       console.log("location 改变了", location);
//       if (window.__IS__SSR__) {
//         //只有当启用 ssr 时
//         console.log("this====", this);
//         _this = this; // 修正_this指向，保证_this指向当前渲染的页面组件
//         //注册事件
//         window.addEventListener("popstate", () => {
//           //  if (_isPop) {
//           //如果前进或者后退 则需要异步获取数据
//           console.log("触发 内部 getInitialProps111");
//           getInitialProps();
//           //  }
//         });
//         console.log("popstate 注册成功 _isPop===", _isPop);
//       }
//       const canClientFetch = props.history && props.history.action === "PUSH"; //路由跳转的时候可以异步请求数据
//       console.log("canClientFetch", canClientFetch);
//       if (canClientFetch || !window.__IS__SSR__) {
//         console.log("触发 内部 getInitialProps222");
//         getInitialProps();
//       }
//       return () => {
//         console.log("unmount");
//         _isPop = false; //重置为未触发
//         _isMount = false; //重置为未挂载
//         window.removeEventListener("popstate", () => {
//           getInitialProps();
//         });
//       };
//     }, [location]);

//     //用于封装处理
//     async function getInitialProps() {
//       console.log("WrappedComponent props", props.staticContext, {
//         match: { params },
//       });
//       const res = WrappedComponent.getInitialProps
//         ? await WrappedComponent.getInitialProps({ match: { params } })
//         : {};
//       console.log("getInitialProps====", res);
//       setInitialData(res);
//       setCachedData({
//         initialData: res,
//         canClientFetch: true,
//       });
//       window.__INITIAL_DATA__ = null;
//       let { tdk } = res.page;
//       if (tdk) {
//         document.title = tdk.title;
//       }
//     }

//     return <WrappedComponent {...props} initialData={initialData} />;
//     // return <WrappedComponent {...props} initialData={[]} />;
//   };

//   // 将 getInitialPropsForServer 定义为静态方法
//   WithInitialProps.getInitialProps = async function (ctx: any) {
//     console.log("WithInitialProps.getInitialProps=====", ctx);
//     return WrappedComponent.getInitialProps
//       ? await WrappedComponent.getInitialProps(ctx)
//       : {};
//   };

//   return WithInitialProps;
// };

// export default withInitialProps;

import React, { ComponentType, useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";

let _isPop = false; // 是否触发过 popState
let _isMount = false; // 组件是否挂载完成
let _this: any = null;

const popStateListener = (getInitialProps: () => Promise<void>) => {
  console.log("popStateListener==_isPop=", _this);
  if (!_isPop) {
    console.log("触发 内部 getInitialProps111");
    getInitialProps();
    _isPop = true;
  }
};

const withInitialProps = (WrappedComponent: any) => {
  const WithInitialProps = (props: any) => {
    console.log("WrappedComponent====高阶组件进来了");
    const [initialData, setInitialData] = useState(
      props.staticContext?.initialData || window.__INITIAL_DATA__ || null
    );

    const [cachedData, setCachedData] = useState({
      initialData: {},
      canClientFetch: false,
    });

    const popStateListenerRef = useRef<any>(null); // 用于保存事件监听器的引用

    let _props = { ...props };
    let params: {} | null = null;
    let location = null;

    if (!__SERVER__) {
      console.log(
        "WithInitialProps====客户端：",
        props.staticContext,
        window.__INITIAL_DATA__
      );
      params = useParams();
      location = useLocation();
      if (cachedData.canClientFetch) {
        _props.initialData = cachedData.initialData || {};
      } else {
        _props.initialData = window.__INITIAL_DATA__ || {};
      }
    } else {
      console.log("WithInitialProps====服务端：", props.staticContext);
      _props.initialData = props.staticContext || {};
    }

    useEffect(() => {
      _isMount = true; // 组件挂载完成
      console.log("location 改变了", location, window.__IS__SSR__);

      if (window.__IS__SSR__) {
        /**
         * Todo: 这里先暂且这样吧，有小问题，会在页面刷新的时候触发两次 getInitialProps
         * 是为了解决浏览器前进后退事件的，但是浏览器前进后退事件获取数据后，页面没有重新渲染
         * 只能先退而且其次，让页面先渲染起来，后续再优化
         */
        // 只有当启用 SSR 时

        // _this = this; // 修正_this指向，保证_this指向当前渲染的页面组件
        // // 注册事件
        // window.addEventListener("popstate", () => {
        //   const listener = () => popStateListener(getInitialProps);
        //   window.addEventListener("popstate", listener);
        // });

        getInitialProps();
        if (_isPop) {
          //如果前进或者后退 则需要异步获取数据
          getInitialProps();
        }
      }
      const canClientFetch = props.history && props.history.action === "PUSH"; // 路由跳转的时候可以异步请求数据
      console.log("canClientFetch", canClientFetch);
      if (canClientFetch || !window.__IS__SSR__) {
        console.log("触发 内部 getInitialProps222");
        getInitialProps();
      }
      return () => {
        console.log("unmount");
        _isPop = false; // 重置为未触发
        _isMount = false; // 重置为未挂载
        // if (popStateListenerRef.current) {
        //   window.removeEventListener("popstate", popStateListenerRef.current);
        //   popStateListenerRef.current = null;
        // }
      };
    }, [location]);

    // 用于封装处理
    async function getInitialProps() {
      console.log("WrappedComponent props", props.staticContext, {
        match: { params },
      });
      const res = WrappedComponent.getInitialProps
        ? await WrappedComponent.getInitialProps({ match: { params } })
        : {};
      console.log("getInitialProps====", res);
      setInitialData(res);
      setCachedData({
        initialData: res,
        canClientFetch: true,
      });
      window.__INITIAL_DATA__ = null;
      let { tdk } = res.page;
      if (tdk) {
        document.title = tdk.title;
      }
    }

    return <WrappedComponent {...props} initialData={initialData} />;
  };

  // 将 getInitialPropsForServer 定义为静态方法
  WithInitialProps.getInitialProps = async function (ctx: any) {
    console.log("WithInitialProps.getInitialProps=====", ctx);
    return WrappedComponent.getInitialProps
      ? await WrappedComponent.getInitialProps(ctx)
      : {};
  };

  console.log("WithInitialProps====", WithInitialProps);
  return WithInitialProps;
};

export default withInitialProps;
