import axios from 'axios';
let api = "http://vue.thexxdd.cn/";

//轮播
export const banner = () =>{
    return axios.get((api + "/tourism"));
}

//首页
export const home = () =>{
    return axios.get((api+ "/homes"))
}

//攻略列表页
export const goods = (goodsId) => {
    return axios.get((api + "/goods/" + goodsId) + '/');
}
