import { filterDataSpells } from './data.js';
import data from './data/harrypotter/data.js';

const allSpells = data.spells

let spells = filterDataSpells(allSpells)
addEventListener("onload", function () {
  spells.forEach((spells) => {
    document.getElementById("spellsDiv").innerHTML+=
    `<table class="tableCharacter"><tr><td><strong>Nombre</strong>:${spells.name}</td><br> 
     <tr><td><strong>Otro Nombre</strong>:${spells.other_name}</tr></td>
     <tr><td><strong>Pronunciacion</strong>:${spells.pronunciation}</td></tr>
      <tr><td><strong>Tipo</strong>:${spells.spell_type}</td></tr>
       <tr><td><strong>Descripcion</strong>:${spells.description}</td></tr>
       <tr><td><strong>Mencion</strong>:${character.mention}</td></tr>
       <tr><td><strong>Etimologia</strong>:${character.etymology}</td></tr>
       <tr><td><strong>Nota</strong>:${character.note}</td></tr></table>`
    console.log(spells)
  })
});