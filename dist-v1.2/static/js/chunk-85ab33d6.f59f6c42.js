(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85ab33d6"],{"2ddd":function(e,t,a){"use strict";a("de3f")},"90fe":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-DataPresentation",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",fit:"","highlight-current-row":""}},[a("el-DataPresentation-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"DataPresentation-expand",attrs:{"label-position":"left","label-width":"90px",inline:""}},[a("el-form-item",{attrs:{label:"ID"}},[a("span",[e._v(e._s(t.row.id))])]),a("el-form-item",{attrs:{label:"Question"}},[a("span",[e._v(e._s(t.row.text))])]),a("el-form-item",{attrs:{label:"Answer"}},[a("span",[e._v(e._s(t.row.answerText))])]),a("el-form-item",{attrs:{label:"Context"}},[a("span",[e._v(e._s(t.row.reference.text))])]),a("el-form-item",{attrs:{label:"Status"}},[a("span",[e._v(e._s(t.row.checkedTimes>0?"checked":"unchecked"))])]),a("el-form-item",{attrs:{label:"Fluency"}},[a("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.row.fluency,callback:function(a){e.$set(t.row,"fluency",a)},expression:"props.row.fluency"}})],1),a("el-form-item",{attrs:{label:"Reasonable"}},[a("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.row.reasonable,callback:function(a){e.$set(t.row,"reasonable",a)},expression:"props.row.reasonable"}})],1),a("el-form-item",{attrs:{label:"Relevance"}},[a("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.row.relevance,callback:function(a){e.$set(t.row,"relevance",a)},expression:"props.row.relevance"}})],1)],1)]}}])}),a("el-DataPresentation-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}])}),a("el-DataPresentation-column",{attrs:{label:"Question",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.text)+" ")]}}])}),a("el-DataPresentation-column",{attrs:{label:"Answer",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.answerText))])]}}])}),a("el-DataPresentation-column",{attrs:{label:"Title",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.reference.title)+" ")]}}])}),a("el-DataPresentation-column",{attrs:{"class-name":"status-col",label:"Status",width:"110",align:"center",filters:[{text:"checked",value:1},{text:"unchecked",value:0}],"filter-method":e.filterStatus},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:0===t.row.checkedTimes?"primary":"success","disable-transitions":""}},[e._v(e._s(t.row.checkedTimes>0?"checked":"unchecked"))])]}}])}),a("el-DataPresentation-column",{attrs:{label:"Score",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.score)+" ")]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.pageNumber,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalElements},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.pageNumber=t},"update:current-page":function(t){e.pageNumber=t}}})],1)],1)},n=[],r=a("b775");function s(e){return Object(r["a"])({url:"/question/all/"+e.pageNumber,method:"get",params:e})}var o={filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:null,totalElements:0,totalPages:0,pageSize:10,pageNumber:1,listLoading:!0}},created:function(){this.fetchData(this.pageNumber)},methods:{fetchData:function(e){var t=this;this.listLoading=!0,s({pageNumber:e-1}).then((function(e){t.list=e.data.content,t.totalPages=e.data.totalPages,t.totalElements=e.data.totalElements,t.listLoading=!1,console.log(t.list[0]),t.shrinkRate(t.list)}))},shrinkRate:function(e){for(var t=0;t<e.length;t++)e[t].fluency/=10,e[t].reasonable/=10,e[t].relevance/=10},filterStatus:function(e,t){return console.log(t.checkedTimes),t.checkedTimes==e},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e)),this.fetchData(e),this.pageNumber=e},roundFun:function(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}}},c=o,i=(a("2ddd"),a("cba8")),u=Object(i["a"])(c,l,n,!1,null,"2e7c3778",null);t["default"]=u.exports},de3f:function(e,t,a){}}]);
