const e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){e.target.value&&(t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t)))})),e.addEventListener("submit",(function(t){t.preventDefault(),e.reset(),localStorage.removeItem("feedback-form-state")})),window.addEventListener("load",(function(t){const a=JSON.parse(localStorage.getItem("feedback-form-state"));a&&(e.elements.email.value=a.email||"",e.elements.message.value=a.message||"")}));const t={};
//# sourceMappingURL=03-feedback.9f94fed3.js.map
