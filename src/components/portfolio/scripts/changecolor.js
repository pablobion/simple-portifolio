function changecolor(){
     const min = 0
     const max = 10
     const color = Math.floor(Math.random() * (max + max - min)) + min
     

     switch (color) {
          case 1:
               return 'rgb(206, 154, 34)'
          case 2:
               return 'rgb(255, 219, 83)'
          case 3:
               return 'rgb(143, 237, 148)'
          case 4:
               return 'rgb(146, 226, 235)'
          case 5:
               return '#00bfff'
          case 6:
               return 'rgb(48, 120, 231)'
          case 7:
               return 'rgb(160, 80, 201)'
          case 8:
               return 'rgb(241, 144, 161)'
          case 9:
               return 'rgb(239, 143, 241)'
          case 10:
               return 'rgb(231, 90, 90)'
          default:
               return changecolor()
     }


}


function changecolorButtonHeader(){
     const color = Math.floor(Math.random() * (1 + 1 - 0)) + 0
          if(color === 0) return '#428e91'
          if(color === 1) return '#d8517e'  
}


export {changecolor, changecolorButtonHeader}