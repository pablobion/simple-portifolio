let numberpost = 0

function changeside(){
     numberpost += 1

     let imparpar = numberpost%4


     if (imparpar === 0 )return 'flex-start' 
     if (imparpar === 1 )return 'flex-end' 

}

export {changeside}