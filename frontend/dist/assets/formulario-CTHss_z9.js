import{a as d}from"./axios-DXsv3KKR.js";import{f as p,m,o as l,c as r,a,F as u,r as f,t as i}from"./index-BAIx1dF1.js";var _={};const h={id:"contact-form",class:"d-flex flex-column gap-5 px-4 pb-5 pt-4 rounded-4"},y={class:"d-flex flex-column gap-4"},b=["for"],x=["id","name","type","autocomplete","placeholder"],v=["id","name","placeholder"],g=["value"],E={__name:"formulario",setup($){m(()=>{const o=document.querySelector("#contact-form");o.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(o),s=Object.fromEntries(e);console.log(`formdata:
${JSON.stringify(s)}`),d.post(`${_.VUE_APP_BACKEND_URL}/submit`,s).then(n=>{console.log("Recurso creado con éxito:",n.data)}).catch(n=>{console.error("Error al crear el recurso: ",n)})})});const c=[{type:"text",label:"Nombre",for:"name",autocomplete:"given-name",placeholder:"",id:0},{type:"email",label:"Email",for:"email",autocomplete:"off",placeholder:"@gmail.com",id:1},{type:"textarea",label:"Mensaje",for:"message",placeholder:"Hola, queria hacer una consulta acerca de...",id:2}];return(o,t)=>(l(),r("form",h,[a("div",y,[t[0]||(t[0]=a("input",{type:"text",name:"formId",value:"contact-form",class:"d-none"},null,-1)),(l(),r(u,null,f(c,e=>a("div",{key:e.id,class:"d-flex flex-column"},[a("label",{for:e.for,class:"text-black mb-1 lead fw-normal"},i(o.$t("home.contactanos.inputs["+e.id+"].label")),9,b),e.type!="textarea"&&e.type!="submit"?(l(),r("input",{key:0,class:"form-control message",id:e.for,name:e.for,type:e.type,autocomplete:e.autocomplete,placeholder:o.$t("home.contactanos.inputs["+e.id+"].placeholder")+e.placeholder},null,8,x)):(l(),r("textarea",{key:1,id:e.for,name:e.for,placeholder:o.$t("home.contactanos.inputs["+e.id+"].placeholder"),class:"form-control message"},null,8,v))])),64))]),a("input",{type:"submit",value:o.$t("home.contactanos.enviar"),class:"border-0 enviar p-2 m-auto my-0 rounded-2"},null,8,g)]))}},D=p(E,[["__scopeId","data-v-0f8f1a4f"]]);export{D as f};
