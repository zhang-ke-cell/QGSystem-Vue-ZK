(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ce94b03"],{"38e7":function(t,e,o){"use strict";o("4818")},4818:function(t,e,o){},ca73:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("el-card",{staticClass:"box-card"},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",{staticClass:"title"},[o("strong",[t._v("QA-Pairs Evaluation (In Order)")])]),o("el-button",{staticStyle:{float:"right",padding:"3px 0","font-size":"15px"},attrs:{type:"text"},on:{click:t.randomChooseOne}},[t._v("换一题")])],1),o("div",{staticClass:"text item"},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("div",{staticClass:"grid-content label-col"},[o("label",[t._v("Context")])])])],1),o("el-row",[o("el-col",{attrs:{span:24}},[t.showSkeleton?o("el-skeleton",{attrs:{rows:3,animated:""}}):t._e(),t.showSkeleton?t._e():o("p",{staticClass:"content"},[t._v(" "+t._s(t.context)+" ")])],1)],1),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("div",{staticClass:"grid-content label-col"},[o("label",[t._v("Question")])])])],1),o("el-row",[o("el-col",{attrs:{span:24}},[t.showSkeleton?o("el-skeleton",{attrs:{rows:1,animated:""}}):t._e(),t.showSkeleton?t._e():o("p",{staticClass:"content"},[t._v(" "+t._s(t.question)+" ")])],1)],1),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("div",{staticClass:"grid-content label-col"},[o("label",[t._v("Answer")])])])],1),o("el-row",[o("el-col",{attrs:{span:24}},[t.showSkeleton?o("el-skeleton",{attrs:{rows:1,animated:""}}):t._e(),t.showSkeleton?t._e():o("p",{staticClass:"content"},[t._v(" "+t._s(t.answer)+" ")])],1)],1),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("div",{staticClass:"grid-content label-col"},[o("label",[t._v("Title")])])])],1),o("el-row",[o("el-col",{attrs:{span:24}},[t.showSkeleton?o("el-skeleton",{attrs:{rows:1,animated:""}}):t._e(),t.showSkeleton?t._e():o("p",{staticClass:"content"},[t._v(" "+t._s(t.title)+" ")])],1)],1),o("el-row"),o("el-row",{attrs:{gutter:20,type:"flex",align:"middle"}},[o("el-col",{attrs:{span:3}},[o("div",{staticClass:"grid-content label-col"},[o("label",[t._v("流畅程度")])])]),o("el-col",{attrs:{span:5}},[o("div",{staticStyle:{color:"gray"}},[t._v("文本是否流畅通顺")])]),o("el-col",{attrs:{span:12}},[o("div",{staticClass:"rate-box"},[o("el-rate",{attrs:{"show-text":""},model:{value:t.fluency,callback:function(e){t.fluency=e},expression:"fluency"}})],1)])],1),o("el-row",{attrs:{gutter:20,type:"flex",align:"middle"}},[o("el-col",{attrs:{span:3}},[o("div",{staticClass:"grid-content label-col"},[o("label",[t._v("合理程度")])])]),o("el-col",{attrs:{span:5}},[o("div",{staticStyle:{color:"gray"}},[t._v("问题与答案是否合理")])]),o("el-col",{attrs:{span:12}},[o("div",{staticClass:"rate-box"},[o("el-rate",{attrs:{"show-text":""},model:{value:t.reasonable,callback:function(e){t.reasonable=e},expression:"reasonable"}})],1)])],1),o("el-row",{attrs:{gutter:20,type:"flex",align:"middle"}},[o("el-col",{attrs:{span:3}},[o("div",{staticClass:"grid-content label-col"},[o("label",[t._v("相关程度")])])]),o("el-col",{attrs:{span:5}},[o("div",{staticStyle:{color:"gray"}},[t._v("问题文本是否与相应上下文匹配")])]),o("el-col",{attrs:{span:12}},[o("div",{staticClass:"rate-box"},[o("el-rate",{attrs:{"show-text":""},model:{value:t.relevance,callback:function(e){t.relevance=e},expression:"relevance"}})],1)])],1),o("el-row",{attrs:{type:"flex",justify:"space-between"}},[o("el-button-group",[o("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){t.editDialog=!0}}},[t._v("修 改")]),o("el-button",{attrs:{type:"primary",icon:"el-icon-delete"},on:{click:function(e){t.confirmDelete=!0}}},[t._v("删 除")])],1),o("el-button",{attrs:{type:"success"},on:{click:t.nextQuestion}},[t._v("下一个"),o("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1),o("el-dialog",{attrs:{title:"提示",visible:t.confirmDelete,width:"30%"},on:{"update:visible":function(e){t.confirmDelete=e}}},[o("span",[t._v("确定要删除吗")]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.confirmDelete=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:t.deleteQ}},[t._v("确 定")])],1)]),o("el-dialog",{attrs:{title:"修改",visible:t.editDialog},on:{"update:visible":function(e){t.editDialog=e}}},[o("el-form",{attrs:{model:t.form}},[o("el-form-item",{attrs:{label:"Context","label-width":"120px"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:t.form.context,callback:function(e){t.$set(t.form,"context",e)},expression:"form.context"}})],1),o("el-form-item",{attrs:{label:"Question","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.question,callback:function(e){t.$set(t.form,"question",e)},expression:"form.question"}})],1),o("el-form-item",{attrs:{label:"Answer","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.answer,callback:function(e){t.$set(t.form,"answer",e)},expression:"form.answer"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.editDialog=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:t.editQuestion}},[t._v("确 定")])],1)],1)],1)])],1)},n=[],s=o("9d6b"),l=(o("e186"),o("e18c"),o("b775"));function i(t){return Object(l["a"])({url:"/question/random",method:"get",params:t})}function r(t){return Object(l["a"])({url:"/question/update",method:"post",params:t})}function c(t){return Object(l["a"])({url:"/question/rate",method:"post",params:t})}function u(t){return Object(l["a"])({url:"/question/"+t.id,method:"delete"})}var d={data:function(){return{loading:!1,errored:!1,showSkeleton:!0,editDialog:!1,confirmDelete:!1,question_id:0,context_id:0,context:"I am your father.",question:"Who are you ?",answer:"father",title:"human",form:{context:"I am your father.",question:"Who is you ?",answer:"Father"},fluency:0,reasonable:0,relevance:0,count:0}},created:function(){this.fetchData()},methods:{fetchData:function(){this.randomChooseOne()},putData:function(t){this.context=t.data.reference.text,this.question=t.data.text,this.answer=t.data.answerText,this.title=t.data.reference.title,this.question_id=t.data.id,this.context_id=t.data.reference.id,this.form.question=this.question,this.form.context=this.context,this.form.answer=this.answer,this.showSkeleton=!1},fakeLoading:function(){var t=this;this.showSkeleton=!0,setTimeout((function(){t.showSkeleton=!1}),2e3)},editQuestion:function(){var t=this;r({id:this.question_id,contextId:this.context_id,context:this.form.context,question:this.form.question,answer:this.form.answer}).then((function(e){t.showSkeleton=!0,t.putData(e)})),this.editDialog=!1,this.$message({message:"修改成功",type:"success"})},deleteQ:function(){var t=this;u({id:this.question_id}).then((function(e){t.confirmDelete=!1,200===e.code?t.$message({message:"删除成功",type:"success"}):t.$message.error("删除失败"),t.fetchData()}))},nextQuestion:function(){var t=this;c({id:this.question_id,fluency:this.fluency,reasonable:this.reasonable,relevance:this.relevance}).then((function(e){t.showSkeleton=!0,t.fetchData(),t.fluency=0,t.reasonable=0,t.relevance=0}))},randomChooseOne:function(){var t=this;i().then((function(e){t.showSkeleton=!0,t.putData(e)}))},generateRandomNum:function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}},nextQuestionnnn:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,axios.get("http://localhost:8000/choice-question-count").then((function(t){return e.count=t.data.count}));case 2:random=this.generateRandomNum(this.count),axios.get("http://localhost:8000/choice-question/"+random).then((function(t){return e.content=t.data.content,e.option_a=t.data.option_a,e.option_b=t.data.option_b,e.option_c=t.data.option_c,e.option_d=t.data.option_d,e.answer=t.data.answer,e.resolution=""==t.data.solution?"暂无解析":t.data.solution})).catch((function(t){console.log(t),e.errored=!0})).finally((function(){return e.loading=!1}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},f=d,h=(o("38e7"),o("cba8")),p=Object(h["a"])(f,a,n,!1,null,"1309544d",null);e["default"]=p.exports}}]);