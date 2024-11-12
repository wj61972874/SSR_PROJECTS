import React, { ComponentType, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const withInitialProps = (WrappedComponent: any) => {
  const WithInitialProps = (props: any) => {
    if (!__SERVER__) {
      console.log(
        "WithInitialProps====",
        props.staticContext,
        window.__INITIAL_DATA__
      );
    }

    const [initialData, setInitialData] = useState(
      props.staticContext?.initialData || window.__INITIAL_DATA__ || null
    );

    let params: {} | null = null;
    let location = null;
    if (!__SERVER__) {
      params = useParams();
      location = useLocation();
    }

    useEffect(() => {
      const canClientFetch = props.history && props.history.action === "PUSH";
      console.log(
        "canClientFetch====",
        __SERVER__ ? "服务端" : "客户端",
        initialData,
        canClientFetch,
        window._CILENT_FETCHED_
      );
      if (!__SERVER__ && !initialData) {
        console.log(11111);
        getInitialProps();
      }
      if (!__SERVER__ && canClientFetch && !window._CILENT_FETCHED_) {
        console.log(22222);
        getInitialProps();
        window._CILENT_FETCHED_ = true;
      }
    }, [params]);

    //用于封装处理
    async function getInitialProps() {
      console.log("WrappedComponent props", props.staticContext, {
        match: { params },
      });
      const res = WrappedComponent.getInitialProps
        ? await WrappedComponent.getInitialProps({ match: { params } })
        : {};

      setInitialData(res);
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

  return WithInitialProps;
};

export default withInitialProps;
