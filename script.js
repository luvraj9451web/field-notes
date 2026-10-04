const POSTS=[
{id:1,title:"The Case for a Slower Inbox",cat:"Life",tags:["focus","habits"],date:"2026-09-02",read:"4 min",author:"M. Alders",icon:"✉️",image:"code1.png",
excerpt:"What happens to your attention when you stop treating every message like a fire alarm.",
body:"<p>Somewhere between the first pager and the last push notification, email stopped being correspondence and became a queue. We check it the way we check a stove burner — not because we expect news, but because we're afraid of what happens if we don't.</p><p>The inbox rewards speed over judgment. A fast reply feels responsible; a slow one feels negligent, even when the slow one is the better answer.</p><h2>Batch, don't stream</h2><p>The simplest fix is also the least satisfying: check less often, for longer stretches, with a clear intention each time. Three sits a day beats forty glances. It isn't about discipline so much as removing the option to glance at all.</p><p>None of this requires new software. It requires deciding, in advance, that your attention is worth more than the appearance of availability.</p>"},

{id:2,title:"Notes on Sharpening a Chisel",cat:"Craft",tags:["woodworking","tools"],date:"2026-08-27",read:"6 min",author:"J. Okonkwo",icon:"🪚", image:"code5.png",
excerpt:"A dull tool teaches you nothing except how to work around it. A sharp one teaches you everything.",
body:"<p>My grandfather kept one chisel his entire working life. Not because he couldn't afford another, but because he understood something most of us skip past: the edge is a relationship, not a purchase.</p><p>Sharpening isn't a chore that interrupts the work — it is the work, rendered visible. You learn the steel's temper, the stone's cut, your own patience, all in the same ten minutes.</p><h2>The 25-degree habit</h2><p>Most home woodworkers over-think the angle and under-think the pressure. Consistent, light passes beat a perfect theoretical bevel every time. Let the stone do less per stroke and you'll need fewer strokes overall.</p><p>A sharp chisel is quiet. That's how you know it's ready — not by looking, but by the sound it stops making.</p>"},

{id:3,title:"Why Local-First Software Matters Again",cat:"Technology",tags:["software","privacy"],date:"2026-08-19",read:"7 min",author:"R. Fenwick",icon:"💾", image:"code.png",
excerpt:"The cloud made everything convenient and almost nothing yours. A quiet countermovement is rebuilding ownership into our tools.",
body:"<p>For a decade, 'it just syncs' was reason enough to hand your files to someone else's server. That trade made sense when bandwidth was expensive and laptops were fragile. Neither is true anymore.</p><p>Local-first apps keep the working copy on your device and treat the network as an optional convenience, not a dependency. If the server disappears, your notes don't.</p><h2>What you actually give up</h2><p>Real-time collaboration gets harder. Conflict resolution gets harder. These aren't solved problems yet — but the alternative, total reliance on infrastructure you don't control, is its own unsolved problem, just one we've gotten used to.</p><p>The pendulum won't swing all the way back. But it's swinging.</p>"},

{id:4,title:"A Weekend in the Douro Valley",cat:"Travel",tags:["portugal","food"],date:"2026-08-11",read:"5 min",author:"S. Marín",icon:"🍇", image:"code2.png",
excerpt:"Terraced hillsides, a slow train, and the best lunch I've had without a menu.",
body:"<p>The train from Porto follows the river so closely you could lean out and touch it. By the second hour the vineyards start stacking themselves into terraces, green in spring and copper by September.</p><p>I got off at a station with no name I could pronounce and walked uphill until a woman waved me into her kitchen — not a restaurant, just her kitchen — and fed me bread, cured pork, and a wine she'd made herself.</p><h2>Go in September</h2><p>Harvest season means the valley smells like crushed grapes and diesel from the tractors. It's not picturesque in the postcard sense. It's better — it's working.</p>"},

{id:5,title:"The Discipline of Finishing Small Things",cat:"Life",tags:["habits","creativity"],date:"2026-08-03",read:"3 min",author:"M. Alders",icon:"✅", image:"code4.png",
excerpt:"Ambition is easy. Completion is the whole skill.",
body:"<p>Everyone has a drawer of half-built things — the half-learned language, the half-renovated shelf, the half-written proposal. The drawer isn't a failure of ambition. It's a failure of scope.</p><h2>Shrink the unit</h2><p>A project finishes when its definition of 'done' is small enough to actually reach. Publish the rough draft. Sand one shelf, not the whole cabinet. The small finished thing beats the large unfinished one on every axis that matters.</p><p>Momentum is not a feeling you wait for. It's a byproduct of things you've already completed.</p>"},

{id:6,title:"Building a Joinery Bench From Scrap",cat:"Craft",tags:["woodworking","diy"],date:"2026-07-28",read:"8 min",author:"J. Okonkwo",icon:"🔨", image:"code3.png",
excerpt:"You don't need hardwood or a budget. You need square corners and patience.",
body:"<p>Most bench plans assume you're buying lumber specifically for the job. Mine started as a pile of pallet wood and a broken door.</p><h2>Square first, pretty never</h2><p>A bench that's slightly ugly but perfectly square will outlast a beautiful one that racks under load. Check every joint with a try square before you commit glue — it's the one step you can't undo.</p><p>Three weekends in, I had a bench heavier than furniture has any right to be, built almost entirely from things headed for a dumpster.</p>"},

{id:7,title:"The Quiet Return of the Feature Phone",cat:"Technology",tags:["hardware","focus"],date:"2026-07-20",read:"5 min",author:"R. Fenwick",icon:"📱", image:"code6.png",
excerpt:"A small but growing group of people are trading smartphones for something dumber, on purpose.",
body:"<p>The dumbphone market used to mean 'can't afford better.' Now it increasingly means 'chose better on purpose.'</p><h2>What you lose, deliberately</h2><p>No infinite scroll. No algorithmic feed deciding what deserves your morning. Maps and messages, mostly, and a camera that's fine, not great.</p><p>The people I've spoken to who made the switch don't describe it as sacrifice. They describe it as getting a room back that had quietly been rented out.</p>"},

{id:8,title:"Walking the Kumano Kodo Alone",cat:"Travel",tags:["japan","hiking"],date:"2026-07-09",read:"6 min",author:"S. Marín",icon:"⛩️", image:"code7.png",
excerpt:"Four days on a pilgrimage route older than the country's written language, mostly in silence.",
body:"<p>The Kumano Kodo isn't dramatic the way alpine trails are dramatic. It's cedar forest, moss-covered stone steps, and small shrines that have been maintained, without interruption, for over a thousand years.</p><h2>Silence is the terrain</h2><p>I passed maybe six other walkers in four days. The quiet wasn't empty — it had a texture, thickened by centuries of the same footsteps.</p><p>You don't finish the Kumano Kodo feeling accomplished. You finish it feeling small, in the useful sense of the word.</p>"},

// {id:9,title:"What Good Editing Actually Removes",cat:"Life",tags:["writing","craft"],date:"2026-06-30",read:"4 min",author:"M. Alders",icon:"✂️",
// excerpt:"Not adjectives. Not filler words. The thing good editors cut is your fear of being misunderstood.",
// body:"<p>Novice editing removes typos. Good editing removes hedges — the 'sort of,' the 'I think,' the three examples where one would do because you didn't trust the first one to land.</p><h2>Cut until it's brave</h2><p>Every hedge is a small apology for taking up space. Read your draft looking specifically for sentences that are protecting themselves rather than making a point, and cut the protection.</p><p>What's left isn't colder. It's just no longer afraid of you.</p>"}
 ];

