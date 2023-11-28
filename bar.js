function calculateAge(){
    let elementAge = document.getElementById('age')
    let elementAllow = document.getElementById('allowAlcohol')
    let elementAcces = document.getElementById('access')
    let elementPrice = document.getElementById('price')

    let age = elementAge.value

    if(age >= 18){
        elementAllow.textContent = 'Puedes beber alcohol'
    }
    else if(age < 18){
        elementAllow.textContent = 'Prohibida la venta de alcohol a menores'
    }
    
    if(age >= 18 && age < 30){
        elementAcces.textContent = 'Puedes pasar' 
    }
    else{
        elementAcces.textContent= 'No tienes permitida la entrada'
        elementPrice.textContent = 'No tienes permitida la entrada'
    }

    if(age == 20 || age == 25){
        elementPrice.textContent = 'La entrada para ti es gratis'
    }
    else if(age != 20 && age != 25 && age >= 18 && age < 30 ){
        elementPrice.textContent = 'Costo de entrada  = $50 USD'
    }
}