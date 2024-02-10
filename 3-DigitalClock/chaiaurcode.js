const clock = document.querySelector('#clock')

setInterval(()=>{
  const date = new Date();
  const currentTime = date.toLocaleTimeString();

  clock.innerHTML = currentTime
},1000)