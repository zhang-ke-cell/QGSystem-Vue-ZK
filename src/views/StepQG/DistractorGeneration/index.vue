<template>
  <div class="app-main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div style="display: inline-block; line-height: 40px">
          <label style="font-size: x-large">干扰项生成</label>
        </div>
          <el-button style="float: right; background-color: white;border: 1px solid black" icon="el-icon-search" @click="getList">生成干扰项</el-button>
      </div>

      <el-table
        v-loading="loading"
        :data="list"
        border
        fit
        highlight-current-row
        :default-expand-all="true"
      >
        <el-table-column type="expand">
          <template slot-scope="{ row }">
            <el-table border :data="row.qList" style="width: 100%">
              <el-table-column label="问题 ID" align="center" width="85">
                <template v-slot="{ row }">
                  <span>{{ row.qId }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="修正的问题"
                width="328px"
                align="center"
                :show-overflow-tooltip="true"
              >
                <template v-slot="{ row }">
                  <span>{{ row.qTextCorrection }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="答案"
                width="150px"
                align="center"
                :show-overflow-tooltip="true"
              >
                <template v-slot="{ row }">
                  <span>{{ row.qAnswer }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="干扰项"
                width="300px"
                align="center"
                :show-overflow-tooltip="true"
              >
                <template v-slot="{ row }">
                    <el-tag v-for="(item,index) in row.qDistractorList" :key="index" style="margin-right: 4px">
                    {{item}}
                  </el-tag>
                  <!-- <span>{{ row.qAnswer }}</span> -->
                </template>
              </el-table-column>
              <el-table-column
                label="状态"
                class-name="status-col"
                width="95"
                align="center"
              >
                <template slot-scope="{ row }">
                  <div style="margin: 0 auto; text-align: center">
                    <el-tag :type="row.qIsChecked | qStatusFilter">
                      {{ row.qIsChecked ? "已标注" : "未标注" }}
                    </el-tag>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center" width="200">
                <template slot-scope="{ row, $index }">
                  <el-button
                    type="primary"
                    size="mini"
                    icon="el-icon-edit"
                    @click="handleEdit(row, $index)"
                  >
                    编辑
                  </el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    icon="el-icon-delete"
                    @click="handleDelete(row, $index)"
                  >
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>

        <el-table-column label="上下文 ID" prop="cId" align="center" width="85">
          <template slot-scope="{ row }">
            <span>{{ row.cId }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="上下文"
          align="center"
          :show-overflow-tooltip="true"
        >
          <template v-slot="{ row }">
            <span>{{ row.cText }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" class-name="status-col" width="120">
          <template slot-scope="{ row }">
            <div style="margin: 0 auto; text-align: center">
              <el-tag :type="row.allChecked | cStatusFilter">
                {{ row.allChecked ? "已全部标注" : "未全部标注" }}
              </el-tag>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <Pagination
      style="text-align: center"
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.pageNum"
      :limit.sync="listQuery.pageLimit"
      @pagination="getList"
    />

    <el-dialog title="问题展示" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :model="temp"
        label-position="left"
        label-width="100px"
        style="width: 400px; margin-left: 50px"
      >
        <el-form-item label="上下文">
          <el-input
            type="textarea"
            :autosize="true"
            :readonly="true"
            v-model="temp.cText"
            style="width: 500px"
          ></el-input>
        </el-form-item>
        <el-form-item label="纠错后问题">
          <el-input
            type="textarea"
            :autosize="true"
            :readonly="true"
            v-model="temp.qTextCorrection"
            style="width: 500px"
          ></el-input>
        </el-form-item>
        <el-form-item label="答案">
          <el-input
            type="textarea"
            :autosize="true"
            :readonly="true"
            v-model="temp.qAnswer"
            style="width: 500px"
          ></el-input>
        </el-form-item>
        <el-form-item label="干扰项">
          <el-input
            type="textarea"
            :autosize="true"
            :readonly="false"
            v-for="(item,index) in temp.qDistractorList"
            :key="index"
            v-model="temp.qDistractorList[index]"
            style="width: 500px"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleNo">取 消</el-button>
        <el-button type="primary" @click="handleYes">确 定</el-button>
      </div>
    </el-dialog>
    <div style="text-align: center">
      <el-button-group style="margin: 0 auto">
        <el-button type="info" icon="el-icon-arrow-left" @click="toContent"
          >上一步</el-button
        >
        <el-button type="primary" @click="toOutput"
          >下一步<i class="el-icon-arrow-right el-icon--right"></i
        ></el-button>
      </el-button-group>
    </div>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination";
import waves from "@/directive/waves";
import {
  getDistractors,
} from "@/api/distractorGeneration";
import cloneDeep from "lodash/cloneDeep";

export default {
  name: "QGEvaluation",
  components: { Pagination },
  directives: { waves },
  filters: {
    qStatusFilter(status) {
      return status ? "success" : "danger";
    },
    cStatusFilter(status) {
      return status ? "success" : "danger";
    },
  },
  data() {
    return {
      loading: false, // 是否显示加载
      algo: undefined, // 选择的算法
      algoOptions: [
        { key: "0", label: "无答案", value: 0 },
        { key: "1", label: "有答案", value: 1 },
      ], //模型选项
      finishLoadAlgo: false, // 判断是否加载完模型

      list: [
        // {
        //   cId: "1",
        //   cText:
        //     "Homework can put you in a badmood , and that might actually be a good thing. Researchers from the University of Plymouth in England doubted whether mood might affect the way kids learn. To find out the answer, they did two experiments with children.\nThe first experiment tested 30 kids. Someshapes  were hidden inside a different, larger picture. The kids had to find the small shapes while sitting in a room with either cheerful or sad music playing in the background. To test their mood, the scientists asked the kids to point to one of five faces, from happy to sad. Children who listened to cheerful music tended to point to the smiley faces while the others pointed to the unhappy ones. The researchers found that sad kids took at least a second less to find the small shapes. They also found an average of three or four more shapes.\nIn the second experiment, 61 children watched one of two scenes from a film. One scene was happy, and the other was sad. Just like in the first experiment, kids who saw the sad scene acted better compared to the others.\nThe researchers guessed that feeling down makes people more likely to focus on a problem or difficult situation. Not all scientists agree with them, however. Other studies argued that maybe, that cheerful music in the first experimentdistracted   kids from finding shapes.\nWhile scientists work on finding out the answers, it still might be wise to choose when to do your tasks according to your mood. After eating a delicious ice cream, for example, write an essay.",
        //   qList: [
        //     {
        //       qId: "1",
        //       qText: "Researchers did experiments on kids in order to find out   _  .",
        //       qAnswer: "B",
        //       qIschecked: true,
        //       qFluency: 1,
        //       qRelevance: 2,
        //       qReasonability: 3,
        //       qDifficulty: 2,
        //     },
        //     {
        //       qId: "2",
        //       qText: "The researchers found in the first experiment that   _  .",
        //       qAnswer: "in minim nisi cillum",
        //       qIschecked: false,
        //       qFluency: 1,
        //       qRelevance: 2,
        //       qReasonability: 3,
        //       qDifficulty: 2,
        //     },
        //     {
        //       qId: "3",
        //       qText: "What can we learn from the text?",
        //       qAnswer: "A",
        //       qIschecked: true,
        //       qFluency: 1,
        //       qRelevance: 2,
        //       qReasonability: 3,
        //       qDifficulty: 2,
        //     },
        //   ],
        // },
      ], // 表格数据
      total: 20,

      temp: {}, // 对话框数据
      dialogFormVisible: false, // 是否显示对话框

      listQuery: {
        pageNum: 0,
        pageLimit: 20,
      },
    };
  },
  methods: {
    async selectAlgo() {
      if (this.algo === undefined) {
        this.$message.warning("请先选择模型 ！");
        return;
      }
      this.loading = true;
      try {
        let res = await selectAlgo({ algorithm: this.algo });
        if (res.code === 200) {
          setTimeout(() => {
            this.$message.success("加载模型成功");
            this.loading = false;
            this.finishLoadAlgo = true;
          }, 300);
        } else {
          this.loading = false;
        }
      } catch (e) {
        this.loading = false;
        this.$message.error("加载模型失败");
      }
    },

    async getList() {
      // if(!this.finishLoadAlgo){
      //   this.$message.warning('请先加载模型 ！')
      //   return
      // }
      this.loading = true;
      try {
        let res = await getDistractors(this.listQuery);
        this.total = res.data.total;
        res.data.dataList.forEach((item) => {
          let index = item.qList.findIndex((i) => i.qIsChecked === false);
          item.allChecked = index === -1;
        });
        this.list = res.data.dataList;
        if (res.code === 200) {
          setTimeout(() => {
            this.$message.success("生成干扰项成功");
            this.loading = false;
          }, 300);
        } else {
          this.loading = false;
        }
      } catch (e) {
        this.loading = false;
        this.$message.error("生成干扰项失败");
      }
    },

    handleEdit(row, index) {
      this.dialogFormVisible = true;
      this.temp = cloneDeep(row);
      // console.log('handleedit', index, row)
      let index1 = this.list.findIndex((item) => {
        if (item.qList.length >= index + 1) {
          return row.qId === item.qList[index].qId;
        } else {
          return false;
        }
      });
      // console.log(index1)
      this.list[index1].cText &&
        this.$set(this.temp, "cText", this.list[index1].cText);
      this.list[index1].cId &&
        this.$set(this.temp, "cId", this.list[index1].cId);
    },

    async handleModifyStatus(row, status, index) {
      // console.log(status)
      row.qIsChecked = status;
      // console.log(row.qId, index)
      let index1 = this.list.findIndex((item) => {
        if (item.qList.length >= index + 1) {
          return row.qId === item.qList[index].qId;
        } else {
          return false;
        }
      });
      // console.log(index1)
      let index2 = this.list[index1].qList.findIndex((item) => {
        // console.log(item)
        return item.qIsChecked === false;
      });
      // console.log(index2)
      this.$set(this.list[index1], "allChecked", index2 === -1);
      try {
        // 发送请求
        this.listLoading = true;
        let res = await updateQustion(row);
        if (res.code === 200) {
          setTimeout(() => {
            this.listLoading = false;
            this.$message({
              message: `成功更新ID为${row.qId}的试题`,
              type: "success",
            });
          }, 300);
        } else {
          this.listLoading = false;
        }
      } catch (e) {
        this.listLoading = false;
        this.$message({
          message: `更新ID为${row.qId}的试题失败`,
          type: "error",
        });
      }
    },

    async handleDelete(row, index) {
      //弹框：messagebox的使用
      this.$confirm(`确定删除?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          //当用户点击确定按钮的时候会出发
          this.listLoading = true;
          let res = await deleteQuestion({ qId: row.qId });
          if (res.code === 200) {
            setTimeout(() => {
              this.$message({
                type: "success",
                message: `删除ID为${row.qId}的问题成功!`,
              });
              this.getList();
              this.listLoading = false;
            }, 300);
          }
        })
        .catch(() => {
          //当用户点击取消按钮的时候会触发
          this.$message({
            type: "info",
            message: `已取消删除ID为${row.qId}的问题`,
          });
          this.listLoading = false;
        });
    },

    handleYes() {
      let index1 = this.list.findIndex((item) => item.cId === this.temp.cId);
      let index2 = this.list[index1].qList.findIndex((item) => {
        return item.qId === this.temp.qId;
      });
      delete this.temp.cId;
      delete this.temp.cText;
      this.list[index1].qList.splice(index2, 1, this.temp);
      this.dialogFormVisible = false;
      this.handleModifyStatus(this.list[index1].qList[index2], true, index2);
      // this.$notify.info({
      //   title:'提示',
      //   message:'请点击 更新 按钮更新问题'
      // })
    },

    handleNo() {
      this.dialogFormVisible = false;
    },

    toOutput() {
      this.$router.push({ name: "OutputStorage" });
    },

    toContent(){
        this.$router.push({name:'QGEvaluation'})
      }
  },
};
</script>

<style scoped>
.link-type,
.link-type:focus {
  color: #337ab7;
  cursor: pointer;

  &:hover {
    color: rgb(32, 160, 255);
  }
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
}

.el-divider--vertical {
  height: 40px;
}

/deep/ .el-table__expanded-cell[class*="cell"] {
  padding: 0px 47px;
}
</style>
