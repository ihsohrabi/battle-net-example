(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();let l=`<div id="gamesContainer" class="w-full p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-[402px] [&>*]:bg-slate-800 bg-slate-900 ">
    </div>`,c=async()=>{let i=(await(await fetch("https://ihsohrabi.github.io/battle-net-api-example/db.json")).json()).map(t=>` <div class="relative">
          <img class="w-full h-[175px] object-cover" src="${t.image}" alt="${t.gameTitle}"/>
          <div class="flex p-2 gap-2 items-center">
            <img class="w-[30px] h-[30px] object-contain" src="${t.icon}" alt="${t.gameTitle}"/>
            <span class="font-bold text-slate-200">${t.gameName}</span>
          </div>
          <h2 class="px-4 line-clamp-2 text-slate-300 font-bold text-[20px]">${t.gameTitle}</h2>
          <p class="text-yellow-300 text-[14px] font-thin px-2 line-clamp-3 my-1">
           ${t.desc}
          </p>
          <span class="font-bold text-[18px] text-slate-200 absolute bottom-[15px] left-[15px]">${t.price}$</span>
        </div>`);document.querySelector("#gamesContainer").insertAdjacentHTML("afterbegin",i.join(""))},n=(...o)=>{o.forEach(s=>{document.querySelector("#root").insertAdjacentHTML("beforeend",s)})};n(l);c();
