const I={
"story": "assets/images/story.jpg",
"basf32": "assets/decks/basf32.jpg",
"ie1": "assets/images/ie1.jpg",
"s5": "assets/images/s5.jpg",
"a1": "assets/images/a1.jpg",
"elcar": "assets/images/elcar.jpg",
"a2": "assets/images/a2.jpg",
"elad": "assets/images/elad.jpg",
"v_home": "assets/thumbnails/v_home.jpg",
"v_raksha": "assets/thumbnails/v_raksha.jpg",
"adv14": "assets/decks/adv14.jpg",
"j1": "assets/images/j1.jpg",
"blue": "assets/images/blue.jpg",
"v_tiffin": "assets/thumbnails/v_tiffin.jpg",
"ant": "assets/images/ant.jpg",
"basf1": "assets/decks/basf1.jpg",
"t4": "assets/images/t4.jpg",
"v_iris2": "assets/thumbnails/v_iris2.jpg",
"ie2": "assets/images/ie2.jpg",
"shr": "assets/images/shr.jpg",
"j2": "assets/images/j2.jpg",
"a4": "assets/images/a4.jpg",
"t3": "assets/images/t3.jpg",
"v_iris1": "assets/thumbnails/v_iris1.jpg",
"mood": "assets/images/mood.jpg",
"gan": "assets/images/gan.jpg",
"grid": "assets/images/grid.jpg",
"kar1": "assets/images/kar1.jpg",
"s3": "assets/images/s3.jpg",
"v_type": "assets/thumbnails/v_type.jpg",
"s2": "assets/images/s2.jpg",
"nav": "assets/images/nav.jpg",
"s4": "assets/images/s4.jpg",
"t2": "assets/images/t2.jpg",
"basf18": "assets/decks/basf18.jpg",
"basf23": "assets/decks/basf23.jpg",
"s1": "assets/images/s1.jpg",
"prem": "assets/images/prem.jpg",
"brand": "assets/images/brand.jpg",
"adv5": "assets/decks/adv5.jpg",
"v_friend": "assets/thumbnails/v_friend.jpg",
"t1": "assets/images/t1.jpg",
"v_atul": "assets/thumbnails/v_atul.jpg",
"kar2": "assets/images/kar2.jpg",
"adv1": "assets/decks/adv1.jpg",
"a3": "assets/images/a3.jpg",
"adv3": "assets/decks/adv3.jpg",
"a5": "assets/images/a5.jpg",
"dream": "assets/images/dream.jpg",
"v_acou": "assets/thumbnails/v_acou.jpg",
"v_nav": "assets/thumbnails/v_nav.jpg"
};
const $=s=>document.querySelector(s),im=k=>I[k]||'';
const J=[
["Dainik Bhaskar","Editorial & Script Writing Intern","Oct–Dec 2023",["Researched and wrote news scripts","Published an editorial column","Worked with newsroom content and accuracy standards"]],
["GTPL Hathway","Content & Media Intern","Mar–Apr 2024",["Developed content and reel concepts","Worked on anchoring and media segments"]],
["SSA Advertisement","Advertising Intern","May–Jul 2024",["Assisted in poster, banner, and visual content development","Worked with branding and campaign creatives"]],
["Thumbstopper","Creative & Content Intern (Freelance)","Jan–May 2025",["Created UGC advertising scripts for Meta platforms","Assisted in storyboarding and creative coordination","Developed performance-focused content"]],
["Recharge Trendd Setter","Creative Strategist","Jul 2025–Mar 2026",["Developed social media strategies and content calendars","Wrote captions, ad copies, taglines, and LinkedIn posts","Conceptualised reels, UGC ads, and video scripts","Developed festive and promotional campaigns","Contributed to website copy, pitch decks, and presentations","Collaborated with design, performance, and client teams","Focus: brand storytelling, creative strategy, and integrated campaigns"]],
["I-engage","Social Media Manager","Apr 2026–Present",["Social media strategy and content calendars","Campaign planning and creative ideation","Ad copies, reel scripts, and UGC concepts","Creative shoot planning and coordination","Meta Business Suite operations and audience targeting","Campaign monitoring and performance tracking","AI-assisted content development"]]];
function tabs(box,items,fn,cls){box.innerHTML='';items.forEach((t,i)=>{const b=document.createElement('button');b.className=cls||'tab';b.setAttribute('role','tab');b.innerHTML=t;b.onclick=()=>{[...box.children].forEach(c=>c.setAttribute('aria-selected',c===b));fn(i)};box.appendChild(b)});box.children[0].click()}
tabs($('#jt'),J.map(j=>j[0]),i=>{const j=J[i];$('#jp').innerHTML=`<div class="when">${j[2]}</div><h3>${j[1]}</h3><p style="color:var(--ink2)">${j[0]}</p><ul>${j[3].map(x=>`<li>${x}</li>`).join('')}</ul>`});
const B=[["IRIS Group","Real estate"],["Advanta","Agriculture"],["BASF Nunhems","Agriculture"],["Dr. Arpit Tiwari","Healthcare"],["Thumbstopper","Advertising"],["Jyoti Multi Speciality Hospitals","Healthcare"],["Dr. Atul Jajoo, Teeth & Braces","Healthcare"],["i-engage works","Media"],["Shrishti CBD","Real estate"],["PAN Seeds","Agriculture"]];
const ind=["All","Real estate","Healthcare","Agriculture","Media","Advertising"];
tabs($('#bt'),ind,i=>{$('#bg').innerHTML=B.map(b=>`<div class="brand ${i&&b[1]!==ind[i]?'dim':''}"><b>${b[0]}</b><small>${b[1]}</small></div>`).join('')});
const S=[["s4","Views over time with publishing activity: 137,680 views (−33% vs previous period)"],["s1","Views trend: 70,494 views (+17,747%) with a late-October rise"],["s2","Views by content type and followers vs non-followers: 99.3% of views from non-followers"],["s5","Content mix on another page: links 98.5%, photos 1.1%, reels 0.4%"],["s3","Follows: 11 follows, 10 net, 1 unfollow in 28 days"]];
$('#shots').innerHTML=S.map(s=>`<figure><img data-k="${s[0]}" alt="${s[1]}"><figcaption>${s[1]}</figcaption></figure>`).join('');
const P=[["Research","Brand and audience","Start with the brand, its competitors, and how the audience actually consumes content. I benchmark competitor channels, formats, and engagement before proposing anything."],["Pillars","Content pillars and messaging","Define 3–5 content pillars and the message each carries, so every post has a job. Example: BASF Nunhems' pillars were Mitti Ke Heroes, Baat Pate Ki, and Kheti Ke Raaz."],["Calendar","Monthly content calendars","Plan the month by theme, festival, launch, and format, with a balance of reels, carousels, and statics."],["Ideate","Ideation and copywriting","Turn each pillar into hooks, scripts, captions, and visual directions."],["Review","Execution and performance","Publish, monitor reach and engagement, then optimise the next month's plan."]];
$('#st').innerHTML='';P.forEach((p,i)=>{const b=document.createElement('button');b.className='step';b.setAttribute('role','tab');b.innerHTML=`${p[0]}<i>${p[1]}</i>`;b.onclick=()=>{[...$('#st').children].forEach(c=>c.setAttribute('aria-selected',c===b));$('#sp').innerHTML=`<h3>${i+1}. ${p[1]}</h3><p style="margin-top:12px">${p[2]}</p>`};$('#st').appendChild(b)});$('#st').children[0].click();
$('#stimgs').innerHTML=['grid','brand','basf23'].map(k=>`<img data-k="${k}" alt="Strategy work">`).join('');
const G=[["IRIS Group",["kar1","kar2","nav","gan","ant","elad","elcar","blue","prem","dream","brand","mood","grid","story"]],["Healthcare",["a1","a2","a3","a4","a5","j1","j2"]],["Dental",["t1","t2","t3","t4"]],["i-engage works",["ie1","ie2"]],["Branding",["shr"]]];
const cap={kar1:"IRIS · Karwa Chauth",kar2:"IRIS · Karwa Chauth",nav:"IRIS · Navratri",gan:"IRIS · Gandhi Jayanti",ant:"IRIS · Anant Chaturdashi",elad:"IRIS Elite · ad",elcar:"IRIS Elite · carousel",blue:"Blue Iris · carousel",prem:"IRIS Premium · carousel",dream:"IRIS Dreams · carousel",brand:"IRIS · brand guidelines",mood:"IRIS · legacy moodboard",grid:"IRIS · Instagram grid",story:"IRIS · brand film frames",a1:"Dr. Arpit Tiwari",a2:"Dr. Arpit Tiwari",a3:"Dr. Arpit Tiwari",a4:"Dr. Arpit Tiwari",a5:"Dr. Arpit Tiwari",j1:"Jyoti Hospitals · Vijayadashami",j2:"Jyoti Hospitals · Ganesh Chaturthi",t1:"Teeth & Braces",t2:"Teeth & Braces",t3:"Teeth & Braces",t4:"Teeth & Braces",ie1:"i-engage works · Dhulai Hogi Fast",ie2:"i-engage works · Dhulai Hogi Fast",shr:"Shrishti CBD · brand build"};
const all=G.flatMap(g=>g[1]);
tabs($('#gt'),["All",...G.map(g=>g[0])],i=>{const ks=i?G[i-1][1]:all;$('#gal').innerHTML=ks.map(k=>`<figure><img data-k="${k}" alt="${cap[k]}" loading="lazy"><figcaption>${cap[k]}</figcaption></figure>`).join('');hook()});
const R=[["v_iris1","IRIS Group film"],["v_iris2","IRIS Dreams ad"],["v_nav","i-engage · Navratri"],["v_tiffin","i-engage · Tiffin"],["v_acou","i-engage · Acoustic firecrackers"],["v_friend","i-engage · Friendship"],["v_raksha","i-engage · Raksha Bandhan"],["v_type","i-engage · Ideas typed"],["v_home","Real estate · First home"],["v_atul","Dr. Atul Jajoo"]];
$('#reels').innerHTML=R.map(r=>`<div class="reel" tabindex="0" role="button" aria-label="Play ${r[1]}" data-v="assets/videos/${r[0]}.mp4"><img data-k="${r[0]}" alt="${r[1]}"><span>&#9654; ${r[1]}</span></div>`).join('');
const C=[["IRIS Group","Brand communication","Real estate content, brand storytelling, project promotion, and creative communication across IRIS Elite, Blue Iris, IRIS Premium, and IRIS Dreams.",["grid","brand","elad","kar1"]],
["Advanta","Kharif 2026","Integrated digital campaign strategy covering Meta, YouTube, Google, audience segmentation, and campaign funnel planning, built as a four-month plan (March–June).",["adv1","adv3","adv5"]],
["BASF Nunhems","YouTube strategy","YouTube launch and ongoing content strategy: competitor analysis, content properties, regional language plan, and launch plan with a target of 50K+ subscribers in 180 days.",["basf1","basf18","basf23","basf32"]],
["Dr. Arpit Tiwari","Healthcare strategy","Patient-focused content strategy, educational reels, carousels, and healthcare communication in Hindi.",["a1","a2","a3","a4","a5"]],
["Thumbstopper","UGC advertising","Performance-focused UGC scripts, storyboards, and creative concepts for Meta platforms.",[]]];
tabs($('#cl'),C.map(c=>c[0]),i=>{const c=C[i];$('#cp').innerHTML=`<div class="when">${c[1]}</div><h3>${c[0]}</h3><p style="margin-top:12px">${c[2]}</p><div class="cimgs">${c[3].map(k=>`<img data-k="${k}" alt="${c[0]}">`).join('')}</div>${c[0]=='BASF Nunhems'||c[0]=='Advanta'?'<p class="note">Targets and budget estimates in these decks are projections, not actual results.</p>':''}${c[0]=='Thumbstopper'?'<p class="note">Samples available on request.</p>':''}`;hook()});
const K=[["Creative & strategy","Creative strategy · Copywriting · Brand storytelling · Campaign conceptualisation · Scriptwriting · Taglines & jingles"],["Marketing & digital","Social media strategy · Digital marketing · Content marketing · LinkedIn marketing · ATL & BTL"],["Content & communication","Content writing · Editorial writing · News writing · Blogs · Anchoring scripts"],["Tools","ChatGPT · Adobe Photoshop · CorelDRAW · Meta Business Suite · MS Word · PowerPoint · Excel"],["Professional strengths","Creative thinking · Communication · Presentation · Research · Collaboration"]];
$('#sk').innerHTML=K.map(k=>`<div class="panel"><h3>${k[0]}</h3><div class="chips" style="margin-bottom:0">${k[1].split(' · ').map(x=>`<span class="chip">${x}</span>`).join('')}</div></div>`).join('');
$('#sel').innerHTML=['kar1','gan','elad','ie2','a1','t2','j1','shr'].map(k=>`<img data-k="${k}" alt="${cap[k]}" style="width:100%;border-radius:12px;border:1px solid var(--line)">`).join('');
const dk=['kar1','gan','nav','ie2','a1'];let ti=0;const dEl=$('#deck');
dk.forEach(k=>{const e=document.createElement('img');e.dataset.k=k;e.alt='Creative sample';dEl.prepend(e)});
function lay(){[...dEl.querySelectorAll('img')].forEach((e,i)=>{const p=(dk.indexOf(e.dataset.k)-ti+dk.length)%dk.length;e.style.transform=`translateX(-50%) translateX(${p*34-60}px) rotate(${p*5-8}deg) scale(${1-p*.04})`;e.style.zIndex=9-p;e.style.opacity=p>3?0:1})}
dEl.onclick=()=>{ti=(ti+1)%dk.length;lay()};dEl.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();dEl.onclick()}};
function hook(){document.querySelectorAll('img[data-k]').forEach(e=>{if(!e.src||e.dataset.done)return;});}
function fill(){document.querySelectorAll('img[data-k]').forEach(e=>{if(!e.dataset.done){e.src=im(e.dataset.k);e.dataset.done=1}})}
const _h=hook;hook=function(){fill()};
new MutationObserver(fill).observe(document.body,{childList:true,subtree:true});fill();lay();
const lb=$('#lb'),lv=lb.querySelector('video');function closeLb(){lb.classList.remove('on');lv.pause();lv.removeAttribute('src');lv.style.display='none';lb.querySelector('img').style.display=''}
function openVid(src){lb.querySelector('img').style.display='none';lv.style.display='block';lv.src=src;lb.classList.add('on');lv.play().catch(()=>{})}
document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList&&e.target.classList.contains('reel')){e.preventDefault();openVid(e.target.dataset.v)}});
document.addEventListener('click',e=>{const t=e.target;const rl=t.closest&&t.closest('.reel');if(rl){openVid(rl.dataset.v);return}if(t===lv)return;if(t.tagName==='IMG'&&t.dataset.k&&!t.closest('.deck')&&!t.closest('.reel')){lb.querySelector('img').src=t.src;lb.querySelector('img').style.display='';lb.classList.add('on')}else if(lb.contains(t)||t===lb)closeLb()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb()});
$('#cf').onsubmit=e=>{e.preventDefault();location.href=`mailto:aashichourasia2@gmail.com?subject=${encodeURIComponent('Portfolio enquiry from '+$('#cn').value)}&body=${encodeURIComponent($('#cm').value+'\n\n'+$('#cn').value+'\n'+$('#ce').value)}`};
const links=[...document.querySelectorAll('nav a')];new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+x.target.id))}),{rootMargin:'-40% 0px -55% 0px'}).observe&&document.querySelectorAll('section').forEach(s=>new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+s.id))}),{rootMargin:'-40% 0px -55% 0px'}).observe(s));