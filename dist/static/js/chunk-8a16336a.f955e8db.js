(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a16336a"],{"1a1f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[s("strong",[t._v("示例")])])]),s("div",[s("p",{staticClass:"text item"},[s("strong",[t._v(" Context: ")]),s("a",{staticClass:"answer"},[t._v("The Library of Congress")]),t._v(' ("LOC") is the research library that officially serves the United States Congress and is the "de facto" national library of the United States. It is the oldest federal cultural institution in the United States. The Library is housed in three buildings on Capitol Hill in Washington, D.C.; it also maintains the Packard Campus in Culpeper, Virginia, which houses the National Audio-Visual Conservation Center. ')]),s("p",{staticClass:"text item"},[s("strong",[t._v(" Question: ")]),t._v(" What is the research library ? ")]),s("p",{staticClass:"text item"},[s("strong",[t._v(" Answer: ")]),s("a",{staticClass:"answer"},[t._v(" Library of Congress ")])])])]),s("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[s("el-form-item",{attrs:{label:"Context"}},[s("el-input",{attrs:{type:"textarea"},model:{value:t.form.context,callback:function(e){t.$set(t.form,"context",e)},expression:"form.context"}})],1),s("el-form-item",{attrs:{label:"Question"}},[s("el-input",{model:{value:t.form.question,callback:function(e){t.$set(t.form,"question",e)},expression:"form.question"}})],1),s("el-form-item",{attrs:{label:"Answer"}},[s("el-input",{model:{value:t.form.answer,callback:function(e){t.$set(t.form,"answer",e)},expression:"form.answer"}})],1),s("el-form-item",{attrs:{label:"Title"}},[s("el-input",{attrs:{placeholder:"若非维基百科源，无需填写"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),s("el-form-item",{attrs:{label:"Source"}},[s("el-select",{attrs:{placeholder:"请选择数据来源"},model:{value:t.form.source,callback:function(e){t.$set(t.form,"source",e)},expression:"form.source"}},[s("el-option",{attrs:{label:"Wikipedia",value:"wikipedia"}}),s("el-option",{attrs:{label:"其他",value:"others"}})],1)],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")]),s("el-button",{on:{click:t.onCancel}},[t._v("清空")])],1)],1)],1)},i=[],o={data:function(){return{form:{context:"",question:"",answer:"",title:"",source:""}}},methods:{onSubmit:function(){this.$message("Building...")},onCancel:function(){this.clear(),this.$message({message:"已清空!",type:"warning"})},clear:function(){this.form.context="",this.form.question="",this.form.answer="",this.form.title="",this.form.source=""}}},r=o,n=(s("b688"),s("2877")),l=Object(n["a"])(r,a,i,!1,null,"6f04a939",null);e["default"]=l.exports},"48b9":function(t,e,s){},b688:function(t,e,s){"use strict";s("48b9")}}]);