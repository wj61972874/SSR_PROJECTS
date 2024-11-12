// src/utils/withStore.ts
import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import store from "../store";

const withStore = (loader: LoaderFunction): LoaderFunction => {
    return async (args: LoaderFunctionArgs, context?: any) => {
        return loader({ ...args, context: { ...context, store } });
    };
};

export default withStore;