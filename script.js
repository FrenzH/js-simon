console.log('js ok!')
const PCnumbersContainer = document.getElementById('PC-numbers-container')
const btn=document.getElementById('btn')



btn.addEventListener('click', myfun2)




function myfun2(){
    PCnumbersContainer.innerHTML='';
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
    setTimeout(myfun,30*1000)
    setTimeout(myfun1,35*1000)

}








function getRandomNumber(min,max){
    const range = max - min; 
    const random = Math.floor(Math.random()*range)  
    const result = min + random;
    return result;
}
const arr =[]
const arr1=[]




function myfun(){
    document.getElementById('PC-numbers-container').style.display='none';

   
}

let counter =0;
const arr2=[];

function myfun1(){
    while(arr1.length<5){
        let a = parseInt(prompt('enter a number'))
        arr1.push(a)
        let i= 0;
        
        do {
            
            if(a===arr[i]){
                counter++;
                console.log(counter)
                console.log(a)
                arr2.push(a)
            }
            i++;
         } while (i<arr.length);
      
    }
    
  
      console.log('quanti numeri indov',counter)  
      console.log('quali num indov',arr2)
        
    
     
 }

