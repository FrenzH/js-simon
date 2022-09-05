console.log('js ok!')
const PCnumbersContainer = document.getElementById('PC-numbers-container')

function getRandomNumber(min,max){
    const range = max - min; 
    const random = Math.floor(Math.random()*range)  
    const result = min + random;
    return result;
}
const arr =[]
const arr1=[]
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


setTimeout(myfun,5*1000)
function myfun(){
    document.getElementById('PC-numbers-container').style.display='none';
    alert('now i\'ts you turn');
    alert('insert same numbers')
    while(arr1.length<5){
    
    }
}



