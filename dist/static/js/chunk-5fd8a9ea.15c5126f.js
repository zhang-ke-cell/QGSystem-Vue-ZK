(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fd8a9ea"],{a1c3:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",[n("div",[n("el-upload",{ref:"upload",staticClass:"upload-demo",staticStyle:{"text-align":"center","margin-top":"20px"},attrs:{drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:"",disabled:e.isShowTable,"auto-upload":!1,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"on-error":e.handleError,"on-change":e.handleChange}},[n("i",{staticClass:"el-icon-upload"}),n("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),n("em",[e._v("点击上传")])]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("文件大小的限制由后端配置")])]),n("el-button",{staticStyle:{margin:"30px 0px 0px 520px"},attrs:{type:"primary"}},[e._v("上传"),n("i",{staticClass:"el-icon-upload el-icon--right",on:{click:e.submitUpload}})]),n("el-button",{attrs:{size:"large",type:"primary"},on:{click:e.Show}},[e._v("下一步")])],1)]),n("el-card",{directives:[{name:"show",rawName:"v-show",value:e.isShowTable,expression:"isShowTable"}],staticStyle:{"margin-top":"20px"}},[n("div",[n("el-table",{staticStyle:{width:"100%",margin:"20px auto","margin-bottom":"30px"},attrs:{data:e.tableData,stripe:"",border:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",type:"index",width:"50"}}),n("el-table-column",{attrs:{align:"center",label:"抽取内容",width:"1000"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isEdit?n("el-input",{ref:t.$index,attrs:{size:"mini"},on:{blur:function(n){return e.toLook(t.row)}},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.toLook(t.row)}},model:{value:t.row.sentence,callback:function(n){e.$set(t.row,"sentence",n)},expression:"scope.row.sentence"}}):n("span",{staticStyle:{"margin-left":"10px",display:"block"},on:{click:function(n){return e.toEdit(t.row,t.$index)}}},[e._v(" "+e._s(t.row.sentence)+" ")])]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.toEdit(t.row,t.$index)}}},[e._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),n("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"current-page":e.page,total:e.total,"page-size":e.limit,"pager-count":7,"page-sizes":[3,5,10],layout:"prev, pager, next, jumper,->,sizes,total"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),n("el-button",{staticStyle:{margin:"30px 0px 0px 500px"},attrs:{size:"large",type:"info"},on:{click:e.ShowTable}},[e._v("回退")]),n("el-button",{attrs:{size:"large",type:"primary"},on:{click:e.toContent}},[e._v("下一步")])],1)])],1)},a=[],o=n("1da1"),s=(n("96cf"),n("498a"),{name:"DataInput",data:function(){return{isShowTable:!1,fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}],page:1,limit:3,total:120,tableData:[{sentence:"这是抽取出来的No1上下文",isEdit:!1},{sentence:"这是抽取出来的No2上下文",isEdit:!1},{sentence:"这是抽取出来的No3上下文",isEdit:!1},{sentence:"这是抽取出来的No4上下文",isEdit:!1},{sentence:"这是抽取出来的No5上下文",isEdit:!1},{sentence:"这是抽取出来的No6上下文",isEdit:!1}]}},methods:{getTableData:function(){this.page,this.limit},handlePreview:function(e){console.log(e)},handleRemove:function(e,t){console.log("移除成功",e,t)},handleSuccess:function(e,t,n){console.log("上传成功",e,t,n)},handleError:function(e,t,n){console.log("上传失败",e,t,n)},handleChange:function(){console.log("文件状态发生改变")},submitUpload:function(){this.$refs.upload.submit()},Show:function(){this.isShowTable=!this.isShowTable},handleSizeChange:function(e){this.limit=e},handleCurrentChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.page=e},toLook:function(e){""!=e.sentence.trim()?e.isEdit=!1:this.$message.error("输入不能为空")},toEdit:function(e,t){var n=this;e.isEdit=!0,this.$nextTick((function(){console.log(n.$refs),n.$refs[t].focus()}))},handleEdit:function(e,t){t.isEdit=!0},handleDelete:function(e,t){var n=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.$message({type:"success",message:"删除成功!"});case 1:case"end":return e.stop()}}),e)})))).catch((function(){n.$message({type:"info",message:"已取消删除"})}))},ShowTable:function(){this.isShowTable=!1},toContent:function(){this.$router.push({name:"ContentExtraction"})}}}),l=s,r=(n("beda"),n("2877")),c=Object(r["a"])(l,i,a,!1,null,"4e20a672",null);t["default"]=c.exports},bdfe:function(e,t,n){},beda:function(e,t,n){"use strict";n("bdfe")}}]);