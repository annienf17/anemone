(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".mobile-menu__link"),c=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",c),o.addEventListener("click",c),n.forEach((e=>e.addEventListener("click",c))),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.1b8eac84.js.map
