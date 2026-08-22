/* =====================================================================
   THE UK HOTSPOT REGISTER  ·  wiring
   ---------------------------------------------------------------------
   Owns filter/sort state and the controls (search, nation, sort, chips).
   Reads window.SITES (data.js), calls render()/renderReadout() (render.js).
   ===================================================================== */

const chipsEl = document.getElementById("chips");
const state = { q:"", nation:"", sort:"evidence", phenomena:new Set() };

// phenomenon chips
const ALL_PHEN = [...new Set(SITES.flatMap(s=>s.phenomena))].sort();
ALL_PHEN.forEach(p=>{
  const b=document.createElement("button");
  b.className="chip"; b.textContent=p; b.setAttribute("aria-pressed","false");
  b.addEventListener("click",()=>{
    if(state.phenomena.has(p)){state.phenomena.delete(p);b.setAttribute("aria-pressed","false");}
    else{state.phenomena.add(p);b.setAttribute("aria-pressed","true");}
    render();
  });
  chipsEl.appendChild(b);
});

document.getElementById("search").addEventListener("input",e=>{state.q=e.target.value.toLowerCase();render();});
document.getElementById("nation").addEventListener("change",e=>{state.nation=e.target.value;render();});
document.getElementById("sort").addEventListener("change",e=>{state.sort=e.target.value;render();});

renderReadout();
render();

if(location.hash){
  const target = document.getElementById(location.hash.slice(1));
  if(target) target.scrollIntoView({block:"start"});
}
