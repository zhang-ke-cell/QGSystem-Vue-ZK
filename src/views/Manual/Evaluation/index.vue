<template>
  <div class="app-main">
    <el-card class="box-card">
      <div slot="header" class="clearfix" style="">
        <div style="line-height: 71.5px; float: left">
          <span class="title"><strong>问答对评估</strong></span>
        </div>
        <div style="line-height: 71.5px; margin-bottom: 0px; float: right">
          <el-row style="margin-bottom: 0px" type="flex" justify="end">
            <el-col :span="3" style="margin-top: 2px">
              <el-select
                v-model="listQuery.cLanguage"
                placeholder="语言"
                clearable
                class="filter-item"
              >
                <el-option
                  v-for="item in languageOptions"
                  :key="item.key"
                  :label="item.label"
                  :value="item.label"
                />
              </el-select>
            </el-col>
            <el-col :span="5" style="margin-top: 2px">
              <el-select
                v-model="listQuery.cSubject"
                placeholder="学科"
                clearable
                class="filter-item"
              >
                <el-option
                  v-for="item in subjectOptions"
                  :key="item.key"
                  :label="item.label"
                  :value="item.label"
                />
              </el-select>
            </el-col>
            <el-col :span="4" style="margin-top: 2px">
              <el-input
                v-model="listQuery.cSource"
                placeholder="数据集"
                class="filter-item"
              />
            </el-col>
            <el-col :span="2">
              <el-button
                style="margin-left: 20px; margin-top: 5px"
                circle
                size="small"
                icon="el-icon-search"
                @click="getData"
              ></el-button>
            </el-col>
            <el-col :span="4">
              <el-divider
                direction="vertical"
                style="display: inline-block"
              ></el-divider>
              <el-button
                v-waves
                style="
                  margin-left: 10px;
                  font-size: 16px;
                  display: inline-block;
                "
                type="text"
                icon="el-icon-circle-plus-outline"
                @click="addQuestion"
                >增加试题</el-button
              >
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="text item" v-loading="loading">
        <!-- <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content label-col"><label>标题</label></div></el-col>
        </el-row>
        <el-row style="margin-bottom: 50px">
          <el-col :span="24">
            <span class="content" v-if="showSkeleton"> {{ dataObj.cTitle }} </span>
          </el-col>
        </el-row>
        <el-divider class="divider"></el-divider> -->
        <el-row :gutter="20">
          <el-col :span="2">
            <div class="grid-content label-col" style="line-height: 40px">
              <label>上下文</label>
            </div>
          </el-col>
          <el-col :span="3">
            <el-button
              style="margin-left: 10px; margin-top: 6px"
              size="mini"
              type="primary"
              icon="el-icon-edit"
              circle
              @click="toEditContext('context')"
            >
            </el-button
          ></el-col>
        </el-row>
        <el-row style="margin-bottom: 50px">
          <el-col :span="24">
            <el-skeleton v-if="showSkeleton" :rows="3" animated />
            <div class="textarea">
              <el-input
                :autosize="true"
                ref="context"
                type="textarea"
                v-if="editMode.editContext"
                v-model="dataObj.cText"
                @blur="toLookContext('context')"
              >
              </el-input>
              <span
                v-else
                style="margin-left: 10px; display: block; font-size: 18px"
                @click="toEditContext('context')"
              >
                {{ dataObj.cText }}
              </span>
            </div>
          </el-col>
        </el-row>

        <el-collapse v-model="activeNames">
          <el-collapse-item
            style="font-size: 20px; padding-bottom: 0"
            v-for="(q, index) in dataObj.qList"
            :key="index"
            :name="`${index + 1}`"
          >
            <template slot="title">
              <label style="font-size: 20px">{{ `试题${index + 1}` }}</label>
              <div style="margin-left: 900px">
                <el-popconfirm
                  title="确定删除"
                  @confirm="DeleteQuestion(index)"
                >
                  <el-button
                    slot="reference"
                    v-waves
                    type="danger"
                    plain
                    circle
                    icon="el-icon-delete"
                    size="small"
                  ></el-button>
                </el-popconfirm>
              </div>
            </template>

            <el-divider></el-divider>
            <el-row :gutter="20" type="flex" justify="start">
              <el-col :span="2"></el-col>
              <el-col :span="2">
                <div
                  class="grid-content label-col"
                  style="line-height: 40px; font-size: 16px"
                >
                  <label>试题</label>
                </div>
              </el-col>
              <el-col :span="1">
                <el-button
                  style="margin-left: 10px; margin-top: 6px"
                  size="mini"
                  type="primary"
                  icon="el-icon-edit"
                  circle
                  @click="toEdit(`ques${index.toString()}`)"
                >
                </el-button
              ></el-col>
            </el-row>
            <el-row style="margin-bottom: 20px" type="flex" justify="start">
              <el-col :span="2"></el-col>
              <el-col :span="22">
                <el-skeleton v-if="showSkeleton" :rows="1" animated />
                <div class="textarea">
                  <el-input
                    :autosize="true"
                    type="textarea"
                    :ref="`ques${index}`"
                    v-if="editMode.editQuestion[index] === true"
                    v-model="q.qText"
                    @blur="toLook(`ques${index.toString()}`)"
                  >
                  </el-input>
                  <span
                    v-else
                    style="margin-left: 10px; display: block; font-size: 14px"
                    @click="toEdit(`ques${index.toString()}`)"
                  >
                    {{ q.qText }}
                  </span>
                </div>
              </el-col>
            </el-row>

            <el-divider></el-divider>
            <el-row :gutter="20" type="flex" justify="start">
              <el-col :span="2"></el-col>
              <el-col :span="2">
                <div
                  class="grid-content label-col"
                  style="line-height: 40px; font-size: 16px"
                >
                  <label>答案</label>
                </div>
              </el-col>
              <el-col :span="1">
                <el-button
                  style="margin-left: 10px; margin-top: 6px"
                  size="mini"
                  type="primary"
                  icon="el-icon-edit"
                  circle
                  @click="toEdit(`ans${index.toString()}`)"
                >
                </el-button
              ></el-col>
            </el-row>
            <el-row style="margin-bottom: 20px" type="flex" justify="start">
              <el-col :span="2"></el-col>
              <el-col :span="22">
                <el-skeleton v-if="showSkeleton" :rows="1" animated />
                <div class="textarea">
                  <el-input
                    :autosize="true"
                    type="textarea"
                    :ref="`ans${index}`"
                    v-if="editMode.editAnswer[index] === true"
                    v-model="q.qAnswer"
                    @blur="toLook(`ans${index.toString()}`)"
                  >
                  </el-input>
                  <span
                    v-else
                    style="margin-left: 10px; display: block; font-size: 14px"
                    @click="toEdit(`ans${index.toString()}`)"
                  >
                    {{ q.qAnswer }}
                  </span>
                </div>
              </el-col>
            </el-row>

            <el-divider></el-divider>
            <el-row
              :gutter="20"
              type="flex"
              align="middle"
              style="margin-bottom: 8px"
            >
              <el-col :span="2"></el-col>
              <el-col :span="3"
                ><div
                  class="grid-content label-col"
                  style="line-height: 40px; font-size: 16px"
                >
                  <label>流畅性</label>
                </div></el-col
              >
              <el-col :span="5"
                ><div style="color: gray">试题是否流畅通顺</div></el-col
              >
              <el-col :span="12">
                <div class="rate-box">
                  <el-rate :texts="texts" v-model="q.qFluency" show-text>
                  </el-rate>
                </div>
              </el-col>
            </el-row>

            <el-divider></el-divider>
            <el-row
              :gutter="20"
              type="flex"
              align="middle"
              style="margin-bottom: 8px"
            >
              <el-col :span="2"></el-col>
              <el-col :span="3"
                ><div
                  class="grid-content label-col"
                  style="line-height: 40px; font-size: 16px"
                >
                  <label>可回答性</label>
                </div></el-col
              >
              <el-col :span="5"
                ><div style="color: gray">试题与答案是否合理</div></el-col
              >
              <el-col :span="12">
                <div class="rate-box">
                  <el-rate :texts="texts" v-model="q.qReasonability" show-text>
                  </el-rate>
                </div>
              </el-col>
            </el-row>

            <el-divider></el-divider>
            <el-row
              :gutter="20"
              type="flex"
              align="middle"
              style="margin-bottom: 8px"
            >
              <el-col :span="2"></el-col>
              <el-col :span="3"
                ><div
                  class="grid-content label-col ;font-size: 16px"
                  style="line-height: 40px; font-size: 16px"
                >
                  <label>相关性</label>
                </div></el-col
              >
              <el-col :span="5"
                ><div style="color: gray">试题是否与相应上下文匹配</div></el-col
              >
              <el-col :span="12">
                <div class="rate-box">
                  <el-rate :texts="texts" v-model="q.qRelevance" show-text>
                  </el-rate>
                </div>
              </el-col>
            </el-row>

            <el-divider></el-divider>
            <el-row
              :gutter="20"
              type="flex"
              align="middle"
              style="margin-bottom: 8px"
            >
              <el-col :span="2"></el-col>
              <el-col :span="3"
                ><div
                  class="grid-content label-col"
                  style="line-height: 40px; font-size: 16px"
                >
                  <label>难度</label>
                </div></el-col
              >
              <el-col :span="5"
                ><div style="color: gray">回答该试题的难易程度</div></el-col
              >
              <el-col :span="3">
                <el-select v-model="q.qDifficulty" placeholder="请选择">
                  <el-option
                    v-for="item in difficulties"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-col>
            </el-row>

            <el-divider></el-divider>
            <el-row
              :gutter="20"
              type="flex"
              align="middle"
              style="margin-bottom: 8px"
            >
              <el-col :span="2"></el-col>
              <el-col :span="3"
                ><div
                  class="grid-content label-col"
                  style="line-height: 40px; font-size: 16px"
                >
                  <label>干扰项</label>
                </div></el-col
              >
              <el-col :span="5"
                ><div style="color: gray">答案的干扰项</div></el-col
              >
              <el-col :span="5">
                <div class="rate-box">
                  <el-input
                    v-show="q.qDistractorList.length > 0"
                    style="margin-bottom: 5px; display: inline-block"
                    v-for="(item, index) in q.qDistractorList"
                    :key="index"
                    v-model="q.qDistractorList[index]"
                  >
                  </el-input>
                </div>
              </el-col>
              <el-col :span="2">
                <template v-for="numo in q.qDistractorList.length">
                  <div style="height: 40px; margin-bottom: 5px; line-height: 40px">
                    <el-button
                      style="vertical-align: center"
                      v-if="q.qDistractorList.length > 0"
                      type="danger"
                      icon="el-icon-minus"
                      @click="deleteDistractor(index, numo - 1)"
                      circle
                      plain
                      size="small"
                    >
                    </el-button>
                  </div>
                </template>
              </el-col>
              <el-col :span="3">
                <el-button
                  v-waves
                  icon="el-icon-plus"
                  type="primary"
                  @click="addDistractor(index)"
                  circle
                  plain
                  size="small"
                >
                </el-button>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>

        <div style="text-align: center; margin-top: 30px; position: relative">
          <el-button-group>
            <el-button
              v-waves
              type="danger"
              icon="el-icon-delete"
              @click="updateDelete"
              >删 除</el-button
            >
            <el-button
              v-waves
              type="success"
              icon="el-icon-suitcase"
              @click="updateEdit"
              >保 存</el-button
            >
            <el-button
              style="position: absolute; right: 50px"
              v-waves
              type="primary"
              icon="el-icon-caret-bottom"
              @click="getData"
              >下一个</el-button
            >
          </el-button-group>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import {
  getRandomByCondition,
  updateQuestions,
  deleteQuestions,
} from "@/api/evaluation";
import { getToken } from "@/utils/auth";
export default {
  name: "index",
  data() {
    return {
      languageOptions: [
        { key: "Chinese", label: "中文" },
        { key: "English", label: "英文" },
      ],
      subjectOptions: [
        { key: "Chinese", label: "语文" },
        { key: "ComputerNetwork", label: "计算机网络" },
        { key: "History", label: "历史" },
        { key: "DataStructure", label: "数据结构" },
        { key: "BioScience", label: "生命系统与科学" },
      ],
      sourceOptions: [
        { key: "jiaoDaPPT", label: "交大ppt" },
        { key: "lianXiangPPT", label: "联想ppt" },
        { key: "lianXiangPPTChuZhong", label: "联想ppt初中" },
        { key: "lianXiangPPTGaoZhong", label: "联想ppt高中" },
      ],

      listQuery: {
        cLanguage: "",
        cSubject: "",
        cSource: "",
      },
      dataObj: {
        cId: "0",
        cTitle: "争白前取华细",
        cText: "sit",
        qList: [
          {
            qId: "69",
            qText: "mollit veniam",
            qAnswer: "et in aliqua",
            qDistractorList: [
              "Duis Lorem occaecat ea",
              "aute amet sunt consequat minim",
              "Ut in Duis",
            ],
            qFluency: 3,
            qRelevance: 4,
            qDifficulty: 3,
            qReasonability: 4,
          },
          {
            qId: "27",
            qText: "cupidatat",
            qAnswer: "labore ipsum voluptate",
            qDistractorList: [
              "non tempor",
              "labore",
              "voluptate ut",
              "anim voluptate cillum tempor",
              "nulla Lorem",
            ],
            qFluency: 4,
            qRelevance: 4,
            qDifficulty: 4,
            qReasonability: 2,
          },
          {
            qId: "50",
            qText: "minim aliqua fugiat",
            qAnswer: "sed",
            qDistractorList: ["ea tempor consectetur fugiat magna", "do"],
            qFluency: 3,
            qRelevance: 5,
            qDifficulty: 2,
            qReasonability: 4,
          },
          {
            qId: "88",
            qText: "non consectetur",
            qAnswer: "ipsum eu Excepteur",
            qDistractorList: ["elit eiusmod magna ex adipisicing"],
            qFluency: 5,
            qRelevance: 2,
            qDifficulty: 1,
            qReasonability: 5,
          },
        ],
      },

      // 控制手风琴折叠
      activeNames: [],

      showSkeleton: false,
      showDelete: false,
      editMode: {
        editContext: false,
        editQuestion: [],
        editAnswer: [false, false, false, false],
      },
      loading: false,

      difficulties: [
        {
          value: 1,
          label: "简单",
        },
        {
          value: 2,
          label: "中等",
        },
        {
          value: 3,
          label: "困难",
        },
      ],
      difficulty: "",
      //星星的辅助文本说明
      texts: ["极差", "差", "一般", "好", "很好"],
      count: 0,
      token: getToken(),
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    // 发送请求获取数据
    async getData() {
      this.loading = true;
      try {
        let res = await getRandomByCondition(this.listQuery);
        if (res.code === 200 && res.data != null) {
          this.dataObj = res.data;
          setTimeout(() => {
            this.loading = false;
          }, 300);
        } else {
          this.loading = false;
          this.$forceUpdate();
          this.$message.warning("未搜索到您要求的问答对");
        }
      } catch (error) {
        this.$message.error("获取数据失败");
      }
    },

    addQuestion() {
      this.dataObj.qList.push({
        qId: -1,
        qText: "",
        qAnswer: "",
        qDistractorList: [],
        qFluency: 0,
        qRelevance: 0,
        qDifficulty: 0,
        qReasonability: 0,
      });
      this.$notify.info({
        title: "消息",
        message: "已经在底部增加一个试题",
      });
    },

    toEditContext(params) {
      this.editMode.editContext = true;
      this.$nextTick(() => {
        console.log(this.$refs[params]);
        this.$refs[params].focus();
      });
    },

    toLookContext(params) {
      if (this.dataObj.cText === "") {
        this.$notify.error({
          title: "错误",
          message: "上下文不能为空",
          offset: 300,
        });
        return;
      }
      this.editMode.editContext = false;
    },

    toLook(parmas) {
      const start = parmas[0];
      const end = parseInt(parmas[parmas.length - 1]);
      if (start === "a") {
        if (this.dataObj.qList[end].qAnswer === "") {
          this.$notify.error({
            title: "错误",
            message: "答案不能为空",
            offset: 300,
          });
          return;
        }
        this.editMode.editAnswer[end] = false;
        this.$forceUpdate();
      } else {
        if (this.dataObj.qList[end].qText === "") {
          this.$notify.error({
            title: "错误",
            message: "试题不能为空",
            offset: 300,
          });
          return;
        }
        this.editMode.editQuestion[end] = false;
        this.$forceUpdate();
      }
    },

    toEdit(parmas) {
      const start = parmas[0];
      const end = parseInt(parmas[parmas.length - 1]);
      if (start === "a") {
        this.editMode.editAnswer[end] = true;
        this.$forceUpdate();
        this.$nextTick(() => {
          // console.log(this.$refs, this.$refs.keys)
          // console.log(this.$refs[parmas])
          this.$refs[parmas][0].focus();
        });
      } else {
        this.editMode.editQuestion[end] = true;
        this.$forceUpdate();
        this.$nextTick(() => {
          this.$refs[parmas][0].focus();
        });
      }
    },

    // 增加干扰项按钮的回调
    addDistractor(index) {
      this.dataObj.qList[index].qDistractorList.push("");
    },

    // 删除干扰项的回调
    deleteDistractor(index, numo) {
      // console.log(index)
      this.dataObj.qList[index].qDistractorList.splice(numo, 1);
    },

    DeleteQuestion(index) {
      this.dataObj.qList.splice(index, 1);
      this.$notify({
        title: "成功",
        message: "删除试题成功",
        type: "success",
      });
    },

    updateDelete() {
      this.$confirm("删除所有的试题?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await deleteQuestions(this.dataObj.cId);
          if (res.code === 200) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getData();
          } else {
            this.$message({
              type: "error",
              message: "删除失败！！！",
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    async updateEdit() {
      try {
        let res = await updateQuestions(this.dataObj);
        if (res.code === 200) {
          this.$message({
            type: "success",
            message: "保存成功！",
          });
        }
      } catch (error) {
        this.$message({
          type: "error",
          message: "保存失败！！！",
        });
      }
    },
  },
};
</script>

<style scoped>
.line {
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
  clear: both;
}

.box-card {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.basic-layout {
  text-align: center;
  margin-top: 30px;
}
.title {
  display: inline-block;
  vertical-align: top;
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

.el-button + .el-button {
  margin-left: 0;
}
.textarea >>> .el-textarea__inner {
  font-family: "Microsoft Yahei" !important;
  font-size: 14px !important;
}

/*/deep/ .el-collapse-item__content{*/
/*  padding-bottom: 0px;*/
/*}*/

.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 5px 75px;
}

/deep/ .divider {
  margin: 5px 0px;
}

/deep/ .el-collapse-item__content {
  padding-bottom: 0px;
}
</style>

