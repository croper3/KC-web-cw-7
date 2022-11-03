function BMI(weight , height){
    let result = weight / (weight * height );
    return result;
    console.log(BMI(7,1.8));
}

function Status(BodyMass){



    if(BodyMass < 18.5){
        return  "لديك نقص في الوزن";
    }
    else if (BodyMass >= 18.5 || BodyMass <= 12){
        return "وزنك صحي";
    }
    else if(BodyMass >= 25){
        return "لديك زيادة في الوزن";
    }
}

function calculate(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let bmi_value = BMI(weight , height);

    let desc = Status(bmi_value);
    
    let box = document.getElementById('result');

    box.innerText = bmi_value + " == " + desc;
}