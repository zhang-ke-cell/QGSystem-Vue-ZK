<template>
    <div>
      <el-card>
        <div slot="header" class="clearfix">
          <label style="font-size: x-large">学习材料上传</label>
        </div>
        <el-form :model="form" v-loading="listLoading">
          <el-form-item>
            <el-steps :active="active" :align-center="true">
              <el-step title="步骤 1" icon="el-icon-upload2"></el-step>
              <el-step title="步骤 2" icon="el-icon-upload"></el-step>
              <el-step title="步骤 3" icon="el-icon-notebook-2"></el-step>
            </el-steps>
          </el-form-item>
          <el-form-item >
            <!--上传文件-->
            <el-upload
              class="upload-demo"
              style=" margin-top:20px;"
              ref="upload"
              :show-file-list='true'
              :http-request="uploadFileToServer"
              action=""
              :limit="limitNum"
              accept=".ppt, .pptx, .pdf, jpg, .jpeg, .png, .gif, .bmp, .txt, .PPT, .PPTX, .PDF, .JPG, .JPEG, .PNG, .GIF, .BMP, .TXT"
              list-type="text"
              :file-list="fileList"
              :auto-upload='false'
              :on-remove="handleRemove"
              :on-exceed="exceedFile"
              :on-change="handleChange"
              :before-upload="beforeUploadFile"
            >
              <div style="margin-left: 100px" slot="tip" class="el-upload__tip">可上传ppt、pptx、pdf及txt文件</div>
              <div style="width: calc(0.83 * 100vw);display: flex;justify-content: space-around">
              <el-button slot="trigger" size="medium" type="info" icon="el-icon-upload2" @click="chooseFile"><em style="font-style: normal"> |  </em>选取文件</el-button>
                <el-button  size="medium" type="success" icon="el-icon-upload" @click="submitUpload"><em style="font-style: normal"> |  </em>上传到服务器</el-button>
                <el-button  size="medium" type="primary" icon="el-icon-notebook-2" @click="showContext"><em style="font-style: normal"> |  </em>获取上下文</el-button>
              </div>
            </el-upload>
  
  
          </el-form-item>
        </el-form>
  
      </el-card>
  
      <el-card>
        <div slot="header" class="clearfix">
          <label style="font-size: x-large">上下文展示</label>
        </div>
        <!--<div>-->
        <div v-show="isShowTable">
          <el-table
            :key="tableKey"
            v-loading="listLoading"
            :data="list"
            border
            fit
            highlight-current-row
            row-key="cId"
            style="width: 100%;"
            @sort-change="sortChange"
          >
            <!--sortable：对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件-->
            <el-table-column label="ID" prop="cId" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
              <template slot-scope="{row}">
                <span>{{ row.cId }}</span>
              </template>
            </el-table-column>
  
            <el-table-column label="上下文"  align="center" :show-overflow-tooltip="true">
              <template v-slot="{row}">
                <span style="margin-left: 10px; display: block">
                  {{ row.cText }}
                </span>
              </template>
            </el-table-column>
  
            <el-table-column label="状态" class-name="status-col" width="100" align="center">
              <template slot-scope="{row}">
                <div style="margin: 0 auto ;text-align: center">
                  <el-tag :type="row.cIsChecked | statusFilter">
                    {{ row.cIsChecked ? '已标注' : '未标注'}}
                  </el-tag>
                </div>
              </template>
            </el-table-column>
  
            <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
              <template slot-scope="{row,$index}">
                <el-button type="primary" size="mini" icon="el-icon-edit" @click="handleEdit(row,$index)">
                  编辑
                </el-button>
                <!--<el-button v-if="!row.cIsChecked" size="mini" type="success" @click="handleModifyStatus(row,true)">-->
                <!--  更新-->
                <!--</el-button>-->
                <!--<el-button v-if="row.cIsChecked" size="mini" @click="handleModifyStatus(row,false)">-->
                <!--  已更新-->
                <!--</el-button>-->
                <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(row,$index)">
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <Pagination style="text-align: center" v-show="total>0" :total="total" :page.sync="listQuery.pageNum" :limit.sync="listQuery.pageLimit" @pagination="getList" />
        </div>
        <div style="text-align: center">
          <el-button-group style="margin:0 auto">
            <el-button type="info" icon="el-icon-arrow-left" @click="reloadFile">上一步</el-button>
            <el-button type="primary" @click="toContent">下一步<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-button-group>
        </div>
        <el-dialog title="上下文修改" :visible.sync="dialogFormVisible">
          <el-form :model="temp">
            <el-form-item :label="`ID: ${temp.cId}`" :label-width="formLabelWidth">
              <el-input v-model="temp.cText" autocomplete="off" type="textarea" :autosize="true"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="handleNo">取 消</el-button>
            <el-button type="primary" @click="handleYes">确 定</el-button>
          </div>
        </el-dialog>
      </el-card>
    </div>
  </template>
  
  <script>
  import Pagination from "@/components/Pagination";
  import waves from '@/directive/waves' // waves directive
  import {uploadFile,getContext,updateContext,deleteContext} from "@/api/dataInput";
  import cloneDeep from "lodash/cloneDeep";
  export default {
    name: "DataInput",
    components: {Pagination},
    directives: { waves },
    filters: {
      statusFilter(status) {
        return status ? 'success':'danger'
      }
    },
    data() {
      return {
        isShowTable:false,
        active:0, // 进度条颜色
        formLabelWidth: '80px',
        form: {
          file: ''
        },
        limitNum: 1, // 限制上传文件的数量
        fileList:[], // 要上传的文件列表
        total: 120, //总共数据条数
        tableKey:0, // 是否显示标注用户，相当于增加一列
        listLoading: false, // 是否显示加载
        list:[
          {
            "cId": "95",
            "cText": "culpa esse mollit ad ut",
            "cIsChecked": true,
            'isEdit': false
  
          },
          {
            "cId": "14",
            "cText": "nisi enim in",
            "cIsChecked": false,
            'isEdit': false
          },
          {
            "cId": "88",
            "cText": "ut velit voluptate",
            "cIsChecked": true,
            'isEdit': false
          },
          {
            "cId": "24",
            "cText": "fugiat do",
            "cIsChecked": true,
            'isEdit': false
          }
        ], // 表格数据
  
        // 分页器查询参数
        listQuery: {
          pageNum: 1,
          pageLimit: 20
        },
        dialogFormVisible:false,
        temp: {}
      };
    },
  
    methods: {
      async uploadFileToServer(){
        let formData = new FormData()
        formData.append('multipartFile', this.form.file)
        try{
          this.listLoading = true
          let res = await uploadFile(formData)
          if(res.code===200){
            setTimeout(()=>{
              this.listLoading = false
              this.active = 2
              this.$message.success('上传到服务器成功')
            },300)
          }else{
            this.listLoading = false
          }
  
        }catch (e) {
          this.listLoading = false
          this.$message.error('上传到服务器失败')
        }
      },
  
      async getList(){
        try {
          this.listLoading = true
          let res = await getContext(this.listQuery)
          if(res.code===200){
            this.list = res.data.contextList
            this.list.forEach(item=>{
              item.isEdit = false
              item.sort = '+id'
            })
            this.total = res.data.total
            setTimeout(()=>{
              this.listLoading = false
              this.$message.success('获取上下文成功')
            },300)
          }else {
            this.listLoading = false
          }
        }catch (e){
          this.listLoading = false
          this.$message.error('获取上下文失败')
        }
      },
  
      //与上传文件有关的操作
      // 处理文件删除的钩子
      handleRemove(file, fileList){
        // console.log('文件删除后的fileList是', fileList)
        this.fileList = fileList
        this.form.file = ''
        this.active = 0
      },
      // 文件超出个数限制时的钩子
      exceedFile(files,fileList){
        // console.log(files,fileList)
        this.$notify.warning({
          title: '警告',
          message: `只能选择 ${this.limitNum} 个文件，当前共选择了 ${files.length + fileList.length} 个，请删除当前文件后再重新选取文件`
        });
      },
      // 文件状态改变时的钩子
      handleChange(file, fileList){
        // console.log('文件状态改变(添加文件)后',file,fileList)
        this.fileList = fileList
        this.form.file = file.raw
        if(!this.fileList.length){
          this.active = 0
        }
      },
      // 上传文件之前的钩子, 参数为上传的文件,若返回 false 或者返回 Promise 且被 reject，则停止上传
      // 只要this.fileList为空就不会上传文件
      beforeUploadFile(file){
        // console.log('上传文件之前',file)
        let extension = file.name.substring(file.name.lastIndexOf('.')+1)
        // console.log(extension)
        let size = file.size / 1024 / 1024
        if(extension !== 'ppt' && extension !=='pptx' && extension !=='txt' && extension !=='pdf') {
          this.$notify.warning({
            title: '警告',
            message: `只能上传ppt/pptx/txt/pdf文件`
          });
          return false;
        }
        if(size > 10) {
          this.$notify.warning({
            title: '警告',
            message: `文件大小不得超过10M`
          });
          return false;
        }
      },
      // 文件上传成功时的钩子
      // handleSuccess(response, file, fileList){
      //   console.log('上传成功', response, file, fileList)
      //   this.$notify.success({
      //     title: '成功',
      //     message: `文件上传成功`
      //   });
      // },
      // 文件上传失败时的钩子
      // handleError(err, file, fileList){
      //   console.log('上传失败', err, file, fileList)
      //   this.$notify.error({
      //     title: '错误',
      //     message: `文件上传失败`
      //   });
      // },
      chooseFile(e){
        // e.stopPropagation();
        this.isShowTable = false
        this.active = 1
      },
      submitUpload(e) {
        e.stopPropagation();
        if(!this.fileList.length) {
          this.$message.warning('请先选择文件 ！')
          this.active = 0
          return;
        }
        // this.$refs.upload.submit();// 这句话的作用是调用beforeUpload这个函数
        this.uploadFileToServer()
      },
      showContext(e){
        e.stopPropagation();
      //   this.getList()
      //   setTimeout(()=>{
      //     this.isShowTable = true;
      //     this.active = 3
      //   },300)
        if(this.active===2){
          this.getList()
          setTimeout(()=>{
            this.isShowTable = true;
            this.active = 3
          },300)
        }else{
          this.$message.warning('请先上传文件到服务器 ！')
        }
      },
  
      // 与表格操作相关的操作
      getSortClass: function(key) {
        const sort = this.listQuery.sort
        // order 为 ascending 按钮选中的是向上的箭头，如果 order 为 descending 那选中的是向下的箭头。
        return (sort === `+${key}`) ? 'ascending' : 'descending'
      },
      sortChange(data) {
        const { column, prop, order } = data
        if (prop === 'cId') {
          this.sortByID(order)
        }
      },
      sortByID(order) {
        if (order === 'ascending') {
          this.listQuery.sort = '+id'
        } else {
          this.listQuery.sort = '-id'
        }
        this.handleFilter()
      },
      handleFilter() {
        this.listQuery.pageNum = 1
        this.getList()
      },
  
      //点击span的回调，变为编辑模式并且实现自动聚焦
      handleEdit(row, index){
        this.temp = cloneDeep(this.list[index])
        this.dialogFormVisible = true
      },
      handleYes(){
        this.dialogFormVisible = false
        let index = this.list.findIndex(item=>item.cId === this.temp.cId)
        this.list.splice(index,1,this.temp)
        this.handleModifyStatus(this.list[index],true)
        // this.$notify.info({
        //   title:'提示',
        //   message:'请点击 更新 按钮更新上下文'
        // })
      },
      handleNo(){
        this.dialogFormVisible = false
      },
  
      async handleModifyStatus(row, status) {
        delete row.isEdit
        delete row.sort
        row.cIsChecked = status
        try{
          // 发送请求
          this.listLoading = true
          let res = await updateContext(row)
          if(res.code===200){
            setTimeout(()=>{
              this.listLoading = false
              this.$message({
                message: `成功更新ID为${ row.cId }的上下文`,
                type: 'success'
              })
            },300)
          }else{
            this.listLoading = false
          }
        }catch (e) {
          this.listLoading = false
          this.$message({
            message: `更新ID为${row.cId}的上下文失败`,
            type: 'error'
          })
        }
      },
  
  
      handleDelete(row, index) {
        //弹框：messagebox的使用
        this.$confirm(`确定删除?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(async () => {
            //当用户点击确定按钮的时候会出发
          this.listLoading = true
          let res = await deleteContext({cId:row.cId})
            if (res.code === 200) {
              setTimeout(()=>{
                this.$message({
                  type: "success",
                  message: "删除成功!",
                });
                this.getList()
                this.listLoading = false
              },300)
            }
          })
          .catch(() => {
            //当用户点击取消按钮的时候会触发
            this.$message({
              type: "info",
              message: "已取消删除",
            });
            this.listLoading = false
          });
        // this.tableData.splice(index,1)
      },
  
      reloadFile(){
        this.isShowTable = false;
        this.active=0
        this.fileList = []
        this.form.file = ''
      },
      toContent(){
        this.$router.push({name:'QGEvaluation'})
      }
    }
  }
  </script>
  
  <style scoped>
  .upload-demo:after{
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  /deep/ .el-upload-list{
    text-align: center;
  }
  </style>
  