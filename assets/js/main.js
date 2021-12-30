/*
    // 1 ===  On Window Onload
        // 1-1 === Preloader Div
    // 2 === Genarile .
        // 2-1 === Function Remove All Active For Elments
        // 2-2 === Scroll Top Button
    // 3 === Mobile Menu 
        // 3-1 === Open Div Next Element Sibling && Add Class Active
        // 3-2 === Menu Mobile Toggle Open && Close
    // 4 === Web Menu Open && Close Div Cheldren .
        // 4-1 === Open && Close Div Cheldren
*/


// 1 ===  On Window Onload
    // 1-1 === Preloader Div

    let preloader = document.getElementById('preloader');
    window.onload = function(){
    setTimeout(function(){
        preloader.style.display="none";
    },0)
    }


// 2 === Genarile  
    // 2-1 === Function Remove All Active For Elments
    function handelactive(e){
        e.target.parentElement.querySelectorAll('.menu-item-has-children').forEach(elment=>{
            elment.classList.remove('activer');
            elment.nextElementSibling.style.maxHeight = null;
        })
        e.target.classList.toggle('activer');
    };
    
    // 2-2 === Scroll Top Button

    let Buttonscroll = document.querySelector('.scrollToTop'),
        Headernav = document.querySelector('.header-layout');

    window.onscroll = function(){
        if(window.pageYOffset >= 400){
            Buttonscroll.classList.add('show'),
            Headernav.classList.add('headerpostion');
        }else{
            Buttonscroll.classList.remove('show'),
            Headernav.classList.remove('headerpostion');
        }
    }

    Buttonscroll.onclick = function () {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        });
    }
// 3 === Mobile Menu
    // 3-1 === Open Div Next Element Sibling && Add Class Active

    document.addEventListener("click",function(e){
        if(e.target.classList.contains("menu-children") ||
        e.target.classList.contains("childrenitems")){
                var divDatamenue = e.target.nextElementSibling;
                if(divDatamenue.style.maxHeight){
                    divDatamenue.style.maxHeight = null;
                    e.target.classList.remove('activer');
                }else{
                    handelactive(e)
                    divDatamenue.style.maxHeight = divDatamenue.scrollHeight + 30 + "px";
                }
        }
    })

    let childrenitems =document.querySelectorAll('.childrenitems');
    childrenitems.forEach(children =>{
        let childrendiv = children.nextElementSibling;
        children.onclick = function(){
            console.log(childrendiv)
        }
    })







    // 3-2 === Menu Mobile Toggle Open && Close

    let buttonmenu = document.querySelector('.vs-menu-toggle'),
        menumobile = document.querySelector('.vs-menu-wrapper'),
        closediv = document.querySelector('.vs-menu-mobile');
        // Open Menu Mobile 
        buttonmenu.addEventListener('click',function(){
            menumobile.classList.add('vs-body-visible');
        })
        // Close Menu Mobile 
        closediv.addEventListener('click',function(){
            menumobile.classList.remove('vs-body-visible');
        })


// 4 === Web Menu Open && Close Div Cheldren .
        // 4-1 === Open && Close Div Cheldren
    let Navcategories = document.getElementById('item-cheldren'),
        Divcategories = document.querySelector('.item-cheldren');
        
        Navcategories.onclick = function(){
            this.classList.toggle('active');
            Divcategories.classList.toggle('showdisplay');
        }


        // 4-1-1 === Open && Close Div menu children
    let Childrendiv = document.querySelectorAll('.children-lest');

    Childrendiv.forEach(item => {
        item.onmouseenter = function(){
            item.classList.add("showchildren")
        }
        item.onmouseleave = function(){
            item.classList.remove("showchildren")
        }
    })


    document.addEventListener('click',(e)=>{
        if(e.target !== Navcategories){
            if(Divcategories.classList.contains('showdisplay') && Navcategories.classList.contains('active')){
                Divcategories.classList.remove('showdisplay');
                Navcategories.classList.remove('active')
            }
        }
    })

// Quent Minus && Plus Item

let Minusbutton = document.querySelectorAll('.quantity-minus'),
    Plusbutton = document.querySelectorAll('.quantity-plus');
    
    Minusbutton.forEach( item =>{
        item.onclick = function(){

        let inputnember = item.nextElementSibling;
            valueinput = parseInt(inputnember.value);
            valueinput -= 1;

            if(valueinput == 0){
                inputnember.setAttribute('value',1)
            }else{
                inputnember.setAttribute('value',valueinput)
            }

        }
    })

    Plusbutton.forEach( item =>{
        item.onclick = function(){

        let inputnember = item.previousElementSibling;
            valueinput = parseInt(inputnember.value);
            valueinput += 1;
            inputnember.setAttribute('value',valueinput)
        }
    })

 