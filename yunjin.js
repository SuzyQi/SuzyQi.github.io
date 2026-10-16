const yunjinFilmFrames=[
  {src:"assets/yunjin-still-textile.webp",time:"00:15",title:"Pattern and dress",alt:"Close view of a patterned digital garment, framed by lotus leaves and flowers"},
  {src:"assets/yunjin-still-dress.webp",time:"00:55",title:"Colour in motion",alt:"A magenta virtual dress moving through an imagined garden"},
  {src:"assets/yunjin-still-garden.webp",time:"00:25",title:"An imagined garden",alt:"Layered green roofs and ornamental architecture in the film's virtual landscape"},
  {src:"assets/yunjin-still-surface.webp",time:"01:25",title:"The floral surface",alt:"Close view of pink and gold floral pattern across the side of a virtual garment"},
  {src:"assets/yunjin-still-front.webp",time:"01:35",title:"The front silhouette",alt:"Front view of a long virtual garment beside a screen and timber furniture"},
  {src:"assets/yunjin-still-back.webp",time:"01:45",title:"The back silhouette",alt:"Back view of a pink and grey virtual garment within a screen-lined interior"}
];

function renderYunjinProject(){
  document.title="Digital Yunjin — A Fleeting Illusion — Xixian Qi";
  document.body.classList.add("yunjin-project-page","yunjin-editorial-page");
  const frames=yunjinFilmFrames.map((frame,index)=>`
    <figure class="yunjin-still">
      <a class="yunjin-still-open" href="${frame.src}" data-yunjin-frame="${index}" aria-haspopup="dialog" aria-label="Enlarge ${frame.title.toLowerCase()}, film frame at ${frame.time}">
        <img src="${frame.src}" alt="${frame.alt}" width="1280" height="768" loading="lazy" decoding="async">
        <span class="yunjin-still-zoom" aria-hidden="true">↗</span>
      </a>
      <figcaption><span>${String(index+1).padStart(2,"0")} / ${frame.time}</span><p>${frame.title}</p></figcaption>
    </figure>`).join("");
  document.querySelector("main").innerHTML=`
    <section class="yunjin-opening" aria-labelledby="yunjin-title">
      <div class="yunjin-dream-stage">
        <img class="yunjin-dream-image" src="assets/yunjin-hero.webp" alt="Digital Yunjin garment in a dreamlike lotus garden" width="1920" height="1080" fetchpriority="high" decoding="async">
        <div class="yunjin-dream-mist" aria-hidden="true"></div>
        <svg class="yunjin-dream-threads" viewBox="0 0 1600 1000" preserveAspectRatio="none" aria-hidden="true"><path d="M-100 770C180 80 420 900 780 370S1360 50 1740 580M-100 790C190 110 440 920 800 390S1380 70 1760 600M-100 810C200 140 460 940 820 410S1400 90 1780 620"/></svg>
        <div class="yunjin-dream-shade" aria-hidden="true"></div>
        <div class="yunjin-opening-note"><span>DIGITAL YUNJIN / MA PROJECT</span><span>TEXTILE · FASHION · FILM</span></div>
        <div class="yunjin-opening-copy">
          <p class="yunjin-eyebrow">A DIGITAL FASHION PROJECT</p>
          <h1 id="yunjin-title">A Fleeting<br><em>Illusion</em></h1>
          <p class="yunjin-chinese-title" lang="zh-CN">云锦浮梦</p>
          <p class="yunjin-opening-lead">Nanjing Yunjin, reimagined through<br>digital textile, virtual dress and film.</p>
          <div class="yunjin-opening-links"><a class="yunjin-watch" href="#yunjin-film"><span aria-hidden="true">▶</span> Watch the final film <span class="yunjin-watch-time">2 min</span></a><a href="#yunjin-overview">About the project <span aria-hidden="true">↓</span></a></div>
        </div>
        <p class="yunjin-dream-caption" id="yunjin-dream-caption">A textile in a virtual world</p>
      </div>
    </section>

    <nav class="yunjin-chapters" aria-label="Digital Yunjin project sections">
      <a href="#yunjin-overview"><span>01</span> Overview</a><a href="#yunjin-film"><span>02</span> The film</a><a href="#yunjin-frames"><span>03</span> Selected frames</a><a href="#yunjin-material"><span>04</span> The making</a>
    </nav>

    <section class="yunjin-overview yunjin-section" id="yunjin-overview" aria-labelledby="yunjin-origin-title">
      <div><p class="yunjin-eyebrow">01 / THE PROJECT</p><h2 id="yunjin-origin-title">Woven into<br><em>a new world.</em></h2><p class="yunjin-project-context">MA Innovative Fashion Production<br>London College of Fashion, UAL</p></div>
      <div class="yunjin-prose"><p class="yunjin-statement">A Fleeting Illusion explores how the material and cultural memory of Nanjing Yunjin can take on a new form through digital fashion.</p><p>The visual language of brocade meets the qipao, Jiangnan gardens and historic interiors. Digital textile development, virtual garment design and moving image bring these references into an imagined world.</p>
        <dl class="yunjin-project-facts"><div><dt>My role</dt><dd>Research, digital textile development, virtual garment design and film.</dd></div><div><dt>Tools in focus</dt><dd>Substance Designer<br>CLO3D · Blender</dd></div></dl>
      </div>
    </section>

    <section class="yunjin-film yunjin-section" id="yunjin-film" aria-labelledby="yunjin-film-title">
      <div class="yunjin-section-heading"><div><p class="yunjin-eyebrow">02 / THE FINAL FILM</p><h2 id="yunjin-film-title">Enter the <em>dream.</em></h2></div><p>Digital textile, virtual dress and an imagined landscape come together in the project's final moving-image work.</p></div>
      <figure class="yunjin-video"><video id="yunjin-final-video" controls playsinline preload="metadata" width="1280" height="768" poster="assets/yunjin-hero.webp" data-hls-src="assets/yunjin-final/index.m3u8" aria-label="A Fleeting Illusion — final project film"><source src="assets/yunjin-final-film.mp4" type="video/mp4">Your browser does not support this video. <a href="assets/yunjin-final-film.mp4">Open the final project film</a>.</video><figcaption><span>A FLEETING ILLUSION · FINAL PROJECT FILM</span><span>2:01 · SOUND</span></figcaption></figure>
      <div class="yunjin-film-links"><a href="#yunjin-frames">Explore the film frames <span aria-hidden="true">↓</span></a><a href="https://www.youtube.com/watch?v=YjLEyzU4QaU" target="_blank" rel="noopener noreferrer">Project on YouTube <span aria-hidden="true">↗</span><span class="visually-hidden"> (opens in a new tab)</span></a></div>
    </section>

    <section class="yunjin-frames yunjin-section" id="yunjin-frames" aria-labelledby="yunjin-frames-title">
      <div class="yunjin-section-heading"><div><p class="yunjin-eyebrow">03 / SELECTED FRAMES</p><h2 id="yunjin-frames-title">Inside <em>the film.</em></h2></div><p>Material, silhouette and setting — six moments from the final film. Select a frame to look closer.</p></div>
      <div class="yunjin-stills-grid">${frames}</div>
    </section>

    <section class="yunjin-making yunjin-section" id="yunjin-material" aria-labelledby="yunjin-material-title">
      <div class="yunjin-making-heading"><p class="yunjin-eyebrow">04 / THE MAKING</p><h2 id="yunjin-material-title">From textile<br>to <em>an imagined world.</em></h2></div>
      <div class="yunjin-making-grid">
        <figure class="yunjin-making-still" id="yunjin-garment"><img src="assets/yunjin-cover.webp" alt="Virtual garment from Digital Yunjin within the lotus garden scene" width="900" height="1200" loading="lazy" decoding="async"><figcaption>DIGITAL GARMENT · PROJECT STILL</figcaption></figure>
        <div class="yunjin-making-copy">
          <ol class="yunjin-making-steps">
            <li><span>01</span><div><h3>Construct the material</h3><p>Developing the digital construction and surface of Yunjin for use on virtual garments.</p><p class="yunjin-tool-label">SUBSTANCE DESIGNER</p></div></li>
            <li><span>02</span><div><h3>Shape the garment</h3><p>Bringing the textile into virtual dress, considering how its pattern reads across the garment's silhouette.</p><p class="yunjin-tool-label">CLO3D</p></div></li>
            <li><span>03</span><div><h3>Compose the scene</h3><p>Combining garment, lighting and environment, with gardens, screens and historic interiors forming the setting for the film.</p><p class="yunjin-tool-label">BLENDER · MOVING IMAGE</p></div></li>
          </ol>
          <p class="yunjin-material-note">Explore wider textile structure and material workflows in <a href="project.html?id=materials">Material Experiments <span aria-hidden="true">↗</span></a>.</p>
        </div>
      </div>
    </section>

    <section class="yunjin-closing yunjin-section" aria-labelledby="yunjin-reflection-title"><h2 class="yunjin-eyebrow" id="yunjin-reflection-title">REFLECTION</h2><p>The project approaches digitisation as a creative translation. Traditional visual references find a new expression through material, movement and imagined space.</p><a href="#yunjin-film">Return to the film <span aria-hidden="true">↑</span></a></section>
    <a class="next-project" href="project.html?id=${next.id}"><span>NEXT PROJECT</span><strong>${next.title} →</strong></a>

    <dialog class="yunjin-lightbox" id="yunjin-gallery-dialog" aria-labelledby="yunjin-lightbox-title" aria-describedby="yunjin-lightbox-caption">
      <h2 id="yunjin-lightbox-title" class="visually-hidden">Selected frames from A Fleeting Illusion</h2>
      <div class="yunjin-lightbox-toolbar"><span id="yunjin-lightbox-count" aria-live="polite" aria-atomic="true"></span><button type="button" data-yunjin-gallery-close autofocus>Close <span aria-hidden="true">×</span></button></div>
      <img id="yunjin-lightbox-image" alt="" width="1280" height="768">
      <div class="yunjin-lightbox-bottom"><p id="yunjin-lightbox-caption"></p><div class="yunjin-lightbox-navigation"><button type="button" data-yunjin-gallery-prev aria-label="Previous film frame">←</button><button type="button" data-yunjin-gallery-next aria-label="Next film frame">→</button></div></div>
    </dialog>
  `;
  bindYunjinDream();
  bindYunjinFilm();
  bindYunjinGallery();
}

