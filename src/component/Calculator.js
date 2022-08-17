import React from 'react'
import InputTempreature from './InputTempreature'
import {Convartor, fahrenheitToCelsius, celsiusToFahrenheit} from './Convator'
import BoilingVerdict from './BoilingVerdict'
class Calculator extends React.Component{
    state = {
        tempearature : '',
        scale : "f"
    }

    onChangeHandelar = (e, scale) => {
        this.setState ({
            tempearature : e.target.value,
            scale

        })
    }


    render() {

        const {tempearature, scale} = this.state
        const celsius = scale === "f" ? Convartor(tempearature,fahrenheitToCelsius) : tempearature
        const fahrenheit = scale === "c" ? Convartor(tempearature, celsiusToFahrenheit) : tempearature

        return(
            <div>
                <InputTempreature scale = "c" tempearature= {celsius} onchangeHandelar = {this.onChangeHandelar} /> 
                <InputTempreature scale = "f" tempearature= {fahrenheit} onchangeHandelar = {this.onChangeHandelar} />
                <BoilingVerdict celsius={tempearature} />
            </div>
        )
    }
}

export default Calculator