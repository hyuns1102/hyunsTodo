
1. 
// const title = document.querySelector("#title");

// function handleReszie(){
//     console.log("I have been resized")
// }
// window.addEventListener("resize",handleReszie);
// //handleResize() 와 handleResize 의 차이가 있다. 
// // ()는 무조건으로 함수를 부르는 것이고
// // ()없는 것은 이벤트가 생길 때 함수를 호출한다.

2.
// const title = document.querySelector("#title");

// function handleClick(){
//     title.style.color =  "blue";
// }
// title.addEventListener("click", handleClick);
//handleResize() 와 handleResize 의 차이가 있다. 
// ()는 무조건으로 함수를 부르는 것이고
// ()없는 것은 이벤트가 생길 때 함수를 호출한다.

3.
// const age = prompt("how old are you");

// console.log(age);

4.
// event handle 하면서 색깔바꾸는 것
// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";
 
// function handleClick(){
//     const currentColor = title.style.color;
//     if (currentColor == BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }
//     else{
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("mouseenter", handleClick);
// }

// init();

5.   // 클릭시 class를 toggle 하는 방법과 원리
// const title = document.querySelector("#title");

// const CLICKED_CLASS = "click";

// function handleClick(){
//     title.classList.toggle(CLICKED_CLASS);
//     // const hasClass = title.classList.contains(CLICKED_CLASS)
//     // if (!hasClass){
//     //     title.classList.add(CLICKED_CLASS);
//     // }
//     // else{
//     //     title.classList.remove(CLICKED_CLASS);
//     // }
// }

// function init(){
//     title.addEventListener("click", handleClick);
// }
// init();