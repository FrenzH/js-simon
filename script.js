console.log('js ok!')
const PCnumbersContainer = document.getElementById('PC-numbers-container')

function getRandomNumber(min,max){
    const range = max - min; 
    const random = Math.floor(Math.random()*range)  
    const result = min + random;
    return result;
}
const arr =[]
while(arr.length<5){
    let SimonNumb =getRandomNumber(1,50);
    arr.push(SimonNumb);
}


for (let i=0;i<arr.length;i++){
    const PCnumbers =document.createElement('div');
    PCnumbers.innerHTML = arr[i]
    PCnumbersContainer.append( PCnumbers)
    PCnumbers.classList.add('PC-numbers')
    


}
console.log(arr)