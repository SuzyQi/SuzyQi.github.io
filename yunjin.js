function renderYunjinProject(){
  document.title="A Fleeting Illusion — Xixian Qi";
  document.body.classList.add("yunjin-project-page");
  document.querySelector("main").innerHTML=`
    <section class="yunjin-opening" aria-labelledby="yunjin-title">
      <div class="yunjin-dream-stage">
        <img class="yunjin-dream-image" src="assets/yunjin-hero.webp" alt="Digital Yunjin garment in a dreamlike lotus garden" width="1920" height="1080" fetchpriority="high" decoding="async">
        <div class="yunjin-dream-fragment fragment-one" aria-hidden="true"></div>
        <div class="yunjin-dream-fragment fragment-two" aria-hidden="true"></div>
        <div class="yunjin-dream-mist" aria-hidden="true"></div>
        <svg class="yunjin-dream-threads" viewBox="0 0 1600 1000" preserveAspectRatio="none" aria-hidden="true"><path d="M-100 770C180 80 420 900 780 370S1360 50 1740 580M-100 790C190 110 440 920 800 390S1380 70 1760 600M-100 810C200 140 460 940 820 410S1400 90 1780 620M-200 260C300 780 540 40 930 620S1440 980 1710 220"/></svg>
        <div class="yunjin-dream-shade" aria-hidden="true"></div>
        <div class="yunjin-opening-note"><span>01 / 05 · DIGITAL YUNJIN</span><span>TEXTILE · MEMORY · MOVING IMAGE</span></div>
        <div class="yunjin-opening-copy">
          <p class="yunjin-eyebrow">A DIGITAL FASHION PROJECT</p>
          <h1 id="yunjin-title">A Fleeting<br><em>Illusion</em></h1>
          <p class="yunjin-chinese-title" lang="zh-CN">云锦浮梦 · 一场转瞬即逝的幻象</p>
          <p class="yunjin-opening-lead">A textile, a garment,<br>a landscape of memory.</p>
          <div class="yunjin-opening-links"><a href="#yunjin-overview">Explore the project <span aria-hidden="true">↓</span></a><a href="#yunjin-film">Watch the final film <span aria-hidden="true">↗</span></a></div>
        </div>
        <p class="yunjin-dream-caption" id="yunjin-dream-caption">A garden in fragments</p>
      </div>
    </section>

    <nav class="yunjin-chapters" aria-label="Digital Yunjin project sections">
      <a href="#yunjin-overview"><span>01</span> The origin</a><a href="#yunjin-material"><span>02</span> The translation</a><a href="#yunjin-garment"><span>03</span> The garment</a><a href="#yunjin-film"><span>04</span> The film</a>
    </nav>

    <section class="yunjin-overview yunjin-section" id="yunjin-overview" aria-labelledby="yunjin-origin-title">
      <div><p class="yunjin-eyebrow">01 / THE ORIGIN</p><h2 id="yunjin-origin-title">A memory,<br><em>reimagined.</em></h2><p class="yunjin-project-context">MA Innovative Fashion Production<br>London College of Fashion, UAL</p></div>
      <div class="yunjin-prose"><p class="yunjin-statement">How can the material and cultural memory of Nanjing Yunjin take on a new life in a virtual world?</p><p>A Fleeting Illusion explores this question through digital material construction, virtual garments and moving image. The project brings the visual language of Yunjin into a setting shaped by memory and imagination.</p><p>Jiangnan gardens, screens, historic interiors and the qipao become elements of a dreamlike composition. Textile development and visual storytelling meet within the same project.</p></div>
    </section>

    <section class="yunjin-material yunjin-section" id="yunjin-material" aria-labelledby="yunjin-material-title">
      <div class="yunjin-section-heading"><div><p class="yunjin-eyebrow">02 / THE TRANSLATION</p><h2 id="yunjin-material-title">From woven surface<br>to <em>digital dress.</em></h2></div><p>Material development connects the traditional textile with a virtual garment. Surface, silhouette and setting are considered together.</p></div>
      <div class="yunjin-process">
        <article><span>01</span><h3>Construct the material</h3><p>Substance Designer was used to explore the digital construction and texture recreation of traditional Yunjin, preparing a material for use on virtual garments.</p><p class="yunjin-tool-label">SUBSTANCE DESIGNER</p></article>
        <article><span>02</span><h3>Shape the garment</h3><p>Digital textile development connects with virtual garment design, allowing the material to be considered in relation to dress and silhouette.</p><p class="yunjin-tool-label">CLO3D</p></article>
        <article><span>03</span><h3>Build the encounter</h3><p>Garment, lighting and environment come together in a virtual scene, extending the material study into a moving-image narrative.</p><p class="yunjin-tool-label">BLENDER · VIRTUAL SCENE</p></article>
      </div>
      <p class="yunjin-material-note">For wider investigations into textile structure and digital material workflows, explore <a href="project.html?id=materials">Material Experiments <span aria-hidden="true">↗</span></a>.</p>
    </section>

    <section class="yunjin-garment" id="yunjin-garment" aria-labelledby="yunjin-garment-title">
      <figure><img src="assets/yunjin-cover.webp" alt="Virtual garment from Digital Yunjin, shown within the lotus garden scene" width="900" height="1200" loading="lazy" decoding="async"><figcaption>DIGITAL GARMENT · PROJECT STILL</figcaption></figure>
      <div class="yunjin-garment-copy"><p class="yunjin-eyebrow">03 / THE GARMENT</p><h2 id="yunjin-garment-title">Dress within<br>a <em>dream.</em></h2><p>The virtual garment gives the digital material a form within the scene. Its presence connects the textile study to the surrounding garden, creating a relationship between dress, atmosphere and cultural memory.</p><div class="yunjin-credits"><div><h3>My role</h3><p>Research, digital textile development, virtual garment design and film.</p></div><div><h3>Tools in focus</h3><p>Substance Designer, CLO3D and Blender.</p></div></div></div>
    </section>

    <section class="yunjin-film yunjin-section" id="yunjin-film" aria-labelledby="yunjin-film-title">
      <div class="yunjin-section-heading"><div><p class="yunjin-eyebrow">04 / THE FINAL FILM</p><h2 id="yunjin-film-title">Enter the<br><em>dream.</em></h2></div><p>The final project film brings digital textile, virtual dress and a reimagined landscape together in a moving-image narrative.</p></div>
      <figure class="yunjin-video"><video id="yunjin-final-video" controls playsinline preload="metadata" width="1280" height="768" poster="assets/yunjin-hero.webp" data-hls-src="assets/yunjin-final/index.m3u8" aria-label="A Fleeting Illusion — final project film"><source src="assets/yunjin-final-film.mp4" type="video/mp4">Your browser does not support this video. <a href="assets/yunjin-final-film.mp4">Open the final project film</a>.</video><figcaption>A FLEETING ILLUSION · FINAL PROJECT FILM · 2:01</figcaption></figure>
      <div class="yunjin-youtube-heading"><h3>Watch on YouTube</h3><a href="https://www.youtube.com/watch?v=YjLEyzU4QaU" target="_blank" rel="noopener noreferrer">Open film <span aria-hidden="true">↗</span><span class="visually-hidden"> (opens in a new tab)</span></a></div>
      <div class="yunjin-youtube"><iframe src="https://www.youtube.com/embed/YjLEyzU4QaU" title="A Fleeting Illusion — Digital Yunjin" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      <div class="yunjin-reflection"><p class="yunjin-eyebrow">REFLECTION</p><p>The project approaches digitisation as a creative translation: carrying selected material and cultural characteristics into a virtual setting, while opening space for a new interpretation.</p></div>
    </section>

    <a class="next-project" href="project.html?id=${next.id}"><span>NEXT PROJECT</span><strong>${next.title} →</strong></a>
  `;
  bindYunjinDream();
  bindYunjinFilm();
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
    scale:(1.12-.12*p).toFixed(3),
    mist:(.5-.47*p).toFixed(3),
    fragments:(.24*(1-p)).toFixed(3),
    threadOffset:`${(1800*(1-p)).toFixed(1)}px`,
    threads:(.14+Math.sin(Math.PI*p)*.5).toFixed(3),
    caption:p<.33?"A garden in fragments":p<.66?"A thread of memory":"A garment emerges"
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
