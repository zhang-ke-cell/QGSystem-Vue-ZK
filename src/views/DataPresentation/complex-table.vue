<template>
  <div class="app-container">

    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="Title" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />

      <el-select v-model="listQuery.language" placeholder="Language" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in languageOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-select v-model="listQuery.subject" placeholder="Subject" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in subjectOptions " :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-select v-model="listQuery.level" placeholder="Level" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in levelOptions " :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-select v-model="listQuery.source" placeholder="Source" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in sourceOptions " :key="item.key" :label="item.label" :value="item.key" />
      </el-select>

      <el-select v-model="listQuery.fluency" placeholder="Fluency" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in fluencyOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="listQuery.reasonability" placeholder="Reasonability" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in resonabilityOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="listQuery.relevance" placeholder="Relevance" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in relevanceOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="listQuery.difficulty" placeholder="Difficulty" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in difficultyOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="listQuery.score" placeholder="Score" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in scoreOptions" :key="item" :label="item" :value="item" />
      </el-select>

      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        Search
      </el-button>

      <!--<el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">-->
      <!--  Add-->
      <!--</el-button>-->

      <!--<el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">-->
      <!--  Export-->
      <!--</el-button>-->

      <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
        reviewer
      </el-checkbox>
    </div>

    <!--sort-change：当表格的排序条件发生变化的时候会触发该事件-->
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
      row-key="cId"
      :tree-props="{children: 'pList'}">
    >
      <!--sortable：对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件-->
      <el-table-column label="ID" prop="cId" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
        <template slot-scope="{row}">
          <span>{{ row.cId }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Text" prop="cText" width="150px" align="center" show-overflow-tooltip=true>
        <template slot-scope="{row}">
          <span>{{ row.cText }}</span>
        </template>
      </el-table-column>

      <!--<el-table-column label="Title" min-width="150px">-->
      <!--  <template slot-scope="{row}">-->
      <!--    <span class="link-type" @click="handleUpdate(row)">{{ row.title }}</span>-->
      <!--    <el-tag>{{ row.type | typeFilter }}</el-tag>-->
      <!--  </template>-->
      <!--</el-table-column>-->

      <!--<el-table-column label="Author" width="110px" align="center">-->
      <!--  <template slot-scope="{row}">-->
      <!--    <span>{{ row.author }}</span>-->
      <!--  </template>-->
      <!--</el-table-column>-->

      <!--<el-table-column v-if="showReviewer" label="Reviewer" width="110px" align="center">-->
      <!--  <template slot-scope="{row}">-->
      <!--    <span style="color:red;">{{ row.reviewer }}</span>-->
      <!--  </template>-->
      <!--</el-table-column>-->

      <!--<el-table-column label="Imp" width="80px">-->
      <!--  <template slot-scope="{row}">-->
      <!--    <svg-icon v-for="n in + row.importance" :key="n" icon-class="star" class="meta-item__icon" />-->
      <!--  </template>-->
      <!--</el-table-column>-->

      <!--<el-table-column label="Readings" align="center" width="95">-->
      <!--  <template slot-scope="{row}">-->
      <!--    <span v-if="row.pageviews" class="link-type" @click="handleFetchPv(row.pageviews)">{{ row.pageviews }}</span>-->
      <!--    <span v-else>0</span>-->
      <!--  </template>-->
      <!--</el-table-column>-->

      <!--<el-table-column label="Status" class-name="status-col" width="100">-->
      <!--  <template slot-scope="{row}">-->
      <!--    <el-tag :type="row.status | statusFilter">-->
      <!--      {{ row.status }}-->
      <!--    </el-tag>-->
      <!--  </template>-->
      <!--</el-table-column>-->

      <!--<el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">-->
      <!--  <template slot-scope="{row,$index}">-->
      <!--    <el-button type="primary" size="mini" @click="handleUpdate(row)">-->
      <!--      Edit-->
      <!--    </el-button>-->
      <!--    <el-button v-if="row.status!='published'" size="mini" type="success" @click="handleModifyStatus(row,'published')">-->
      <!--      Publish-->
      <!--    </el-button>-->
      <!--    <el-button v-if="row.status!='draft'" size="mini" @click="handleModifyStatus(row,'draft')">-->
      <!--      Draft-->
      <!--    </el-button>-->
      <!--    <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">-->
      <!--      Delete-->
      <!--    </el-button>-->
      <!--  </template>-->
      <!--</el-table-column>-->
    </el-table>


    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />


    <!--<el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">-->
    <!--  <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">-->
    <!--    <el-form-item label="Type" prop="type">-->
    <!--      <el-select v-model="temp.type" class="filter-item" placeholder="Please select">-->
    <!--        <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />-->
    <!--      </el-select>-->
    <!--    </el-form-item>-->
    <!--    <el-form-item label="Date" prop="timestamp">-->
    <!--      <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date" />-->
    <!--    </el-form-item>-->
    <!--    <el-form-item label="Title" prop="title">-->
    <!--      <el-input v-model="temp.title" />-->
    <!--    </el-form-item>-->
    <!--    <el-form-item label="Status">-->
    <!--      <el-select v-model="temp.status" class="filter-item" placeholder="Please select">-->
    <!--        <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />-->
    <!--      </el-select>-->
    <!--    </el-form-item>-->
    <!--    <el-form-item label="Imp">-->
    <!--      <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3" style="margin-top:8px;" />-->
    <!--    </el-form-item>-->
    <!--    <el-form-item label="Remark">-->
    <!--      <el-input v-model="temp.remark" :autosize="{ minRows: 2, maxRows: 4}" type="textarea" placeholder="Please input" />-->
    <!--    </el-form-item>-->
    <!--  </el-form>-->
    <!--  <div slot="footer" class="dialog-footer">-->
    <!--    <el-button @click="dialogFormVisible = false">-->
    <!--      Cancel-->
    <!--    </el-button>-->
    <!--    <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">-->
    <!--      Confirm-->
    <!--    </el-button>-->
    <!--  </div>-->
    <!--</el-dialog>-->


    <!--<el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">-->
    <!--  <el-table :data="pvData" border fit highlight-current-row style="width: 100%">-->
    <!--    <el-table-column prop="key" label="Channel" />-->
    <!--    <el-table-column prop="pv" label="Pv" />-->
    <!--  </el-table>-->
    <!--  <span slot="footer" class="dialog-footer">-->
    <!--    <el-button type="primary" @click="dialogPvVisible = false">Confirm</el-button>-->
    <!--  </span>-->
    <!--</el-dialog>-->
  </div>
</template>

<script>
// import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

const languageOptions = [{key:'Chinese', label:'中文'}, {key:'English', label:'英文'}]
const subjectOptions = [{key:'Chinese', label:'语文'}, {key:'English', label:'英语'}, {key:'History', label:'历史'}, {key:'Geography', label:"地理"}]
const levelOptions = [{key:'Primary', label:'小学'}, {key:'Middle', label:'初中'}, {key:'High', label:'高中'}]
const sourceOptions = [{key:'Wiki', label:'维基百科'}, {key:'Spider', label:'爬虫'}]

const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      tableKey: 0, // 用于是否显示reviewer的参数
      list: [
        {
          "cId": "6712915227679862",
          "cText": "层但为给现线石最后矿写复就电万产区。大消北长山市界然斗办身定不经地。资委位能大非间场六可高料。世只国回王合级此的或严计电气规状。证八拉管正系长志而使效增后子亲。住速证花还清很两省联听工型小片认低。",
          "qList": [
            {
              "qId": "80",
              "qText": "情引商化意清得规到存员点县照改。进光什标今量现例油人场十就和。维该矿叫信什海根京声与完养史矿保。象必别组传象它看表物清局增组成。",
              "qType": "cupidatat sint",
              "qAnswer": "正",
              "qDistractorList": [
                "qui Lorem"
              ],
              "qFluency": 96,
              "qReasonability": 4,
              "qRelevance": 60,
              "qDifficulty": 12,
              "qScore": 47,
              "userIdList": [
                "41",
                "75",
                "10",
                "2"
              ]
            },
            {
              "qId": "66",
              "qText": "较称世龙实因三各流复有同等。须米细第角许存断压劳国满极方。有青可即期安体风格只约作研林亲并何。铁把活整性线选只满才按区权历。江规安些车下报将标提自件号况明传商这。",
              "qType": "cillum in anim irure",
              "qAnswer": "更",
              "qDistractorList": [
                "育",
                "车"
              ],
              "qFluency": 95,
              "qReasonability": 92,
              "qRelevance": 8,
              "qDifficulty": 23,
              "qScore": 19,
              "userIdList": [
                "7",
                "72",
                "45",
                "72",
                "8"
              ]
            },
            {
              "qId": "59",
              "qText": "手色听器联将生下记府质组。你十造群色该记结共至体知头。目段半断式根听习论相品写活增意题流。前果群西始号断周划构派关好阶品。",
              "qType": "ullamco irure",
              "qAnswer": "政",
              "qDistractorList": [
                "划",
                "共"
              ],
              "qFluency": 92,
              "qReasonability": 31,
              "qRelevance": 19,
              "qDifficulty": 12,
              "qScore": 92,
              "userIdList": [
                "44",
                "79"
              ]
            },
            {
              "qId": "46",
              "qText": "进满段变候矿张始边王务土。使究议改革为时经问证用象关适深。又任院率族认口可往信如重西。规史四生带起资元气常影北。务第严心技标运省府率造每集果术。",
              "qType": "exercitation incididunt nisi laborum",
              "qAnswer": "矿",
              "qDistractorList": [
                "统"
              ],
              "qFluency": 95,
              "qReasonability": 97,
              "qRelevance": 34,
              "qDifficulty": 80,
              "qScore": 12,
              "userIdList": [
                "60",
                "5",
                "63"
              ]
            },
            {
              "qId": "56",
              "qText": "为因率理们各规划看联县观过证带经果。自部族几月响些管格万位有听质。低克路管资强身南革要此劳深风一么放。政除命江果强总直列文型北精务。观把百温要很来传消王一至。切放手米部已细想件龙花满管。",
              "qType": "anim fugiat quis ipsum eu",
              "qAnswer": "行",
              "qDistractorList": [
                "她",
                "使",
                "精",
                "么",
                "事"
              ],
              "qFluency": 14,
              "qReasonability": 80,
              "qRelevance": 41,
              "qDifficulty": 64,
              "qScore": 47,
              "userIdList": [
                "93",
                "55"
              ]
            }
          ],
          "cLanguage": "voluptate veniam amet",
          "cSubject": "sit do",
          "cLevel": "Duis Excepteur cillum aliqua fugiat",
          "cTitle": "效力市准",
          "cSource": "proident irure ad cillum"
        },
        {
          "cId": "5537542382194444",
          "cText": "管二但写要受政次持把该展到。水调各问思小解适所总世选变压。物中目资务的将土石美金热采年。重叫养领白员与气已准别工动张传。",
          "qList": [
            {
              "qId": "11",
              "qText": "变已进温满容社响物真队整样象全东出。较原候图当千好式影直形革明。平各精构就素关机九别处共近省象。干文状元信府情场年速把需收。反传非多状但图内正说十派上路过。铁离高段业打社月展至义天的则济。具面斗值断运件查院住快容日儿叫传。",
              "qType": "adipisicing Excepteur",
              "qAnswer": "决",
              "qDistractorList": [
                "正",
                "则",
                "究"
              ],
              "qFluency": 16,
              "qReasonability": 69,
              "qRelevance": 82,
              "qDifficulty": 19,
              "qScore": 49,
              "userIdList": [
                "77",
                "9"
              ]
            }
          ],
          "cLanguage": "sint ad sunt sed in",
          "cSubject": "ullamco Ut qui commodo ad",
          "cLevel": "incididunt",
          "cTitle": "化眼花确据转",
          "cSource": "aliqua cillum"
        },
        {
          "cId": "8057760683286198",
          "cText": "技山几等际眼等观着们器引压领口。上次拉按规元听层角效酸反们思形使。才如便极全几文记造么约业布。家取一山列放术置步空变线机按称生调。",
          "qList": [
            {
              "qId": "84",
              "qText": "去更人时传复了原热革放八道公。去开打清格住队式约平省上。质收前压完东强时新金要立查复。农天习部规管品你族身月事色例阶运。示图传然导值认听八有容点候极。",
              "qType": "do consequat",
              "qAnswer": "中",
              "qDistractorList": [
                "包",
                "六",
                "办",
                "把",
                "现"
              ],
              "qFluency": 98,
              "qReasonability": 45,
              "qRelevance": 95,
              "qDifficulty": 24,
              "qScore": 46,
              "userIdList": [
                "56",
                "31"
              ]
            }
          ],
          "cLanguage": "deserunt dolore exercitation",
          "cSubject": "Lorem aute laboris",
          "cLevel": "nostrud voluptate eu laboris sed",
          "cTitle": "半与十或青风",
          "cSource": "deserunt esse velit Duis cillum"
        },
        {
          "cId": "7269176166870004",
          "cText": "七确合化片头产南话酸二走九京亲段。外更处就京然个及路造如局加。节维反门每火者马片转切传社。数队一可属类由先二术华气各各热三权。效型就话确会风千型特同酸府持打示。",
          "qList": [
            {
              "qId": "28",
              "qText": "市八定海多多头基各起建质精很写查火压。局话按备低半便资一计压能号世她斗。电情委得料必西不手照对走导声。风线外参经七量飞美和展任。总常叫切办目者过济调表改计天。",
              "qType": "cupidatat amet Lorem esse nulla",
              "qAnswer": "理",
              "qDistractorList": [
                "教",
                "称",
                "算"
              ],
              "qFluency": 61,
              "qReasonability": 12,
              "qRelevance": 80,
              "qDifficulty": 83,
              "qScore": 9,
              "userIdList": [
                "81",
                "3",
                "38"
              ]
            },
            {
              "qId": "78",
              "qText": "品可积提群增种什然学展识律书。事作府方认于知构各温马利京务。合叫快委亲又电间导把证素声流。每将等积表眼果团火级类深斗专别次百运。各完级门议表当条委可革证。温身领而来点革美利果力为明文圆段。",
              "qType": "in adipisicing dolore labore laboris",
              "qAnswer": "全",
              "qDistractorList": [
                "示",
                "子",
                "生"
              ],
              "qFluency": 71,
              "qReasonability": 75,
              "qRelevance": 48,
              "qDifficulty": 85,
              "qScore": 23,
              "userIdList": [
                "75",
                "3",
                "79",
                "70"
              ]
            },
            {
              "qId": "27",
              "qText": "毛七家口步多质长团龙并农去路带听布。来管风集收响大权义期离及要价。何本次术之面安业命手带建构口样们它近。眼号书题位才所写线以领史上量今有往。",
              "qType": "est nisi",
              "qAnswer": "律",
              "qDistractorList": [
                "光"
              ],
              "qFluency": 85,
              "qReasonability": 45,
              "qRelevance": 2,
              "qDifficulty": 37,
              "qScore": 52,
              "userIdList": [
                "5",
                "29"
              ]
            }
          ],
          "cLanguage": "nulla minim eu",
          "cSubject": "consectetur sit commodo",
          "cLevel": "incididunt Duis tempor eu",
          "cTitle": "再光派开本术",
          "cSource": "cupidatat veniam proident in"
        }
      ], // 表格数据
      total: 0, // 数据总量
      listLoading: true, // 是否显示加载页面

      //与数据筛选相关的
      listQuery: {
        page: 1,
        limit: 20,
        // importance: undefined,
        // title: undefined,
        // type: undefined,
        sort: '+id',
        title:undefined,
        language:undefined,
        subject:undefined,
        level:undefined,
        source:undefined,
        fluency:undefined,
        reasonability:undefined,
        relevance:undefined,
        difficulty:undefined,
        score:undefined,
  },
      fluencyOptions: [1, 2, 3, 4, 5],
      resonabilityOptions: [1, 2, 3, 4, 5],
      relevanceOptions: [1, 2, 3, 4, 5],
      difficultyOptions: [1, 2, 3, 4, 5],
      scoreOptions: [1, 2, 3, 4, 5],
      // calendarTypeOptions,
      languageOptions,
      subjectOptions,
      levelOptions,
      sourceOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],

      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,

      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },

    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },

    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
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
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          createArticle(this.temp).then(() => {
            this.list.unshift(this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateArticle(tempData).then(() => {
            const index = this.list.findIndex(v => v.id === this.temp.id)
            this.list.splice(index, 1, this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleDelete(row, index) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      this.list.splice(index, 1)
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
  //   formatJson(filterVal) {
  //     return this.list.map(v => filterVal.map(j => {
  //       if (j === 'timestamp') {
  //         return parseTime(v[j])
  //       } else {
  //         return v[j]
  //       }
  //     }))
  //   },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
}
</script>
