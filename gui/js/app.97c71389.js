(function(e){function a(a){for(var s,c,o=a[0],i=a[1],d=a[2],l=0,u=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);b&&b(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],s=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(s=!1)}s&&(t.splice(a--,1),e=i(i.s=n[0]))}return e}var s={},c={app:0},r={app:0},t=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-3bb51296":"f0f5213d","chunk-46da3278":"5f9932e3","chunk-617965f4":"d7b109e6","chunk-787a321a":"cc1eba90","chunk-8283e818":"9be94d68","chunk-84bcbb9a":"436e3854","chunk-329097a2":"98b5e5e1","chunk-425592f4":"b12ad52d","chunk-6b8c6045":"72586c91","chunk-2d237742":"0c752294","chunk-5fba9366":"c7963d23","chunk-8df4ab0c":"10ea3eef","chunk-1a803ac9":"ef491c41","chunk-72c6243a":"03f12aaa","chunk-7dff410b":"20d76119","chunk-cc0eac12":"63b86280","chunk-bd0303d4":"7dbb2f92","chunk-c1dd789e":"dbbb6734"}[e]+".js"}function i(a){if(s[a])return s[a].exports;var n=s[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var a=[],n={"chunk-3bb51296":1,"chunk-46da3278":1,"chunk-617965f4":1,"chunk-787a321a":1,"chunk-8283e818":1,"chunk-329097a2":1,"chunk-425592f4":1,"chunk-6b8c6045":1,"chunk-5fba9366":1,"chunk-8df4ab0c":1,"chunk-1a803ac9":1,"chunk-72c6243a":1,"chunk-7dff410b":1,"chunk-cc0eac12":1,"chunk-bd0303d4":1,"chunk-c1dd789e":1};c[e]?a.push(c[e]):0!==c[e]&&n[e]&&a.push(c[e]=new Promise((function(a,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-3bb51296":"f5c4ed38","chunk-46da3278":"da5a1c9d","chunk-617965f4":"495c0cd4","chunk-787a321a":"1a758d62","chunk-8283e818":"b0db47b5","chunk-84bcbb9a":"31d6cfe0","chunk-329097a2":"09cd7b1b","chunk-425592f4":"19bdb6f5","chunk-6b8c6045":"e8fab364","chunk-2d237742":"31d6cfe0","chunk-5fba9366":"fbb40e7b","chunk-8df4ab0c":"64f09462","chunk-1a803ac9":"0a9c14ed","chunk-72c6243a":"b15bb799","chunk-7dff410b":"6f3cd125","chunk-cc0eac12":"02baff21","chunk-bd0303d4":"e3c8a3e1","chunk-c1dd789e":"3ac98d77"}[e]+".css",r=i.p+s,t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var d=t[o],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===s||l===r))return a()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){d=u[o],l=d.getAttribute("data-href");if(l===s||l===r)return a()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=a,b.onerror=function(a){var s=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=s,delete c[e],b.parentNode.removeChild(b),n(t)},b.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){c[e]=0})));var s=r[e];if(0!==s)if(s)a.push(s[2]);else{var t=new Promise((function(a,n){s=r[e]=[a,n]}));a.push(s[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var s=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+c+")",u.name="ChunkLoadError",u.type=s,u.request=c,n[1](u)}r[e]=void 0}};var b=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},i.m=e,i.c=s,i.d=function(e,a,n){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)i.d(n,s,function(a){return e[a]}.bind(null,s));return n},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var b=l;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"1c7f":function(e,a,n){},4678:function(e,a,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var a=r(e);return n(a)}function r(e){if(!n.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}c.keys=function(){return Object.keys(s)},c.resolve=r,e.exports=c,c.id="4678"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),c=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],t={name:"App"},o=t,i=(n("5c0b"),n("2877")),d=Object(i["a"])(o,c,r,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),b=function(){return n.e("chunk-3bb51296").then(n.bind(null,"ebad"))},f=function(){return n.e("chunk-8283e818").then(n.bind(null,"bb51"))},p=function(){return n.e("chunk-bd0303d4").then(n.bind(null,"26d3"))},m=function(){return n.e("chunk-c1dd789e").then(n.bind(null,"ac2a"))},h=function(){return n.e("chunk-46da3278").then(n.bind(null,"9bc3"))},j=function(){return Promise.all([n.e("chunk-84bcbb9a"),n.e("chunk-8df4ab0c"),n.e("chunk-72c6243a")]).then(n.bind(null,"79cc"))},g=function(){return Promise.all([n.e("chunk-84bcbb9a"),n.e("chunk-8df4ab0c"),n.e("chunk-7dff410b")]).then(n.bind(null,"1692"))},k=function(){return Promise.all([n.e("chunk-84bcbb9a"),n.e("chunk-8df4ab0c"),n.e("chunk-1a803ac9")]).then(n.bind(null,"60d9"))},v=function(){return Promise.all([n.e("chunk-84bcbb9a"),n.e("chunk-8df4ab0c"),n.e("chunk-cc0eac12")]).then(n.bind(null,"2991"))},y=function(){return Promise.all([n.e("chunk-84bcbb9a"),n.e("chunk-329097a2")]).then(n.bind(null,"c868"))},E=function(){return n.e("chunk-787a321a").then(n.bind(null,"3696"))},S=function(){return n.e("chunk-617965f4").then(n.bind(null,"b3c3"))},A=function(){return Promise.all([n.e("chunk-84bcbb9a"),n.e("chunk-6b8c6045"),n.e("chunk-2d237742")]).then(n.bind(null,"fad5"))},C=function(){return Promise.all([n.e("chunk-84bcbb9a"),n.e("chunk-425592f4")]).then(n.bind(null,"2378"))},I=function(){return Promise.all([n.e("chunk-84bcbb9a"),n.e("chunk-6b8c6045"),n.e("chunk-5fba9366")]).then(n.bind(null,"35c9"))};s["default"].use(u["a"]);var O=[{path:"/",component:b,children:[{path:"",name:"Home",component:f},{path:"settings",name:"Settings",component:p},{path:"descriptives",component:m,children:[{path:"",name:"DesIndex",redirect:{name:"Des1"}},{path:"d1/:id",name:"Des1",component:h},{path:"d2",name:"SPDA",component:j},{path:"d3",name:"Manager",component:g},{path:"d4",name:"REP",component:k},{path:"d5",name:"OtherProfiles",component:v},{path:"d6",component:y,children:[{path:"",name:"ResultsIndex",redirect:{name:"Results"}},{path:"tl1",name:"Results",component:S},{path:"tl2",name:"Actual",component:A},{path:"tl3",name:"Sankey",component:C},{path:"tl4",name:"Proyect",component:I}]},{path:"d7",name:"Excel",component:E}]}]}],D=new u["a"]({base:"/",routes:O}),P=D,w=n("a925"),R={en:{},es:{header:{settings:"Configuración",home:"Inicio",start:"Iniciar",sub_loc:"Seleccione un municipio para iniciar",search:"Codigo municipio -  municipio",year_loc:"Seleccione el año al agregar o modificar datos",select:"Seleccionar",yearS:"Selector de año"},home:{title:"MC-GRM 1.0 (Medición de la Circularidad en la Gestión de Residuos en Municipios) ",message:'<p>Esta herramienta se estructura en el marco de la cooperaci&oacute;n CEPAL - DNP, que busca desarrollar una metodolog&iacute;a que permita a los municipios colombianos diagnosticar el grado de circularidad en la gesti&oacute;n de los residuos s&oacute;lidos urbanos y desarrollar escenarios prospectivos de manejo de residuos.</p><p>Esta es una herramienta tecnol&oacute;gica de tipo portable, lo cual permite que sea ejecutado desde una computadora personal sin necesidad de instalaci&oacute;n, esto se lograr&aacute;; tan solo con descargar el archivo "MC-GRM.zip" desde el enlace publicado por el ente encargado en <a href="http://www.dnp.gov.co/MC-GRM">www.dnp.gov.co/MC-GRM</a>. Una vez descargado el archivo, solo requiere ser descomprimido en cualquier carpeta local y abrir el archivo .exe para acceder a ella. En la misma ruta se encontrar&aacute;; el acceso a este manual de usuario y documentos anexos de inter&eacute;s, construidos a partir del proyecto que dio origen a esta herramienta.</p><h2>Objetivos de la herramienta</h2><p>Medir el rendimiento circular de la economía resulta ser una estrategia clave tanto en los diferentes sectores productivos como en los gobiernos, puesto que su abordaje permite incorporar criterios ambientales, sociales y económicos en la toma de decisiones que marcan la pauta en la implementación de estrategias que permitan la configuración de sistemas de producción y consumo resilientes y sostenibles.</p><p>Es por ello que la herramienta MC-GRM 1.0 tiene como objetivo general, medir la circularidad en la gestión de los residuos generados a escala municipal, contribuyendo así a la construcción de datos que permitan la transición de consolidados y agregados nacionales a particularidades propias de las entidades territoriales, permitiendo así una integración bottom-up de la información; en este sentido, los objetivos específicos a ser alcanzados con la implementación de la herramienta son los siguientes:</p><ul><li>Integrar diferentes fuentes de información secundaria y primaria, proveniente de actores públicos y privados, asociadas con la gestión de residuos a nivel municipal.</li><li>Aportar en el análisis de los flujos de las corrientes de residuos prioritarias que se generan a escala municipal, su grado de circularidad, así como en la identificación de actores, oportunidades y retos.</li><li>Contribuir, a través del diligenciamiento periódico de la herramienta y la proyección de datos, en la construcción y fortalecimiento de política pública y de instrumentos de planeación asociados con la gestión de residuos y del territorio.</li><li>Categorizar los municipios según sus capacidades sociales, económicas y en gestión de residuos, de tal manera que se puedan enmarcar los resultados obtenidos en la medición de la circularidad con las condiciones, barreras y oportunidades de las entidades territoriales.</li><li>Adoptar una métrica común a nivel municipal que permita medir la gestión circular de los residuos, mediante la obtención de puntos de resultados asociados con prácticas implementadas por actores públicos y privados.</li><li>Obtener indicadores técnicos, operativos, económicos, sociales y ambientales asociados con la circularidad en la gestión de los residuos a nivel municipal. </li><li>Informar y divulgar experiencias exitosas en la implementación de buenas prácticas orientadas a la circularidad en la gestión de los residuos generados, fomentando así su replicabilidad entre municipios con características similares.</li><li>Promover el aumento del grado de circularidad en la gestión de los residuos a nivel municipal, a partir del análisis periódico de los resultados obtenidos del diligenciamiento de la herramienta. </li></ul><p>Al finalizar el proceso de registro, la herramienta generar&aacute; un archivo de tipo "xlsx" con los datos reportados en el a&ntilde;o de una manera consolidada para que pueda ser reportada al ente encargado.</p><p>Para m&aacute;s informaci&oacute;n consultar a <a href="mailto:rbula@dnp.gov.co">rbula@dnp.gov.co</a></p>'},settings:{alert:"En esta sección, se podrán cargar al sistema los datos desde archivos JSON, <b> recuerde cargar correctamente el formato, y al archivo correspondiente o el sistema dejara de funcionar.</b>",select:"Seleccionar archivos",pass:"Ingresa la contraseña suministrada",file:"Selecciona el archivo nuevo",oldF:"Selecciona el archivo a actualizar",update:"Actualizar archivo",updated:"Archivo actualizado",fail_pass:"Contreseña incorrecta"},descriptive:{see_data:"Ver datos",populationSeries:"Serie de población",populationDensity:"Densidad poblacional",bussinessDesnsity:"Densidad empresarial (Empresa por cada 10.000 hab)",money:"Ingresos Municipales",economy:"Economías de Aglomeración (Sistema de ciudades)",agregateValue:"Valor agregado municipal (Promedio últimos 4 años)",eca:"Capacidad ECA (Ton/mes)",pgris:"PGRIS Aprobado",res:"Caracterización de residuos (en disposición final)",name:"Capacidades",des1:"Capacidades poblacionales",des2:"Capacidades economicas y financieras",des3:"Capacidades manejo residuos",edit:"Editar",cancel:"Cancelar",save:"Guardar",data_save:"Datos Guardados",see_data_t:"Datos descriptiva",valid_data:"Validar datos",source:"Fuente oficial:",edito:"Persona que edita"},spda:{name:"SPDA",full_name:"GESTIÓN REALIZADA POR EL SERVICIO PÚBLICO DE ASEO",save:"Confirmar y validar datos",sp1:"Sistema de disposición final",sp2:"Flujo de agua",sp3:"Flujo de biogas",sp4:"Estación de clasificación y aprovechamiento",sp5:"Recilección transporte de residuos"},manager:{name:"Gestores",full_name:"GESTIÓN REALIZADA POR EMPRESAS GESTORAS NO AFECTAS AL SERVICIO PÚBLICO DE ASEO",add_table:"Añadir Registro"},rep:{name:"REP",full_name:"GESTIÓN REALIZADA EN LA IMPLEMENTACION DE ESQUEMAS DE RESPONSABILIDAD EXTENDIDA DEL PRODUCTOR (REP) - PLANES Y SISTEMAS POSCONSUMO"},other_profiles:{name:"Dinámicas administrativas",full_name:"DINAMICAS ADMINISTRATIVAS HACIA LA TRANCISION DE ESQUEMAS CIRCULARES EN LA GESTION DE RESIDUOS"},graphics:{cal_graphs:"Generando tableros...",generate_consolidated:"Generar Consolidados",name:"Tableros",results:"Tablero resultados",actual:"Escenario actual",sankey:"Diagrama sankey",proyect:"Escenarios",cal_consolidates:"Calculando Consolidados",points:{title:"NIVEL DE CIRCULARIDAD EN LA GESTIÓN DE LOS RESIDUOS GENERADOS",theme:"Tématica",result:"Estación de resultado",point:"Puntaje",mini_bar:"0,25",total_points:"PUNTAJE TOTAL",level:"Nivel de circularidad para el municipio",alto:"Alta",medio:"Media",bajo:"Baja"},proyects:{title:"Caracteristicas del escenario alternativo",year:"Año",alternative:"Desarrollo escenario alternativo"},sankeys:{title:"Diagrama de Sankey"}},excel:{name:"Generar reporte consolidado"}}},_=R,L=n("5f5b"),z=n("51c2"),N=n("d45f"),T=(n("7c50"),n("1c7f"),n("f9e3"),n("2dd8"),n("30ef"),n("aa0b"),n("8521")),M=n.n(T),x=n("2f62");s["default"].use(x["a"]);var q=new x["a"].Store({state:{loading:0,territory:0},mutations:{increaseLoading:function(e){e.loading+=1},decreaseLoading:function(e){e.loading<0?e.loading:e.loading-=1},set_territory:function(e,a){e.territory=a,localStorage.setItem("id_territorio",a)}},actions:{clearLoading:function(e){var a=e.commit;a("decreaseLoading")},setLoading:function(e){var a=e.commit;a("increaseLoading")},setTerritory:function(e,a){var n=e.commit;n("set_territory",a)}},getters:{isLoading:function(e){return e.loading},territory:function(e){return e.territory}},modules:{}}),G=n("4a7a"),U=n.n(G);n("6dfc");s["default"].component("v-select",U.a),s["default"].config.productionTip=!1,s["default"].config.devtools=!0,s["default"].use(window.VueCharts),s["default"].use(M.a),s["default"].use(w["a"]),s["default"].use(L["a"]),s["default"].use(z["a"]);var V,B=new w["a"]({locale:"es",messages:_,silentTranslationWarn:!0});s["default"].component("vue-bootstrap-typeahead",N["a"]),void 0==V&&(V={}),s["default"].prototype.$loading=!1,new s["default"]({router:P,store:q,i18n:B,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,a,n){"use strict";n("9c0c")},"7c50":function(e,a,n){},"9c0c":function(e,a,n){}});
//# sourceMappingURL=app.97c71389.js.map