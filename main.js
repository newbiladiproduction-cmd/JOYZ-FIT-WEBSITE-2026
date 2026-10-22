(function(){
const C=CONFIG,$=s=>document.querySelector(s);
const el=(t,p={},h="")=>{const e=Object.assign(document.createElement(t),p);if(h)e.innerHTML=h;return e};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const safe=u=>/^https?:\/\//i.test(u)?u:"#";
const vide=(box,msg)=>box.append(el("p",{className:"lead"},esc(msg)));
$("[data-conf=intro]").textContent=C.intro;
$("#an").textContent=new Date().getFullYear();
C.biographie.forEach(t=>$("#bio-texte").append(el("p",{},esc(t))));
const b=$(".burger"),m=$("#menu");
b.onclick=()=>{const o=m.classList.toggle("open");b.setAttribute("aria-expanded",o)};
m.onclick=e=>{if(e.target.tagName==="A"){m.classList.remove("open");b.setAttribute("aria-expanded",false)}};
const mu=$("#liste-musique");
if(!C.musique.length)vide(mu,"Les sorties seront bientôt disponibles.");
C.musique.forEach(s=>{const c=el("article",{className:"card"});
 c.innerHTML=(s.image?`<img src="${esc(s.image)}" alt="Pochette de ${esc(s.titre)}" loading="lazy">`:'<div class="ph">Pochette</div>')+`<h3>${esc(s.titre)}</h3><p>${esc(s.type||"")} ${esc(s.annee||"")}</p>`+(s.url?`<a class="btn" href="${safe(s.url)}" target="_blank" rel="noopener">Écouter</a>`:"");
 mu.append(c)});
C.plateformes.forEach(p=>$("#plateformes").append(el("a",{className:"btn",href:safe(p.url),target:"_blank",rel:"noopener"},esc(p.nom))));
const vi=$("#liste-videos");
if(!C.videos.length)vide(vi,"Les clips seront bientôt disponibles.");
C.videos.forEach(v=>{const c=el("article",{className:"card"});
 c.innerHTML=`<iframe class="video" loading="lazy" src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.youtubeId)}" title="${esc(v.titre)}" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe><h3>${esc(v.titre)}</h3>`;vi.append(c)});
const co=$("#liste-concerts"),auj=new Date().toISOString().slice(0,10);
const pr=C.concerts.filter(c=>c.date>=auj).sort((a,b)=>a.date.localeCompare(b.date));
if(!pr.length)co.append(el("li",{className:"vide"},"Aucune date annoncée pour le moment. Pour une demande de booking, utilisez le formulaire ci-dessous."));
pr.forEach(c=>{const d=new Date(c.date+"T12:00").toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"});
 co.append(el("li",{},`<time datetime="${esc(c.date)}">${d}</time><span>${esc(c.lieu)}, ${esc(c.ville)}</span>`+(c.billets?`<a class="btn" href="${safe(c.billets)}" target="_blank" rel="noopener">Billets</a>`:"")))});
C.presse.forEach(p=>$("#liste-presse").append(el("article",{className:"card"},`<h3>${esc(p.nom)}</h3><a class="btn" href="${esc(p.fichier)}" download>Télécharger</a>`)));
if(C.email){const a=$("#mail");a.href="mailto:"+C.email;a.textContent=C.email}else $("#mail").replaceWith("E-mail professionnel : à compléter");
if(C.telephone){const a=$("#tel");a.href="tel:"+C.telephone.replace(/\s/g,"");a.textContent="Booking : "+C.telephone}else $("#tel").replaceWith("Numéro de booking : à compléter");
C.reseaux.forEach(r=>$("#reseaux").append(el("a",{href:safe(r.url),target:"_blank",rel:"noopener"},esc(r.nom))));
const f=$("#form"),st=$("#statut");
f.addEventListener("submit",async e=>{e.preventDefault();
 if(!f.checkValidity()){st.textContent="Merci de remplir le nom, un e-mail valide et le message.";f.reportValidity();return}
 const d=Object.fromEntries(new FormData(f));if(d._gotcha)return;
 if(C.formulaire){try{const r=await fetch(C.formulaire,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(d)});
  if(r.ok){f.reset();st.textContent="Merci, votre demande a bien été envoyée."}else throw 0}catch{st.textContent="Envoi impossible. Réessayez ou écrivez directement par e-mail."}return}
 if(!C.email){st.textContent="Le formulaire n'est pas encore configuré (voir README).";return}
 const corps=`Nom : ${d.nom}\nE-mail : ${d.email}\nOrganisation : ${d.organisation}\nÉvénement : ${d.type}\nDate : ${d.date}\n\n${d.message}`;
 location.href=`mailto:${C.email}?subject=${encodeURIComponent("Demande de booking JOYZ FIT")}&body=${encodeURIComponent(corps)}`;
 st.textContent="Votre logiciel e-mail s'ouvre pour finaliser l'envoi."});
})();
