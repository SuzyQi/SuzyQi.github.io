const projects=[
{id:"yunjin",title:"Digital Yunjin",type:"Digital heritage · 3D fashion film",lead:"A Fleeting Illusion reframes Nanjing Yunjin brocade as a living digital material archive.",role:"Research, interviews, digital textile development, 3D garment design and film.",tools:"CLO3D, Blender, Substance Designer, Rhino, Grasshopper and NunoX.",story:"Digital Yunjin is an MA project presented under the title A Fleeting Illusion. It investigates how digital methods can help preserve and renew Nanjing Yunjin, a UNESCO-recognised brocade tradition. Interviews and comparative research informed experiments in scanning, procedural material creation and 3D garment development. The outcome connects a digital textile library, virtual garments and the moving-image work Dreams in Yunjin Brocade.",art:`<figure class="art art-yunjin media-art"><img src="assets/yunjin-hero.webp" alt="Digital Yunjin garment in a virtual lotus garden"><span class="media-shade"></span><small>DIGITAL YUNJIN</small></figure>`},
{id:"burden",title:"Burden",type:"Fashion · visual storytelling",lead:"A garment-led exploration of childbirth, pressure and physical memory.",role:"Concept, research, garment design, pattern development, styling and visual direction.",tools:"Pattern cutting, sewing, Photoshop, Illustrator and InDesign.",story:"Burden uses silhouette, restriction, weight and image-making to explore an intimate experience often kept outside public view. Material decisions and garment construction became a language for vulnerability, pressure and strength.",art:`<figure class="art art-burden media-art"><img src="assets/burden-hero.webp" alt="Burden fashion project hero image"><span class="media-shade"></span><small>BURDEN</small></figure>`},
{id:"cad",title:"Technical Space",type:"CAD · architectural drawing",lead:"Plans, sections and details that make construction logic legible.",role:"CAD modelling, drawing production, material research and visual coordination.",tools:"AutoCAD Architecture, Rhino, Adobe Illustrator and standards research.",story:"An evolving body of residential and heritage work connecting spatial understanding, material assemblies and regulatory communication. Drawings are treated as precise visual systems: each line should explain how a building is organised, supported and made.",art:`<figure class="art art-cad media-art"><img src="assets/cad-hero.webp" alt="Technical Space CAD project hero image"><span class="media-shade"></span><small>TECHNICAL SPACE</small></figure>`},
{id:"xuqi",title:"XUQI Associates",type:"Website design · development",website:"https://www.xuqiassociates.co.uk/",cover:"assets/xuqi-cover.webp",coverAlt:"Blue botanical and bird pattern on a cream background",lead:"Website design and development for a Cambridge architectural and structural engineering practice.",role:"Information architecture, web design, service copy, visual identity and implementation.",tools:"Figma, Photoshop, Illustrator, HTML, CSS, JavaScript and GitHub Pages.",story:"The project translates architectural and structural engineering services into a calm, accessible client experience. Its editorial hierarchy, image system and written language balance technical authority with the practical needs of residential clients.",art:`<figure class="art art-xuqi"><span class="arch"></span><strong>XUQI</strong><small>WEB / VISUAL IDENTITY</small></figure>`},
{id:"materials",title:"Material Experiments",type:"Textile research · physical & digital",lead:"Exploring textile structure, surface and the translation between physical samples and digital materials.",role:"Material research, textile sampling, structural modelling and digital material exploration.",tools:"Substance Sampler, Substance Designer, Rhino / Grasshopper, Blender and CLO3D.",story:"Material Experiments brings together investigations into cooling textiles, editable yarn structures and digital surface development. Physical sampling and comparisons sit alongside explorations in parametric modelling, texture reconstruction and virtual garments.",art:`<figure class="art art-materials media-art"><img src="assets/materials-cover.svg" alt="Illustrative plain-weave structure in warm neutral and green yarns"><span class="media-shade"></span><small>TEXTILE / MATERIAL STUDIES</small></figure>`}
];
const params=new URLSearchParams(location.search),requested=params.get("id"),index=Math.max(0,projects.findIndex(project=>project.id===requested)),project=projects[index],next=projects[(index+1)%projects.length];
document.title=`${project.title} — Xixian Qi`;
if(project.website){
  renderWebsiteProject();
}else if(project.id==="materials"&&typeof renderMaterialsProject==="function"){
  renderMaterialsProject();
}else{
document.querySelector("#project-number").textContent=`${String(index+1).padStart(2,"0")} / ${String(projects.length).padStart(2,"0")}`;document.querySelector("#project-title").textContent=project.title;document.querySelector("#project-type").textContent=project.type;document.querySelector("#project-lead").textContent=project.lead;document.querySelector("#project-role").textContent=project.role;document.querySelector("#project-tools").textContent=project.tools;document.querySelector("#project-story").textContent=project.story;document.querySelector("#project-art").innerHTML=project.art;document.querySelector("#next-project").href=`project.html?id=${next.id}`;document.querySelector("#next-title").textContent=`${next.title} →`;
if(project.id==="yunjin")document.querySelector(".media-grid").innerHTML=`
  <div class="media-slot">
    <video controls autoplay muted loop playsinline poster="assets/yunjin-hero.webp">
      <source src="assets/yunjin-film.mp4" type="video/mp4">
    </video>
  </div>

  <div class="media-slot">
    <img src="assets/yunjin-hero.webp" alt="Digital Yunjin virtual runway scene">
  </div>

  <div class="media-slot youtube-slot">
    <iframe
      src="https://www.youtube.com/embed/YjLEyzU4QaU"
      title="A Fleeting Illusion — Digital Yunjin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  </div>
`;
if(project.id==="burden")document.querySelector(".media-grid").innerHTML=`
  <div class="media-slot"><img src="assets/burden-01.webp" alt="Burden project image 01"></div>
  <div class="media-slot"><img src="assets/burden-02.webp" alt="Burden project image 02"></div>
  <div class="media-slot"><img src="assets/burden-03.webp" alt="Burden project image 03"></div>
  <div class="media-slot"><img src="assets/burden-04.webp" alt="Burden project image 04"></div>
  <div class="media-slot"><img src="assets/burden-05.webp" alt="Burden project image 05"></div>
  <div class="media-slot"><img src="assets/burden-06.webp" alt="Burden project image 06"></div>
  <div class="media-slot"><img src="assets/burden-07.webp" alt="Burden project image 07"></div>
  <div class="media-slot"><img src="assets/burden-08.webp" alt="Burden project image 08"></div>
  <div class="media-slot"><img src="assets/burden-09.webp" alt="Burden project image 09"></div>
  <div class="media-slot"><img src="assets/burden-10.webp" alt="Burden project image 10"></div>
  <div class="media-slot"><img src="assets/burden-11.webp" alt="Burden project image 11"></div>
`;
if(project.id==="cad")document.querySelector(".media-grid").innerHTML=`
  <div class="media-slot"><img src="assets/cad-01.webp" alt="Technical Space project image 01"></div>
  <div class="media-slot"><img src="assets/cad-02.webp" alt="Technical Space project image 02"></div>
  <div class="media-slot"><img src="assets/cad-03.webp" alt="Technical Space project image 03"></div>
  <div class="media-slot"><img src="assets/cad-04.webp" alt="Technical Space project image 04"></div>
  <div class="media-slot"><img src="assets/cad-05.webp" alt="Technical Space project image 05"></div>
`;
}

