import React, { Component } from 'react';

class Emoji extends Component {

    constructor() {
        super()
        this.state = {
            text: "", arr: []
        }
    }

    handleInput = async (e) => {
        let value = e.target.value
        await this.setState({ text: value })
    }

    change = () => {
        let text = this.state.text.split(/(\s+)/)
        for (let i = 0; i < this.props.data.length; i++) {
            for (let j = 0; j < text.length; j++) {
                if (text[j] === this.props.data[i].name ) {
                    text[j] =  this.props.data[i].char 
                    this.state.arr.push( text)
                }
            }
        }
    }

   

    render() {
        this.change()
        console.log(this.state.arr[this.state.arr.length-1])
        return (
            <div>
                <input  onChange={this.handleInput}></input>
                <h3>{this.state.arr[this.state.arr.length-1]}</h3>
            </div>
        );
    }
}

export default Emoji;

