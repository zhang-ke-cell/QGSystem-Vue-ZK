<template >
  <div class="app-main" >
    <el-card class="box-card" style=" margin-bottom: 0px; text-align: left">
      <div slot="header" class="clearfix">
        <el-row>
          <el-col :span="6">
            <span  style="display: inline-block;text-align: left !important;line-height:40px;font-weight: bold;font-size:x-large ">{{$t('dataPresentation.FilterBasedOnAttributes')}}</span>
          </el-col>
          <!--<el-col :span="18">-->
          <!--  <div style="margin-top: 4px;font-size: 10px">-->
          <!--    <el-tag-->
          <!--      :key="listQuery.cSubject"-->
          <!--      v-show="listQuery.cSubject"-->
          <!--      closable-->
          <!--      :disable-transitions="false"-->
          <!--      type="success"-->
          <!--      size="medium"-->
          <!--      @close="handleClose(listQuery.cSubject)">-->
          <!--      {{listQuery.cSubject}}-->
          <!--    </el-tag>-->
          <!--  </div>-->
          <!--</el-col>-->
        </el-row>

        <!--<el-button v-waves style="float: right" class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">-->
        <!--  筛选-->
        <!--</el-button>-->
      </div>
      <div  class="text item" >
        <!--<el-row type="flex" justify="start" style="margin-bottom: 18px">-->
        <!--  <el-col :span="2">-->
        <!--    <div style="text-align: right;font-size: 16px;margin-top: 10px">-->
        <!--      <label>标题：</label>-->
        <!--    </div>-->
        <!--  </el-col>-->
        <!--  <el-col :span="22">-->
        <!--    <el-input v-model="listQuery.cTitle" placeholder="文章标题" style="width: 95%; margin-bottom: 18px" class="filter-item" @keyup.enter.native="handleFilter" />-->
        <!--  </el-col>-->
        <!--</el-row>-->
        <el-row type="flex"  justify="space-between" style="margin-bottom: 18px">
          <el-col :span="3">
            <div style="text-align: right;font-size: 20px;margin-right: 2px;">
              <el-tag type="success" style="height: 40px;" ><label style="font-size:18px;line-height: 38px">{{$t('dataPresentation.dataset')}}</label></el-tag>
              <!--<label>数据集：</label>-->
            </div>
          </el-col>
          <el-col :span="2">
            <div style="text-align: left;width: 100px">
              <el-select v-model="listQuery.cSubject" :placeholder="$t('dataPresentation.Chinese')" clearable class="filter-item" @change="handleFilter">
                <el-option v-for="item in subjectOptions " :key="item.key" :label="$t(`dataPresentation.${item.key}`)" :value="item.label" />
              </el-select>
            </div>
          </el-col>
          <el-col :span="4">
            <div style="text-align: right;font-size: 16px;margin-top: 10px">
              <label>{{$t('dataPresentation.orderOfID')}}：</label>
            </div>
          </el-col>
          <el-col :span="2">
            <div style="text-align: left;width: 100px">
              <el-select v-model="listQuery.sort"  class="filter-item" @change="handleFilter">
                <el-option v-for="item in sortOptions" :key="item.key" :label="$t(`dataPresentation.${item.label}`)" :value="item.key" />
              </el-select>
            </div>
          </el-col>
          <el-col :span="4">
            <div style="text-align: right;font-size: 16px;margin-top: 10px">
              <label>{{$t('dataPresentation.language')}}：</label>
            </div>
          </el-col>
          <el-col :span="2">
            <div style="text-align: left;width: 100px">
              <el-select v-model="listQuery.cLanguage" :placeholder="$t(`dataPresentation.ChineseLang`)" clearable class="filter-item" @change="handleFilter">
                <el-option v-for="item in languageOptions" :key="item.key" :label="$t(`dataPresentation.${item.key}`)" :value="item.label" />
              </el-select>
            </div>
          </el-col>
          <el-col :span="4">
            <div style="text-align: right;font-size: 16px;margin-top: 10px">
              <label>{{$t('dataPresentation.source')}}：</label>
            </div>
          </el-col>
          <el-col :span="2">
            <div style="text-align: left;width: 100px">
              <el-input v-model="listQuery.cSource" placeholder="联想ppt"  class="filter-item" @change="handleFilter"/>
            </div>
          </el-col>
        </el-row>
      </div>
      <div  class="text item " style="text-align: left">
        <el-row type="flex" justify="space-between" style="margin-bottom: 18px">
          <el-col :span="3">
            <div style="text-align: right;font-size: 16px;margin-top: 10px">
              <label>{{$t('dataPresentation.fluency')}}：</label>
            </div>
          </el-col>
          <el-col :span="2">
            <div style="text-align: left;width: 100px">
              <el-select v-model="listQuery.qFluency" placeholder="1" clearable class="filter-item" @change="handleFilter">
                <el-option v-for="item in fluencyOptions" :key="item" :label="item" :value="item" />
              </el-select>
            </div>
          </el-col>
          <el-col :span="4">
            <div style="text-align: right;font-size: 16px;margin-top: 10px">
              <label>{{$t('dataPresentation.answerability')}}：</label>
            </div>
          </el-col>
          <el-col :span="2">
            <div style="text-align: left;width: 100px">
              <el-select v-model="listQuery.qReasonability" placeholder="1" clearable  class="filter-item" @change="handleFilter">
                <el-option v-for="item in resonabilityOptions" :key="item" :label="item" :value="item" />
              </el-select>
            </div>
          </el-col>
          <el-col :span="4">
            <div style="text-align: right;font-size: 16px;margin-top: 10px">
              <label>{{$t('dataPresentation.relevance')}}：</label>
            </div>
          </el-col>
          <el-col :span="2">
            <div style="text-align: left;width: 100px">
              <el-select v-model="listQuery.qRelevance" placeholder="1" clearable  class="filter-item" @change="handleFilter">
                <el-option v-for="item in relevanceOptions" :key="item" :label="item" :value="item" />
              </el-select>
            </div>
          </el-col>
          <el-col :span="4">
            <div style="text-align: right;font-size: 16px;margin-top: 10px">
              <label>{{$t('dataPresentation.difficulty')}}：</label>
            </div>
          </el-col>
          <el-col :span="2">
            <div style="text-align: left;width: 100px">
              <el-select v-model="listQuery.qDifficulty" placeholder="1" clearable  class="filter-item" @change="handleFilter">
                <el-option v-for="item in difficultyOptions" :key="item" :label="item" :value="item" />
              </el-select>
            </div>
          </el-col>
        </el-row>

        <el-row type="flex"  justify="space-between">
          <el-col :span="3">
            <div style="text-align: right;font-size: 16px;margin-top: 10px">
              <label>{{$t('dataPresentation.questionType')}}：</label>
            </div>
          </el-col>
          <el-col :span="2">
            <div style="text-align: left;width: 100px">
              <el-select v-model="listQuery.qType" :placeholder="$t(`dataPresentation.choiceQuestion`)" clearable class="filter-item" @change="handleFilter">
                <el-option v-for="item in qTypeOptions " :key="item.key" :label="$t(`dataPresentation.${item.key}`)" :value="item.label" />
              </el-select>
            </div>
          </el-col>
          <el-col :span="4">
            <div style="text-align: right;font-size: 16px;margin-top: 10px">
              <label>{{$t('dataPresentation.interrogativeType')}}：</label>
            </div>
          </el-col>
          <el-col :span="2">
            <div style="text-align: left;width: 100px">
              <el-select v-model="listQuery.qQwType" placeholder="what" clearable class="filter-item" @change="handleFilter">
                <el-option v-for="item in qQwOptions " :key="item.key" :label="item.label" :value="item.label" />
              </el-select>
            </div>
          </el-col>
          <el-col :span="4">
            <div style="text-align: right;font-size: 16px;margin-top: 10px">
              <label>{{$t('dataPresentation.cognitiveType')}}：</label>
            </div>
          </el-col>
          <el-col :span="2">
            <div style="text-align: left;width: 100px">
              <el-select v-model="listQuery.qCognitiveType" :placeholder="$t('dataPresentation.remember')" clearable class="filter-item" @change="handleFilter">
                <el-option v-for="item in qCognitiveTypeOptions " :key="item.key" :label="$t(`dataPresentation.${item.key}`)" :value="item.label" />
              </el-select>
            </div>
          </el-col>
          <el-col :span="4">
            <div style="text-align: right;font-size: 16px;margin-top: 10px">
              <label>{{$t('dataPresentation.overallEvaluation')}}：</label>
            </div>
          </el-col>
          <el-col :span="2">
            <div style="text-align: left;width: 100px">
              <el-select v-model="listQuery.qScore" placeholder="1" clearable  class="filter-item" @change="handleFilter">
                <el-option v-for="item in scoreOptions" :key="item" :label="item" :value="item" />
              </el-select>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>

      <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="list"
        border
        fit
        highlight-current-row
        @sort-change="sortChange"
        :default-expand-all="false"
        row-key="cId"
        :tree-props="{children: 'pList'}">
        >
        <el-table-column type="expand">
          <template v-slot="{row,$index}">
            <!--<el-collapse v-model="activeNames" >-->
            <!--  <el-collapse-item :title="`问题${index+1}`" v-for="(qObj,index) in row.qList" :name="index" :key="qObj.qId">-->
            <!--    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>-->
            <!--    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>-->
            <!--  </el-collapse-item>-->
            <!--</el-collapse>-->
            <el-table
              :ref="$index"
              :data="row.qList"
              border
              style="width: 100%">
              <el-table-column label="ID"  align="center" width="80">
                <template v-slot="{row}">
                  <span>{{ row.qId }}</span>
                </template>
              </el-table-column>

              <el-table-column :label="$t('dataPresentation.question')"  width="200px" align="center" :show-overflow-tooltip="true">
                <template v-slot="{row}">
                  <span class="link-type" @click="showQuestion(row,$index)">{{ row.qText }}</span>
                </template>
              </el-table-column>

              <el-table-column :label="$t('dataPresentation.questionType')"  width="150px" align="center" :show-overflow-tooltip="true">
                <template v-slot="{row}">
                  <span>{{ row.qType }}</span>
                </template>
              </el-table-column>

              <el-table-column :label="$t('dataPresentation.interrogativeType')"  width="150px" align="center" :show-overflow-tooltip="true">
                <template v-slot="{row}">
                  <span>{{ row.qQwType }}</span>
                </template>
              </el-table-column>

              <el-table-column :label="$t('dataPresentation.cognitiveType')"  width="150px" align="center" :show-overflow-tooltip="true">
                <template v-slot="{row}">
                  <span>{{ row.qCognitiveType }}</span>
                </template>
              </el-table-column>

              <el-table-column :label="$t('dataPresentation.answer')"  width="150px" align="center" :show-overflow-tooltip="true">
                <template v-slot="{row}">
                  <span>{{ row.qAnswer }}</span>
                </template>
              </el-table-column>

              <el-table-column :label="$t('dataPresentation.distractor')"  width="300px" align="center" :show-overflow-tooltip="true">
                <template v-slot="{row}" >
                  <el-tag v-for="(item,index) in row.qDistractorList" :key="index" style="margin-right: 4px">
                    {{item}}
                  </el-tag>
                  <!--<span>{{ row.qDistractorList }}</span>-->
                </template>
              </el-table-column>

              <el-table-column :label="$t('dataPresentation.fluency')" width="150px">
                <template v-slot="{row}">
                  <svg-icon v-for="n in + row.qFluency" :key="n" icon-class="star" class="meta-item__icon" />
                </template>
              </el-table-column>

              <el-table-column :label="$t('dataPresentation.answerability')" width="150px">
                <template v-slot="{row}">
                  <svg-icon v-for="n in + row.qReasonability" :key="n" icon-class="star" class="meta-item__icon" />
                </template>
              </el-table-column>

              <el-table-column :label="$t('dataPresentation.relevance')" width="150px">
                <template v-slot="{row}">
                  <svg-icon v-for="n in + row.qRelevance" :key="n" icon-class="star" class="meta-item__icon" />
                </template>
              </el-table-column>

              <el-table-column :label="$t('dataPresentation.difficulty')" width="150px">
                <template v-slot="{row}">
                  <svg-icon v-for="n in + row.qDifficulty" :key="n" icon-class="star" class="meta-item__icon" />
                </template>
              </el-table-column>

              <el-table-column :label="$t('dataPresentation.overallEvaluation')" width="150px">
                <template v-slot="{row}">
                  <svg-icon v-for="n in + row.qScore" :key="n" icon-class="star" class="meta-item__icon" />
                </template>
              </el-table-column>

              <el-table-column :label="$t('dataPresentation.evaluatorID')" width="150px"  align="center" :show-overflow-tooltip="true">
                <template v-slot="{row}">
                  <el-tag v-for="(item,index) in row.userIdList" :key="index" style="margin-right: 4px">
                    {{item}}
                  </el-tag>
                  <!--<span>{{ row.qDistractorList }}</span>-->
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>

        <!--sortable：对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件-->
        <el-table-column label="ID" prop="cId" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
          <template slot-scope="{row}">
            <span>{{ row.cId }}</span>
          </template>
        </el-table-column>

        <el-table-column :label="$t('dataPresentation.context')"  align="center" :show-overflow-tooltip="true">
          <template v-slot="{row}">
            <span>{{ row.cText }}</span>
          </template>
        </el-table-column>

        <!-- <el-table-column label="标题"  width="200px" align="center" :show-overflow-tooltip="true">
          <template v-slot="{row}">
            <span>{{ row.cTitle }}</span>
          </template>
        </el-table-column> -->

        <el-table-column :label="$t('dataPresentation.language')" class-name="status-col" width="100" align="center">
          <template v-slot="{row}" >
            <el-tag :type="row.cLanguage | languageFilter" effect="dark">
              {{ row.cLanguage}}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column :label="$t('dataPresentation.dataset')" class-name="status-col" width="120" align="center">
          <template v-slot="{row}">
            <el-tag :type="row.cSubject | subjectFilter" >
              {{row.cSubject}}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column :label="$t('dataPresentation.source')" class-name="status-col" width="100" align="center">
          <template v-slot="{row}">
            <el-tag :type="row.cSource | sourceFilter" effect="plain">
              {{row.cSource}}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
      <pagination style="text-align: center" v-show="total>0" :total="total" :page.sync="listQuery.pageNum" :limit.sync="listQuery.pageLimit" @pagination="getList" />

    <el-dialog :title="$t('dataPresentation.showQuestion')" :visible.sync="dialogFormVisible" >
      <el-form ref="dataForm"  :model="temp" label-position="left" label-width="150px" style="width: 400px; margin-left:50px;">
        <el-form-item :label="$t('dataPresentation.context')">
          <el-input type="textarea" :autosize="true" :readonly="true" v-model="temp.cText" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item :label="$t('dataPresentation.question')">
          <el-input type="textarea" :autosize="true" :readonly="true" v-model="temp.qText" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item :label="$t('dataPresentation.questionType')">
          <el-input type="textarea" autosize :readonly="true" v-model="temp.qType" style="width: 100px"></el-input>
        </el-form-item>
        <el-form-item :label="$t('dataPresentation.interrogativeType')">
          <el-input type="textarea" autosize :readonly="true" v-model="temp.qQwType" style="width: 100px"></el-input>
        </el-form-item>
        <el-form-item :label="$t('dataPresentation.cognitiveType')">
          <el-input type="textarea" autosize :readonly="true" v-model="temp.qCognitiveType" style="width: 100px"></el-input>
        </el-form-item>
        <el-form-item :label="$t('dataPresentation.answer')">
          <el-input type="textarea" autosize :readonly="true" v-model="temp.qAnswer" style="width: 100px"></el-input>
        </el-form-item>
        <el-form-item :label="$t('dataPresentation.distractor')">
          <el-tag v-for="(item,index) in temp.qDistractorList" :key="index" style="margin-right: 20px">{{item}}</el-tag>
        </el-form-item>
        <el-form-item :label="$t('dataPresentation.fluency')">
          <el-rate
            style="height: 40px;padding-top:10px "
            v-model="temp.qFluency"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </el-form-item>
        <el-form-item :label="$t('dataPresentation.answerability')">
          <el-rate
            style="height: 40px;padding-top:10px "
            v-model="temp.qReasonability"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </el-form-item>
        <el-form-item :label="$t('dataPresentation.relevance')">
          <el-rate
            style="height: 40px;padding-top:10px "
            v-model="temp.qRelevance"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </el-form-item>
        <el-form-item :label="$t('dataPresentation.difficulty')">
          <el-rate
            :max="3"
            style="height: 40px;padding-top:10px "
            v-model="temp.qDifficulty"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </el-form-item>
        <el-form-item :label="$t('dataPresentation.overallEvaluation')">
          <el-rate
            style="height: 40px;padding-top:10px "
            v-model="temp.qScore"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </el-form-item>
        <el-form-item :label="$t('dataPresentation.evaluatorID')">
          <el-tag v-for="(item,index) in temp.userIdList" :key="index" style="margin-right: 20px">{{item}}</el-tag>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          {{$t('dataPresentation.close')}}
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import pagination from '@/components/Pagination' // secondary package based on el-pagination
import {getListByCondition} from "@/api/table";

