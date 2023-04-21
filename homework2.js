// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   } // без этой функции сортировка неправильно работала
// function Task1 (ar){
//     for (let i = 0; i < ar.length; i++){
//         ar[i]= ar[i]*ar[i]
//         }
//    // ar.forEach(element => element=element*element); почему-то не хочет работать
//     ar.sort(compareNumeric)
// }
// function Task2(str){
//     for (let i = 0; i < str.length; i++){
//   if (str[i].length<=8) {
//     str.splice(i,i)
// }
// }
// }
var ar = [5,2,4,1,6]
// console.log("initial array")
// console.log(ar)
// Task1(ar)
// console.log("sorted array of squares")
// console.log(ar)
// var str = ['letitgo!!!','ludmila','whenthesunshy','weshytogether','Mary1','sowell']
// console.log(str)
// Task2(str)
// console.log(str)
// function Task3(users){
//   let s = 0
//   for (let i = 0; i < users.length; i++){
//     s = s+ users[i].age
//   }
//   return s/(users.length)
// }

// const users = [
//   {
//       id:1,
//       age: 28,
//   },
//   {
//     id:2,
//     age: 14,
//   },
//   {
//     id:3,
//     age: 40,
//   },
//   {
//     id:4,
//     age: 35,
//   },
//   {
//     id:5,
//     age: 24,
//   },
// ]
// console.log(users)

// let sr = Task3(users)
// console.log(sr)
//Реализуйте функцию, которая принимает на вход массив и функцию-обработчик callback.
// Возвращает новый массив, к каждому элементу которого применена функция-обработчик.
function callback (){
  console.log(index)
  arrik = arrik * arrik
  console.log(arrik)
}

 function task4(ar, f) {
  ar.forEach(
    callback()
  )

}
task4(ar,callback)