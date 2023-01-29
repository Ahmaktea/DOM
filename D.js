// 1.
// let elem = document.querySelector("#elem")
// let p = document.querySelector("p")
// elem.addEventListener("blur",func)
// function func(){
//     p.textContent = elem.value
// }

// 2.
// let in1 = document.querySelector(".in1")
// let in2 = document.querySelector(".in2")
// let in3 = document.querySelector(".in3")
// let p = document.querySelector("p")
// let button = document.querySelector("#button")
// button.addEventListener("click",func)
// function func(){
//     p.textContent = +in1.value + +in2.value + +in3.value
// }

// 3.
// let in1 = document.querySelector("#in1")
// in1.addEventListener("blur",func)
// function func(){
//     let a = 0
//     let b = in1.value;
//     let arr = [];
//     arr.push(b);
//     arr = b.split("");
//     for(let i = 0; i<arr.length; i++){
//      a += +arr[i]
// }
//     in1.value = a
// }

// 4.
// let in1 = document.querySelector("#in1")
// in1.addEventListener("blur",func)
// function func(){
//     let a = 0
//     let b = in1.value;
//     let arr = [];
//     arr.push(b);
//     arr = b.split(",");
//     for(let i = 0; i<arr.length; i++){
//      a += +arr[i]
//      b = a / arr.length  
// }
//     in1.value = b 
// }

// 5.
// let in1 = document.querySelector(".in1")
// let in2 = document.querySelector(".in2")
// let in3 = document.querySelector(".in3")
// let in4 = document.querySelector(".in4")
// elem1.addEventListener("blur",func)
// function func(){
//     let a = in1.value;
//     let arr = [];
//     arr.push(a);
//     arr = a.split(" ");
//     in2.value = arr[0]
//     in3.value = arr[1]
//     in4.value = arr[2]
// }

// 6.
// let in1 = document.querySelector(".in1")
// let in2 = document.querySelector(".in2")
// let in3 = document.querySelector(".in3")
// let in4 = document.querySelector(".in4")
// elem1.addEventListener("blur",func)
// function func(){
//     let a = in1.value
//     let arr = []
//     arr.push(a)
//     arr = a.split(" ")
//    for(let i = 0; i<arr.length; i++){
//     arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1)
// }
//     in1.value = arr.join(" ")
// }

// 7.
// let in1 = document.querySelector(".in1")
// in1.addEventListener("blur",func)
// function func(){
//    let a = 0
//    let b = in1.value
//    let arr = []
//    arr.push(b)
//    arr = b.split(" ")
//    for(let i = 0; i<arr.length; i++){
//     a++
//    }
//    in1.value = a

// }

// 8.
// let in1 = document.querySelector(".in1")
// in1.addEventListener("blur",func)
// function func(){
//    let a = 0
//    let b = in1.value
//    let arr = []
//    arr.push(b)
//    arr = b.split(".")
//    in1.value = arr.reverse().join("-") + "."

// }

// 9.
// let in1 = document.querySelector(".in1")
// let button = document.querySelector("#button")
// button.addEventListener("click",func)
// function func(){
//    let b = in1.value
//    let arr1 = []
//    arr1.push(b)
//    arr1 = b.split("")
//    let arr2 = []
//    arr2.push(b)
//    arr2 = b.split("")
//    arr2 = arr2.reverse()
//    if(arr1[0] == arr2[0]){
//       in1.value = 'yes'
//    }
//    else{
//       in1.value = 'no'
//    }
// console.log(arr1,arr2)
// }

// .10
// let in1 = document.querySelector(".in1")
// in1.addEventListener("blur",func)
// function func(){
//    let b = in1.value
//    let arr = []
//    arr.push(b)
//    arr = b.split("")
//    for(let i = 0; i<arr.length;i++){
//    if(3 == arr[i]){
//       in1.value = 'yes'
//    }
//    else{
//       in1.value = 'no'
//    }
// }
// console.log(arr)
// }

// .11
// let p = document.querySelectorAll("p")
// let button = document.querySelector('#button')
// button.addEventListener("click",func)
// function func(){
//    for(let i = 0; i<p.length;i++){
//     p[i].textContent= p[i].textContent + (i + 1)
// }
// }

// .12
// let s1 = document.querySelector(".s1")
// let s2 = document.querySelector(".s2")
// s1.addEventListener("mouseover", func)
//    function func(){
//       s1.textContent = s1.textContent + "("+s1.href+")"
//       s2.textContent = s2.textContent + "("+s2.href+")"
// }

