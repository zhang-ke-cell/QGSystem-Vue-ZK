<template>
  <div class="app-main">
    <!-- <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="Question" value="1"></el-option>
        <el-option label="Title" value="2"></el-option>
        <el-option label="Id" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input> -->
    <!--
      @filter-change:当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。
      v-loading="listLoading"，element-loading-text="Loading":在接口为请求到数据之前，显示加载中，直到请求到数据后消失-->
    <el-table :data="tableData" fit highlight-current-row>
      <el-table-column type="expand">
        <template v-slot="props">
          <el-form
            label-position="left"
            label-width="90px"
            inline
            class="table-expand"
          >
            <el-form-item label="问题ID">
              <span>{{ props.row.reference[0].id }}</span>
            </el-form-item>

            <el-form-item label="问题">
              <span>{{ props.row.reference[0].text }}</span>
            </el-form-item>

            <el-form-item label="答案">
              <span>{{ props.row.reference[0].answerText }}</span>
            </el-form-item>

            <!-- <el-form-item label="Context">
              <span>{{ props.row.reference.text }}</span>
            </el-form-item> -->

            <!-- <el-form-item label="Status">
              <span>{{ props.row.checkedTimes > 0 ? 'checked' : 'unchecked' }}</span>
            </el-form-item> -->

            <el-form-item label="干扰项A">
              <el-input
                v-model="props.row.reference[0].distractor1"
                style="width: 400px"
              ></el-input>
            </el-form-item>

            <el-form-item label="干扰项B">
              <el-input
                v-model="props.row.reference[0].distractor2"
                style="width: 400px"
              ></el-input>
            </el-form-item>

            <el-form-item label="干扰项C">
              <el-input
                v-model="props.row.reference[0].distractor3"
                style="width: 400px"
              ></el-input>
            </el-form-item>

            <el-form-item label="干扰项D">
              <el-input
                v-model="props.row.reference[0].distractor4"
                style="width: 400px"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-divider></el-divider>
          <el-form
            label-position="left"
            label-width="90px"
            inline
            class="table-expand"
          >
            <el-form-item label="问题ID">
              <span>{{ props.row.reference[1].id }}</span>
            </el-form-item>

            <el-form-item label="问题">
              <span>{{ props.row.reference[1].text }}</span>
            </el-form-item>

            <el-form-item label="答案">
              <span>{{ props.row.reference[1].answerText }}</span>
            </el-form-item>

            <!-- <el-form-item label="Context">
              <span>{{ props.row.reference.text }}</span>
            </el-form-item> -->

            <!-- <el-form-item label="Status">
              <span>{{ props.row.checkedTimes > 0 ? 'checked' : 'unchecked' }}</span>
            </el-form-item> -->

            <el-form-item label="干扰项A">
              <el-input
                v-model="props.row.reference[1].distractor1"
                style="width: 400px"
              ></el-input>
            </el-form-item>

            <el-form-item label="干扰项B">
              <el-input
                v-model="props.row.reference[1].distractor2"
                style="width: 400px"
              ></el-input>
            </el-form-item>

            <el-form-item label="干扰项C">
              <el-input
                v-model="props.row.reference[1].distractor3"
                style="width: 400px"
              ></el-input>
            </el-form-item>

            <el-form-item label="干扰项D">
              <el-input
                v-model="props.row.reference[1].distractor4"
                style="width: 400px"
              ></el-input>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column label="上下文ID" align="center" width="95">
        <template v-slot="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>

      <el-table-column label="上下文" align="center">
        <template slot-scope="scope">
          {{ scope.row.text }}
        </template>
      </el-table-column>

      <!-- <el-table-column label="答案" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.answerText }}</span>
        </template>
      </el-table-column> -->

      <!-- <el-table-column label="Title" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.reference.title }}
        </template>
      </el-table-column> -->
    </el-table>
    <div style="text-align: center; margin-top: 20px">
      <el-button-group style="margin: 0 auto">
        <el-button type="info" icon="el-icon-arrow-left" @click="toQG"
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
export default {
  name: "DistractorGeneration",
  data() {
    return {
      select: "",
      input: "",

      //table相关参数
      listLoading: true,
      list: null,
      tableData: [
        {
          id: 1,
          text: "Homework can put you in a badmood , and that might actually be a good thing. Researchers from the University of Plymouth in England doubted whether mood might affect the way kids learn. To find out the answer, they did two experiments with children.\nThe first experiment tested 30 kids. Someshapes  were hidden inside a different, larger picture. The kids had to find the small shapes while sitting in a room with either cheerful or sad music playing in the background. To test their mood, the scientists asked the kids to point to one of five faces, from happy to sad. Children who listened to cheerful music tended to point to the smiley faces while the others pointed to the unhappy ones. The researchers found that sad kids took at least a second less to find the small shapes. They also found an average of three or four more shapes.\nIn the second experiment, 61 children watched one of two scenes from a film. One scene was happy, and the other was sad. Just like in the first experiment, kids who saw the sad scene acted better compared to the others.\nThe researchers guessed that feeling down makes people more likely to focus on a problem or difficult situation. Not all scientists agree with them, however. Other studies argued that maybe, that cheerful music in the first experimentdistracted   kids from finding shapes.\nWhile scientists work on finding out the answers, it still might be wise to choose when to do your tasks according to your mood. After eating a delicious ice cream, for example, write an essay.",
          reference: [
            {
              id: 1,
              text: "Researchers did experiments on kids in order to find out   _  .",
              title: null,
              answerStart: -1,
              answerText: "B",
              distractor1: "how they really feel when they are learning",
              distractor2: "whether mood affects their learning ability",
              distractor3: "what methods are easy for kids to learn",
              distractor4: "he relationship between sadness and happiness",
            },
            {
              id: 2,
              text: "The researchers found in the first experiment that   _  .",
              title: null,
              answerStart: -1,
              answerText: "D",
              distractor1:
                "kids who listened to happy music turned out to be energetic",
              distractor2:
                "kids who listened to sad music liked to choose smiley faces",
              distractor3:
                "kids worked harder in the background of happy music",
              distractor4:
                "sad music helped kids find out small shapes quickly",
            },
            {
              id: 3,
              text: "What can we learn from the text?",
              title: null,
              answerStart: -1,
              answerText: "A",
              distractor1: "The researchers will continue to do experiments.",
              distractor2: "The researchers have found a clear answer.",
              distractor3: "The experiments are popular among kids.",
              distractor4: "Kids change their feelings more easily.",
            },
          ],
          checkedTimes: 0,
          score: 0,
          isDeleted: 0,
          userId: null,
        },
      ],
    };
  },

  methods: {
    toOutput() {
      this.$router.push({ name: "OutputStorage" });
    },
    toQG() {
      this.$router.push({ name: "QGEvaluation" });
    },
  },
};
</script>

<style scoped>
.table-expand {
  font-size: 0;
}

.table-expand label {
  width: 90px;
  color: #99a9bf;
}

.table-expand .el-form-item {
  /* margin-right: 0; */
  margin-bottom: 0;
  width: 100%;
}

.block {
  text-align: center;
}

.el-rate {
  margin-top: 10px;
}

.el-select {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