function bindYunjinGallery(){
  const dialog=document.querySelector("#yunjin-gallery-dialog");
  if(!dialog||typeof dialog.showModal!=="function")return;
  const image=dialog.querySelector("#yunjin-lightbox-image");
  const caption=dialog.querySelector("#yunjin-lightbox-caption");
  const count=dialog.querySelector("#yunjin-lightbox-count");
  const links=document.querySelectorAll("[data-yunjin-frame]");
  let current=0,trigger=null;
  const show=index=>{
    current=(index+yunjinFilmFrames.length)%yunjinFilmFrames.length;
    const frame=yunjinFilmFrames[current];
    image.src=frame.src;image.alt=frame.alt;
    caption.textContent=`${frame.title} · ${frame.time}`;
    count.textContent=`${current+1} / ${yunjinFilmFrames.length}`;
  };
  links.forEach((link,index)=>link.addEventListener("click",event=>{
    if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||(event.button!==undefined&&event.button!==0))return;
    event.preventDefault();trigger=link;show(index);dialog.showModal();
    document.body.classList.add("yunjin-gallery-open");
  }));
  dialog.querySelector("[data-yunjin-gallery-close]").addEventListener("click",()=>dialog.close());
  dialog.querySelector("[data-yunjin-gallery-prev]").addEventListener("click",()=>show(current-1));
  dialog.querySelector("[data-yunjin-gallery-next]").addEventListener("click",()=>show(current+1));
  dialog.addEventListener("keydown",event=>{
    if(event.key==="ArrowLeft"||event.key==="ArrowRight"){event.preventDefault();show(current+(event.key==="ArrowLeft"?-1:1));}
  });
  dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});
  dialog.addEventListener("close",()=>{document.body.classList.remove("yunjin-gallery-open");if(trigger)trigger.focus({preventScroll:true});});
}


