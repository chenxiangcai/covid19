import axios from "axios";
const http = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "/" : "http://localhost",
    // timeout: 3000,
})

//请求拦截处理
http.interceptors.request.use(function (config) {
    // 在发送请求之前

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//返回拦截处理
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export const get = (url, params = '') => {
    return http({
        method: "get",
        url,
        params,
    })
        .then((result) => {
            return result.data;
        })
        .catch((err) => {
            return err.message;
        });
};
export const del = (url, params = '') => {
    return http({
        method: "get",
        url,
        params,
    })
        .then((result) => {
            return result.data;
        })
        .catch((err) => {
            return err.message;
        });
};
export const post = ({url}, params) => {
    return http({
        method: "post",
        url,
        data: params,
    })
        .then((result) => {
            return result.data;
        })
        .catch((err) => {
            return err.message;
        });
};
export const put = ({url}, params) => {
    return http({
        method: "post",
        url,
        data: params,
    })
        .then((result) => {
            return result.data;
        })
        .catch((err) => {
            return err.message;
        });
};