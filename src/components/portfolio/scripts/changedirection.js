let numberpost = 0

function changedirection(){
     numberpost += 1

     let imparpar = numberpost%2


     if (imparpar === 0 )return 'row-reverse' 
     if (imparpar === 1 )return 'row' 

}

export {changedirection}