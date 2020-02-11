import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        number:0
    }
    increment = () =>{
        //1.获取用户数字
        const value =  this.refs.checkNumber.value
        //2.更新状态
        const number = this.state.number
        this.setState({number:number + value*1})
    }
    decrement = () =>{
        const value = this.refs.checkNumber.value
        const number = this.state.number
        this.setState({number:number - value*1})
    }
    incrementOdd = () =>{
        const value = this.refs.checkNumber.value
        const number = this.state.number
        if(number%2 === 1 ){
            this.setState({number:number + value*1})
        }
    }
    incrementAsync = () =>{
        const value = this.refs.checkNumber.value
        const number = this.state.number
        setTimeout(() => {
            this.setState({number:number + value*1})
        }, 1000);
        
    }
    render() {
        return (
            <div>
                <h1>当前计数为：{this.state.number}</h1>
                <select ref="checkNumber">
                    <option value="1">1</option>
                    <option value="2">2</option>             
                    <option value="3">3</option>
                </select>&nbsp;          
                <button onClick={this.increment}>+</button>&nbsp; 
                <button onClick={this.decrement}>-</button>&nbsp; 
                <button onClick={this.incrementOdd}>increment if odd</button>&nbsp; 
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        )
    }
}