function renderWebsiteProject(){
  const number=`${String(index+1).padStart(2,"0")} / ${String(projects.length).padStart(2,"0")}`;
  const host=new URL(project.website).hostname.replace(/^www\./,"");
  const cover=project.cover?`<figure class="website-project-cover"><img src="${project.cover}" alt="${project.coverAlt}" width="1024" height="1024" decoding="async"></figure>`:"";

  document.body.classList.add("website-project-page");
  document.querySelector("main").innerHTML=`
    <header class="website-project-heading${project.cover?" has-cover":""}">
      ${cover}
      <div class="website-project-heading-copy">
      <div class="website-project-kicker">
        <span class="project-number">${number}</span>
        <p class="project-type">${project.type}</p>
      </div>
      <h1 id="project-title">${project.title}</h1>
      <p class="website-project-lead">${project.lead}</p>
      </div>
    </header>

    <section class="website-preview" aria-label="Live website preview">
      <div class="website-preview-toolbar">
        <div class="website-window-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <span class="website-preview-address">${host}</span>
        <a class="website-open-link" href="${project.website}" target="_blank" rel="noopener noreferrer">
          Open website <span aria-hidden="true">↗</span><span class="visually-hidden"> (opens in a new tab)</span>
        </a>
      </div>
      <div class="website-preview-stage">
        <iframe
          src="${project.website}"
          title="XUQI Associates — live website"
          aria-describedby="website-preview-help"
          loading="eager"
          referrerpolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox">
        </iframe>
      </div>
      <p class="website-preview-caption" id="website-preview-help">
        <span class="website-live-dot" aria-hidden="true"></span>
        Scroll inside the preview and use its navigation to explore. You can also open the website in a new tab above.
      </p>
    </section>

    <section class="website-project-details" aria-labelledby="website-project-about">
      <div class="website-project-details-inner">
        <div class="website-project-summary">
          <h2 id="website-project-about">The project</h2>
          <p>${project.story}</p>
        </div>
        <div class="project-meta">
          <div><h2>My role</h2><p>${project.role}</p></div>
          <div><h2>Tools &amp; development</h2><p>${project.tools}</p></div>
        </div>
      </div>
    </section>

    <a class="next-project" href="project.html?id=${next.id}">
      <span>NEXT PROJECT</span><strong>${next.title} →</strong>
    </a>
  `;
}

