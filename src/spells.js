import data from './data/harrypotter/data.js';
import { playSound } from './music.js';

document.addEventListener('click', playSound);

const allSpells = data.spells


  allSpells.forEach((spell) => {    
    document.getElementById("spellsDiv").innerHTML+=
    `<table class="allTables"><tr><td><strong>Nombre</strong>:${spell.name}</td><br> 
     <tr><td><strong>Otro Nombre</strong>:${spell.other_name}</tr></td>
     <tr><td><strong>Pronunciacion</strong>:${spell.pronunciation}</td></tr>
      <tr><td><strong>Tipo</strong>:${spell.spell_type}</td></tr>
       <tr><td><strong>Descripcion</strong>:${spell.description}</td></tr>
       <tr><td><strong>Mencion</strong>:${spell.mention}</td></tr>
       <tr><td><strong>Etimologia</strong>:${spell.etymology}</td></tr>
       <tr><td><strong>Nota</strong>:${spell.note}</td></tr></table>`
   
  })