// .13
// let a = document.querySelectorAll("a")
// func()
//    function func(){
//       for (let i = 0; i < a.length; i++)
//       if(a[i].href.indexOf("http://") == 0){
//          a[i].textContent = a[i].textContent + '&rarr;' + a[i].href
//       }
//       else{
//          a[i].textContent = a[i].textContent + a[i].href
//       } 
// }

// .14
// let in1 = document.querySelector('.in1')
// let in2 = document.querySelector('.in2')
// let in3 = document.querySelector('.in3')
// in1.addEventListener('click',func1)
// in2.addEventListener('click',func2)
// in3.addEventListener('click',func3)
// function func1(){
//     in1.textContent = in1.textContent ** 2;
  
// }
// function func2(){
//    in2.textContent = in2.textContent ** 2;
 
// }
// function func3(){
//    in3.textContent = in3.textContent ** 2;
 
// }

// .15
// let elem = document.querySelector("#elem")
// elem.addEventListener("blur", func)
// function func(){
//    let date = new Date(2016,12,31);
//    let day = date.getDay();
//    let days = ['воскресение','понедельник','вторник','среда','четверг','пятница','суббота']
//    elem.value = (days[day])

// }

// 16.
// let in1 = document.querySelector(".in1")
// let in2 = document.querySelector(".in2")
// let button1 = document.querySelector("#button1")
// let button2 = document.querySelector("#button2")
// button1.addEventListener("click", func1)
// button2.addEventListener("click", func2)
// function func1(){
//    in1.value++
// }
// function func2(){
//    let a = in2.value
//    if(a > 0){
//       in2.value--
//    }
// }

// 17.
// let in1 = document.querySelector(".in1")
// let p1 = document.querySelector("#p1")
// let p2 = document.querySelector("#p2")
// let p3 = document.querySelector("#p3")
// p1.addEventListener("click", func1)
// p2.addEventListener("click", func2)
// p3.addEventListener("click", func3)
// function func1(){
//    in1.value = +in1.value + 1
// }
// function func2(){
//     in1.value = +in1.value + 1
//  }
//  function func3(){
//     in1.value = +in1.value + 1
//  }

// 18.
// let elem = document.querySelectorAll("div")
// let button = document.querySelector("input")
// button.addEventListener('click',func)
// function func(){
//    for(let i = 0; i < elem.length ;i++){
//    elem[i].textContent = elem[i].textContent.slice(0,10) + "..."
//    }
// }

// 19.
// let elem = document.querySelector("input")
// elem.addEventListener("blur",func)
// function func(){
//   let a = +elem.value
//   if( a > 1  && a < 101){
//    elem.style.color = 'green'
//   }
//   else{
//    elem.style.color = 'red'
//   }
// }

// 20.
// let elem = document.querySelector("#elem")
// let button = document.querySelector("#button")
// button.addEventListener("click",func)
// function func(){
//   let a = ""
//   let b = "awodkaosk092u83urij9u8he8734tvbdushbzIug87f1r209i9jfgae987rq3vbouphgvbpia;scnjUVBYUdf  [[[pnfa iub"
//   for(let i = 0; i<8; i++){
//     a += b.charAt(Math.floor(Math.random() * b.length))
//   }
//   elem.value = a
// }

// 21.
// let elem = document.querySelector("#elem")
// let button = document.querySelector("#button")
// button.addEventListener("click",func)
// function func(){
//   let a = ""
//   let b = elem.value
//   for(let i = 0; i<b.length; i++){
//     a += b.charAt(Math.floor(Math.random() * b.length))
//   }
//   elem.value = a
// }

// 22.
// let elem = document.querySelector("#elem")
// let p = document.querySelector("#p")
// let button = document.querySelector("#button")
// button.addEventListener("click",func)
// function func(){
//   p.textContent = 5/9 * (elem.value - 32)
// }

// 23.
// let elem = document.querySelector("#elem")
// let p = document.querySelector("#p")
// let button = document.querySelector("#button")
// button.addEventListener("click",func)
// function func() {
//     let a = elem.value
//     for (let i = a - 1; i >= 1; i--) {
//       a= a * i; 
//     }
//     p.textContent = a
//   }

// 24.
// let in1 = document.querySelector(".in")
// let in2 = document.querySelector(".in")
// let in3 = document.querySelector(".in")
// let p = document.querySelector("#p")
// let button = document.querySelector("#button")
// button.addEventListener("click",func)
// function func(){
//  p.textContent = String(Math.sqrt(in1.value)) +" "+ String(Math.sqrt(in2.value))+" " + String(Math.sqrt(in3.value))

// }


  

