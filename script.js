const cylinder=document.querySelector("#cylinder"),scene=document.querySelector("#scene"),frames=[...document.querySelectorAll(".frame")],title=document.querySelector("#active-title"),type=document.querySelector("#active-type"),counter=document.querySelector("#counter"),titleBlock=document.querySelector(".gallery-title");
const total=frames.length,step=360/total; let current=0,target=0,currentRotation=0,startX=0,startRotation=0,dragging=false,moved=false,animationFrame;
frames.forEach((frame,index)=>frame.style.setProperty("--angle",`${index*step}deg`));
function setRadius(){const radius=innerWidth<800?Math.max(225,Math.min(innerWidth*.76,330)):Math.max(390,Math.min(innerWidth*.37,620));cylinder.style.setProperty("--radius",`${radius}px`)}
function normaliseIndex(rotation){return((Math.round(-rotation/step)%total)+total)%total}
function updateLabel(index){if(index===current&&title.textContent===frames[index].dataset.title)return;current=index;titleBlock.classList.add("changing");setTimeout(()=>{title.textContent=frames[index].dataset.title;type.textContent=frames[index].dataset.type;counter.textContent=`${String(index+1).padStart(2,"0")} / ${String(total).padStart(2,"0")}`;frames.forEach((frame,i)=>frame.classList.toggle("is-active",i===index));titleBlock.classList.remove("changing")},130)}
function animate(){currentRotation+=(target-currentRotation)*.095;if(Math.abs(target-currentRotation)<.001)currentRotation=target;cylinder.style.setProperty("--rotation",`${currentRotation}deg`);updateLabel(normaliseIndex(currentRotation));animationFrame=requestAnimationFrame(animate)}
setRadius();frames[0].classList.add("is-active");animate();addEventListener("resize",setRadius);
function startDrag(x){dragging=true;moved=false;startX=x;startRotation=target;document.body.classList.add("is-dragging")}
function moveDrag(x){if(!dragging)return;const distance=x-startX;moved=moved||Math.abs(distance)>7;target=startRotation+distance*.22}
function endDrag(){if(!dragging)return;dragging=false;document.body.classList.remove("is-dragging");target=Math.round(target/step)*step}
scene.addEventListener("pointerdown",e=>{scene.setPointerCapture(e.pointerId);startDrag(e.clientX)});scene.addEventListener("pointermove",e=>moveDrag(e.clientX));scene.addEventListener("pointerup",endDrag);scene.addEventListener("pointercancel",endDrag);
frames.forEach(frame=>frame.addEventListener("click",event=>{if(moved)event.preventDefault()}));
addEventListener("wheel",event=>{event.preventDefault();const delta=Math.abs(event.deltaX)>Math.abs(event.deltaY)?event.deltaX:event.deltaY;target-=delta*.12;clearTimeout(window.wheelSnapTimer);window.wheelSnapTimer=setTimeout(()=>target=Math.round(target/step)*step,120)},{passive:false});
function rotateBy(direction){target=Math.round(target/step)*step+direction*step}
document.querySelector("#previous").addEventListener("click",()=>rotateBy(1));document.querySelector("#next").addEventListener("click",()=>rotateBy(-1));
addEventListener("keydown",event=>{if(event.key==="ArrowLeft")rotateBy(1);if(event.key==="ArrowRight")rotateBy(-1);if(event.key==="Enter")frames[current].click()});
const dot=document.querySelector(".cursor-dot"),ring=document.querySelector(".cursor-ring");if(matchMedia("(pointer:fine)").matches){addEventListener("pointermove",event=>{dot.style.left=ring.style.left=`${event.clientX}px`;dot.style.top=ring.style.top=`${event.clientY}px`});document.querySelectorAll("a,button").forEach(el=>{el.addEventListener("pointerenter",()=>ring.classList.add("active"));el.addEventListener("pointerleave",()=>ring.classList.remove("active"))})}
addEventListener("pagehide",()=>cancelAnimationFrame(animationFrame));