function bindYunjinFilm(){
  const video=document.querySelector("#yunjin-final-video");
  if(!video)return;
  const stream=video.getAttribute("data-hls-src");
  const fallback=video.querySelector("source").getAttribute("src");
  const playFallback=(resume=!video.paused,time=video.currentTime||0)=>{
    if(time)video.addEventListener("loadedmetadata",()=>{video.currentTime=Math.min(time,video.duration||time);},{once:true});
    video.src=fallback;
    video.load();
    if(resume){const playing=video.play();if(playing&&playing.catch)playing.catch(()=>{});}
  };
  if(video.canPlayType("application/vnd.apple.mpegurl")){
    video.addEventListener("error",()=>playFallback(),{once:true});
    video.src=stream;
    return;
  }
  const loadPlayer=()=>{
    const upgrade=()=>{
      if(!window.Hls||!window.Hls.isSupported()||!video.paused||video.currentTime>0)return;
      const hls=new window.Hls({autoStartLoad:false,maxBufferLength:20,maxMaxBufferLength:40,backBufferLength:20});
      let restored=false;
      const start=()=>hls.startLoad();
      hls.on(window.Hls.Events.ERROR,(_,data)=>{
        if(!data.fatal||restored)return;
        restored=true;
        const resume=!video.paused;
        const time=video.currentTime||0;
        video.removeEventListener("play",start);
        hls.destroy();
        playFallback(resume,time);
      });
      video.addEventListener("play",start,{once:true});
      hls.loadSource(stream);
      hls.attachMedia(video);
      window.addEventListener("pagehide",event=>{if(!event.persisted)hls.destroy();},{once:true});
    };
    if(window.Hls){upgrade();return;}
    const script=document.createElement("script");
    script.src="https://cdn.jsdelivr.net/npm/hls.js@1.7.3/dist/hls.light.min.js";
    script.async=true;
    script.crossOrigin="anonymous";
    script.onload=upgrade;
    document.head.appendChild(script);
  };
  if(window.IntersectionObserver){
    const observer=new window.IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting)){observer.disconnect();loadPlayer();}
    },{rootMargin:"600px"});
    observer.observe(video);
  }else loadPlayer();
}

