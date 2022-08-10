export const filterData = (data,condition) => {  
  const filterHouse = data.filter(charac => charac.house === condition);
    return filterHouse;

  
};

export const filterDataSpells = (data,condition) => {  
  const filterSpells = data.filter(spells => spells.name === condition);
  console.log(filterDataSpells)
  return filterSpells;
    
};
    


// export const spells (allSpellslls);
// let abcSpells= spells.sort((a,b)=>{
//   if(a.name.toLowerCase()<b.name.toLowerCase()) return -1;
//   if(a.name.toLowerCase()>b.name.toLowerCase()) return 1;
//   return 0;
// })

