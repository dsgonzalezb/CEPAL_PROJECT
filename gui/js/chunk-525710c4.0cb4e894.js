(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-525710c4"],{"5fe2":function(t,e,i){},"9bc3":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wizard"},[i("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"bt",class:{active:1==t.wizard},attrs:{title:t.$t("descriptive.des1")},on:{click:function(e){t.wizard=1}}},[t._v("1")]),i("div",[i("svg",{attrs:{height:"50",width:"100"}},[i("line",{staticStyle:{stroke:"#007bff","stroke-width":"2"},attrs:{x1:"0",y1:"25",x2:"100",y2:"25"}})])]),i("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"bt",class:{active:2==t.wizard},attrs:{title:t.$t("descriptive.des2")},on:{click:function(e){t.wizard=2}}},[t._v("2")]),i("div",[i("svg",{attrs:{height:"50",width:"100"}},[i("line",{staticStyle:{stroke:"#007bff","stroke-width":"2"},attrs:{x1:"0",y1:"25",x2:"100",y2:"25"}})])]),i("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"bt",class:{active:3==t.wizard},attrs:{title:t.$t("descriptive.des3")},on:{click:function(e){t.wizard=3}}},[t._v("3")])]),1==t.wizard?i("div",{staticClass:"dis-c"},[i("hr"),i("h3",[t._v(t._s(t.$t("descriptive.des1")))]),void 0!=t.descriptive.labels?i("div",{key:t.wizard,staticClass:"graphs"},[i("div",[i("div",{staticClass:"label"},[t._v(t._s(t.$t("descriptive.populationSeries")))]),i("chartjs-line",{attrs:{labels:t.labels,datasets:t.datasets,bind:!0}}),i("br"),i("br"),i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.popS",modifiers:{popS:!0}}],attrs:{variant:"outline-primary"}},[i("i",{staticClass:"fas fa-cog"}),t._v(" "+t._s(t.$t("descriptive.see_data")))])],1),i("div",[i("div",{staticClass:"label"},[t._v(t._s(t.$t("descriptive.populationDensity")))]),i("chartjs-line",{attrs:{labels:t.labels,datasets:t.dDatasets,bind:!0}}),i("br"),i("br"),i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.popD",modifiers:{popD:!0}}],attrs:{variant:"outline-primary"}},[i("i",{staticClass:"fas fa-cog"}),t._v(" "+t._s(t.$t("descriptive.see_data")))])],1)]):t._e()]):t._e(),2==t.wizard?i("div",{staticClass:"dis-c"},[i("hr"),i("h3",[t._v(t._s(t.$t("descriptive.des2")))]),void 0!=t.descriptive.labels?i("div",{key:t.wizard,staticClass:"graphs"},[i("div",[i("div",{staticClass:"label"},[t._v(t._s(t.$t("descriptive.bussinessDesnsity")))]),i("chartjs-line",{attrs:{labels:t.labels,datasets:t.bDatasets,bind:!0}}),i("br"),i("br"),i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.popB",modifiers:{popB:!0}}],attrs:{variant:"outline-primary"}},[i("i",{staticClass:"fas fa-cog"}),t._v(" "+t._s(t.$t("descriptive.see_data")))])],1),i("div",[i("div",{staticClass:"label"},[t._v(t._s(t.$t("descriptive.agregateValue")))]),i("chartjs-line",{attrs:{labels:t.vLabesl,datasets:t.vDatasets,bind:!0}}),i("br"),i("br"),i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.popV",modifiers:{popV:!0}}],attrs:{variant:"outline-primary"}},[i("i",{staticClass:"fas fa-cog"}),t._v(" "+t._s(t.$t("descriptive.see_data")))])],1)]):t._e()]):t._e(),i("b-modal",{attrs:{id:"popB",size:"xl","hide-footer":"",title:t.$t("descriptive.bussinessDesnsity")}}),i("b-modal",{attrs:{id:"popV",size:"xl","hide-footer":"",title:t.$t("descriptive.agregateValue")}}),i("b-modal",{attrs:{id:"popS",size:"xl","hide-footer":"",title:t.$t("descriptive.populationSeries")}},[i("div",{staticClass:"table"},[i("div",{staticClass:"table-header"},[i("div",{staticClass:"header__item"},[t._v(t._s(t.fieldsPupulation[0]))]),i("div",{staticClass:"header__item"},[t._v(t._s(t.fieldsPupulation[1]))]),i("div",{staticClass:"header__item"},[t._v(t._s(t.fieldsPupulation[2]))]),i("div",{staticClass:"header__item"},[t._v(t._s(t.fieldsPupulation[3]))]),i("div",{staticClass:"header__item"},[t._v(t._s(t.fieldsPupulation[4]))])]),i("div",{staticClass:"table-content"},t._l(t.descriptive.datatableS,(function(e,a){return i("div",{key:a+"-"+t.editP[a],staticClass:"table-row"},[i("div",{key:t.editP[a],staticClass:"table-data"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.editP[a],expression:"!editP[i]"}]},[t._v(" "+t._s(e["POBLACION_TOTAL"])+" hab ")]),i("b-input",{directives:[{name:"show",rawName:"v-show",value:t.editP[a],expression:"editP[i]"}],model:{value:t.tempPopulation.pTotal,callback:function(e){t.$set(t.tempPopulation,"pTotal",e)},expression:"tempPopulation.pTotal"}})],1),i("div",{key:t.editP[a],staticClass:"table-data"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.editP[a],expression:"!editP[i]"}]},[t._v(" "+t._s(e["POBLACION_CABECERA"])+" hab ")]),i("b-input",{directives:[{name:"show",rawName:"v-show",value:t.editP[a],expression:"editP[i]"}],model:{value:t.tempPopulation.pCabecera,callback:function(e){t.$set(t.tempPopulation,"pCabecera",e)},expression:"tempPopulation.pCabecera"}})],1),i("div",{key:t.editP[a],staticClass:"table-data"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.editP[a],expression:"!editP[i]"}]},[t._v(" "+t._s(e["POBLACION_RESTO"])+" hab ")]),i("b-input",{directives:[{name:"show",rawName:"v-show",value:t.editP[a],expression:"editP[i]"}],model:{value:t.tempPopulation.pResto,callback:function(e){t.$set(t.tempPopulation,"pResto",e)},expression:"tempPopulation.pResto"}})],1),i("div",{key:t.editP[a],staticClass:"table-data"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.editP[a],expression:"!editP[i]"}]},[t._v(" "+t._s(e["AÑO"])+" ")]),i("b-input",{directives:[{name:"show",rawName:"v-show",value:t.editP[a],expression:"editP[i]"}],model:{value:t.tempPopulation.anio,callback:function(e){t.$set(t.tempPopulation,"anio",e)},expression:"tempPopulation.anio"}})],1),i("div",{key:t.editP[a],staticClass:"table-data"},[t.editP[a]?t._e():i("b-button",{attrs:{variant:"outline-primary"},on:{click:function(i){t.editP[a]=!0,t.doEditP(e,a)}}},[t._v(" "+t._s(t.$t("descriptive.edit"))+" ")]),t.editP[a]?i("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.doSaveP(a)}}},[t._v(" "+t._s(t.$t("descriptive.save"))+" ")]):t._e(),t.editP[a]?i("b-button",{attrs:{variant:"outline-info"},on:{click:function(e){t.doCancelP(a),t.editP[a]=!1}}},[t._v(" "+t._s(t.$t("descriptive.cancel"))+" ")]):t._e()],1)])})),0)])]),i("b-modal",{attrs:{id:"popD",size:"xl","hide-footer":"",title:t.$t("descriptive.populationDensity")}},[i("div",{staticClass:"table"},[i("div",{staticClass:"table-header"},[i("div",{staticClass:"header__item"},[t._v(t._s(t.fieldsDensity[0]))]),i("div",{staticClass:"header__item"},[t._v(t._s(t.fieldsDensity[1]))]),i("div",{staticClass:"header__item"},[t._v(t._s(t.fieldsDensity[2]))]),i("div",{staticClass:"header__item"},[t._v(t._s(t.fieldsDensity[3]))]),i("div",{staticClass:"header__item"},[t._v(t._s(t.fieldsDensity[4]))])]),i("div",{staticClass:"table-content"},t._l(t.descriptive.datatableD,(function(e,a){return i("div",{key:a+"-"+t.editD[a],staticClass:"table-row"},[i("div",{key:t.editD[a],staticClass:"table-data"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.editD[a],expression:"!editD[i]"}]},[t._v(" "+t._s(e["POBLACION_TOTAL"])+" hab ")]),i("b-input",{directives:[{name:"show",rawName:"v-show",value:t.editD[a],expression:"editD[i]"}],model:{value:t.tempDensity.pTotal,callback:function(e){t.$set(t.tempDensity,"pTotal",e)},expression:"tempDensity.pTotal"}})],1),i("div",{staticClass:"table-data"},[i("span",[t._v(" "+t._s(e["DENSIDAD POBLACIONAL"])+" hab/ha ")])]),i("div",{key:t.editD[a],staticClass:"table-data"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.editD[a],expression:"!editD[i]"}]},[t._v(" "+t._s(e["AREA"])+" ha ")]),i("b-input",{directives:[{name:"show",rawName:"v-show",value:t.editD[a],expression:"editD[i]"}],model:{value:t.tempDensity.area,callback:function(e){t.$set(t.tempDensity,"area",e)},expression:"tempDensity.area"}})],1),i("div",{key:t.editD[a],staticClass:"table-data"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.editD[a],expression:"!editD[i]"}]},[t._v(" "+t._s(e["AÑO"])+" ")]),i("b-input",{directives:[{name:"show",rawName:"v-show",value:t.editD[a],expression:"editD[i]"}],model:{value:t.tempDensity.anio,callback:function(e){t.$set(t.tempDensity,"anio",e)},expression:"tempDensity.anio"}})],1),i("div",{key:t.editD[a],staticClass:"table-data"},[t.editD[a]?t._e():i("b-button",{attrs:{variant:"outline-primary"},on:{click:function(i){t.editD[a]=!0,t.doEditD(e,a)}}},[t._v(" "+t._s(t.$t("descriptive.edit"))+" ")]),t.editD[a]?i("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.doSaveD(a)}}},[t._v(" "+t._s(t.$t("descriptive.save"))+" ")]):t._e(),t.editD[a]?i("b-button",{attrs:{variant:"outline-info"},on:{click:function(e){t.doCancelD(a),t.editD[a]=!1}}},[t._v(" "+t._s(t.$t("descriptive.cancel"))+" ")]):t._e()],1)])})),0)])])],1)},s=[],d={name:"Des1",data:function(){return{eel:{},idDes:0,descriptive:{},labels:[],datasets:[],dDatasets:[],bDatasets:[],vLabesl:[],vDatasets:[],wizard:1,tempPopulation:{id:"",pTotal:"",pCabecera:"",pResto:"",anio:""},editP:[],fieldsPupulation:["POBLACION TOTAL","POBLACION CABECERA","POBLACION RESTO","AÑO","ACCIÓN"],tempDensity:{id:"",pTotal:"",area:"",anio:""},editD:[],fieldsDensity:["POBLACION TOTAL","DENSIDAD POBLACIONAL","AREA (hectáreas)","AÑO","ACCIÓN"]}},mounted:function(){var t=this;null!=this.$route.params.id&&(this.idDes=this.$route.params.id,window.eel.find_descriptive(this.idDes)((function(e){t.descriptive=JSON.parse(e),t.labels=t.descriptive.labels,t.vLabesl=t.descriptive.vLabesl,t.datasets=t.descriptive.datasets,t.dDatasets=t.descriptive.dDatasets,t.bDatasets=t.descriptive.bDatasets,t.vDatasets=t.descriptive.vDatasets;for(var i=0;i<t.descriptive.datatableS.length;i++)t.editP.push(!1);for(var a=0;a<t.descriptive.datatableD.length;a++)t.editD.push(!1)})))},computed:{},methods:{makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;this.$bvToast.toast(e,{title:e,variant:t,solid:!0,autoHideDelay:2e3,toaster:"b-toaster-bottom-right"})},reloadData:function(){var t=this;this.descriptive={},this.labels={},this.datasets={},this.dDatasets={},window.eel.find_descriptive(this.idDes)((function(e){t.descriptive=JSON.parse(e),t.labels=t.descriptive.labels,t.datasets=t.descriptive.datasets,t.dDatasets=t.descriptive.dDatasets;for(var i=0;i<t.descriptive.datatableS.length;i++)t.editP.push(!1);for(var a=0;a<t.descriptive.datatableD.length;a++)t.editD.push(!1)}))},doEditP:function(t,e){this.editP[e]=!0,this.tempPopulation={id:t["ID_DESCRIPTIVA"],pTotal:t["POBLACION_TOTAL"],pCabecera:t["POBLACION_CABECERA"],pResto:t["POBLACION_RESTO"],anio:t["AÑO"]}},doSaveP:function(t){var e=this;window.eel.save_population(this.tempPopulation)((function(t){"true"==t&&(e.makeToast("success",e.$t("descriptive.data_save")),e.reloadData())})),this.doCancelP(t)},doCancelP:function(t){this.editP[t]=!1,this.tempPopulation={id:"",pTotal:"",pCabecera:"",pResto:"",anio:""}},doEditD:function(t,e){this.editD[e]=!0,this.tempDensity={id:t["ID_DESCRIPTIVA"],pTotal:t["POBLACION_TOTAL"],area:t["AREA"],anio:t["AÑO"]}},doSaveD:function(t){var e=this;window.eel.save_density(this.tempDensity)((function(t){"true"==t&&(e.makeToast("success",e.$t("descriptive.data_save")),e.reloadData())})),this.doCancelD(t)},doCancelD:function(t){this.editD[t]=!1,this.tempDensity={id:"",pTotal:"",anio:""}}}},o=d,l=(i("ab2a"),i("2877")),n=Object(l["a"])(o,a,s,!1,null,"09ac6860",null);e["default"]=n.exports},ab2a:function(t,e,i){"use strict";i("5fe2")}}]);
//# sourceMappingURL=chunk-525710c4.0cb4e894.js.map