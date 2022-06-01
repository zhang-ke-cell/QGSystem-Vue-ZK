<template xmlns="http://www.w3.org/1999/html">
  <div class="app-main" style="text-align: left">
    <el-card class="box-card" style=" margin-bottom: 10px">
      <div slot="header" class="clearfix">
        <span  style="text-align: left !important;font-weight: bold;font-size:x-large ">根据相关属性筛选</span>
        <el-button v-waves style="float: right" class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
          Search
        </el-button>
      </div>
      <div  class="text item" >
        <el-row type="flex" justify="space-around">
          <el-col :span="22">
            <el-input v-model="listQuery.cTitle" placeholder="标题" style="width: 100%; margin-bottom: 18px" class="filter-item" @keyup.enter.native="handleFilter" />
          </el-col>
        </el-row>
        <el-row type="flex"  justify="space-around" style="margin-bottom: 18px">
          <el-col :span="4">
            <el-select v-model="listQuery.sort"  class="filter-item" @change="handleFilter">
              <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="listQuery.cLanguage" placeholder="语言" clearable class="filter-item" >
            <el-option v-for="item in languageOptions" :key="item.key" :label="item.label" :value="item.label" />
          </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="listQuery.cSubject" placeholder="学科" clearable class="filter-item" >
              <el-option v-for="item in subjectOptions " :key="item.key" :label="item.label" :value="item.label" />
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="listQuery.cSource" placeholder="来源" clearable class="filter-item" >
              <el-option v-for="item in sourceOptions " :key="item.key" :label="item.label" :value="item.key" />
            </el-select>
          </el-col>
        </el-row>
      </div>
      <div  class="text item " style="text-align: left">
        <el-row type="flex" justify="space-around" style="margin-bottom: 18px">
          <el-col :span="4">
            <el-select v-model="listQuery.qFluency" placeholder="流畅性" clearable class="filter-item">
            <el-option v-for="item in fluencyOptions" :key="item" :label="item" :value="item" />
          </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="listQuery.qReasonability" placeholder="合理性" clearable  class="filter-item">
              <el-option v-for="item in resonabilityOptions" :key="item" :label="item" :value="item" />
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="listQuery.qRelevance" placeholder="相关性" clearable  class="filter-item">
              <el-option v-for="item in relevanceOptions" :key="item" :label="item" :value="item" />
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="listQuery.qDifficulty" placeholder="难度" clearable  class="filter-item">
              <el-option v-for="item in difficultyOptions" :key="item" :label="item" :value="item" />
            </el-select>
          </el-col>
        </el-row>

        <el-row type="flex"  justify="space-around">
          <el-col :span="4">
            <el-select v-model="listQuery.qType" placeholder="问题类型" clearable class="filter-item" >
            <el-option v-for="item in qTypeOptions " :key="item.key" :label="item.label" :value="item.label" />
          </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="listQuery.qQwType" placeholder="疑问词类型" clearable class="filter-item" >
              <el-option v-for="item in qQwOptions " :key="item.key" :label="item.label" :value="item.label" />
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="listQuery.qCognitiveType" placeholder="认知类型" clearable class="filter-item" >
              <el-option v-for="item in qCognitiveTypeOptions " :key="item.key" :label="item.label" :value="item.label" />
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="listQuery.qScore" placeholder="综合评价" clearable  class="filter-item">
              <el-option v-for="item in scoreOptions" :key="item" :label="item" :value="item" />
            </el-select>
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
        style="width: 100%;"
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
              style="width: 100%">
              <el-table-column label="ID"  align="center" width="80">
                <template v-slot="{row}">
                  <span>{{ row.qId }}</span>
                </template>
              </el-table-column>

              <el-table-column label="问题"  width="200px" align="center" :show-overflow-tooltip="true">
                <template v-slot="{row}">
                  <span class="link-type" @click="showQuestion(row,$index)">{{ row.qText }}</span>
                </template>
              </el-table-column>

              <el-table-column label="问题类型"  width="100px" align="center" :show-overflow-tooltip="true">
                <template v-slot="{row}">
                  <span>{{ row.qType }}</span>
                </template>
              </el-table-column>

              <el-table-column label="疑问词类型"  width="100px" align="center" :show-overflow-tooltip="true">
                <template v-slot="{row}">
                  <span>{{ row.qQwType }}</span>
                </template>
              </el-table-column>

              <el-table-column label="认知类型"  width="100px" align="center" :show-overflow-tooltip="true">
                <template v-slot="{row}">
                  <span>{{ row.qCognitiveType }}</span>
                </template>
              </el-table-column>

              <el-table-column label="答案"  width="100px" align="center" :show-overflow-tooltip="true">
                <template v-slot="{row}">
                  <span>{{ row.qAnswer }}</span>
                </template>
              </el-table-column>

              <el-table-column label="干扰项"  width="300px" align="center" :show-overflow-tooltip="true">
                <template v-slot="{row}" >
                  <el-tag v-for="(item,index) in row.qDistractorList" :key="index" style="margin-right: 4px">
                    {{item}}
                  </el-tag>
                  <!--<span>{{ row.qDistractorList }}</span>-->
                </template>
              </el-table-column>

              <el-table-column label="流畅性" width="100px">
                <template v-slot="{row}">
                  <svg-icon v-for="n in + row.qFluency" :key="n" icon-class="star" class="meta-item__icon" />
                </template>
              </el-table-column>

              <el-table-column label="合理性" width="100px">
                <template v-slot="{row}">
                  <svg-icon v-for="n in + row.qReasonability" :key="n" icon-class="star" class="meta-item__icon" />
                </template>
              </el-table-column>

              <el-table-column label="相关性" width="100px">
                <template v-slot="{row}">
                  <svg-icon v-for="n in + row.qRelevance" :key="n" icon-class="star" class="meta-item__icon" />
                </template>
              </el-table-column>

              <el-table-column label="难度" width="100px">
                <template v-slot="{row}">
                  <svg-icon v-for="n in + row.qDifficulty" :key="n" icon-class="star" class="meta-item__icon" />
                </template>
              </el-table-column>

              <el-table-column label="综合评价" width="100px">
                <template v-slot="{row}">
                  <svg-icon v-for="n in + row.qScore" :key="n" icon-class="star" class="meta-item__icon" />
                </template>
              </el-table-column>

              <el-table-column label="标注者ID" width="150px"  align="center" :show-overflow-tooltip="true">
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

        <el-table-column label="上下文"  align="center" :show-overflow-tooltip="true">
          <template v-slot="{row}">
            <span>{{ row.cText }}</span>
          </template>
        </el-table-column>

        <el-table-column label="标题"  width="200px" align="center" :show-overflow-tooltip="true">
          <template v-slot="{row}">
            <span>{{ row.cTitle }}</span>
          </template>
        </el-table-column>

        <el-table-column label="语言" class-name="status-col" width="100" align="center">
          <template v-slot="{row}" >
            <el-tag :type="row.cLanguage | languageFilter" effect="dark">
              {{ row.cLanguage}}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="学科" class-name="status-col" width="100" align="center">
          <template v-slot="{row}">
            <el-tag :type="row.cSubject | subjectFilter" >
              {{row.cSubject}}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="来源" class-name="status-col" width="100" align="center">
          <template v-slot="{row}">
            <el-tag :type="row.cSource | sourceFilter" effect="plain">
              {{row.cSource | sourceTranslate}}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>

      <pagination style="text-align: center" v-show="total>0" :total="total" :pageNum.sync="listQuery.pageNum" :limit.sync="listQuery.pageLimit" @pagination="getList" />

    <el-dialog title="问题展示" :visible.sync="dialogFormVisible" >
      <el-form ref="dataForm"  :model="temp" label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
        <el-form-item label="上下文">
          <el-input type="textarea" :autosize="true" :readonly="true" v-model="temp.cText" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item label="问题">
          <el-input type="textarea" :autosize="true" :readonly="true" v-model="temp.qText" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item label="问题类型">
          <el-input type="textarea" autosize :readonly="true" v-model="temp.qType" style="width: 100px"></el-input>
        </el-form-item>
        <el-form-item label="疑问词类型">
          <el-input type="textarea" autosize :readonly="true" v-model="temp.qQwType" style="width: 100px"></el-input>
        </el-form-item>
        <el-form-item label="认知类型">
          <el-input type="textarea" autosize :readonly="true" v-model="temp.qCognitiveType" style="width: 100px"></el-input>
        </el-form-item>
        <el-form-item label="答案">
          <el-input type="textarea" autosize :readonly="true" v-model="temp.qAnswer" style="width: 100px"></el-input>
        </el-form-item>
        <el-form-item label="干扰项">
          <el-tag v-for="(item,index) in temp.qDistractorList" :key="index" style="margin-right: 20px">{{item}}</el-tag>
        </el-form-item>
        <el-form-item label="流畅性">
          <el-rate
            style="height: 40px;padding-top:10px "
            v-model="temp.qFluency"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </el-form-item>
        <el-form-item label="合理性">
          <el-rate
            style="height: 40px;padding-top:10px "
            v-model="temp.qReasonability"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </el-form-item>
        <el-form-item label="相关性">
          <el-rate
            style="height: 40px;padding-top:10px "
            v-model="temp.qRelevance"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </el-form-item>
        <el-form-item label="难度">
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
        <el-form-item label="综合评价">
          <el-rate
            style="height: 40px;padding-top:10px "
            v-model="temp.qScore"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </el-form-item>
        <el-form-item label="标注者ID">
          <el-tag v-for="(item,index) in temp.userIdList" :key="index" style="margin-right: 20px">{{item}}</el-tag>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          关闭
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
        ComputerNetwork:'warning'
      }
      let key = ''
      switch (subject)
      {
        case subject==='语文':key="Chinese";
          break;
        case subject==='数据结构':key="DataStructure";
          break;
        case subject==='历史':key="History";
          break;
        case subject==='计算机网络':key="ComputerNetwork";
          break;
      }
      return subjectMap[key]
    },
    subjectTranslate(subject){
      const subjectMap = {
        Chinese: '语文',
        English: '英语',
        History:'历史',
        Geography:'地理'
      }
      return subjectMap[subject]
    },
    sourceFilter(source){
      const sourceMap = {
        Wiki:'success',
        Spider:'danger'
      }
      return sourceMap[source]
    },
    sourceTranslate(source){
      const sourceMap = {
        Wiki:'维基百科',
        Spider:'网络爬虫'
      }
      return sourceMap[source]
    },
    qTypeFilter(){

    }
  },


  data(){
    return {
      tableKey: 0, // 用于是否显示reviewer的参数
      // showReviewer:false,
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
              "qFluency": 1,
              "qReasonability": 4,
              "qRelevance": 2,
              "qDifficulty": 3,
              "qScore": 4,
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
              "qFluency": 1,
              "qReasonability": 4,
              "qRelevance": 2,
              "qDifficulty": 3,
              "qScore": 4,
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
              "qFluency": 1,
              "qReasonability": 4,
              "qRelevance": 2,
              "qDifficulty": 3,
              "qScore": 4,
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
              "qFluency": 1,
              "qReasonability": 4,
              "qRelevance": 2,
              "qDifficulty": 3,
              "qScore": 4,
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
              "qFluency": 2,
              "qReasonability": 4,
              "qRelevance": 5,
              "qDifficulty": 3,
              "qScore": 2,
              "userIdList": [
                "93",
                "55"
              ]
            }
          ],
          "cLanguage": "Chinese",
          "cSubject": "Chinese",
          "cLevel": "Primary",
          "cTitle": "效力市准",
          "cSource": "Wiki"
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
              "qFluency": 1,
              "qReasonability": 4,
              "qRelevance": 2,
              "qDifficulty": 3,
              "qScore": 4,
              "userIdList": [
                "77",
                "9"
              ]
            }
          ],
          "cLanguage": "English",
          "cSubject": "English",
          "cLevel": "Middle",
          "cTitle": "化眼花确据转",
          "cSource": "Spider"
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
              "qFluency": 1,
              "qReasonability": 4,
              "qRelevance": 2,
              "qDifficulty": 3,
              "qScore": 4,
              "userIdList": [
                "56",
                "31"
              ]
            }
          ],
          "cLanguage": "Chinese",
          "cSubject": "History",
          "cLevel": "High",
          "cTitle": "半与十或青风",
          "cSource": "Wiki"
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
              "qFluency": 1,
              "qReasonability": 4,
              "qRelevance": 2,
              "qDifficulty": 3,
              "qScore": 4,
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
          "cLanguage": "English",
          "cSubject": "Geography",
          "cLevel": "Primary",
          "cTitle": "再光派开本术",
          "cSource": "Spider"
        }
      ], // 表格数据
      total: 100, // 数据总量
      listLoading: false, // 是否显示加载页面
      activeNames:['1'], // 折叠面板的标记

      //与数据筛选相关的
      listQuery: {
        pageNum: 1,
        pageLimit: 20,
        // importance: undefined,
        // title: undefined,
        // type: undefined,
        sort: '+id',
        cTitle:null,
        cLanguage:null,
        cSubject:'历史',
        cSource:null,
        qType:null,
        qQwType:null,
        qCognitiveType:null,
        qFluency:6,
        qReasonability:6,
        qRelevance:6,
        qDifficulty:6,
        qScore:6,
      },
      fluencyOptions: [1, 2, 3, 4, 5],
      resonabilityOptions: [1, 2, 3, 4, 5],
      relevanceOptions: [1, 2, 3, 4, 5],
      difficultyOptions: [1, 2, 3],
      scoreOptions: [1, 2, 3, 4, 5],
      languageOptions:[
        {key:'Chinese', label:'中文'},
        {key:'English', label:'英文'}
      ],
      subjectOptions:[
        {key:'Chinese', label:'语文'},
        {key:'ComputerNetwork', label:'计算机网络'},
        {key:'History', label:'历史'},
        {key:'DataStructure', label:"数据结构"}
      ],
      levelOptions:[
        {key:'Primary', label:'小学'},
        {key:'Middle', label:'初中'},
        {key:'High', label:'高中'}
      ],
      sourceOptions:[
        {key:'Wiki', label:'维基百科'},
        {key:'Spider', label:'爬虫'}
      ],
      qTypeOptions:[
        {key:'Choice',label:'选择题'},
        {key:'QA', label: '问答题'}
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
        {key:'create', label:'创造'}
      ],
      sortOptions: [
        { label: 'ID升序', key: '+id' },
        { label: 'ID降序', key: '-id' }
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
    getList() {
      // this.listLoading = true
      getListByCondition(this.listQuery).then(response => {
        this.list = response.data.dataList
        this.total = response.data.total
        // 模仿发送请求的时间
        // setTimeout(() => {
        //   this.listLoading = false
        // }, 1.5 * 1000)
      }, error => {
        console.log(error)
      })
    },

    handleFilter() {
      this.listQuery.pageNum = 1
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
      console.log(column, prop, order)
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



</style>
