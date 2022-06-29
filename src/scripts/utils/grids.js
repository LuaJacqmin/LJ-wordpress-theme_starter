/* this function display a visual grid, when you press G on the keyboard */
/* cette fonction affiche une grille verticale lorsque vous appuyez sur G */

//you can delete this file
//creation et insertion de la grille dans chaque page html
const createdGrid = document.createElement('div');
createdGrid.innerHTML = `
<ul class="grid__desk">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
<ul class="grid__tablet">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
<ul class="grid__mobile">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>`
createdGrid.classList.add('grid')
createdGrid.classList.add('invisible')
createdGrid.id = "grid"

document.body.appendChild(createdGrid)

//function display de la grille
const grid = document.querySelector('#grid');

window.addEventListener('keydown', e =>{
    if(e.key == "g"){
        grid.classList.toggle('invisible')
    }
})
