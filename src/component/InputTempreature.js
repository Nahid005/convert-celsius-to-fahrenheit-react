import React from 'react'

const scaleName = {
    c: 'celsius',
    f: 'fahrenheit',
}

class InputTempreature extends React.Component{
    
    render() {
        const {onchangeHandelar, tempearature , scale } = this.props
        return(
            <fieldset>
                <legend> input {scaleName[scale]} </legend>
                <input type ='text' value={tempearature}  onChange={onchangeHandelar}/>
            </fieldset>
        )
    }
}

export default InputTempreature