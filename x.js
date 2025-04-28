const t=new Date("May 6, 2025 00:00:00").getTime();
function u(){const n=new Date().getTime(),e=t-n;if(e<0){document.getElementById("d").innerHTML="live!";return}const a=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),r=Math.floor(e%36e5/6e4),i=Math.floor(e%6e4/1e3);l("da",a);l("h",o);l("m",r);l("s",i)}
function l(n,e){const a=document.getElementById(n),o=parseInt(a.textContent,10);o!==e&&(a.classList.add("fade"),setTimeout(()=>{a.textContent=String(e).padStart(2,"0");a.classList.remove("fade")},200))}
setInterval(u,1e3);
u();
