const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('results');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML =`Please give a valid height ${height} `;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML =`Please give a valid weight ${weight} `;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML =`<span>Result : ${bmi}</span>`;

        if(bmi < 18.6){
            const underWeight = document.querySelector('.under')
            underWeight.style.backgroundColor = "blue"
        }
        else if(bmi > 18.6 && bmi< 24.9){
            const normalWeight = document.querySelector('.normal')
            normalWeight.style.backgroundColor = "yellow"
        }
        else{
            const overWeight = document.querySelector('.over')
           overWeight.style.backgroundColor = "red"
           overWeight.style.width = "50%"
        }
    }



})
