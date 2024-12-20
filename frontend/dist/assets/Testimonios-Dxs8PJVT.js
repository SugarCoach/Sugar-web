import{o,c as r,a as s,f as p,t as m,F as f,r as h,b as u,n as g,x as v,d as y}from"./index-DYPxjk3S.js";const b=["width","height"],w=["fill"],_={__name:"_arrow",props:{color:{type:String,default:"#000000"},size:{type:String,default:"25px"}},setup(i){const e=i;return(l,n)=>(o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[s("path",{fill:e.color,d:"M16 19L5 12l11-7z"},null,8,w)],8,b))}},x=["width","height"],z=["fill","stroke"],N={__name:"_star",props:{color:{type:String,default:"#07040496"},size:{type:String,default:"25px"},fill:{type:String,default:"black"}},setup(i){const e=i;return(l,n)=>(o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[s("path",{fill:e.fill,stroke:e.color,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"},null,8,z)],8,x))}},$=p(N,[["__scopeId","data-v-78e83ec6"]]),k={class:"text-center flex-fill d-flex flex-column justify-content-center"},S={class:"m-0 mb-3"},C={class:"fw-medium m-0"},j={class:"d-flex gap-3 pb-4 m-auto mb-0"},L={__name:"testimonio",props:{user:{type:String,required:!0},opinion:{type:String,required:!0},stars:{type:Number,required:!0}},setup(i){const e=i;return(l,n)=>(o(),r("article",{class:g(["testimonio p-4 pt-5 d-flex flex-column align-items-center justify-content-between gap-4 rounded-3 border border-2 border-white",e.size])},[s("header",k,[s("h3",S,m(e.user),1),s("p",C,'"'+m(e.opinion)+'"',1)]),s("div",j,[(o(),r(f,null,h(5,t=>u($,{key:t,size:"30px",fill:t<=e.stars?"yellow":"transparent"},null,8,["fill"])),64))])],2))}},q=p(L,[["__scopeId","data-v-a3bb3cac"]]),B={id:"testimonios"},A={class:"m-auto m-0 mb-4"},E={class:"position-relative testimonios-container"},F={class:"arrow rounded-circle d-flex justify-content-center align-items-center"},I={class:"arrow rounded-circle d-flex justify-content-center align-items-center"},M={__name:"Testimonios",setup(i){const e=v([{className:1,name:"Tomás G., 12 años.",opinion:"Es como un videojuego, pero cuido mi salud. ¡Y ya gané mi primer premio!",stars:5,id:0},{className:2,name:"Pedro R., 24 Años",opinion:"Excelente aplicación para gestionar mis niveles de azúcar. Las alertas y recordatorios son muy útiles, y el soporte al cliente es excepcional.",stars:5,id:1},{className:3,name:"Santiago M., 40 Años",opinion:"SugarCoach ha sido un cambio de vida para mí. La interfaz es intuitiva y fácil de usar, y las funciones de seguimiento me ayudan a mantener mi salud bajo control.",stars:5,id:2},{className:4,name:"Carolina P., 34 años.",opinion:"Con SugarCoach, aprendí a manejar mejor mi diabetes mientras me divertía. ¡Nunca pensé que sería tan fácil!",stars:5,id:3},{className:5,name:"Cecilia F., 25 Años",opinion:"Desde que uso SugarCoach, he podido mantener mis niveles de azúcar en sangre estables. La aplicación es muy completa y fácil de usar.",stars:5,id:4},{className:6,name:"María y Andrés, padres de Lucas (8 años).",opinion:"Como padres, nos da tranquilidad saber que Lucas está motivado para cuidar su diabetes. Es un apoyo increíble.",stars:4,id:5}]),l=n=>{var t,a,c;n==="left"?(t=1,a=6,c=1):(t=-1,a=1,c=6),e.value.map(d=>{d.className!=a?d.className+=t:d.className=c})};return(n,t)=>(o(),r("section",B,[s("h2",A,m(n.$t("home.testimonios.h2")),1),s("div",E,[s("div",{class:"p-2 position-absolute left m-1 m-sm-5",onClick:t[0]||(t[0]=a=>l("left"))},[s("div",F,[u(_,{class:"icon"})])]),(o(!0),r(f,null,h(e.value,a=>(o(),y(q,{key:a.id,class:g(["testimonio","t"+a.className]),user:a.name,opinion:a.opinion,stars:a.stars},null,8,["class","user","opinion","stars"]))),128)),s("div",{class:"p-2 position-absolute right m-1 m-sm-5",onClick:t[1]||(t[1]=a=>l("right"))},[s("div",I,[u(_,{class:"icon"})])])])]))}},D=p(M,[["__scopeId","data-v-ffa5be24"]]);export{D as default};
