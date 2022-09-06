console.log('js ok!')
const PCnumbersContainer = document.getElementById('PC-numbers-container')
const btn=document.getElementById('btn')
document.getElementById('result-container').style.display='none';


btn.addEventListener('click', myfun2)

function myfun2(){
    PCnumbersContainer.innerHTML='';
    while(arr.length<5){

        
        let SimonNumb =getRandomNumber(1,50);

        
        if(!arr.includes(SimonNumb)){
            arr.push(SimonNumb);

        }
        
    }
    
    
    for (let i=0;i<arr.length;i++){
        const PCnumbers =document.createElement('div');
        PCnumbers.innerHTML = arr[i]
        PCnumbersContainer.append( PCnumbers)
        PCnumbers.classList.add('PC-numbers')
        
    
    
    }
    console.log(arr)
    setTimeout(myfun,5*1000)
    setTimeout(myfun1,6*1000)
    setTimeout(myfun3,7*1000)
    setTimeout(function() {
        window.location.reload()
      }, 20*1000)

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
       
        if(!isNaN(a) && !arr1.includes(a)){
            
            
                arr1.push(a)
                if(arr.includes(a)){
                    counter++;
                    
                    arr2.push(a)
                }
            
             }   

            

        }
    
        
      console.log('quanti numeri indov',counter)  
      console.log('quali num indov',arr2)
        
    
     
 }

function myfun3(){
    document.getElementById('result-container').style.display='flex';
    let z =document.getElementById('counter');
    let t=document.getElementById('correct-number')
    z.innerHTML = counter;
    t.innerHTML = arr2 ;
    const winOrnot =document.getElementById('WinOrNot');
    if(counter===5){
        winOrnot.innerHTML='WIN'

    }
    else{
        winOrnot.innerHTML='LOOSE'
    
    }
}