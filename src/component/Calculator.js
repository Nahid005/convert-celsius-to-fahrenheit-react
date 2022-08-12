import React from 'react'
import InputTempreature from './InputTempreature'
class Calculator extends React.Component{
    state = {
        tempearature : '',
    }

    onChangeHandelar = (e) => {
        this.setState ({
            tempearature : e.target.value
        })
    }

    render() {

        return(
            <div>
                <InputTempreature scale = 'c' tempearature= {this.tempearature} onchangeHandelar = {this.onChangeHandelar} /> 
                <InputTempreature scale = 'f' tempearature= {this.tempearature} onchangeHandelar = {this.onChangeHandelar} /> 
            </div>
        )
    }
}

export default Calculator