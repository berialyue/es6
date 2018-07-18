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

// var add = (a,b=1) => {
//   console.log('berialyue');
//   return a+b
// }
// console.log(add(3,5))

// let json = {
//   'a' : 'berialyue',
//   'b' : 'yueduming'
// }

// function fun({a,b='web'}){
//   console.log(a,b)
// }
// fun(json)

// let arr=['berialyue','yueduming','berial']
// function fun1(a,b,c){
//   console.log(a,b,c)
// }

// fun1(...arr)

// let obj = {
//   a:'berialyue',
//   b:'yueduming'
// }

// console.log('a' in obj)
// console.log('c' in obj)

// let arr1=['',,,];
// console.log(0 in arr1)
// console.log(2 in arr1)

// //数组遍历
// let arr2=['berialyue','yueduming','berial']
// arr2.forEach((val,index)=>console.log(index,val))
// arr2.filter(x=>console.log(x))
// arr2.some(x => console.log(x))
// arr2.map(x=>console.log(x))
// console.log(arr.map(x=>'web'))
// console.log(arr2)

// console.log(arr2.toString())
// console.log(arr.join(' | '))
// console.log(arr.join('-'))

// let name = 'berialyue';
// let skill = "ko"

// let obj = {
//   name,
//   skill
// }
// console.log(obj)

// let key = "skill";
// var obj1 = {
//  [key] :'web',
// }
// console.log(obj1)

// let obj2 = {
//   add: (a,b) => a+b
// }
// console.log(obj2.add(1,2))

// let obj3 = {name:'berial'}
// let obj4 = {name:'berial'}

// console.log(obj3.name === obj4.name)
// console.log(Object.is(obj3.name, obj4.name))

// console.log(+0 === -0)
// console.log(NaN === NaN)

// console.log(Object.is(+0,-0))
// console.log(Object.is(NaN,NaN ))

// let a = {a: 'berialyue'}
// let b = {b: 'yueduming'}
// let c = {c: 'berial'}

// let d = Object.assign(a,b,c)

// console.log(d)

// let a = new String
// let b = new Number
// let c = new Boolean
// let d = new Array
// let e = new Object

// let f = Symbol()
// console.log(typeof(f))

// let berial = Symbol('berialyue')
// console.log(berial)
// console.log(berial.toString())

// let aaa = Symbol()
// let obj = {
//   [aaa] : 'berialyue'
// }

// console.log(obj[aaa])
// obj[aaa] = 'web'
// console.log(obj[aaa])

// let obj1 = {
//   name: 'berialyue',
//   skill: 'ko',
// }
// let age = Symbol()
// obj1[age] = 20
// console.log(obj1)

// for(let item in obj1){
//   console.log(obj1[item])
// }
// console.log(obj1[age])

// let setArr = new Set(['berialyue','yueduming','berial','berialyue'])
// console.log(setArr)

// setArr.add('abc')
// console.log(setArr)

// setArr.delete('berial')
// console.log(setArr)
// console.log(setArr.has('berialyue'))
// console.log(setArr.has('berial'))

// // setArr.clear()
// for(let item of setArr){
//   console.log(item)
// }
// console.log(setArr.size)

// setArr.forEach((value) => console.log(value))

// let weakObj = new WeakSet()
// let obj = {
//   a:'berialyue',
//   b:'yueduming'
// }
// weakObj.add(obj)
// console.log(weakObj)
// let obj1 = obj;
// weakObj.add(obj1)
// console.log(weakObj)

// let json = {
//   name:'berialyue',
//   skill: 'web'
// }
// console.log(json.name)

// let map = new Map()
// map.set(json,'i am')
// console.log(map)
// map.set('js',json)
// console.log(map)

// console.log(map.get(json))
// console.log(map.get('js'))

// // console.log(map.delete(json))
// // console.log(map)

// console.log(map.size)

// console.log(map.has(json))

// let obj = {
//   add: function(val){
//     return val+100
//   },
//   name: 'i am yueduming'
// }
// // console.log(obj.add(100))
// // console.log(obj.name)

// let pro = new Proxy({
//   add: function(val){
//     return val+100
//   },
//   name: 'i am berialyue'
// },{
//   get: function(target,key,property){
//     console.log('come in get');
//     return target[key];
//   },
//   set: function(target, key, value, receiver){
//     console.log(`setting ${key} = ${value}`)
//     return target[key] = value
//   }
// })

// console.log(pro.name)
// pro.name="berial"
// console.log(pro.name)

// let target = function(){
//   return 'i am berialyue'
// }

// let handler = {
//   apply(target,ctx,args){
//     console.log('do apply')
//     return Reflect.apply(...arguments)
//   }
// }

// let pro1 = new Proxy(target,handler)

// console.log(pro1())

// let state = 1

// function step1(resolve,reject){
//   console.log('1.开始-洗菜做饭')
//   if(state == 1){
//     resolve('洗菜做饭-完成')
//   }else{
//     reject('洗菜做饭-出错')
//   }
// }

// function step2(resolve,reject){
//   console.log('2.开始-坐下来吃饭')
//   state = 0
//   if(state == 1){
//     resolve('坐下来吃饭-完成')
//   }else{
//     reject('坐下来吃饭-出错')
//   }
// }

// function step3(resolve,reject){
//   console.log('3.开始-收拾桌子洗碗')
//   if(state == 1){
//     resolve('收拾桌子洗碗-完成')
//   }else{
//     reject('收拾桌子洗碗-出错')
//   }
// }

// new Promise(step1).then(function(val){
//   console.log(val);
//   return new Promise(step2)
// }).then(
//   function(val){
//     console.log(val);
//     return new Promise(step3)
//   }).then(function(val){
//     console.log(val)})

// class Coder{
//   name(val) {
//     console.log(val)
//     return val
//   }
//   skill(val) {
//     console.log(this.name('berialyue') + ':' + 'Skill ' + val)
//   }
//   constructor(a,b){
//     this.a=a
//     this.b=b
//   }
//   add(){
//     return this.a+this.b
//   }
// }

// let berial = new Coder(1,2)

// console.log(berial.add('web'))

// class htmler extends Coder{

// }

// let pang = new htmler

// pang.name('yue')

import { name } from './test'

console.log(name)