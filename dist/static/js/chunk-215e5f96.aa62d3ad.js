(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-215e5f96"],{"07b9":function(t,e,a){"use strict";a("126b")},"126b":function(t,e,a){},"9f06":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return r})),a.d(e,"a",(function(){return o}));var n=a("b775");function i(){return Object(n["a"])({url:"/question/random",method:"get"})}function s(t){return Object(n["a"])({url:"/question/randomByCondition",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/question/update",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/question/delete/".concat(t.qId),method:"delete"})}},a434:function(t,e,a){"use strict";var n=a("23e7"),i=a("23cb"),s=a("a691"),r=a("50c4"),o=a("7b0b"),l=a("65f0"),c=a("8418"),d=a("1dde"),u=a("ae40"),p=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,v=Math.min,x=9007199254740991,h="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var a,n,d,u,p,f,g=o(this),m=r(g.length),y=i(t,m),w=arguments.length;if(0===w?a=n=0:1===w?(a=0,n=m-y):(a=w-2,n=v(b(s(e),0),m-y)),m+a-n>x)throw TypeError(h);for(d=l(g,n),u=0;u<n;u++)p=y+u,p in g&&c(d,u,g[p]);if(d.length=n,a<n){for(u=y;u<m-n;u++)p=u+n,f=u+a,p in g?g[f]=g[p]:delete g[f];for(u=m;u>m-n+a;u--)delete g[u-1]}else if(a>n)for(u=m-n;u>y;u--)p=u+n-1,f=u+a-1,p in g?g[f]=g[p]:delete g[f];for(u=0;u<a;u++)g[u+y]=arguments[u+2];return g.length=m-n+a,d}})},d305:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"title"},[a("strong",[t._v("问答对评估（随机生成）")])]),a("el-button",{staticStyle:{float:"right",padding:"3px 0","font-size":"15px"},attrs:{type:"text",icon:"el-icon-refresh"},on:{click:t.getData}},[t._v("换一题")])],1),a("div",{staticClass:"text item"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content label-col"},[a("label",[t._v("标题")])])])],1),a("el-row",{staticStyle:{"margin-bottom":"50px"}},[a("el-col",{attrs:{span:24}},[t.showSkeleton?a("el-skeleton",{attrs:{rows:1,animated:""}}):t._e(),t.showSkeleton?t._e():a("span",{staticClass:"content"},[t._v(" "+t._s(t.dataObj.cTitle)+" ")])],1)],1),a("el-divider"),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content label-col",staticStyle:{"line-height":"40px"}},[a("label",[t._v("上下文")])])]),a("el-col",{attrs:{span:3}},[a("el-button",{staticStyle:{"margin-left":"10px","margin-top":"6px"},attrs:{size:"mini",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(e){return t.toEdit("context")}}})],1)],1),a("el-row",{staticStyle:{"margin-bottom":"50px"}},[a("el-col",{attrs:{span:24}},[t.showSkeleton?a("el-skeleton",{attrs:{rows:3,animated:""}}):t._e(),a("div",{staticClass:"textarea"},[t.editMode.contextEdit?a("el-input",{ref:"context",attrs:{autosize:!0,type:"textarea"},on:{blur:function(e){return t.toLook("context")}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toLook("context")}},model:{value:t.dataObj.cText,callback:function(e){t.$set(t.dataObj,"cText",e)},expression:"dataObj.cText"}}):a("span",{staticStyle:{"margin-left":"10px",display:"block","font-size":"18px"},on:{click:function(e){return t.toEdit("context")}}},[t._v(" "+t._s(t.dataObj.cText)+" ")])],1)],1)],1),a("el-divider"),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content label-col",staticStyle:{"line-height":"40px"}},[a("label",[t._v("问题")])])]),a("el-col",{attrs:{span:1}},[a("el-button",{staticStyle:{"margin-left":"10px","margin-top":"6px"},attrs:{size:"mini",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(e){return t.toEdit("question")}}})],1)],1),a("el-row",{staticStyle:{"margin-bottom":"50px"}},[a("el-col",{attrs:{span:24}},[t.showSkeleton?a("el-skeleton",{attrs:{rows:1,animated:""}}):t._e(),a("div",{staticClass:"textarea"},[t.editMode.questionEdit?a("el-input",{ref:"question",attrs:{autosize:!0,type:"textarea"},on:{blur:function(e){return t.toLook("question")}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toLook("question")}},model:{value:t.dataObj.qText,callback:function(e){t.$set(t.dataObj,"qText",e)},expression:"dataObj.qText"}}):a("span",{staticStyle:{"margin-left":"10px",display:"block","font-size":"18px"},on:{click:function(e){return t.toEdit("question")}}},[t._v(" "+t._s(t.dataObj.qText)+" ")])],1)],1)],1),a("el-divider"),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content label-col",staticStyle:{"line-height":"40px"}},[a("label",[t._v("答案")])])]),a("el-col",{attrs:{span:1}},[a("el-button",{staticStyle:{"margin-left":"10px","margin-top":"6px"},attrs:{size:"mini",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(e){return t.toEdit("answer")}}})],1)],1),a("el-row",{staticStyle:{"margin-bottom":"50px"}},[a("el-col",{attrs:{span:24}},[t.showSkeleton?a("el-skeleton",{attrs:{rows:1,animated:""}}):t._e(),a("div",{staticClass:"textarea"},[t.editMode.answerEdit?a("el-input",{ref:"answer",attrs:{autosize:!0,type:"textarea"},on:{blur:function(e){return t.toLook("answer")}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toLook("answer")}},model:{value:t.dataObj.qAnswer,callback:function(e){t.$set(t.dataObj,"qAnswer",e)},expression:"dataObj.qAnswer"}}):a("span",{staticStyle:{"margin-left":"10px",display:"block","font-size":"18px"},on:{click:function(e){return t.toEdit("answer")}}},[t._v(" "+t._s(t.dataObj.qAnswer)+" ")])],1)],1)],1),a("el-divider"),a("el-row",{staticStyle:{"margin-bottom":"8px"},attrs:{gutter:20,type:"flex",align:"middle"}},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content label-col",staticStyle:{"line-height":"40px"}},[a("label",[t._v("流畅性")])])]),a("el-col",{attrs:{span:5}},[a("div",{staticStyle:{color:"gray"}},[t._v("问题是否流畅通顺")])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"rate-box"},[a("el-rate",{attrs:{texts:t.texts,"show-text":""},model:{value:t.dataObj.qFluency,callback:function(e){t.$set(t.dataObj,"qFluency",e)},expression:"dataObj.qFluency"}})],1)])],1),a("el-divider"),a("el-row",{staticStyle:{"margin-bottom":"8px"},attrs:{gutter:20,type:"flex",align:"middle"}},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content label-col",staticStyle:{"line-height":"40px"}},[a("label",[t._v("合理性")])])]),a("el-col",{attrs:{span:5}},[a("div",{staticStyle:{color:"gray"}},[t._v("问题与答案是否合理")])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"rate-box"},[a("el-rate",{attrs:{texts:t.texts,"show-text":""},model:{value:t.dataObj.qReasonability,callback:function(e){t.$set(t.dataObj,"qReasonability",e)},expression:"dataObj.qReasonability"}})],1)])],1),a("el-divider"),a("el-row",{staticStyle:{"margin-bottom":"8px"},attrs:{gutter:20,type:"flex",align:"middle"}},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content label-col",staticStyle:{"line-height":"40px"}},[a("label",[t._v("相关性")])])]),a("el-col",{attrs:{span:5}},[a("div",{staticStyle:{color:"gray"}},[t._v("问题是否与相应上下文匹配")])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"rate-box"},[a("el-rate",{attrs:{texts:t.texts,"show-text":""},model:{value:t.dataObj.qRelevance,callback:function(e){t.$set(t.dataObj,"qRelevance",e)},expression:"dataObj.qRelevance"}})],1)])],1),a("el-divider"),a("el-row",{staticStyle:{"margin-bottom":"8px"},attrs:{gutter:20,type:"flex",align:"middle"}},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content label-col",staticStyle:{"line-height":"40px"}},[a("label",[t._v("难度")])])]),a("el-col",{attrs:{span:5}},[a("div",{staticStyle:{color:"gray"}},[t._v("回答该问题的难易程度")])]),a("el-col",{attrs:{span:12}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.dataObj.qDifficulty,callback:function(e){t.$set(t.dataObj,"qDifficulty",e)},expression:"dataObj.qDifficulty"}},t._l(t.difficulties,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.note))])])})),1)],1)],1),a("el-divider"),a("el-row",{staticStyle:{"margin-bottom":"8px"},attrs:{gutter:20,type:"flex",align:"middle"}},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content label-col",staticStyle:{"line-height":"40px"}},[a("label",[t._v("干扰项")])])]),a("el-col",{attrs:{span:5}},[a("div",{staticStyle:{color:"gray"}},[t._v("答案的干扰项")])]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"rate-box"},t._l(t.dataObj.qDistractorList,(function(e,n){return a("el-input",{directives:[{name:"show",rawName:"v-show",value:t.dataObj.qDistractorList.length>0,expression:"dataObj.qDistractorList.length>0"}],key:n,staticStyle:{"margin-bottom":"5px"},model:{value:t.dataObj.qDistractorList[n],callback:function(e){t.$set(t.dataObj.qDistractorList,n,e)},expression:"dataObj.qDistractorList[index]"}})})),1)]),a("el-col",{attrs:{span:3}},t._l(t.dataObj.qDistractorList.length,(function(e){return t.dataObj.qDistractorList.length>0?a("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{type:"warning",icon:"el-icon-delete",round:"",plain:""},on:{click:function(a){return t.deleteDistractor(e-1)}}},[t._v(" 删除 ")]):t._e()})),1),a("el-col",{attrs:{span:3}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{icon:"el-icon-circle-plus-outline",type:"primary",round:"",plain:""},on:{click:t.addDistractor}},[t._v(" 增加 ")])],1)],1),a("el-divider"),a("el-row",{staticStyle:{"margin-top":"50px"},attrs:{type:"flex",justify:"space-between"}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"danger",icon:"el-icon-delete",size:"large"},on:{click:function(e){t.showDelete=!0}}},[t._v("删 除")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"success",icon:"el-icon-suitcase",size:"large"},on:{click:t.updateEdit}},[t._v("保 存")])],1)],1),a("el-dialog",{attrs:{title:"提示",visible:t.showDelete,width:"30%"},on:{"update:visible":function(e){t.showDelete=e}}},[a("span",[t._v("确定要删除吗")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.showDelete=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.updateDelete}},[t._v("确 定")])],1)])],1)],1)},i=[],s=a("1da1"),r=(a("96cf"),a("4de4"),a("d3b7"),a("a434"),a("e9c4"),a("9f06")),o=a("5f87"),l=a("0644"),c=a.n(l),d={data:function(){return{loading:!1,errored:!1,showSkeleton:!0,showEdit:!1,showDelete:!1,dataObj:{},editMode:{contextEdit:!1,questionEdit:!1,answerEdit:!1},form:{context:"I am your father.",question:"Who is you ?",answer:"Father"},difficulties:[{value:1,label:"简单",note:"单句即可得答案"},{value:2,label:"中等",note:"需要多句推理"},{value:3,label:"困难",note:"难以得出答案"}],difficulty:"",texts:["极差","差","一般","好","很好"],count:0,token:Object(o["a"])()}},created:function(){this.getData()},methods:{getData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(r["b"])();case 3:a=e.sent,a.data.qDistractorList=a.data.qDistractorList.filter((function(t){return""!==t})),t.dataObj=a.data,t.showSkeleton=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$message.error("获取数据失败");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},toLook:function(t){switch(t){case"context":if(""===this.dataObj.cText)return void this.$message.error("输入不能为空");this.editMode.contextEdit=!1;break;case"question":if(""===this.dataObj.qText)return void this.$message.error("输入不能为空");this.editMode.questionEdit=!1;break;case"answer":this.editMode.answerEdit=!1;break}},toEdit:function(t){var e=this;switch(t){case"context":this.editMode.contextEdit=!0,this.$nextTick((function(){e.$refs[t].focus()}));break;case"question":this.editMode.questionEdit=!0,this.$nextTick((function(){e.$refs[t].focus()}));break;case"answer":this.editMode.answerEdit=!0,this.$nextTick((function(){e.$refs[t].focus()}));break}},addDistractor:function(){this.dataObj.qDistractorList.push("")},deleteDistractor:function(t){this.dataObj.qDistractorList.splice(t,1)},updateEdit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=c()(t.dataObj),a.qDistractorList=JSON.stringify(a.qDistractorList),e.prev=2,e.next=5,Object(r["d"])(a);case 5:if(n=e.sent,200!==n.code){e.next=12;break}return t.$message({message:"修改成功",type:"success"}),e.next=10,t.getData();case 10:e.next=13;break;case 12:t.$message.error("更新失败");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](2),t.$message.error("更新失败");case 18:case"end":return e.stop()}}),e,null,[[2,15]])})))()},updateDelete:function(){var t=this;Object(r["a"])({qId:this.dataObj.qId}).then((function(e){t.showDelete=!1,200===e.code?t.$message({message:"删除成功",type:"success"}):t.$message.error("删除失败"),t.getData()}))},generateRandomNum:function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}},nextQuestionnnn:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,axios.get("http://localhost:8000/choice-question-count").then((function(t){return e.count=t.data.count}));case 2:random=this.generateRandomNum(this.count),axios.get("http://localhost:8000/choice-question/"+random).then((function(t){return e.content=t.data.content,e.option_a=t.data.option_a,e.option_b=t.data.option_b,e.option_c=t.data.option_c,e.option_d=t.data.option_d,e.answer=t.data.answer,e.resolution=""==t.data.solution?"暂无解析":t.data.solution})).catch((function(t){console.log(t),e.errored=!0})).finally((function(){return e.loading=!1}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},u=d,p=(a("07b9"),a("2877")),f=Object(p["a"])(u,n,i,!1,null,"e675450c",null);e["default"]=f.exports},e9c4:function(t,e,a){var n=a("23e7"),i=a("d066"),s=a("d039"),r=i("JSON","stringify"),o=/[\uD800-\uDFFF]/g,l=/^[\uD800-\uDBFF]$/,c=/^[\uDC00-\uDFFF]$/,d=function(t,e,a){var n=a.charAt(e-1),i=a.charAt(e+1);return l.test(t)&&!c.test(i)||c.test(t)&&!l.test(n)?"\\u"+t.charCodeAt(0).toString(16):t},u=s((function(){return'"\\udf06\\ud834"'!==r("\udf06\ud834")||'"\\udead"'!==r("\udead")}));r&&n({target:"JSON",stat:!0,forced:u},{stringify:function(t,e,a){var n=r.apply(null,arguments);return"string"==typeof n?n.replace(o,d):n}})}}]);