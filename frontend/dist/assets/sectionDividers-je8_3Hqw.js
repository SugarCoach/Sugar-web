import{o as l,c as r,a as e,t as i,F as b,r as y,f as g,p as x,k as m,n as _,B as w,C as k,e as c,b as v,d as $}from"./index-DM5nRlpG.js";import{a as q}from"./axios-DXsv3KKR.js";/* empty css                                                                       */const S=["width","height"],B=["stroke"],z=["stroke"],L=["stroke"],T=["stroke"],C=["stroke"],j=["stroke"],ye={__name:"_gota",props:{color:{type:String,default:"#3F77E3"},size:{type:String,default:"25px"}},setup(n){const o=n;return(t,s)=>(l(),r("svg",{xmlns:"http://www.w3.org/2000/svg",width:o.size,height:o.size,viewBox:"0 0 48 48"},[e("path",{fill:"none",stroke:o.color,"stroke-linecap":"round","stroke-linejoin":"round",d:"M23.997 4.5S10.27 22.19 10.27 29.772a14 14 0 0 0 .074 1.419a1.953 1.953 0 1 1 1.365 3.348h-.001a2 2 0 0 1-.626-.109a13.73 13.73 0 0 0 26.449-2.352a1.953 1.953 0 1 1 .053-3.76C36.14 20.149 23.997 4.5 23.997 4.5"},null,8,B),e("circle",{cx:"16.927",cy:"26.332",r:"1.955",fill:"none",stroke:o.color,"stroke-linecap":"round","stroke-linejoin":"round"},null,8,z),e("circle",{cx:"21.592",cy:"31.979",r:"1.955",fill:"none",stroke:o.color,"stroke-linecap":"round","stroke-linejoin":"round"},null,8,L),e("circle",{cx:"27.697",cy:"20.248",r:"1.955",fill:"none",stroke:o.color,"stroke-linecap":"round","stroke-linejoin":"round"},null,8,T),e("circle",{cx:"31.2",cy:"33.53",r:"1.955",fill:"none",stroke:o.color,"stroke-linecap":"round","stroke-linejoin":"round"},null,8,C),e("path",{fill:"none",stroke:o.color,"stroke-linecap":"round","stroke-linejoin":"round",d:"m13.16 31.27l2.655-3.387m2.499-.033l2.134 2.608m2.25-.084l4.173-8.346m1.533.175l2.386 9.35m2.218.992l2.154-1.665"},null,8,j)],8,S))}},V=["width","height"],M=["fill"],ge={__name:"_trofeo",props:{color:{type:String,default:"#00C8DC"},size:{type:String,default:"25px"}},setup(n){const o=n;return(t,s)=>(l(),r("svg",{xmlns:"http://www.w3.org/2000/svg",width:o.size,height:o.size,viewBox:"0 0 24 24"},[e("path",{fill:o.color,d:"M7 21v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4 12.95q-1.875-.225-3.137-1.637T3 8V7q0-.825.588-1.412T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.412 1.913T13 15.9V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8m10 0q.9-.325 1.45-1.088T19 8V7h-2z"},null,8,M)],8,V))}},D={class:"modal fade text-bg-secondary",id:"modal_pago","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},E={class:"modal-dialog modal-dialog-centered m-auto m-0"},P={class:"modal-content bg-dark",style:{"box-shadow":"0 0 30px rgb(0, 23, 24)","min-width":"40vw"}},N={class:"modal-body"},U={class:"h4 w-auto m-0 m-auto mb-2"},F=["innerHTML"],H={id:"pay-form",class:"mt-2 clas d-flex flex-column align-items-center"},I={class:"d-flex flex-column gap-2 w-75 mb-3"},A=["for"],R=["type","autocomplete","name","placeholder"],K={key:1,class:"d-flex justify-content-center gap-3 flex-wrap flex-sm-nowrap"},O=["type","name"],Z=["innerHTML"],G={class:"modal-footer"},J={type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},Q={__name:"FormularioPago",setup(n){const o=[{type:"text",name:"company",label:"Nombre de la empresa",placeholder:"Mercado Libre",autocomplete:"organization",id:0},{type:"email",name:"email",label:"Email de la empresa",autocomplete:"off",placeholder:"mercadolibre@gmail.com",id:1},{type:"date",name:"date",label:"Fecha y hora de la reunion",autocomplete:"off",placeholder:"",id:2}];return(t,s)=>(l(),r("div",D,[e("div",E,[e("div",P,[s[2]||(s[2]=e("div",{class:"modal-header"},[e("button",{type:"button","data-bs-dismiss":"modal","aria-label":"Close",class:"p-0 border-dark-subtle rounded-3 m-auto me-0 me-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-x-square-fill w-100",viewBox:"0 0 16 16",loading:"lazy"},[e("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"})])])],-1)),e("div",N,[e("h4",U,i(t.$t("empresas.planes.h2")),1),e("p",{class:"text-start fw-light w-100",innerHTML:t.$t("empresas.planes.formularioPago.p")},null,8,F),e("form",H,[e("div",I,[(l(),r(b,null,y(o,a=>e("div",{key:a.id,class:"w-100"},[e("label",{for:a.name,class:"text-start d-block mb-1"},i(t.$t("empresas.planes.formularioPago.inputs["+a.id+"]")),9,A),a.type!="date"?(l(),r("input",{key:0,type:a.type,autocomplete:a.autocomplete,class:"form-control m-auto bg-dark-subtle w-100",name:a.name,placeholder:a.placeholder},null,8,R)):(l(),r("div",K,[e("input",{class:"flex-fill form-control m-auto bg-dark-subtle",type:a.type,name:a.name},null,8,O),s[0]||(s[0]=e("input",{class:"flex-fill form-control m-auto bg-dark-subtle",type:"time",name:"time"},null,-1))]))])),64))]),s[1]||(s[1]=e("input",{type:"submit",class:"btn btn-outline-secondary w-25 align-self-center"},null,-1))]),e("p",{class:"mt-3 lead",innerHTML:t.$t("empresas.planes.formularioPago.info")+" admin.team@sugar.coach"},null,8,Z)]),e("div",G,[e("button",J,i(t.$t("empresas.planes.formularioPago.cerrar")),1)])])])]))}},W=["width","height"],X=["stroke"],Y={__name:"_tick",props:{color:{type:String,default:"#00C8DC"},size:{type:String,default:"25px"}},setup(n){const o=n;return(t,s)=>(l(),r("svg",{xmlns:"http://www.w3.org/2000/svg",width:o.size,height:o.size,viewBox:"0 0 15 15"},[e("path",{fill:"none",stroke:o.color,d:"M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"},null,8,X)],8,W))}};var ee={};const te={class:"d-flex flex-column justify-content-between flex-fill"},oe={class:"d-flex flex-column justify-content-start"},se={class:"text-start w-100 mb-0 py-3 display-6 fw-medium h4"},le={class:"lead fw-light"},re={key:0,class:"d-flex flex-fill flex-column justify-content-between"},ae={key:0},ne=["href"],ie={class:"p-4 text-start w-100 p-0 d-flex flex-column gap-4 mb-3"},de={class:""},ce=["href"],pe={__name:"paquetePremium",props:{title:{type:String,required:!0},price:{type:String,required:!0},texto:{types:String,default:""},beneficios:{type:Number},proximamente:{type:Array},textoBtn:{type:String,required:!0},btnUrl:{type:String,required:!0},color:{type:String,default:"#3F77E3"},mensual:{type:Boolean,default:!1},paqueteId:{type:Number},from:{type:String}},setup(n){const o=()=>{const d=document.querySelector("#pay-form");d.addEventListener("submit",f=>{f.preventDefault();const h=new FormData(d),p=Object.fromEntries(h);q.post(`${ee.VUE_APP_BACKEND_URL}/pay`,p).then(u=>{console.log("Recurso creado con éxito:",u.data)}).catch(u=>{console.error("Error al crear el recurso: ",u)})})},t=n,s=`color: ${t.color};`,a=`background-color: ${t.color}; border-color: ${t.color};`;return(d,f)=>(l(),r("div",{class:_(["paquete rounded-3 position-relative border border-dark-subtle d-flex flex-column",t.texto?"plan-x":""])},[e("h3",{class:"w-100 p-4 text-start mb-0 border-bottom border-dark border-opacity-50 px-4 pb-4 h4 d-flex align-items-center",style:s},[x(d.$slots,"default",{class:"icon"},void 0,!0),m(i(t.title),1)]),e("div",te,[e("div",oe,[e("div",{class:_(["p-4 py-0 contenedor-text d-flex flex-column",t.texto?"border-bottom border-dark border-opacity-50":""])},[e("div",se,[m(i(t.price),1),w(e("span",le,"/mo",512),[[k,t.mensual]])]),t.texto?(l(),r("div",re,[t.texto?(l(),r("p",ae,i(t.texto),1)):c("",!0),e("a",{href:t.btnUrl,class:"btn btn-primary rounded-pill w-100 py-2 mb-2",style:a},i(t.textoBtn),9,ne)])):c("",!0)],2),e("ul",ie,[(l(!0),r(b,null,y(t.beneficios,(h,p)=>(l(),r("li",de,[v(Y,{color:t.color},null,8,["color"]),m(" "+i(d.$t(t.from+".planes.paquetes["+t.paqueteId+"].beneficios["+p+"]")),1)]))),256))])]),!t.texto&&t.btnUrl==="modal"?(l(),r("button",{key:0,onClick:o,style:a,type:"button",class:"btn btn-primary rounded-pill w-75 py-2 my-3 m-0 m-auto","data-bs-toggle":"modal","data-bs-target":"#modal_pago"},i(t.textoBtn),1)):!t.texto&&t.btnUrl?(l(),r("a",{key:1,href:t.btnUrl,class:"btn btn-primary rounded-pill w-75 py-2 my-3 m-0 m-auto",style:a},i(t.textoBtn),9,ce)):c("",!0)]),t.btnUrl==="modal"?(l(),$(Q,{key:0})):c("",!0)],2))}},xe=g(pe,[["__scopeId","data-v-b30e0702"]]),ue={class:"position-relative overflow-hidden section-div"},me=["src","alt"],_e={__name:"sectionDividers",props:{img_url:{type:String},img_alt:{type:String}},setup(n){const o=n;return(t,s)=>(l(),r("div",ue,[s[0]||(s[0]=e("div",{class:"rounded-circle d-top bg-white position-absolute"},null,-1)),e("img",{loading:"lazy",class:_(["position-absolute",o.img_alt]),src:o.img_url,alt:o.img_alt},null,10,me),x(t.$slots,"default",{},void 0,!0),s[1]||(s[1]=e("div",{class:"rounded-circle d-bottom bg-white position-absolute"},null,-1))]))}},we=g(_e,[["__scopeId","data-v-1a2e5e00"]]);export{ye as _,ge as a,xe as p,we as s};
