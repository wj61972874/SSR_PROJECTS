import request from "./request";

export function apiGetGoodsData(): Promise<any> {
    // return request.post(
    //     `http://localhost:3000/api/goods/data/get`
    // );
    return request.post(
        `https://407e964d-277c-4675-9871-2e9f0c9d59f7.mock.pstmn.io/api/test/goods/get`
    );

}