let palavra = "";

function reverterString(string) {
  
  for(let i = string.length -1;i >= 0; i--){
    
     palavra += string[i];
  };

  return palavra;
}

console.log(reverterString("palavra"));