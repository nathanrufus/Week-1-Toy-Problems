function speedDetector(speed){
    if (speed <=70){
        console.log("Speed Ok");
    }else{ 
        //*fomula to create demerit points*//
        let newspeedPoints = (speed - 70)/5;
        if(newspeedPoints <=12) {
            console.log("Demerit Point" + newspeedPoints);
        }else{
            console.log("License suspended!!")
        }
    }
    return speed
    //return the speed of the vehicle where execution ends
}
console.log(speedDetector(80));