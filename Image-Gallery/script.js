const cards=[...document.querySelectorAll('.card')];
const imgs=cards.map(c=>c.querySelector('img').src);
let idx=0;
const lb=document.getElementById('lightbox');
const li=document.getElementById('lightImg');
cards.forEach((c,i)=>c.onclick=()=>{idx=i;li.src=imgs[idx];lb.classList.remove('hidden');});
close.onclick=()=>lb.classList.add('hidden');
next.onclick=()=>{idx=(idx+1)%imgs.length;li.src=imgs[idx];}
prev.onclick=()=>{idx=(idx-1+imgs.length)%imgs.length;li.src=imgs[idx];}
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{
document.querySelector('.active')?.classList.remove('active');b.classList.add('active');
let f=b.dataset.filter;
cards.forEach(c=>c.style.display=(f==='all'||c.dataset.category===f)?'block':'none');
});
search.oninput=e=>{
let t=e.target.value.toLowerCase();
cards.forEach(c=>c.style.display=c.innerText.toLowerCase().includes(t)?'block':'none');
};
document.onkeydown=e=>{
if(lb.classList.contains('hidden'))return;
if(e.key==='ArrowRight')next.onclick();
if(e.key==='ArrowLeft')prev.onclick();
if(e.key==='Escape')close.onclick();
};
