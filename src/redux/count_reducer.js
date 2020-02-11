//recuder 为count组件服务的reducer
import {INCREMENT,DECREMENT} from './action_types'
export default function (preState=0,action) {
    console.log(preState,action);
    //从action中获取：type，data
    const {type,data} = action
    //准备好一个状态
    let newState
    //如果没有传过来preState
    // if(!preState){
    //     preState = 0//让初始化状态为0
    // }形参默认值代替，
    switch (type) {
        case INCREMENT://加法操作
            newState = preState + data
            return newState//返回新的状态
        case DECREMENT://减法操作
            newState = preState - data
            return newState
        //不是加或者减，初始化的时候
            default:
            return preState           
    }
}

