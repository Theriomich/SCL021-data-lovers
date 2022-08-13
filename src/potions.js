import data from './data/harrypotter/data.js';
import { playSound } from './music.js';

document.addEventListener('click', playSound);

const allPotions = data.potions

allPotions.forEach((potion) => {    
    document.getElementById("potionsDiv").innerHTML+=
    `<table class="allTables"><tr><td><strong>Nombre</strong>:${potion.name}</td><br> 
     <tr><td><strong>Descripción</strong>:${potion.description}</tr></td>
     </table>`
   
  });


 