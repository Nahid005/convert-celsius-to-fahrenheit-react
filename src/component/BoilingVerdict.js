function BoilingVerdict ({celsius}) {

    console.log(celsius)
    if(celsius > 100) {
        return <p> the Water would boil. </p>
    }
    return <p> the water would not boil. </p>
} 

export default BoilingVerdict