export default {
  name: "SortedTable",
  components:{ pagination },
  directives: { waves },
  filters:{
    languageFilter(language){
      const languageMap = {
        Chinese: 'success',
        // English: 'info',
        English: 'danger'
      }
      let key = language==='中文' ? 'Chinese':'English'
      return languageMap[key]
    },
    subjectFilter(subject){
      const subjectMap = {
        Chinese: undefined,
        DataStructure: 'success',
        History:'info',
        ComputerNetwork:'warning',
        BioScience:'danger'
      }
      let key = ''
      switch (subject)
      {
        case '语文':key="Chinese";
          break;
        case '数据结构':key="DataStructure";
          break;
        case '历史':key="History";
          break;
        case '计算机网络':key="ComputerNetwork";
          break;
        case '生命系统与科学':key='BioScience'
      }
      return subjectMap[key]
    },
    sourceFilter(source){
      const sourceMap = {
        'jiaoDappt':'success'
      }
      let key=''
      switch (source){
        case '交大ppt': key='jiaoDappt'
      }
      return sourceMap[key]
    },
  },


  data(){
    return {
      tableKey: 0, // 用于是否显示reviewer的参数
      // showReviewer:false,
      list:[], // 表格数据
      total: 100, // 数据总量
      listLoading: false, // 是否显示加载页面
      activeNames:['1'], // 折叠面板的标记

      //与数据筛选相关的
      listQuery: {
        pageNum: 1,
        pageLimit: 20,
        sort: '+id',
        cTitle:null,
        cLanguage:null,
        cSubject:null,
        cSource:null,
        qType:null,
        qQwType:null,
        qCognitiveType:null,
        qFluency:null,
        qReasonability:null,
        qRelevance:null,
        qDifficulty:null,
        qScore:null,
      },
      fluencyOptions: [1, 2, 3, 4, 5],
      resonabilityOptions: [1, 2, 3, 4, 5],
      relevanceOptions: [1, 2, 3, 4, 5],
      difficultyOptions: [1, 2, 3],
      scoreOptions: [1, 2, 3, 4, 5],
      languageOptions:[
        {key:'ChineseLang', label:'中文'},
        {key:'EnglishLang', label:'英文'}
      ],
      subjectOptions:[
        {key:'Chinese', label:'语文'},
        {key:'ComputerNetwork', label:'计算机网络'},
        {key:'History', label:'历史'},
        {key:'DataStructure', label:"数据结构"},
        {key:'BioScience', label:"生命系统与科学"}
      ],
      sourceOptions:[
        {key:'jiaoDappt', label:'交大ppt'},
      ],
      levelOptions:[
        {key:'Primary', label:'小学'},
        {key:'Middle', label:'初中'},
        {key:'High', label:'高中'}
      ],
      qTypeOptions:[
        {key:'choiceQuestion',label:'选择题'},
        {key:'openQuestion', label: '问答题'}
      ],
      qQwOptions:[
        {key:'what', label:'What'},
        {key:'when', label: 'When'},
        {key:'where', label:'Where'},
        {key:'how', label:'How'},
        {key:'why', label: 'Why'}
      ],
      qCognitiveTypeOptions:[
        {key:'remember', label:'记忆'},
        {key:'understand', label:'理解'},
        {key:'apply', label:'应用'},
        {key:'analyse', label:'分析'},
        {key:'evaluate', label:'检查'},
        {key:'innovate', label:'创造'}
      ],
      sortOptions: [
        { label: 'ascending', key: '+id' },
        { label: 'descending', key: '-id' }
      ],
      statusOptions: ['published', 'draft', 'deleted'],

      // 与对话框相关的
      dialogFormVisible:false,
      temp:[]
    }
  },
  created() {
    this.getList()
  },
  methods:{
    async getList() {
      this.listLoading = true
      let res = await getListByCondition(this.listQuery)
      this.list = res.data.dataList
      this.total = res.data.total
      this.listLoading = false
    },

    handleFilter() {
      this.listQuery.pageNum = 1
      this.getList()
    },

    handleClose(tag){
      this.listQuery.cSubject = null
      this.getList()
    },

    getSortClass: function(key) {
      const sort = this.listQuery.sort
      // console.log(this.listQuery.sort)
      // console.log(sort === `+${key}` ? 'ascending' : 'descending')
      // order 为 ascending 按钮选中的是向上的箭头，如果 order 为 descending 那选中的是向下的箭头。
      return (sort === `+${key}`) ? 'ascending' : 'descending'
    },

    sortChange(data) {
      const { column, prop, order } = data
      // console.log(column, prop, order)
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

    showQuestion(row,$index){
      this.temp = row
      this.temp.cText = this.list[$index].cText
      this.dialogFormVisible = true
    }
  }
}
</script>

<style scoped>
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
  width: 100%;
}

.link-type,
.link-type:focus {
  color: #337ab7;
  cursor: pointer;

&:hover {
   color: rgb(32, 160, 255);
 }
}

/deep/ .el-table__expanded-cell{
  padding: 0 0 0 127px;
}


</style>
