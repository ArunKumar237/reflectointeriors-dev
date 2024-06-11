function menuToggle(){
    menu = document.querySelector("#side-menu");
    if (menu.getAttribute("class") === "translate-x-0 absolute transition-all bg-black top-0 pt-20 right-0 w-20 flex flex-col text-white items-center py-5 gap-4 rounded-bl-lg border border-1 border-t-black border-r-black"){
        menu.setAttribute("class","translate-x-20 absolute transition-all bg-black top-0 pt-20 right-0 w-20 flex flex-col text-white items-center py-5 gap-4 rounded-bl-lg border border-1 border-t-black border-r-black");
    } else {
        menu.setAttribute("class","translate-x-0 absolute transition-all bg-black top-0 pt-20 right-0 w-20 flex flex-col text-white items-center py-5 gap-4 rounded-bl-lg border border-1 border-t-black border-r-black");
    };
}

function rotate(){
  ham = document.querySelector(".hamburger");
  if (ham.getAttribute("class") === "hamburger ease-in-out duration-300"){
    ham.setAttribute("class","hamburger rotate-180 ease-in-out duration-300");
  }else{
    ham.setAttribute("class","hamburger ease-in-out duration-300");
  };
}

const scroll = new LocomotiveScroll({
    el: document.querySelector('#my-scrollbar'),
    smooth: true
});
