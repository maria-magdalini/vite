window.onload = function (){
    // const [isShowing, setIsShowing] = useState(false);
    let windowHeight = window.innerHeight || 
    document.documentElement.clientHeight || document.body.clientHeight;

    function slideMenu(oldClass, newClass, element){
        element.classList.remove(oldClass);
        element.classList.add(newClass)
    }
    
    const menu = document.getElementById('menuCnt')
    const burger = document.getElementById('burger')
    burger.addEventListener('click', ()=>{

        (!menu.dataset.toogled) ?  (slideMenu('left-[-100%]','left-0', menu), menu.dataset.toogled = 'true' ) 
            :  (slideMenu('left-0', 'left-[-100%]', menu), menu.dataset.toogled = '');

       
    })
    console.log(burger, menu)
}
