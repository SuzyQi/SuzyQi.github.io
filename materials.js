function renderMaterialsProject(){
  const number=`${String(index+1).padStart(2,"0")} / ${String(projects.length).padStart(2,"0")}`;
  document.body.classList.add("materials-project-page");
  document.querySelector("main").innerHTML=`
    <header class="materials-hero">
      <figure class="materials-hero-art">
        <img src="assets/materials-cover.svg" alt="Illustrative plain-weave structure in warm neutral and green yarns" width="640" height="640">
        <figcaption>WEAVE STUDY · SCHEMATIC ILLUSTRATION</figcaption>
      </figure>
      <div class="materials-hero-copy">
        <span class="project-number">${number}</span>
        <p class="project-type">${project.type}</p>
        <h1>${project.title}</h1>
        <p class="materials-lead">${project.lead}</p>
        <div class="materials-tags"><span>Structure</span><span>Surface</span><span>Sampling</span></div>
        <div class="project-meta">
          <div><h2>My role</h2><p>${project.role}</p></div>
          <div><h2>Tools explored</h2><p>${project.tools}</p></div>
        </div>
        <a class="materials-explore" href="#material-studies">Explore the studies <span aria-hidden="true">↓</span></a>
      </div>
    </header>

    <nav class="materials-chapters" aria-label="Material research sections">
      <a href="#material-structure"><span>01</span> Structure</a>
      <a href="#material-surface"><span>02</span> Surface</a>
      <a href="#material-sampling"><span>03</span> Sampling</a>
    </nav>

    <section class="materials-overview" id="material-studies" aria-labelledby="materials-question">
      <p class="materials-eyebrow">THE RESEARCH QUESTION</p>
      <h2 id="materials-question">Between thread<br>and surface.</h2>
      <div>
        <p class="materials-question">How can a textile's structure and surface move between a physical sample, a digital material and a garment?</p>
        <p>${project.story}</p>
      </div>
    </section>

    <section class="materials-section materials-structure" id="material-structure" aria-labelledby="structure-title">
      <div class="materials-section-heading">
        <div><p class="materials-eyebrow">01 / STRUCTURE</p><h2 id="structure-title">Start with<br>the yarn.</h2></div>
        <div class="materials-section-copy">
          <p>Rhino / Grasshopper and Blender Geometry Nodes were explored to build editable yarn and fabric structures. Parametric models made it possible to revisit spacing and geometry, while moving between tools exposed challenges with detail loss and deformation.</p>
          <p class="materials-method">PARAMETRIC MODELLING · REPEATED STRUCTURES</p>
        </div>
      </div>
      <div class="weave-lab">
        <figure class="weave-study">
          <div class="weave-study-view" id="weave-viewer">${createWeaveSvg(12,.38,"weave-live")}</div>
          <figcaption><span><i class="warp-key" aria-hidden="true"></i>Warp</span><span><i class="weft-key" aria-hidden="true"></i>Weft</span><span>Plain-weave schematic</span></figcaption>
        </figure>
        <div class="weave-controls">
          <p class="materials-eyebrow">EXPLORE THE STRUCTURE</p>
          <h3>A small change.<br>A different surface.</h3>
          <p>Adjust the yarn count and relative width to examine the crossing pattern.</p>
          <div class="weave-control">
            <label for="weave-count">Yarns per direction <output id="weave-count-value" for="weave-count">12</output></label>
            <input id="weave-count" type="range" min="8" max="20" step="1" value="12">
          </div>
          <div class="weave-control">
            <label for="weave-width">Relative yarn width <output id="weave-width-value" for="weave-width">38%</output></label>
            <input id="weave-width" type="range" min="20" max="60" step="1" value="38" aria-describedby="weave-width-help">
            <p id="weave-width-help" class="weave-control-help">Width as a proportion of the space between yarn centres.</p>
          </div>
          <div class="weave-presets" role="group" aria-label="Weave diagram presets">
            <button type="button" data-count="12" data-width="38" aria-pressed="true">Balanced</button>
            <button type="button" data-count="10" data-width="24" aria-pressed="false">Open</button>
            <button type="button" data-count="18" data-width="46" aria-pressed="false">Fine</button>
          </div>
          <p class="weave-illustration-note">Interactive structural illustration · no physical scale.</p>
        </div>
      </div>
    </section>

    <section class="materials-section materials-surface" id="material-surface" aria-labelledby="surface-title">
      <div class="materials-section-heading">
        <div><p class="materials-eyebrow">02 / SURFACE</p><h2 id="surface-title">Translate<br>the detail.</h2></div>
        <div class="materials-section-copy"><p>Scanning, image-based reconstruction and procedural materials offered different ways to translate a textile. Richly patterned fabrics made colour, relief and repeat especially important: a convincing overall impression did not always preserve the original surface detail.</p></div>
      </div>
      <div class="materials-methods">
        <article><span>01</span><h3>Capture &amp; compare</h3><p>Substance Sampler was explored for image-based reconstruction. Loss of detail and limited colour control became reasons to compare other approaches.</p><p class="materials-method">SUBSTANCE SAMPLER</p></article>
        <article><span>02</span><h3>Build the surface</h3><p>Substance Designer exploration brought procedural material development, textile structure and texture maps into the same investigation.</p><p class="materials-method">SUBSTANCE DESIGNER</p></article>
        <article><span>03</span><h3>See it in context</h3><p>CLO3D and Blender connected digital materials to virtual garments and rendered scenes, extending the study beyond an isolated surface.</p><p class="materials-method">CLO3D · BLENDER</p></article>
      </div>
      <aside class="materials-reflection"><p class="materials-eyebrow">REFLECTION</p><p>Visual similarity, editability and transfer between software were separate challenges. Comparing methods made those differences visible.</p></aside>
    </section>

    <section class="materials-section materials-sampling" id="material-sampling" aria-labelledby="sampling-title">
      <div class="materials-section-heading">
        <div><p class="materials-eyebrow">03 / SAMPLING</p><h2 id="sampling-title">Return to<br>the physical.</h2></div>
        <div class="materials-section-copy"><p>A cooling-fabric study connected digital exploration with physical making. Research into fibres and textile structures informed an open structure inspired by leno weaving. A cotton alternative was produced and compared with a conventional fabric, bringing the investigation back to physical samples.</p></div>
      </div>
      <ol class="materials-sampling-notes">
        <li><span>01</span><div><h3>Investigate</h3><p>Compare natural and synthetic fibres alongside different fabric structures.</p></div></li>
        <li><span>02</span><div><h3>Make</h3><p>Develop digital textile structures and physical samples, including a cotton alternative.</p></div></li>
        <li><span>03</span><div><h3>Compare</h3><p>Examine cooling behaviour through physical comparison, then connect material decisions to garment making.</p></div></li>
      </ol>
    </section>

    <a class="next-project materials-related-link" href="project.html?id=${next.id}">
      <div><span>NEXT PROJECT / RELATED APPLICATION</span><strong>${next.title} →</strong><p>Explore textile research in a digital garment and fashion film project.</p></div>
      <img src="assets/yunjin-hero.webp" alt="Digital Yunjin garment in a virtual lotus garden" width="640" height="480" loading="lazy" decoding="async">
    </a>
  `;
  bindWeaveStudy();
}

