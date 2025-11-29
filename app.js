const menu=document.querySelector('#menu');
const glow=document.querySelector('.glow');
const ipEl=document.querySelector('#server-ip');
const connectBtn=document.querySelector('#connect-server');
const copyBtn=document.querySelector('#copy-ip');
const statusEl=document.querySelector('.server-status');
const statusValue=document.querySelector('#status-value');
const onlineEl=document.querySelector('#players-online');
const maxEl=document.querySelector('#players-max');
const pingEl=document.querySelector('#ping');
const mapEl=document.querySelector('#current-map');
const playersGrid=document.querySelector('#players');
const galleryGrid=document.querySelector('#gallery-grid');
const mapRotation=document.querySelector('#map-rotation');
const eventsGrid=document.querySelector('#events-grid');
const form=document.querySelector('#contact-form');
const formNote=document.querySelector('#form-note');
const discordLink=document.querySelector('#discord-link');
const steamLink=document.querySelector('#steam-link');
const state={ip:'YOUR_SERVER_IP:27015',tick:128,maxPlayers:10,region:'EU-TR',online:false,ping:0,map:'Mirage',players:[],gallery:[],maps:['Mirage','Inferno','Dust2','Nuke','Overpass','Vertigo','Ancient'],events:[]};
function initTheme(){const saved=localStorage.getItem('theme');if(saved)document.body.setAttribute('data-theme',saved);}initTheme();
function toggleTheme(){const cur=document.body.getAttribute('data-theme');const next=cur==='dark'?'light':'dark';document.body.setAttribute('data-theme',next);localStorage.setItem('theme',next);}
document.addEventListener('pointermove',e=>{const x=e.clientX;const y=e.clientY;glow.style.background=`radial-gradient(200px 200px at ${x}px ${y}px, rgba(124,77,255,.25), transparent 60%), radial-gradient(150px 150px at ${x-80}px ${y-60}px, rgba(0,229,255,.2), transparent 60%)`;});
function getIP(){return ipEl?.dataset.ip||state.ip}
connectBtn?.addEventListener('click',e=>{e.preventDefault();const url=`steam://connect/${getIP()}`;window.location.href=url;});
copyBtn?.addEventListener('click',()=>{const ip=getIP();navigator.clipboard.writeText(ip).then(()=>{copyBtn.textContent='Kopyalandı';setTimeout(()=>copyBtn.textContent='IP Kopyala',1200);});});
discordLink?.addEventListener('click',e=>{e.preventDefault();window.open('https://discord.com/invite/','_blank')});
steamLink?.addEventListener('click',e=>{e.preventDefault();window.open('https://steamcommunity.com/groups/','_blank')});
function mockFetch(){const online=Math.random()>.2;const count=online?Math.floor(Math.random()*state.maxPlayers):0;const ping=online?Math.floor(20+Math.random()*30):0;const maps=state.maps;const map=maps[Math.floor(Math.random()*maps.length)];const players=[];for(let i=0;i<count;i++){players.push({name:`Player${i+1}`,score:Math.floor(Math.random()*30)})}return{online,count,ping,map,players}}
function renderStats(data){statusEl.classList.toggle('online',data.online);statusValue.textContent=data.online?'Online':'Offline';onlineEl.textContent=String(data.count);maxEl.textContent=String(state.maxPlayers);pingEl.textContent=String(data.ping);mapEl.textContent=data.map;playersGrid.innerHTML='';data.players.slice(0,10).forEach(p=>{const el=document.createElement('div');el.className='player';el.innerHTML=`<div class=\"avatar\">${p.name.slice(0,2).toUpperCase()}</div><div><div><strong>${p.name}</strong></div><div>Skor ${p.score}</div></div>`;playersGrid.appendChild(el)});}
function renderGallery(){if(state.gallery.length===0){for(let i=0;i<8;i++){state.gallery.push(`data:image/svg+xml;base64,${btoa(`<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='%230c0f14'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-size='24'>Görüntü ${i+1}</text></svg>`)}`)}}galleryGrid.innerHTML='';state.gallery.forEach(src=>{const img=document.createElement('img');img.src=src;img.alt='CS2 Galeri';img.addEventListener('click',()=>openModal(src));galleryGrid.appendChild(img)})}
function renderMaps(){if(!mapRotation)return;mapRotation.innerHTML='';state.maps.forEach(m=>{const card=document.createElement('div');card.className='card';card.innerHTML=`<h3>${m}</h3><p>Standart rotasyonda aktif.</p>`;mapRotation.appendChild(card)})}
function renderEvents(){if(!eventsGrid)return;if(state.events.length===0){state.events=[{title:'Topluluk Turnuvası',date:'12.01',desc:'Swiss + BO3 Finaller'},{title:'PUG Serisi',date:'Her Cuma',desc:'Katılıma açık'},{title:'Scrim Gecesi',date:'Her Çarşamba',desc:'Takım bazlı'}]}eventsGrid.innerHTML='';state.events.forEach(ev=>{const card=document.createElement('div');card.className='card';card.innerHTML=`<div class=\"tag\">${ev.date}</div><h3>${ev.title}</h3><p>${ev.desc}</p>`;eventsGrid.appendChild(card)})}
function openModal(src){let modal=document.querySelector('.modal');if(!modal){modal=document.createElement('div');modal.className='modal';modal.addEventListener('click',()=>modal.classList.remove('open'));document.body.appendChild(modal)}modal.innerHTML=`<img src="${src}" alt="Galeri">`;modal.classList.add('open')}
form?.addEventListener('submit',e=>{e.preventDefault();const name=document.querySelector('#name').value.trim();const email=document.querySelector('#email').value.trim();const msg=document.querySelector('#message').value.trim();if(!name||!email||!msg){formNote.textContent='Lütfen tüm alanları doldurun';return}formNote.textContent='Gönderildi';setTimeout(()=>formNote.textContent='',2000)});
function init(){renderGallery();renderMaps();renderEvents();setInterval(()=>{const data=mockFetch();renderStats(data)},1500)}init();
