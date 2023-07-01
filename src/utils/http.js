import axios from 'axios';

const http = axios.create({
	baseURL: "https://api.openai.com/v1",
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers.Authorization =
			"Bearer " + "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"
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


export default http