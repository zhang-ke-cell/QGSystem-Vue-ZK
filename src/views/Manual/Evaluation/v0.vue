<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
          <span class="title"><strong>问答对评估（随机生成）</strong></span>
          <el-button style="float: right; padding: 3px 0; font-size:15px" type="text" icon='el-icon-refresh' @click="getData">换一题</el-button>
      </div>

      <div class="text item">
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content label-col"><label>标题</label></div></el-col>
        </el-row>
        <el-row style="margin-bottom: 50px">
          <el-col :span="24">
            <el-skeleton v-if="showSkeleton" :rows="1" animated />
            <span class="content" v-if="!showSkeleton"> {{ dataObj.cTitle }} </span>
          </el-col>
        </el-row>

        <el-divider></el-divider>
        <el-row :gutter="20" >
          <el-col :span="2">
            <div class="grid-content label-col" style="line-height: 40px">
              <label>上下文</label>
            </div>
          </el-col>
          <el-col :span="3">
            <el-button
            style="margin-left: 10px;margin-top: 6px"
            size="mini"
            type="primary"
            icon="el-icon-edit"
            circle
            @click="toEdit('context')">
          </el-button></el-col>
        </el-row>
        <el-row style="margin-bottom: 50px">
          <el-col :span="24">
            <el-skeleton v-if="showSkeleton" :rows="3" animated />
            <!--<p class="content" v-if="!showSkeleton"> {{ dataObj.cText }} </p>-->

            <div class="textarea">
              <el-input
                :autosize="true"
                ref="context"
                type="textarea"
                v-if="editMode.contextEdit"
                v-model="dataObj.cText"
                @blur="toLook('context')"
                @keyup.native.enter="toLook('context')">
              </el-input>
              <span
                v-else
                style="margin-left: 10px; display: block;font-size: 18px"
                @click="toEdit('context')">
                  {{ dataObj.cText}}
                </span>
            </div>
          </el-col>
        </el-row>

        <el-divider></el-divider>
        <el-row :gutter="20" >
          <el-col :span="2">
            <div class="grid-content label-col" style="line-height: 40px">
              <label>问题</label>
            </div>
          </el-col>
          <el-col :span="1">
            <el-button
              style="margin-left: 10px;margin-top: 6px"
              size="mini"
              type="primary"
              icon="el-icon-edit"
              circle
              @click="toEdit('question')">
            </el-button></el-col>
        </el-row>
        <el-row style="margin-bottom: 50px">
          <el-col :span="24">
            <el-skeleton v-if="showSkeleton" :rows="1" animated />
            <div class="textarea">
              <el-input
                :autosize="true"
                ref="question"
                type="textarea"
                v-if="editMode.questionEdit"
                v-model="dataObj.qText"
                @blur="toLook('question')"
                @keyup.native.enter="toLook('question')">
              </el-input>
              <span
                v-else
                style="margin-left: 10px; display: block;font-size: 18px"
                @click="toEdit('question')">
                  {{ dataObj.qText}}
                </span>
            </div>
          </el-col>
        </el-row>

        <el-divider></el-divider>
        <el-row :gutter="20">
          <el-col :span="2">
            <div class="grid-content label-col" style="line-height: 40px">
              <label>答案</label>
            </div>
          </el-col>
          <el-col :span="1">
            <el-button
              style="margin-left: 10px;margin-top: 6px"
              size="mini"
              type="primary"
              icon="el-icon-edit"
              circle
              @click="toEdit('answer')">
            </el-button></el-col>
        </el-row>
        <el-row style="margin-bottom: 50px">
          <el-col :span="24">
            <el-skeleton v-if="showSkeleton" :rows="1" animated />
            <div class="textarea">
              <el-input
                :autosize="true"
                ref="answer"
                type="textarea"
                v-if="editMode.answerEdit"
                v-model="dataObj.qAnswer"
                @blur="toLook('answer')"
                @keyup.native.enter="toLook('answer')">
              </el-input>
              <span
                v-else
                style="margin-left: 10px; display: block;font-size: 18px"
                @click="toEdit('answer')">
                  {{ dataObj.qAnswer}}
                </span>
            </div>
          </el-col>
        </el-row>

        <el-divider></el-divider>
        <el-row :gutter="20" type="flex" align="middle" style="margin-bottom: 8px">
          <el-col :span="3"><div class="grid-content label-col" style="line-height: 40px"><label>流畅性</label></div></el-col>
          <el-col :span="5"><div style="color:gray;">问题是否流畅通顺</div></el-col>
          <el-col :span="12">
            <div class="rate-box">
              <el-rate
                :texts="texts"
                v-model="dataObj.qFluency"
                show-text>
              </el-rate>
            </div>
          </el-col>
        </el-row>

        <el-divider></el-divider>
        <el-row :gutter="20" type="flex" align="middle" style="margin-bottom: 8px">
          <el-col :span="3"><div class="grid-content label-col" style="line-height: 40px"><label>合理性</label></div></el-col>
          <el-col :span="5"><div style="color:gray;">问题与答案是否合理</div></el-col>
          <el-col :span="12">
            <div class="rate-box">
              <el-rate
                :texts="texts"
                v-model="dataObj.qReasonability"
                  show-text>
              </el-rate>
            </div>
          </el-col>
        </el-row>

        <el-divider></el-divider>
        <el-row :gutter="20" type="flex" align="middle" style="margin-bottom: 8px">
          <el-col :span="3"><div class="grid-content label-col" style="line-height: 40px"><label>相关性</label></div></el-col>
          <el-col :span="5"><div style="color:gray;">问题是否与相应上下文匹配</div></el-col>
          <el-col :span="12">
            <div class="rate-box">
              <el-rate
                :texts="texts"
                v-model="dataObj.qRelevance"
                  show-text>
              </el-rate>
            </div>
          </el-col>
        </el-row>

        <el-divider></el-divider>
        <el-row :gutter="20" type="flex" align="middle" style="margin-bottom: 8px">
          <el-col :span="3"><div class="grid-content label-col" style="line-height: 40px"><label>难度</label></div></el-col>
          <el-col :span="5"><div style="color:gray;">回答该问题的难易程度</div></el-col>
          <el-col :span="12">
            <el-select v-model="dataObj.qDifficulty" placeholder="请选择">
              <el-option
                v-for="item in difficulties"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.note }}</span>
              </el-option>
            </el-select>
          </el-col>
        </el-row>

        <el-divider></el-divider>
        <el-row :gutter="20" type="flex" align="middle" style="margin-bottom: 8px">
          <el-col :span="3"><div class="grid-content label-col" style="line-height: 40px"><label>干扰项</label></div></el-col>
          <el-col :span="5"><div style="color:gray;">答案的干扰项</div></el-col>
          <el-col :span="5">
            <div class="rate-box">
              <el-input v-show="dataObj.qDistractorList.length>0" style="margin-bottom: 5px" v-for="(item,index) in dataObj.qDistractorList" :key="v0" v-model="dataObj.qDistractorList[v0]">
              </el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <el-button
              v-if="dataObj.qDistractorList.length>0"
              v-for="index in dataObj.qDistractorList.length"
              style="margin-bottom: 5px;"
              type="warning"
              icon="el-icon-delete"
              @click="deleteDistractor(v0-1)"
              round
              plain
            >
              删除
            </el-button>
          </el-col>
          <el-col :span="3" >
            <el-button
              v-waves
              icon="el-icon-circle-plus-outline"
              type="primary"
              @click="addDistractor"
              round
              plain
            >
              增加
            </el-button>
          </el-col>
        </el-row>

        <el-divider></el-divider>
        <el-row type="flex" justify="space-between" style="margin-top: 50px">
          <!--<el-button-group>-->
            <!--<el-button type="primary" icon="el-icon-edit" @click="handleEdit">修改QA</el-button>-->
            <el-button v-waves type="danger" icon="el-icon-delete" @click="showDelete=true" size="large">删 除</el-button>
          <!--</el-button-group>-->
          <el-button v-waves type="success" icon='el-icon-suitcase' @click="updateEdit" size="large">保 存</el-button>
        </el-row>
      </div>

      <el-dialog
        title="提示"
        :visible.sync="showDelete"
        width="30%">
        <span>确定要删除吗</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="showDelete = false">取 消</el-button>
            <el-button type="primary" @click="updateDelete">确 定</el-button>
          </span>
      </el-dialog>

    </el-card>
  </div>
