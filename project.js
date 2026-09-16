const projects=[
{id:"yunjin",title:"Digital Yunjin",type:"Digital heritage · 3D fashion film",lead:"A Fleeting Illusion reframes Nanjing Yunjin brocade as a living digital material archive.",role:"Research, interviews, digital textile development, 3D garment design and film.",tools:"CLO3D, Blender, Substance Designer, Rhino, Grasshopper and NunoX.",story:"Digital Yunjin is an MA project presented under the title A Fleeting Illusion. It investigates how digital methods can help preserve and renew Nanjing Yunjin, a UNESCO-recognised brocade tradition. Interviews and comparative research informed experiments in scanning, procedural material creation and 3D garment development. The outcome connects a digital textile library, virtual garments and the moving-image work Dreams in Yunjin Brocade.",art:`<figure class="art art-yunjin media-art"><img src="assets/yunjin-hero.webp" alt="Digital Yunjin garment in a virtual lotus garden"><span class="media-shade"></span><small>DIGITAL YUNJIN</small></figure>`},
{id:"burden",title:"Burden",type:"Fashion · visual storytelling",lead:"A garment-led exploration of childbirth, pressure and physical memory.",role:"Concept, research, garment design, pattern development, styling and visual direction.",tools:"Pattern cutting, sewing, Photoshop, Illustrator and InDesign.",story:"Burden uses silhouette, restriction, weight and image-making to explore an intimate experience often kept outside public view. Material decisions and garment construction became a language for vulnerability, pressure and strength.",art:`<figure class="art art-burden"><span class="body-line body-one"></span><span class="body-line body-two"></span><strong>BURDEN</strong><small>BODY / MEMORY</small></figure>`},
{id:"cad",title:"Technical Space",type:"CAD · architectural drawing",lead:"Plans, sections and details that make construction logic legible.",role:"CAD modelling, drawing production, material research and visual coordination.",tools:"AutoCAD Architecture, Rhino, Adobe Illustrator and standards research.",story:"An evolving body of residential and heritage work connecting spatial understanding, material assemblies and regulatory communication. Drawings are treated as precise visual systems: each line should explain how a building is organised, supported and made.",art:`<figure class="art art-cad"><svg viewBox="0 0 320 440"><path d="M35 350V130l90-55 90 55v220M215 350V130l62 40v180M35 130h180M125 75v275M20 372h275M16 102h8v264h-8M300 102h-8v264h8"/></svg><small>DRAWING / ASSEMBLY</small></figure>`},
{id:"xuqi",title:"XUQI Associates",type:"Identity · web communication",lead:"A precise, restrained digital identity for a Cambridge engineering practice.",role:"Information architecture, web design, service copy, visual identity and implementation.",tools:"Figma, Photoshop, Illustrator, HTML, CSS, JavaScript and GitHub Pages.",story:"The project translates architectural and structural engineering services into a calm, accessible client experience. Its editorial hierarchy, image system and written language balance technical authority with the practical needs of residential clients.",art:`<figure class="art art-xuqi"><span class="arch"></span><strong>XUQI</strong><small>WEB / VISUAL IDENTITY</small></figure>`},
{id:"materials",title:"Material Experiments",type:"Research · surfaces · process",lead:"A collection of tactile studies across physical and digital surfaces.",role:"Material research, sampling, surface development and digital translation.",tools:"Substance Designer, Photoshop, textile sampling and 3D workflows.",story:"These studies sit between archive, workshop and screen. They test how texture, colour, structure and light change when a material moves between physical sampling and digital simulation.",art:`<figure class="art art-materials"><span class="sample sample-one"></span><span class="sample sample-two"></span><span class="sample sample-three"></span><small>MATERIAL / PROCESS</small></figure>`}
];
const params=new URLSearchParams(location.search),requested=params.get("id"),index=Math.max(0,projects.findIndex(project=>project.id===requested)),project=projects[index],next=projects[(index+1)%projects.length];
document.title=`${project.title} — Xixian Qi`;document.querySelector("#project-number").textContent=`${String(index+1).padStart(2,"0")} / ${String(projects.length).padStart(2,"0")}`;document.querySelector("#project-title").textContent=project.title;document.querySelector("#project-type").textContent=project.type;document.querySelector("#project-lead").textContent=project.lead;document.querySelector("#project-role").textContent=project.role;document.querySelector("#project-tools").textContent=project.tools;document.querySelector("#project-story").textContent=project.story;document.querySelector("#project-art").innerHTML=project.art;document.querySelector("#next-project").href=`project.html?id=${next.id}`;document.querySelector("#next-title").textContent=`${next.title} →`;
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
