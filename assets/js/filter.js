//portfolios button on click has change
let buttons = [...document.body.querySelectorAll('.filter-menu-button button')];
buttons.forEach(Button => Button.addEventListener('click', e => setActive(Button)));

const setActive = Button => {
    [...Button.parentElement.children].forEach(sib => sib.classList.remove('active'))
    Button.classList.add('active');
    let id = Button.id;
    Showgriditem(id);
    };

let Grids = document.querySelectorAll('.grid-item');

function Showgriditem(e){
    Grids.forEach(grid =>{

        grid.classList.add("hide");

        if(e == grid.dataset.filter){

            grid.classList.remove("hide");

        }else if(e === 'all'){

            grid.classList.remove("hide"); 
        }
    })
}