function bindWeaveStudy(){
  const countInput=document.querySelector("#weave-count");
  const widthInput=document.querySelector("#weave-width");
  const viewer=document.querySelector("#weave-viewer");
  const countValue=document.querySelector("#weave-count-value");
  const widthValue=document.querySelector("#weave-width-value");
  const presets=[...document.querySelectorAll(".weave-presets button")];
  const update=()=>{
    const count=Number(countInput.value),width=Number(widthInput.value);
    viewer.innerHTML=createWeaveSvg(count,width/100,"weave-live");
    countValue.value=String(count);
    widthValue.value=`${width}%`;
    presets.forEach(button=>button.setAttribute("aria-pressed",String(Number(button.dataset.count)===count&&Number(button.dataset.width)===width)));
  };
  countInput.addEventListener("input",update);
  widthInput.addEventListener("input",update);
  presets.forEach(button=>button.addEventListener("click",()=>{
    countInput.value=button.dataset.count;
    widthInput.value=button.dataset.width;
    update();
  }));
}

function createWeaveSvg(yarnCount,relativeWidth,prefix="weave"){
  const count=Math.max(8,Math.min(20,Math.round(Number(yarnCount)||12)));
  const ratio=Math.max(.2,Math.min(.6,Number(relativeWidth)||.38));
  const margin=48,size=544,pitch=size/count,width=pitch*ratio;
  const n=value=>Number(value.toFixed(2));
  const parts=[];
  for(let column=0;column<count;column++){
    const x=margin+(column+.5)*pitch;
    parts.push(`<rect x="${n(x-width/2)}" y="${margin}" width="${n(width)}" height="${size}" rx="${n(width/3)}" fill="url(#${prefix}-warp)"/>`);
    parts.push(`<path d="M${n(x-width*.15)} ${margin}V${margin+size}" stroke="#fff5dc" stroke-opacity=".3" stroke-width=".7"/>`);
  }
  for(let row=0;row<count;row++){
    const y=margin+(row+.5)*pitch;
    parts.push(`<rect x="${margin}" y="${n(y-width/2)}" width="${size}" height="${n(width)}" rx="${n(width/3)}" fill="url(#${prefix}-weft)"/>`);
    parts.push(`<path d="M${margin} ${n(y-width*.15)}H${margin+size}" stroke="#d9e1d6" stroke-opacity=".25" stroke-width=".7"/>`);
  }
  for(let row=0;row<count;row++)for(let column=0;column<count;column++){
    if((row+column)%2!==0)continue;
    const x=margin+(column+.5)*pitch,y=margin+(row+.5)*pitch;
    parts.push(`<rect x="${n(x-width/2-1)}" y="${n(y-width*.65)}" width="${n(width+2)}" height="${n(width*1.3)}" rx="1" fill="#101815" opacity=".2"/>`);
    parts.push(`<rect x="${n(x-width/2)}" y="${n(y-width*.8)}" width="${n(width)}" height="${n(width*1.6)}" fill="url(#${prefix}-warp)"/>`);
    parts.push(`<path d="M${n(x-width*.15)} ${n(y-width*.8)}V${n(y+width*.8)}" stroke="#fff5dc" stroke-opacity=".3" stroke-width=".7"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" role="img" aria-labelledby="${prefix}-title"><title id="${prefix}-title">Plain-weave schematic with ${count} yarns per direction</title><defs><linearGradient id="${prefix}-warp"><stop stop-color="#8e7653"/><stop offset=".42" stop-color="#dbcaab"/><stop offset=".7" stop-color="#bea67d"/><stop offset="1" stop-color="#8e7653"/></linearGradient><linearGradient id="${prefix}-weft" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#2b3c35"/><stop offset=".42" stop-color="#7e8c7e"/><stop offset=".7" stop-color="#526454"/><stop offset="1" stop-color="#2b3c35"/></linearGradient></defs><rect width="640" height="640" fill="#e4dbc8"/><rect x="24" y="24" width="592" height="592" fill="none" stroke="#bcae91" stroke-width=".75"/>${parts.join("")}</svg>`;
}
