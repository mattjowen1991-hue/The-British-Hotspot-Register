/* =====================================================================
   THE UK HOTSPOT REGISTER  ·  rendering, filtering, sorting
   ---------------------------------------------------------------------
   Reads window.SITES (data.js) and the shared `state` object (main.js).
   main.js wires controls to this file's render() and calls it on load.
   ===================================================================== */

const TIER_LABEL = {documented:"Well-documented", mixed:"Mixed", volume:"Volume-driven", single:"Single-source", explained:"Likely explained", contested:"Contested"};
const TIER_PIP   = {documented:"solid", mixed:"two", volume:"two", single:"hollow", explained:"two", contested:"hollow"};

const grid = document.getElementById("grid");
const countEl = document.getElementById("count");

function esc(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function rich(t){ // allow only <strong>
  return esc(t).replace(/&lt;strong&gt;/g,"<strong>").replace(/&lt;\/strong&gt;/g,"</strong>");
}

function meter(label, val){
  return `<div>
    <div class="meter-label"><span>${label}</span><b>${val}</b></div>
    <div class="track"><div class="fill" style="width:${val}%"></div><div class="thresh" style="left:60%"></div></div>
  </div>`;
}

function sourceHTML(src){
  return src.map(x=>{
    const link = x.url
      ? `<a href="${x.url}" target="_blank" rel="noopener">${esc(x.label)} &#8599;</a>`
      : `<span class="source-label">${esc(x.label)}</span>`;
    const note = x.note ? `<span class="source-note">${esc(x.note)}</span>` : "";
    const weak = x.strength==="weak" ? `<span class="source-weak">lower-confidence source</span>` : "";
    return `<div class="source-item">${link}${note}${weak}</div>`;
  }).join("");
}

function prosaicSourceHTML(src){
  return src.map(x=> x.url
    ? `<a href="${x.url}" target="_blank" rel="noopener">${esc(x.label)} &#8599;</a>`
    : `<span class="source-label">${esc(x.label)}</span>`
  ).join(", ");
}

function prosaicHTML(items){
  if(!items || !items.length) return "";
  return `<details class="prosaic">
    <summary><span class="plus">+</span> Prosaic explanations</summary>
    <ul class="prosaic-list">
      ${items.map(p=>`<li><b>${esc(p.explanation)}.</b> ${esc(p.why)}${p.sources && p.sources.length ? ` <span class="prosaic-source">${prosaicSourceHTML(p.sources)}</span>` : ""}</li>`).join("")}
    </ul>
  </details>`;
}

function redditHTML(url){
  return url ? `<a class="reddit-link" href="${url}" target="_blank" rel="noopener">Discuss on Reddit &#8599;</a>` : "";
}

function card(s,i){
  return `<article class="card" id="${s.id}" style="animation-delay:${Math.min(i*60,420)}ms">
    <div class="card-top">
      <span class="caseid">${s.id}</span>
      <span class="stamp"><span class="pip ${TIER_PIP[s.tier]}"></span>${TIER_LABEL[s.tier]}</span>
    </div>
    <h3>${esc(s.name)}</h3>
    <div class="place">${esc(s.region)} &nbsp;·&nbsp; <span class="coords">${esc(s.coords)}</span> &nbsp;·&nbsp; ${esc(s.period)}</div>
    <div class="tags">${s.phenomena.map(p=>`<span class="tag">${esc(p)}</span>`).join("")}</div>
    <p class="summary">${rich(s.summary)}</p>
    <div class="meters">
      ${meter("A · Strangeness", s.strangeness)}
      ${meter("B · Evidence", s.evidence)}
    </div>
    <details>
      <summary><span class="plus">+</span> ${s.cases.length} key case${s.cases.length>1?"s":""} on file</summary>
      <div class="cases">
        ${s.cases.map(c=>`<div class="caserow"><div class="caseyr">${esc(c.year)}</div><div class="casetitle">${esc(c.title)}</div><div class="casedesc">${esc(c.desc)}</div></div>`).join("")}
      </div>
      ${s.notes?`<div class="notes"><b>Skeptical read</b>${esc(s.notes)}</div>`:""}
      ${prosaicHTML(s.prosaic)}
      <div class="sources">${sourceHTML(s.sources)}</div>
      ${redditHTML(s.redditThread)}
    </details>
  </article>`;
}

function matches(s){
  if(state.nation && s.nation!==state.nation) return false;
  if(state.phenomena.size && ![...state.phenomena].every(p=>s.phenomena.includes(p))) return false;
  if(state.q){
    const hay=(s.name+" "+s.region+" "+s.summary+" "+s.phenomena.join(" ")+" "+s.cases.map(c=>c.title+" "+c.desc).join(" ")).toLowerCase();
    if(!hay.includes(state.q)) return false;
  }
  return true;
}

function sortList(list){
  if(state.sort==="az") return list.sort((a,b)=>a.name.localeCompare(b.name));
  const k = state.sort==="strangeness" ? "strangeness" : "evidence";
  return list.sort((a,b)=>b[k]-a[k]);
}

function renderReadout(){
  const nations = new Set(SITES.map(s=>s.nation));
  const phen = new Set(SITES.flatMap(s=>s.phenomena));
  document.getElementById("readout").innerHTML = `
    <div><b>${SITES.length}</b><span>Sites logged</span></div>
    <div><b>${nations.size}</b><span>Nations</span></div>
    <div><b>${phen.size}</b><span>Phenomenon types</span></div>
    <div><b>${SITES.filter(s=>s.evidence>=60).length}</b><span>Above threshold</span></div>
  `;
}

function render(){
  const list=sortList(SITES.filter(matches));
  countEl.textContent = list.length===SITES.length
    ? `Showing all ${SITES.length} sites`
    : `${list.length} of ${SITES.length} sites`;
  grid.innerHTML = list.length
    ? list.map(card).join("")
    : `<div class="empty">No sites match those filters. Clear one to widen the search.</div>`;
}