let state={category:'All', search:'', visible:6, current:null, featured:0};
const grid=document.getElementById('postGrid');

function fmtDate(d){return new Date(d+'T00:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});}

function cardHTML(p){
  return `<div class="card" onclick="openArticle(${p.id})">
    <div class="card-img">${p.image ? `<img src="${p.image}" alt="${p.title}">` : `<span>${p.icon}</span>`}</div>
    <div class="card-body">
      <span class="cat-tag">${p.cat}</span>
      <h3>${p.title}</h3>
      <p class="excerpt">${p.excerpt}</p>
      <div class="meta-row"><span>${fmtDate(p.date)}</span><span>${p.read} read</span></div>
    </div>
  </div>`;
}

function getFiltered(){
  return POSTS.filter(p=>{
    const matchCat = state.category==='All' || p.cat===state.category;
    const q=state.search.trim().toLowerCase();
    const matchSearch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.some(t=>t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });
}

function renderGrid(){
  const filtered=getFiltered();
  const shown=filtered.slice(0,state.visible);
  grid.innerHTML = shown.length ? shown.map(cardHTML).join('') : '<div class="no-results">No articles match — try a different search or category.</div>';
  document.getElementById('resultCount').textContent = filtered.length + (filtered.length===1?' article found':' articles found');
  const lm=document.getElementById('loadMoreBtn');
  lm.style.display = state.visible < filtered.length ? 'inline-flex' : 'none';
}

function loadMore(){ state.visible += 6; renderGrid(); }

function filterCategory(cat){
  state.category=cat; state.visible=6;
  document.querySelectorAll('.filters .chip').forEach(c=>c.classList.toggle('active', c.dataset.cat===cat));
  document.querySelectorAll('.nav-links button').forEach(b=>b.classList.toggle('active', b.textContent===cat || (cat==='All'&&b.textContent==='Home')));
  document.getElementById('navLinks').classList.remove('open');
  renderGrid();
}

function onSearch(){ state.search=document.getElementById('searchInput').value; state.visible=6; renderGrid(); }

function toggleSearch(){
  const box=document.getElementById('searchBox');
  box.classList.toggle('expanded');
  if(box.classList.contains('expanded')) document.getElementById('searchInput').focus();
}

function buildChips(){
  const cats=['All',...new Set(POSTS.map(p=>p.cat))];
  document.getElementById('filterChips').innerHTML = cats.map(c=>`<button class="chip ${c==='All'?'active':''}" data-cat="${c}" onclick="filterCategory('${c}')">${c}</button>`).join('');
}

function buildFeaturedDots(){
  document.getElementById('featuredDots').innerHTML=POSTS.map((post,index)=>`<button class="hero-carousel-dot" type="button" aria-label="Show featured essay ${index+1}: ${post.title}" aria-current="false" onclick="setFeatured(${index})"></button>`).join('');
}

function playSlide(element){
  element.classList.remove('is-changing');
  void element.offsetWidth;
  element.classList.add('is-changing');
}

function renderFeaturedTitle(title){
  const words=title.split(/\s+/);
  const splitAt=Math.max(1,words.length-2);
  const prefix=document.createElement('span');
  prefix.className='hero-title-prefix';
  prefix.textContent=words.slice(0,splitAt).join(' ');
  const accent=document.createElement('span');
  accent.className='hero-title-accent';
  accent.textContent=words.slice(splitAt).join(' ');
  document.getElementById('featTitle').replaceChildren(prefix,accent);
}

function setFeatured(index=state.featured){
  state.featured=(index+POSTS.length)%POSTS.length;
  const f=POSTS[state.featured];
  renderFeaturedTitle(f.title);
  document.getElementById('featExcerpt').textContent=f.excerpt;
  document.getElementById('featVisual').innerHTML=f.image ? `<img src="${f.image}" alt="${f.title}">` : `<span>${f.icon}</span>`;
  document.getElementById('featBtn').onclick=()=>openArticle(f.id);
  playSlide(document.querySelector('.hero-copy'));
  playSlide(document.getElementById('featVisual'));
  document.querySelectorAll('.hero-carousel-dot').forEach((dot,dotIndex)=>{
    const active=dotIndex===state.featured;
    dot.classList.toggle('active',active);
    dot.setAttribute('aria-current',String(active));
  });
}

function changeFeatured(direction){setFeatured(state.featured+direction);}

function startFeaturedAutoplay(){
  window.setInterval(()=>{
    const homeView=document.getElementById('homeView');
    if(document.hidden||homeView.classList.contains('hidden')) return;
    changeFeatured(1);
  },5000);
}

/* ARTICLE VIEW */
function openArticle(id){
  const p=POSTS.find(x=>x.id===id);
  state.current=id;
  document.getElementById('homeView').classList.add('hidden');
  document.getElementById('articleView').classList.add('active');
  document.getElementById('artHero').innerHTML=p.image ? `<img src="${p.image}" alt="${p.title}">` : `<span>${p.icon}</span>`;
  document.getElementById('artCat').textContent=p.cat;
  document.getElementById('artTitle').textContent=p.title;
  document.getElementById('artDate').textContent=fmtDate(p.date);
  document.getElementById('artRead').textContent=p.read+' read';
  document.getElementById('artAuthor').textContent='By '+p.author;
  document.getElementById('artBody').innerHTML=p.body;
  document.getElementById('artTags').innerHTML=p.tags.map(t=>`<span class="tag-pill" onclick="searchTag('${t}')">#${t}</span>`).join('');
  document.getElementById('featuredAuthor').textContent=p.author;
  document.getElementById('authorAvatar').textContent=p.author.replace(/\./g,'').split(/\s+/).map(name=>name[0]).join('').toUpperCase();
  document.getElementById('shareTwitter').href='https://twitter.com/intent/tweet?text='+encodeURIComponent(p.title)+'&url='+encodeURIComponent(location.href);
  document.getElementById('shareLinkedin').href='https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(location.href);
  renderRelated(p);
  renderComments(p.id);
  window.scrollTo({top:0,behavior:'instant'});
}

function searchTag(t){ goHome(); document.getElementById('searchInput').value=t; onSearch(); }

function goHome(){
  document.getElementById('articleView').classList.remove('active');
  document.getElementById('homeView').classList.remove('hidden');
  document.getElementById('navLinks').classList.remove('open');
  window.scrollTo({top:0,behavior:'instant'});
}

function renderRelated(p){
  const rel=POSTS.filter(x=>x.id!==p.id && x.cat===p.cat).slice(0,3);
  const fill = rel.length<3 ? POSTS.filter(x=>x.id!==p.id && !rel.includes(x)).slice(0,3-rel.length) : [];
  document.getElementById('relatedGrid').innerHTML=[...rel,...fill].map(cardHTML).join('');
}

function copyLink(){
  navigator.clipboard?.writeText(location.href).then(()=>alert('Link copied to clipboard.')).catch(()=>alert('Could not copy link.'));
}

/* COMMENTS (per-visitor, localStorage) */
function commentKey(id){ return 'fieldnotes_comments_'+id; }
function loadComments(id){
  try{ const raw=localStorage.getItem(commentKey(id)); return raw?JSON.parse(raw):[]; }catch(e){ return []; }
}
function saveComments(id,list){
  try{ localStorage.setItem(commentKey(id), JSON.stringify(list)); }catch(e){}
}
function renderComments(id){
  const list=loadComments(id);
  document.getElementById('commentCount').textContent = 'Comments ('+list.length+')';
  const box=document.getElementById('commentList');
  box.innerHTML = list.length ? list.map(c=>`<div class="comment-item"><div class="who">${escapeHtml(c.name)}<span class="when">${c.when}</span></div><p>${escapeHtml(c.text)}</p></div>`).join('') : '<p class="empty-note">No comments yet — be the first to share a thought.</p>';
}
function escapeHtml(s){ const d=document.createElement('div'); d.textContent=s; return d.innerHTML; }
function submitComment(e){
  e.preventDefault();
  const name=document.getElementById('commentName').value.trim();
  const text=document.getElementById('commentText').value.trim();
  if(!name||!text) return;
  const list=loadComments(state.current);
  list.unshift({name,text,when:new Date().toLocaleDateString('en-US',{month:'short',day:'numeric'})});
  saveComments(state.current,list);
  document.getElementById('commentName').value='';
  document.getElementById('commentText').value='';
  renderComments(state.current);
}

/* THEME */
const MOON="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z";
const SUN_CIRCLE='<circle cx="12" cy="12" r="4"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
function applyThemeIcon(){
  const t=document.documentElement.getAttribute('data-theme');
  const icon=document.getElementById('themeIcon');
  icon.innerHTML = t==='light' ? SUN_CIRCLE : `<path d="${MOON}"/>`;
}
function toggleTheme(){
  const cur=document.documentElement.getAttribute('data-theme');
  const next = cur==='light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  try{ localStorage.setItem('fieldnotes_theme', next); }catch(e){}
  applyThemeIcon();
}
(function initTheme(){
  let saved=null;
  try{ saved=localStorage.getItem('fieldnotes_theme'); }catch(e){}
  document.documentElement.setAttribute('data-theme', saved || 'dark');
  applyThemeIcon();
})();

function subscribe(){
  const email=document.getElementById('newsEmail').value.trim();
  if(!email) return;
  document.getElementById('newsEmail').value='';
  alert("Thanks — you're on the list.");
}

/* INIT */
buildChips();
buildFeaturedDots();
setFeatured();
renderGrid();
startFeaturedAutoplay();
