// const a = "berialyue"


// var i = 1;
// for(let i = 0;i<10;i++){
//   console.log(`循环体中${i}`)
// }

// console.log(`循环体外${i}`)

// let [a,[b,c],d] = [1,[3,4],5]
// let[foo='true']=['false']
// let{foo,boo} = {boo:'yueduming',foo:'berialyue'}
// let bar
// ({bar} = {bar:"123"})

// const [a,b,c,d,e,f] = 'berial'
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(foo+boo)
// console.log(bar)
// for(var i =0;i<5;i++){
//   (function(i){
//     setTimeout(function(){
//       console.log(i);
//     },1000*i)
//   })(i)
// }

// function es(...arg){
//   console.log(arg[0]);
//   console.log(arg[1]);
//   console.log(arg[2]);
//   console.log(arg[3]);
//   console.log(arg[4]);
// }

// es(1,2,3)

// let arr1= ['www','berialyue','com'];
// // let arr2 = arr1;
// let arr2 = [...arr1]
// console.log(arr2);
// arr2.push("berialyue")
// console.log(arr1)
// console.log(arr2)

// function es(first, ...arg) {
//   console.log(arg.length);
//   console.log(arg);
//   for(let val of arg){
//     console.log(val);
//   }
// }

// es(0,1,2,3,4,5,6,7,8)

// let a = 'berialyue1111';
// let b = `yueduming${a}`;
// let c =1;
// let d = 2;
// let result = `${c+d}`
// document.write(b)
// document.write(result)

// let a = 'berialyue'

// let b = 'yuedumingyuedumingberialyueyuedumingberialyue'

// document.write(b.endsWith(a))

// document.write('berialyue | '.repeat(9))

// 5let binary = 0B010101;

// console.log(binary)

// let octal = 0o666;
// console.log(octal)

// let a = 11/4;
// console.log(Number.isFinite(a))
// console.log(Number.isFinite('berialyue'))
// console.log(Number.isFinite(NaN))
// console.log(Number.isFinite(undefined))
// console.log(Number.isFinite(null))

// console.log(Number.isNaN(NaN))
// console.log(Number.isNaN(11))

// console.log(Number.isInteger(11));
// console.log(Number.isInteger(11/4));
// console.log(Number.isInteger('a'));
// console.log(Number.isInteger(undefined));

// console.log(Number.parseInt(11/4));
// console.log(Number.parseFloat(11/4).toFixed(4));

// let aaa = Math.pow(2,53)+1;
// console.log(aaa)

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.isSafeInteger(aaa))

// let json = {
//   '0': 'berialyue',
//   '1': 'yueduming',
//   length: 2
// }

// let arr1 = Array.from(json)
// console.log(arr1)
// let arr2 = Array.of(3,4,5,6)
// console.log(arr2)

// let arr = [1,2,3,4,5,6,7,8,9]
// let b = arr.find(function(value, index, arr){
//   return value > 5
// })
// console.log(b)

// let arr = ['berialyue', 'yueduming', 'berial']
// console.log(arr)
// arr.fill('web',2,3)
// console.log(arr)
// for(let [index,item] of arr.entries()){
//   console.log(`${index} : ${item}`)
// }

// let arr1 = ['berialyue', 'yueduming', 'berial']
// let list = arr1.entries()
// console.log(list.next().value)
// console.log('------------------')
// console.log(list.next().value)
// console.log('******************')
// console.log(list.next().value)
// console.log('==================')

// function add(a,b=1){
//   if(a == 0) {
//     throw new Error('A is error')
//   }
//   return a+b;
// }
// console.log(add(2,3))
// console.log(add(1,2))
// console.log(add(0))
// console.log(add.length)

var add = (a,b=1) => {
  console.log('berialyue');
  return a+b
}
console.log(add(3,5))