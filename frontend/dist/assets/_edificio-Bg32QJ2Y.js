import{f as d,o as s,c as a,a as r,t as l,d as m,w as g,p as u,k as h,e as p,n as _,s as f,g as x,q as v,F as y,r as b}from"./index-AV68zofX.js";import{c as S}from"./ctaBtn-DHLmRkZT.js";/* empty css                                                                    */const $="/assets/tarjeta-fornite-UiUJooSp.webp",w="/assets/roblox-card-DM4uAB8x.png",Z="/assets/xbox_card-D9dmjRru.png",z=["src","alt"],H={key:1,class:"cards position-relative d-flex justify-content-center pb-5"},k={class:"text d-flex flex-column align-self-start justify-content-start align-items-start"},C={class:"mt-0 mt-sm-4"},Y=["innerHTML"],B={__name:"imgYtexto",props:{direction:{type:String,default:"left"},title:{type:String,required:!0},texto:{type:String,required:!0},imagen:{type:String,required:!0},imagen_alt:{type:String,required:!0},cta:{type:String},cta_url:{type:String},color:{type:String,default:"blue"},bgColor:{type:String}},setup(n){const e=o=>v.sanitize(o),t=n;`${t.color}`;const i=t.bgColor=="#f8f8f8"?"rgba(0, 0, 0, 0.25)":"#00cadca6";return(o,c)=>(s(),a("div",{class:_(["contenedor-imgytextos d-flex align-items-center w-100 justify-content-center gap-4 gap-sm-3 gap-md-5 flex-wrap contenedor-imgtexto p-5 rounded-4",t.direction==="right"?"flex-row-reverse":""]),style:f(`background-color:${n.bgColor}; box-shadow: 3px 5px 10px -5px ${x(i)};`)},[t.imagen!="cards"?(s(),a("img",{key:0,loading:"lazy",class:"",src:t.imagen,alt:n.imagen_alt},null,8,z)):(s(),a("div",H,c[0]||(c[0]=[r("img",{loading:"lazy",class:"fornite",src:$,alt:""},null,-1),r("img",{loading:"lazy",class:"roblox",src:w,alt:""},null,-1),r("img",{loading:"lazy",class:"xbox p-2",src:Z,alt:""},null,-1)]))),r("div",k,[r("h3",C,l(t.title),1),r("p",{class:"mb-1",innerHTML:e(t.texto)},null,8,Y),t.cta?(s(),m(S,{key:0,url:t.cta_url,color:t.color},{default:g(()=>[u(o.$slots,"default",{},void 0,!0),h(l(t.cta),1)]),_:3},8,["url","color"])):p("",!0)])],6))}},q=d(B,[["__scopeId","data-v-fbd27803"]]),M={class:"container-fluid mt-0"},V={class:"text-center lone-h2"},j={class:"contenedor-textos d-flex flex-column"},F={__name:"imgsYtextos",props:{title:{type:String,required:!0},imagenesYtextos:{type:Object,required:!0},from:{type:String},color:{type:String,default:"blue"},bgColor:{type:String}},setup(n){const e=n;return(t,i)=>(s(),a("section",M,[r("h2",V,l(e.title),1),r("div",j,[(s(!0),a(y,null,b(e.imagenesYtextos,o=>(s(),m(q,{key:o.id,direction:o.id%2==0?"left":"right",imagen:o.img_url,imagen_alt:o.img_alt,title:t.$t(e.from+".comoFunciona.imgsYtextos["+o.id+"].h3"),texto:t.$t(e.from+".comoFunciona.imgsYtextos["+o.id+"].p"),cta:t.$t(e.from+".comoFunciona.imgsYtextos["+o.id+"].ctaBtn"),cta_url:o.cta_url,color:e.color,"bg-color":e.bgColor},{default:g(()=>[u(t.$slots,"default",{},void 0,!0)]),_:2},1032,["direction","imagen","imagen_alt","title","texto","cta","cta_url","color","bg-color"]))),128))])]))}},U=d(F,[["__scopeId","data-v-c6238ec5"]]),I=["width","height"],L=["fill"],T=["fill"],A={__name:"_edificio",props:{color:{type:String,default:"#3F77E3"},size:{type:String,default:"25px"}},setup(n){const e=n;return(t,i)=>(s(),a("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 512 512"},[r("path",{fill:e.color,d:"M320 176V16H32v480h128v-96h32v96h288V176ZM112 432H80v-32h32Zm0-80H80v-32h32Zm0-80H80v-32h32Zm0-80H80v-32h32Zm0-80H80V80h32Zm128-32h32v32h-32Zm-48 272h-32v-32h32Zm0-80h-32v-32h32Zm0-80h-32v-32h32Zm0-80h-32V80h32Zm80 320h-32v-32h32Zm0-80h-32v-32h32Zm0-80h-32v-32h32Zm0-80h-32v-32h32zm176 272H320v-32h32v-32h-32v-48h32v-32h-32v-48h32v-32h-32v-32h128Z"},null,8,L),r("path",{fill:e.color,d:"M384 400h32v32h-32zm0-80h32v32h-32zm0-80h32v32h-32z"},null,8,T)],8,I))}};export{U as I,A as _};