function yunjinDreamState(progress){
  const p=Math.max(0,Math.min(1,Number(progress)||0));
  return {
    scale:(1.035-.035*p).toFixed(3),
    mist:(.16-.14*p).toFixed(3),
    fragments:"0",
    threadOffset:`${(1800*(1-p)).toFixed(1)}px`,
    threads:(.08+Math.sin(Math.PI*p)*.08).toFixed(3),
    caption:p<.33?"A textile in a virtual world":p<.66?"A thread of memory":"A world in motion"
  };
}

function bindYunjinDream(){
  if(!window.matchMedia||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const opening=document.querySelector(".yunjin-opening");
  const stage=document.querySelector(".yunjin-dream-stage");
  const caption=document.querySelector("#yunjin-dream-caption");
  if(!opening||!stage||!caption)return;
  let pending=0;
  const draw=()=>{
    pending=0;
    const bounds=opening.getBoundingClientRect();
    const distance=Math.max(1,bounds.height-Math.max(1,window.innerHeight-72));
    const state=yunjinDreamState((72-bounds.top)/distance);
    stage.style.setProperty("--dream-scale",state.scale);
    stage.style.setProperty("--mist-opacity",state.mist);
    stage.style.setProperty("--fragment-opacity",state.fragments);
    stage.style.setProperty("--thread-offset",state.threadOffset);
    stage.style.setProperty("--thread-opacity",state.threads);
    caption.textContent=state.caption;
  };
  const schedule=()=>{if(!pending)pending=window.requestAnimationFrame(draw);};
  window.addEventListener("scroll",schedule,{passive:true});
  window.addEventListener("resize",schedule);
  window.addEventListener("pagehide",()=>{if(pending)window.cancelAnimationFrame(pending);pending=0;});
  draw();
}
