(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62ca2456"],{"333d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];n("a9e3");Math.easeInOutQuad=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(e,t,n){var a=l(),i=e-a,r=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=r;var l=Math.easeInOutQuad(c,a,i,t);s(l),c<t?o(e):n&&"function"===typeof n&&n()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&r(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},u=c,d=(n("58ad"),n("2877")),p=Object(d["a"])(u,a,i,!1,null,"38b4dca8",null);t["a"]=p.exports},"3f16":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-main"},[n("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("div",{staticStyle:{display:"inline-block","line-height":"40px"}},[n("label",{staticStyle:{"font-size":"x-large"}},[e._v("问题生成")])]),n("el-button-group",{staticStyle:{float:"right","background-color":"ghostwhite"}},[n("el-button",{attrs:{icon:"el-icon-help"},on:{click:e.selectAlgo}},[e._v("加载模型")]),n("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.getList}},[e._v("获取问题")])],1),n("div",{staticStyle:{float:"right",height:"40px"}},[n("el-divider",{staticStyle:{display:"block",float:"right"},attrs:{direction:"vertical"}})],1),n("el-select",{staticStyle:{float:"right"},attrs:{placeholder:"请选择模型"},model:{value:e.algo,callback:function(t){e.algo=t},expression:"algo"}},e._l(e.algoOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.list,border:"",fit:"","highlight-current-row":"","default-expand-all":!1}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;t.$index;return[n("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:a.qList}},[n("el-table-column",{attrs:{label:"问题 ID",align:"center",width:"85"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;t.$index;return[n("span",[e._v(e._s(a.qId))])]}}],null,!0)}),n("el-table-column",{attrs:{label:"问题",width:"290px",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;t.$index;return[n("span",[e._v(e._s(a.qText))])]}}],null,!0)}),n("el-table-column",{attrs:{label:"答案",width:"100px",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.qAnswer))])]}}],null,!0)}),n("el-table-column",{attrs:{label:"流畅性",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return e._l(+a.qFluency,(function(e){return n("svg-icon",{key:e,staticClass:"meta-item__icon",attrs:{"icon-class":"star"}})}))}}],null,!0)}),n("el-table-column",{attrs:{label:"可回答性",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return e._l(+a.qReasonability,(function(e){return n("svg-icon",{key:e,staticClass:"meta-item__icon",attrs:{"icon-class":"star"}})}))}}],null,!0)}),n("el-table-column",{attrs:{label:"相关性",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return e._l(+a.qRelevance,(function(e){return n("svg-icon",{key:e,staticClass:"meta-item__icon",attrs:{"icon-class":"star"}})}))}}],null,!0)}),n("el-table-column",{attrs:{label:"难度",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return e._l(+a.qDifficulty,(function(e){return n("svg-icon",{key:e,staticClass:"meta-item__icon",attrs:{"icon-class":"star"}})}))}}],null,!0)}),n("el-table-column",{attrs:{label:"状态","class-name":"status-col",width:"95",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("div",{staticStyle:{margin:"0 auto","text-align":"center"}},[n("el-tag",{attrs:{type:e._f("qStatusFilter")(a.qIsChecked)}},[e._v(" "+e._s(a.qIsChecked?"已标注":"未标注")+" ")])],1)]}}],null,!0)}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row,i=t.$index;return[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(t){return e.handleEdit(a,i)}}},[e._v(" 编辑 ")]),n("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(t){return e.handleDelete(a,i)}}},[e._v(" 删除 ")])]}}],null,!0)})],1)]}}])}),n("el-table-column",{attrs:{label:"上下文 ID",prop:"cId",align:"center",width:"85"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.cId))])]}}])}),n("el-table-column",{attrs:{label:"上下文",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.cText))])]}}])}),n("el-table-column",{attrs:{label:"状态","class-name":"status-col",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("div",{staticStyle:{margin:"0 auto","text-align":"center"}},[n("el-tag",{attrs:{type:e._f("cStatusFilter")(a.allChecked)}},[e._v(" "+e._s(a.allChecked?"已全部标注":"未全部标注")+" ")])],1)]}}])})],1)],1),n("Pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],staticStyle:{"text-align":"center"},attrs:{total:e.total,page:e.listQuery.pageNum,limit:e.listQuery.pageLimit},on:{"update:page":function(t){return e.$set(e.listQuery,"pageNum",t)},"update:limit":function(t){return e.$set(e.listQuery,"pageLimit",t)},pagination:e.getList}}),n("el-dialog",{attrs:{title:"问题展示",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:e.temp,"label-position":"left","label-width":"100px"}},[n("el-form-item",{attrs:{label:"上下文"}},[n("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",autosize:!0,readonly:!0},model:{value:e.temp.cText,callback:function(t){e.$set(e.temp,"cText",t)},expression:"temp.cText"}})],1),n("el-form-item",{attrs:{label:"问题"}},[n("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",autosize:!0,readonly:!1},model:{value:e.temp.qText,callback:function(t){e.$set(e.temp,"qText",t)},expression:"temp.qText"}})],1),n("el-form-item",{attrs:{label:"答案"}},[n("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",autosize:!0,readonly:!1},model:{value:e.temp.qAnswer,callback:function(t){e.$set(e.temp,"qAnswer",t)},expression:"temp.qAnswer"}})],1),n("el-form-item",{attrs:{label:"流畅性"}},[n("el-rate",{staticStyle:{height:"40px","padding-top":"10px"},attrs:{"show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:e.temp.qFluency,callback:function(t){e.$set(e.temp,"qFluency",t)},expression:"temp.qFluency"}})],1),n("el-form-item",{attrs:{label:"可回答性"}},[n("el-rate",{staticStyle:{height:"40px","padding-top":"10px"},attrs:{"show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:e.temp.qReasonability,callback:function(t){e.$set(e.temp,"qReasonability",t)},expression:"temp.qReasonability"}})],1),n("el-form-item",{attrs:{label:"相关性"}},[n("el-rate",{staticStyle:{height:"40px","padding-top":"10px"},attrs:{"show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:e.temp.qRelevance,callback:function(t){e.$set(e.temp,"qRelevance",t)},expression:"temp.qRelevance"}})],1),n("el-form-item",{attrs:{label:"难度"}},[n("el-rate",{staticStyle:{height:"40px","padding-top":"10px"},attrs:{max:3,"show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:e.temp.qDifficulty,callback:function(t){e.$set(e.temp,"qDifficulty",t)},expression:"temp.qDifficulty"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.handleNo}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.handleYes}},[e._v("确 定")])],1)],1),n("div",{staticStyle:{"text-align":"center"}},[n("el-button-group",{staticStyle:{margin:"0 auto"}},[n("el-button",{attrs:{type:"info",icon:"el-icon-arrow-left"},on:{click:e.toDataInput}},[e._v("上一步")]),n("el-button",{attrs:{type:"primary"},on:{click:e.toDistractorGeneration}},[e._v("下一步"),n("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1)],1)],1)},i=[],o=n("1da1"),s=(n("d3b7"),n("159b"),n("c740"),n("a434"),n("96cf"),n("333d")),l=n("6724"),r=n("b775");function c(e){return Object(r["a"])({url:"/multistep/selectAlgo",method:"get",params:e})}function u(e){return Object(r["a"])({url:"/multistep/getQuestions",method:"get",params:e})}function d(e){return Object(r["a"])({url:"/multistep/updateQuestion",method:"post",data:e})}function p(e){return Object(r["a"])({url:"/multistep/deleteQuestion",method:"delete",params:e})}var f=n("0644"),h=n.n(f),m={name:"QGEvaluation",components:{Pagination:s["a"]},directives:{waves:l["a"]},filters:{qStatusFilter:function(e){return e?"success":"danger"},cStatusFilter:function(e){return e?"success":"danger"}},data:function(){return{loading:!1,algo:void 0,algoOptions:[{key:"0",label:"mt5",value:0}],finishLoadAlgo:!1,list:[{cId:"1",cText:"Homework can put you in a badmood , and that might actually be a good thing. Researchers from the University of Plymouth in England doubted whether mood might affect the way kids learn. To find out the answer, they did two experiments with children.\nThe first experiment tested 30 kids. Someshapes  were hidden inside a different, larger picture. The kids had to find the small shapes while sitting in a room with either cheerful or sad music playing in the background. To test their mood, the scientists asked the kids to point to one of five faces, from happy to sad. Children who listened to cheerful music tended to point to the smiley faces while the others pointed to the unhappy ones. The researchers found that sad kids took at least a second less to find the small shapes. They also found an average of three or four more shapes.\nIn the second experiment, 61 children watched one of two scenes from a film. One scene was happy, and the other was sad. Just like in the first experiment, kids who saw the sad scene acted better compared to the others.\nThe researchers guessed that feeling down makes people more likely to focus on a problem or difficult situation. Not all scientists agree with them, however. Other studies argued that maybe, that cheerful music in the first experimentdistracted   kids from finding shapes.\nWhile scientists work on finding out the answers, it still might be wise to choose when to do your tasks according to your mood. After eating a delicious ice cream, for example, write an essay.",qList:[{qId:"1",qText:"Researchers did experiments on kids in order to find out   _  .",qAnswer:"B",qIschecked:!0,qFluency:1,qRelevance:2,qReasonability:3,qDifficulty:2},{qId:"2",qText:"The researchers found in the first experiment that   _  .",qAnswer:"in minim nisi cillum",qIschecked:!1,qFluency:1,qRelevance:2,qReasonability:3,qDifficulty:2},{qId:"3",qText:"What can we learn from the text?",qAnswer:"A",qIschecked:!0,qFluency:1,qRelevance:2,qReasonability:3,qDifficulty:2}]}],total:20,temp:{},dialogFormVisible:!1,listQuery:{pageNum:0,pageLimit:20}}},methods:{selectAlgo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0!==e.algo){t.next=3;break}return e.$message.warning("请先选择模型 ！"),t.abrupt("return");case 3:return e.loading=!0,t.prev=4,t.next=7,c({algorithm:e.algo});case 7:n=t.sent,200===n.code?setTimeout((function(){e.$message.success("加载模型成功"),e.loading=!1,e.finishLoadAlgo=!0}),300):e.loading=!1,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](4),e.loading=!1,e.$message.error("加载模型失败");case 15:case"end":return t.stop()}}),t,null,[[4,11]])})))()},getList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,u(e.listQuery);case 4:n=t.sent,e.total=n.data.total,n.data.dataList.forEach((function(e){var t=e.qList.findIndex((function(e){return!1===e.qIsChecked}));e.allChecked=-1===t})),e.list=n.data.dataList,200===n.code?setTimeout((function(){e.$message.success("获取问题成功"),e.loading=!1}),300):e.loading=!1,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](1),e.loading=!1,e.$message.error("获取问题失败");case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()},handleEdit:function(e,t){this.dialogFormVisible=!0,this.temp=h()(e);var n=this.list.findIndex((function(n){return n.qList.length>=t+1&&e.qId===n.qList[t].qId}));this.list[n].cText&&this.$set(this.temp,"cText",this.list[n].cText),this.list[n].cId&&this.$set(this.temp,"cId",this.list[n].cId)},handleModifyStatus:function(e,t,n){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){var o,s,l;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.qIsChecked=t,o=a.list.findIndex((function(t){return t.qList.length>=n+1&&e.qId===t.qList[n].qId})),s=a.list[o].qList.findIndex((function(e){return!1===e.qIsChecked})),a.$set(a.list[o],"allChecked",-1===s),i.prev=4,a.listLoading=!0,i.next=8,d(e);case 8:l=i.sent,200===l.code?setTimeout((function(){a.listLoading=!1,a.$message({message:"成功更新ID为".concat(e.qId,"的问题"),type:"success"})}),300):a.listLoading=!1,i.next=16;break;case 12:i.prev=12,i.t0=i["catch"](4),a.listLoading=!1,a.$message({message:"更新ID为".concat(e.qId,"的问题失败"),type:"error"});case 16:case"end":return i.stop()}}),i,null,[[4,12]])})))()},handleDelete:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.listLoading=!0,t.next=3,p({qId:e.qId});case 3:a=t.sent,200===a.code&&setTimeout((function(){n.$message({type:"success",message:"删除ID为".concat(e.qId,"的问题成功!")}),n.getList(),n.listLoading=!1}),300);case 5:case"end":return t.stop()}}),t)})))).catch((function(){n.$message({type:"info",message:"已取消删除ID为".concat(e.qId,"的问题")}),n.listLoading=!1}));case 1:case"end":return t.stop()}}),t)})))()},handleYes:function(){var e=this,t=this.list.findIndex((function(t){return t.cId===e.temp.cId})),n=this.list[t].qList.findIndex((function(t){return t.qId===e.temp.qId}));delete this.temp.cId,delete this.temp.cText,this.list[t].qList.splice(n,1,this.temp),this.dialogFormVisible=!1,this.handleModifyStatus(this.list[t].qList[n],!0,n)},handleNo:function(){this.dialogFormVisible=!1},toDataInput:function(){this.$router.push({name:"DataInput"})},toDistractorGeneration:function(){this.$router.push({name:"DistractorGeneration"})}}},g=m,y=(n("47fc"),n("2877")),b=Object(y["a"])(g,a,i,!1,null,"6190b150",null);t["default"]=b.exports},"47fc":function(e,t,n){"use strict";n("8488")},"58ad":function(e,t,n){"use strict";n("b19e")},8488:function(e,t,n){},b19e:function(e,t,n){}}]);