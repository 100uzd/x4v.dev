(function(){
  const t=new Date("May 6, 2025 00:00:00").getTime();
  function u(){
    const n=Date.now(),e=t-n;
    if(e<0){d.innerHTML="live!";return}
    const a=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),
          r=Math.floor(e%36e5/6e4),i=Math.floor(e%6e4/1e3);
    l("da",a);l("h",o);l("m",r);l("s",i)
  }
  function l(n,e){
    const a=document.getElementById(n),o=+a.textContent;
    if(o!==e){
      a.classList.add("fade");
      setTimeout(()=>{a.textContent=String(e).padStart(2,"0");a.classList.remove("fade")},200)
    }
  }
  setInterval(u,1e3);u();

  document.addEventListener("mousemove",p);
  function p(e){
    const x=e.clientX/window.innerWidth*30,
          y=e.clientY/window.innerHeight*30;
    document.body.style.backgroundPosition=`${50-x}% ${50-y}%`
  }

  document.querySelectorAll(".e").forEach(el=>{
    el.addEventListener("mousemove",m);
    el.addEventListener("mouseleave",c);
  });
  function m(e){
    const r=e.currentTarget.getBoundingClientRect(),
          x=e.clientX-r.left,y=e.clientY-r.top,
          cx=r.width/2,cy=r.height/2,
          dx=(x-cx)/cx*10,dy=(y-cy)/cy*10;
    e.currentTarget.style.transform=`rotateX(${-dy}deg) rotateY(${dx}deg) scale(1.05)`
  }
  function c(e){e.currentTarget.style.transform=""}
})();
