!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(t){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((t,a)=>{const c=new URL(e,n);if(self[o].moduleMap[c])return t(self[o].moduleMap[c]);const l=new Blob([`import * as m from '${c}';`,`${o}.moduleMap['${c}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){a(new Error(`Failed to import: ${e}`)),r(m)},onload(){t(self[o].moduleMap[c]),r(m)}});document.head.appendChild(m)})),self[o].moduleMap={}}}("/landing-page/");
