function fibonacci(numero){
  let f = [];
  f[0] = 0;
  f[1] = 1;

  for(let i = 2; i < numero; i++){
    f[i] = f[i-2] + f[i-1]
  }
  return f
}

function achaNoFibonacci(numero){
  let arr = fibonacci(numero+10);
  let resp = arr.some(i => i === numero);
  return resp == true ? "O número informado pertence a sequência de fibonacci" :
   "O número informado não pertence a sequência de fibonacci";
}

let numero = 13;


console.log(achaNoFibonacci(numero))