(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5af070a0"],{"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];a("a9e3");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,a){var n=r(),i=t-n,s=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=s;var r=Math.easeInOutQuad(c,n,i,e);o(r),c<e?l(t):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},u=c,d=(a("58ad"),a("2877")),p=Object(d["a"])(u,n,i,!1,null,"38b4dca8",null);e["a"]=p.exports},"3f16":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-main"},[a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticStyle:{display:"inline-block","line-height":"40px"}},[a("label",{staticStyle:{"font-size":"x-large"}},[t._v("问题生成")])]),a("el-button-group",{staticStyle:{float:"right","background-color":"ghostwhite"}},[a("el-button",{attrs:{icon:"el-icon-help"},on:{click:t.selectAlgo}},[t._v("加载模型")]),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:t.getList}},[t._v("获取问题")])],1),a("div",{staticStyle:{float:"right",height:"40px"}},[a("el-divider",{staticStyle:{display:"block",float:"right"},attrs:{direction:"vertical"}})],1),a("el-select",{staticStyle:{float:"right"},attrs:{placeholder:"请选择模型"},model:{value:t.algo,callback:function(e){t.algo=e},expression:"algo"}},t._l(t.algoOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.list,border:"",fit:"","highlight-current-row":"","default-expand-all":!1}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;e.$index;return[a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:n.qList}},[a("el-table-column",{attrs:{label:"问题 ID",align:"center",width:"85"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;e.$index;return[a("span",[t._v(t._s(n.qId))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"问题",width:"290px",align:"center","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;e.$index;return[a("span",[t._v(t._s(n.qText))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"答案",width:"100px",align:"center","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.qAnswer))])]}}],null,!0)}),a("el-table-column",{attrs:{label:"流畅性",width:"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return t._l(+n.qFluency,(function(t){return a("svg-icon",{key:t,staticClass:"meta-item__icon",attrs:{"icon-class":"star"}})}))}}],null,!0)}),a("el-table-column",{attrs:{label:"合理性",width:"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return t._l(+n.qReasonability,(function(t){return a("svg-icon",{key:t,staticClass:"meta-item__icon",attrs:{"icon-class":"star"}})}))}}],null,!0)}),a("el-table-column",{attrs:{label:"相关性",width:"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return t._l(+n.qRelevance,(function(t){return a("svg-icon",{key:t,staticClass:"meta-item__icon",attrs:{"icon-class":"star"}})}))}}],null,!0)}),a("el-table-column",{attrs:{label:"难度",width:"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return t._l(+n.qDifficulty,(function(t){return a("svg-icon",{key:t,staticClass:"meta-item__icon",attrs:{"icon-class":"star"}})}))}}],null,!0)}),a("el-table-column",{attrs:{label:"状态","class-name":"status-col",width:"95",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("div",{staticStyle:{margin:"0 auto","text-align":"center"}},[a("el-tag",{attrs:{type:t._f("qStatusFilter")(n.qIsChecked)}},[t._v(" "+t._s(n.qIsChecked?"已标注":"未标注")+" ")])],1)]}}],null,!0)}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row,i=e.$index;return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(e){return t.handleEdit(n,i)}}},[t._v(" 编辑 ")]),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(e){return t.handleDelete(n,i)}}},[t._v(" 删除 ")])]}}],null,!0)})],1)]}}])}),a("el-table-column",{attrs:{label:"上下文 ID",prop:"cId",align:"center",width:"85"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.cId))])]}}])}),a("el-table-column",{attrs:{label:"上下文",align:"center","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.cText))])]}}])}),a("el-table-column",{attrs:{label:"状态","class-name":"status-col",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("div",{staticStyle:{margin:"0 auto","text-align":"center"}},[a("el-tag",{attrs:{type:t._f("cStatusFilter")(n.allChecked)}},[t._v(" "+t._s(n.allChecked?"已全部标注":"未全部标注")+" ")])],1)]}}])})],1)],1),a("Pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticStyle:{"text-align":"center"},attrs:{total:t.total,page:t.listQuery.pageNum,limit:t.listQuery.pageLimit},on:{"update:page":function(e){return t.$set(t.listQuery,"pageNum",e)},"update:limit":function(e){return t.$set(t.listQuery,"pageLimit",e)},pagination:t.getList}}),a("el-dialog",{attrs:{title:"问题展示",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:t.temp,"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"上下文"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",autosize:!0,readonly:!0},model:{value:t.temp.cText,callback:function(e){t.$set(t.temp,"cText",e)},expression:"temp.cText"}})],1),a("el-form-item",{attrs:{label:"问题"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",autosize:!0,readonly:!1},model:{value:t.temp.qText,callback:function(e){t.$set(t.temp,"qText",e)},expression:"temp.qText"}})],1),a("el-form-item",{attrs:{label:"答案"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",autosize:!0,readonly:!1},model:{value:t.temp.qAnswer,callback:function(e){t.$set(t.temp,"qAnswer",e)},expression:"temp.qAnswer"}})],1),a("el-form-item",{attrs:{label:"流畅性"}},[a("el-rate",{staticStyle:{height:"40px","padding-top":"10px"},attrs:{"show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.temp.qFluency,callback:function(e){t.$set(t.temp,"qFluency",e)},expression:"temp.qFluency"}})],1),a("el-form-item",{attrs:{label:"合理性"}},[a("el-rate",{staticStyle:{height:"40px","padding-top":"10px"},attrs:{"show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.temp.qReasonability,callback:function(e){t.$set(t.temp,"qReasonability",e)},expression:"temp.qReasonability"}})],1),a("el-form-item",{attrs:{label:"相关性"}},[a("el-rate",{staticStyle:{height:"40px","padding-top":"10px"},attrs:{"show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.temp.qRelevance,callback:function(e){t.$set(t.temp,"qRelevance",e)},expression:"temp.qRelevance"}})],1),a("el-form-item",{attrs:{label:"难度"}},[a("el-rate",{staticStyle:{height:"40px","padding-top":"10px"},attrs:{max:3,"show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.temp.qDifficulty,callback:function(e){t.$set(t.temp,"qDifficulty",e)},expression:"temp.qDifficulty"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.handleNo}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.handleYes}},[t._v("确 定")])],1)],1),a("div",{staticStyle:{"text-align":"center"}},[a("el-button-group",{staticStyle:{margin:"0 auto"}},[a("el-button",{attrs:{type:"info",icon:"el-icon-arrow-left"},on:{click:t.toDataInput}},[t._v("返回数据输入")]),a("el-button",{attrs:{type:"primary"},on:{click:t.toDistractorGeneration}},[t._v("干扰项生成"),a("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1)],1)],1)},i=[],l=a("1da1"),o=(a("d3b7"),a("159b"),a("c740"),a("a434"),a("96cf"),a("333d")),r=a("6724"),s=a("b775");function c(t){return Object(s["a"])({url:"/multistep/selectAlgo",method:"get",params:t})}function u(t){return Object(s["a"])({url:"/multistep/getQuestions",method:"get",params:t})}function d(t){return Object(s["a"])({url:"/multistep/updateQuestion",method:"post",data:t})}function p(t){return Object(s["a"])({url:"/multistep/deleteQuestion",method:"delete",params:t})}var m=a("0644"),f=a.n(m),g={name:"QGEvaluation",components:{Pagination:o["a"]},directives:{waves:r["a"]},filters:{qStatusFilter:function(t){return t?"success":"danger"},cStatusFilter:function(t){return t?"success":"danger"}},data:function(){return{loading:!1,algo:void 0,algoOptions:[{key:"0",label:"mt5",value:0}],finishLoadAlgo:!1,list:[],total:20,temp:{},dialogFormVisible:!1,listQuery:{pageNum:0,pageLimit:20}}},methods:{selectAlgo:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0!==t.algo){e.next=3;break}return t.$message.warning("请先选择模型 ！"),e.abrupt("return");case 3:return t.loading=!0,e.prev=4,e.next=7,c({algorithm:t.algo});case 7:a=e.sent,200===a.code?setTimeout((function(){t.$message.success("加载模型成功"),t.loading=!1,t.finishLoadAlgo=!0}),300):t.loading=!1,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](4),t.loading=!1,t.$message.error("加载模型失败");case 15:case"end":return e.stop()}}),e,null,[[4,11]])})))()},getList:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,u(t.listQuery);case 4:a=e.sent,t.total=a.data.total,a.data.dataList.forEach((function(t){var e=t.qList.findIndex((function(t){return!1===t.qIsChecked}));t.allChecked=-1===e})),t.list=a.data.dataList,200===a.code?setTimeout((function(){t.$message.success("获取问题成功"),t.loading=!1}),300):t.loading=!1,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](1),t.loading=!1,t.$message.error("获取问题失败");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))()},handleEdit:function(t,e){this.dialogFormVisible=!0,this.temp=f()(t);var a=this.list.findIndex((function(a){return a.qList.length>=e+1&&t.qId===a.qList[e].qId}));this.list[a].cText&&this.$set(this.temp,"cText",this.list[a].cText),this.list[a].cId&&this.$set(this.temp,"cId",this.list[a].cId)},handleModifyStatus:function(t,e,a){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function i(){var l,o,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.qIsChecked=e,l=n.list.findIndex((function(e){return e.qList.length>=a+1&&t.qId===e.qList[a].qId})),o=n.list[l].qList.findIndex((function(t){return!1===t.qIsChecked})),n.$set(n.list[l],"allChecked",-1===o),i.prev=4,n.listLoading=!0,i.next=8,d(t);case 8:r=i.sent,200===r.code?setTimeout((function(){n.listLoading=!1,n.$message({message:"成功更新ID为".concat(t.qId,"的问题"),type:"success"})}),300):n.listLoading=!1,i.next=16;break;case 12:i.prev=12,i.t0=i["catch"](4),n.listLoading=!1,n.$message({message:"更新ID为".concat(t.qId,"的问题失败"),type:"error"});case 16:case"end":return i.stop()}}),i,null,[[4,12]])})))()},handleDelete:function(t,e){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.listLoading=!0,e.next=3,p({qId:t.qId});case 3:n=e.sent,200===n.code&&setTimeout((function(){a.$message({type:"success",message:"删除ID为".concat(t.qId,"的问题成功!")}),a.getList(),a.listLoading=!1}),300);case 5:case"end":return e.stop()}}),e)})))).catch((function(){a.$message({type:"info",message:"已取消删除ID为".concat(t.qId,"的问题")}),a.listLoading=!1}));case 1:case"end":return e.stop()}}),e)})))()},handleYes:function(){var t=this,e=this.list.findIndex((function(e){return e.cId===t.temp.cId})),a=this.list[e].qList.findIndex((function(e){return e.qId===t.temp.qId}));delete this.temp.cId,delete this.temp.cText,this.list[e].qList.splice(a,1,this.temp),this.dialogFormVisible=!1,this.handleModifyStatus(this.list[e].qList[a],!0,a)},handleNo:function(){this.dialogFormVisible=!1},toDataInput:function(){this.$router.push({name:"DataInput"})},toDistractorGeneration:function(){this.$router.push({name:"DistractorGeneration"})}}},h=g,v=(a("b51d"),a("2877")),b=Object(v["a"])(h,n,i,!1,null,"775648fc",null);e["default"]=b.exports},"58ad":function(t,e,a){"use strict";a("b19e")},b19e:function(t,e,a){},b51d:function(t,e,a){"use strict";a("d324")},d324:function(t,e,a){}}]);