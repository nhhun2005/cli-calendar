function generateTime(num){
    //1234/100 => 12 khi mathfloor
    //1234%100 => 34
    if(num<0){
        return undefined;
    }
    const length = num.toString().length;
    if(length>4||length<=0){
        return undefined;
    }

    

    const hour = Math.floor(num/100);
    if(hour>23||hour<0){
        return undefined;
    }
    const minute = num%100;
    if(minute<0||minute>59){
        return undefined;
    }
    const formated = hour.toString().padStart(2,"0") + ":" + minute.toString().padStart(2,"0");
    return [num,formated];
    


}

function addTime(num, duration){
    if(num<0){
        return undefined;
    }
    const length = num.toString().length;
    if(length>4||length<=0){
        return undefined;
    }

    let hour = Math.floor((num)/100);
    let minute = num%100;

    minute+=duration;

    hour +=Math.floor(minute/60);
    minute = minute%60;

    hour%=24;

    return generateTime(hour*100+minute);


}



const Times = {

}
export {generateTime, addTime};