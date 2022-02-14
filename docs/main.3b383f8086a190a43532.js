(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.d({},{A:()=>h});var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var r,n,a;return r=t,a=[{key:"fronJson",value:function(e){var r=e.id,n=e.tarea,a=e.completado,o=e.creado,i=new t(n);return i.id=r,i.completado=a,i.creado=o,i}}],(n=[{key:"imprimirClase",value:function(){console.log("".concat(this.id," - ").concat(this.tarea," - ").concat(this.completado))}}])&&e(r.prototype,n),a&&e(r,a),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var o=document.querySelector(".todo-list"),i=document.querySelector(".new-todo"),l=document.querySelector(".clear-completed"),c=document.querySelector(".filters"),s=document.querySelectorAll(".filtro"),u=function(t){var e='\n    <li class="'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'">\n\t\t<div class="view">\n\t\t\t<input class="toggle" type="checkbox" ').concat(t.completado?"checked":"",">\n\t\t\t<label>").concat(t.tarea,'</label>\n\t\t\t<button class="destroy"></button>\n\t\t</div>\n\t\t<input class="edit" value="Create a TodoMVC template">\n\t</li> '),r=document.createElement("div");return r.innerHTML=e,o.append(r.firstElementChild),r.firstElementChild};function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.addEventListener("keyup",(function(t){if(13===t.keyCode&&i.value.length>0){var e=new r(i.value);h.nuevaTarea(e),u(e),i.value=""}})),o.addEventListener("click",(function(t){var e=t.target.localName,r=t.target.parentElement.parentElement,n=r.getAttribute("data-id");e.includes("input")?(h.marcarCompletado(n),r.classList.toggle("completed")):e.includes("button")&&(h.eliminarTarea(n),o.removeChild(r))})),l.addEventListener("click",(function(){h.eliminarCompletados();for(var t=o.children.length-1;t>=0;t--){var e=o.children[t];e.classList.contains("completed")&&o.removeChild(e)}})),c.addEventListener("click",(function(t){var e=t.target.text.trim();if(e){s.forEach((function(t){return t.classList.remove("selected")})),t.target.classList.add("selected");var r,a=n(o.children);try{for(a.s();!(r=a.n()).done;){var i=r.value;i.classList.remove("hidden");var l=i.classList.contains("completed");switch(e){case"Pendientes":l&&i.classList.add("hidden");break;case"Completados":l||i.classList.add("hidden")}}}catch(t){a.e(t)}finally{a.f()}}}));var h=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cargarLocalStorage(),this.cargarListadoDeTareas(),this.totalTareasPendientes()}var e,n,a;return e=t,(n=[{key:"cargarListadoDeTareas",value:function(){this.tareas.forEach((function(t){return u(t)}))}},{key:"nuevaTarea",value:function(t){this.tareas.push(t),this.guardarLocalStorage(),this.totalTareasPendientes()}},{key:"eliminarTarea",value:function(t){this.tareas=this.tareas.filter((function(e){return e.id!=t})),this.guardarLocalStorage(),this.totalTareasPendientes()}},{key:"marcarCompletado",value:function(t){var e,r=d(this.tareas);try{for(r.s();!(e=r.n()).done;){var n=e.value;if(n.id==t){n.completado=!n.completado,this.guardarLocalStorage(),this.totalTareasPendientes();break}}}catch(t){r.e(t)}finally{r.f()}}},{key:"eliminarCompletados",value:function(){this.tareas=this.tareas.filter((function(t){return 0==t.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){var t=JSON.stringify(this.tareas);localStorage.setItem("tareas",t)}},{key:"cargarLocalStorage",value:function(){this.tareas=localStorage.getItem("tareas")?JSON.parse(localStorage.getItem("tareas")):[],this.tareas=this.tareas.map((function(t){return r.fronJson(t)}))}},{key:"totalTareasPendientes",value:function(){var t=document.querySelector(".todo-count"),e=this.tareas.filter((function(t){return 0==t.completado})).length;t.firstElementChild.textContent="",t.firstElementChild.textContent=e}}])&&m(e.prototype,n),a&&m(e,a),Object.defineProperty(e,"prototype",{writable:!1}),t}())})();