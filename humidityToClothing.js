// Take a variable with the **temperature** and another variable with the **relative humidity*** and output a **clothing suggestion**.
// high humid & high temp = rain
// high humid & low temp = snow
// low humid & high temp = hot
// low humid & low temp = cold
//lower than 4 degrees is cold, higher than 4 degrees is hot
//lower than 60% is low humidity, higher than 60% is high humidity

function suggestClothing(humidity, temperature){
    let clothing;
    if(humidity >60 && temperature >4){
        clothing = "rain jacket";
    }else if (humidity >60 && temperature <4){
        clothing = "winter jacket";
    }else if (humidity <60 && temperature <4){
        clothing = "warm jacket";
    }else if (humidity <60 && temperature >4){
        clothing = "light sweater";
    }
    return clothing; 
}

    export {suggestClothing}