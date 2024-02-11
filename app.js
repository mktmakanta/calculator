( function (){

let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".calBtn");
let clear = document.querySelector(".clear");
let equal = document.querySelector('.equal');
let changeTheme = document.querySelector('.theme');
let btnContainer = document.querySelector('.buttons');
let del = document.querySelector('.delete');

//changing the theme

changeTheme.addEventListener('click', function (e){
  changeTheme.parentNode.classList.toggle('changed')
  if ( changeTheme.parentNode.classList.contains('changed')){
        document.body.style.background = '#001427'
        changeTheme.style.background = '#fff'
        screen.style.background = '#001427'
          btnContainer.style.background = '#001427'
          screen.style.color = '#fff'
          // changeTheme.textContent = "light_mode"

      
      }else{
        document.body.style.background = '#0093E9'
        changeTheme.style.background = '#001427'
        screen.style.color = '#000'
        screen.style.background = '#fff'
        btnContainer.style.background = '#fff'
      }
      
    })

screen.value = "";

clear.addEventListener("click", (e) =>{
  screen.value = "";
});

del.addEventListener('click', (e) => {

  let newValue = screen.value.slice(0, -1);
    screen.value = newValue;
} )

buttons.forEach((btn) =>{
  btn.addEventListener("click", (e) =>{
    screen.value += btn.textContent
  })
})

equal.addEventListener("click", (e) => {
  let result = eval(screen.value);
  screen.value = result;
})




})();