</template>

<script>
import {deleteQuestion, getRandom, updateQuestion} from '@/api/evaluation'
import {getToken} from '@/utils/auth'
import cloneDeep from "lodash/cloneDeep";

export default {
  data() {
    return {
      loading: false,
      errored: false,
      showSkeleton: true, // 展示加载按钮
      showEdit: false, //展示编辑对话框
      showDelete: false, // 展示删除对话框
      // 返回数据的容器
      dataObj:{},
      // 控制展示与编辑
      editMode:{
        contextEdit:false,
        questionEdit:false,
        answerEdit:false
      },
      // 编辑对话框的数据
      form: {
        context: 'I am your father.',
        question: 'Who is you ?',
        answer: 'Father'
      },

      // fluency: 0,
      // reasonable: 0,
      // relevance: 0,
      difficulties: [
        {
        value: 1,
        label: '简单',
        note: '单句即可得答案'
      }, {
        value: 2,
        label: '中等',
        note: '需要多句推理'
      }, {
        value: 3,
        label: '困难',
        note: '难以得出答案'
      }],
      difficulty: '',
      //星星的辅助文本说明
      texts:['极差', '差', '一般', '好', '很好'],
      count: 0,
      token: getToken()
    }
  },

  created() {
    this.getData();
  },

  methods: {
    //获取数据
    // getData() {
    //   getRandom().then(res=>{
    //     res.data.qDistractorList = res.data.qDistractorList.filter(item => {
    //       return item !== ''
    //     })
    //     this.dataObj = res.data
    //     this.showSkeleton = false;
    //   }, error=>{
    //     alert(error)
    //   })
    // },
    async getData(){
      try {
        let res = await getRandom()
          res.data.qDistractorList = res.data.qDistractorList.filter(item => {
            return item !== ''
          })
          this.dataObj = res.data
          this.showSkeleton = false;
      }catch (error){
        this.$message.error('获取数据失败')
      }
    },

    //由编辑模式转化为展示模式
    toLook(params){
      switch (params){
        case 'context':
          if(this.dataObj.cText===''){
          this.$message.error('输入不能为空');
          return;
        }
          this.editMode.contextEdit = false;
          break;
        case 'question':
          if(this.dataObj.qText===''){
            this.$message.error('输入不能为空');
            return;
          }
          this.editMode.questionEdit = false;
          break;
        case 'answer':
          // if(this.dataObj.qAnswer===''){
          //   this.$message.error('输入不能为空');
          //   return;
          // }
          this.editMode.answerEdit = false;
          break;
      }
    },

    //由展示模式转化为编辑模式
    toEdit( params){
      // console.log(event, params)
      switch (params){
        case 'context':
          this.editMode.contextEdit = true;
          this.$nextTick(()=>{
            this.$refs[params].focus()
          });
          break;
        case 'question':
          this.editMode.questionEdit = true;
          this.$nextTick(()=>{
            this.$refs[params].focus()
          });
          break;
        case 'answer':
          this.editMode.answerEdit = true;
          this.$nextTick(()=>{
            this.$refs[params].focus()
          });
          break;
      }
      // console.log(this.editMode.contextEdit)
    },

    // 增加干扰项按钮的回调
    addDistractor(){
      this.dataObj.qDistractorList.push('')
    },

    // 删除干扰项的回调
    deleteDistractor(index){
      // console.log(index)
      this.dataObj.qDistractorList.splice(v0,1)
    },

    // 删除干扰项的回调

    // 点击保存按钮的回调
    async updateEdit(){
      let data = cloneDeep(this.dataObj)
      // data.qId = parseInt(data.qId)
      // console.log(data.qId)
      // delete data.qDistractorList
      data.qDistractorList = JSON.stringify(data.qDistractorList)
      try{
        let res = await updateQuestion(data)
        if(res.code===200){
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          await this.getData()
        }else{
          this.$message.error('更新失败')
        }
      }catch (error){
        this.$message.error('更新失败')
      }
    },
    // updateEdit() {
    //   // console.log(JSON.stringify(this.dataObj))
    //   let data = cloneDeep(this.dataObj)
    //   data.qDistractorList = JSON.stringify(data.qDistractorList)
    //   updateQuestion(data).then(response => {
    //     this.showSkeleton = true;
    //   });
    //   this.showEdit = false;
    //   this.$message({
    //     message: '修改成功',
    //     type: 'success'
    //   });
    //   this.getData()
    // },


    // 删除对话框确定按钮的回调
    updateDelete() {
      deleteQuestion({qId:this.dataObj.qId }).then(response => {
        this.showDelete = false;
        if (response.code === 200) {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
        } else {
          this.$message.error('删除失败');
        }
        this.getData();
      })
    },

    // nextQuestion() {
    //   rateQuestion({
    //     id: this.question_id,
    //     fluency: this.fluency,
    //     reasonable: this.reasonable,
    //     relevance: this.relevance,
    //     difficulty: this.difficulty,
    //     token: this.token
    //   }).then(response => {
    //     // 获取下一个
    //     this.showSkeleton = true;
    //     // getFirstUnchecked().then(response => {
    //     //   this.handleEdit(response);
    //     // })
    //     this.getData();
    //     // 清空评分给下一个问题用
    //     this.fluency = 0;
    //     this.reasonable = 0;
    //     this.relevance = 0;
    //     this.difficulty = '';
    //   })
    // },

    // randomChooseOne() {
    //     getRandom().then(response => {
    //       this.showSkeleton = true;
    //       this.handleEdit(response);
    //     });
    // },

    generateRandomNum: function(min, max) {
        switch(arguments.length){
            case 1:
                return parseInt(Math.random()*min+1,10);
                break;
            case 2:
                return parseInt(Math.random()*(max-min+1)+min,10);
                break;
                default:
                    return 0;
                    break;
        }
    },

    nextQuestionnnn: async function() {
        await axios
                    .get('http://localhost:8000/choice-question-count')
                    .then(response => (
                    this.count = response.data.count
                    ))
        random = this.generateRandomNum(this.count)
        axios
            .get('http://localhost:8000/choice-question/' + random)
            .then(response => (
            this.content = response.data.content,
            this.option_a = response.data.option_a,
            this.option_b = response.data.option_b,
            this.option_c = response.data.option_c,
            this.option_d = response.data.option_d,
            this.answer = response.data.answer,
            this.resolution = response.data.solution == ''?'暂无解析':response.data.solution
            ))
            .catch(error => {
            console.log(error)
            this.errored = true
            })
            .finally(() => this.loading = false)
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.el-row {
    margin-bottom: 20px;
    /* &:last-child {
        margin-bottom: 0;
    } */
}
.el-col {
    border-radius: 4px;
}
.grid-content {
    border-radius: 4px;
    min-height: 40px;
  vertical-align: center;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}

.box-card {
    width: 90%;
    height: 80%;
    margin: 0 auto;
}
.basic-layout {
    text-align: center;
    margin-top: 30px;
}
.title {
    font-size: 25px;
}
.question {
    margin-bottom: 25px;
    font-size: 50px;
}
.choice {
    width: 100%;
    font-size: 35px;
}
.rate-box {
  /* height: 36px;
  display: flex;
  align-items: center */
}
.rate {
    font-size: 25px;
}
/deep/ .el-rate__icon {
  font-size: 25px;
}

.bg-purple {
  background: #d3dce6;
}

.label-col {
  font-size: 20px;
}

.content {
  margin-left: 3px;
  font-size: 18px;
}

.el-button+.el-button {
  margin-left: 0;
}
.textarea >>> .el-textarea__inner{
  font-family:"Microsoft Yahei" !important;
  font-size:18px !important;
}

</style>

