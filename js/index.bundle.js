!function(){const t=document.querySelector(".dark-mode-btn");"dark"==localStorage.getItem("darkMode")&&(t.classList.add("dark-mode-btn-active"),document.body.classList.add("dark")),t.addEventListener("click",(()=>{t.classList.toggle("dark-mode-btn-active"),document.body.classList.toggle("dark")?localStorage.setItem("darkMode","dark"):localStorage.setItem("darkMode","light")}))}();