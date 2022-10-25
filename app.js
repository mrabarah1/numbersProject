const numbers =[...document.querySelectorAll(".number")];


const updateCount = (el) => {
 // console.log(el);
 const value = parseInt(el.dataset.value);
 const increment = Math.ceil(value / 1000);
 let initialValue = 0;
 
 
 const increaseCount = setInterval(() => {
  initialValue += increment;
  

  if(initialValue > value) {
   el.textContent = `${value}+`;
   clearInterval(increaseCount);
   return;
  }

  el.textContent = `${initialValue}+`;
 }, 1);
};

// setInterval() takes two things, take a  callback function and how long we are going to run

numbers.forEach((number) => {
 updateCount(number);
});
