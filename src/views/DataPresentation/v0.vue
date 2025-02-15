<template>
  <div class="app-container">
    <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="Question" value="1"></el-option>
        <el-option label="Title" value="2"></el-option>
        <el-option label="Id" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>

    <!--
    @filter-change:当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。
    v-loading="listLoading"，element-loading-text="Loading":用于实现正在加载的效果-->
    <el-table
      :data="list"
      v-loading="listLoading"
      element-loading-text="Loading"
      fit
      highlight-current-row
      @filter-change="filterChange"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" label-width="90px" inline class="table-expand">
            <el-form-item label="ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="Context">
              <span>{{ props.row.reference.text }}</span>
            </el-form-item>
            <el-form-item label="Answer">
              <span>{{ props.row.answerText }}</span>
            </el-form-item>
            <el-form-item label="Question">
              <span>{{ props.row.text }}</span>
            </el-form-item>
            <el-form-item label="Status">
              <span>{{ props.row.checkedTimes > 0 ? 'checked' : 'unchecked' }}</span>
            </el-form-item>
            <div style="border:10px black !important">
              <el-form-item label="Fluency">
                <el-rate
                  v-model="props.row.fluency"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </el-form-item>
              <el-form-item label="Reasonable">
                <el-rate
                  v-model="props.row.reasonable"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </el-form-item>
              <el-form-item label="Relevance">
                <el-rate
                  v-model="props.row.relevance"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </el-form-item>
              <el-form-item label="Difficulty">
                <el-rate
                  v-model="props.row.difficulty"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </el-form-item>
              <el-form-item label="Score">
                <el-rate
                  v-model="props.row.score"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </el-form-item>
            </div>
            <el-form-item label="Distractors">
              <span>{{ props.row.distractors }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="Question" align="center">
        <template slot-scope="scope">
          {{ scope.row.text }}
        </template>
      </el-table-column>
      <el-table-column label="Answer" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.answerText }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Title" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.reference.title }}
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="110" align="center"
        :filters="[{ text: 'checked', value: 1 }, { text: 'unchecked', value: 0 }]"
        :filter-multiple="false"
        :column-key="'status'"
        :filter-method="filterHandler">
        <template slot-scope="scope">
          <!-- <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag> -->
          <el-tag :type="scope.row.checkedTimes === 0 ? 'primary' : 'success'" disable-transitions>{{ scope.row.checkedTimes > 0 ? 'checked' : 'unchecked' }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="Difficulty" width="110" align="center"
        :filters="[{ text: '简单', value: 0 }, { text: '中等', value: 1 }, { text: '困难', value: 2 }]"
        :filter-multiple="true"
        :column-key="'difficulty'">
        <template slot-scope="scope">
          <!-- {{ scope.row.difficulty }} -->
          <el-tag
          :type="getDifficultyTag(scope.row.difficulty).tag"
          disable-transitions>{{getDifficultyTag(scope.row.difficulty).label}}</el-tag>
        </template>
      </el-table-column>
    </el-table>

     <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pageNumber"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="totalElements">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      totalElements: 0,
      totalPages: 0,
      pageSize: 10,
      pageNumber: 1,
      listLoading: true,
      select: '',
      input: '',
      globalStatus: -1,
      globalDifficulty: []
    }
  },
  created() {
    this.fetchData(this.pageNumber)
  },

  methods: {
    fetchData(val) {
      this.listLoading = true
      getList({'pageNumber': val-1}).then(response => {
        this.list = response.data.content
        this.totalPages = response.data.totalPages
        this.totalElements = response.data.totalElements
        this.listLoading = false
        console.log(this.list[0])
        // 修改分数到0～5之间
        this.shrinkRate(this.list);
      })
    },

    shrinkRate(list) {
      for (var i = 0; i < list.length; i++) {
        list[i].fluency /= 10;
        list[i].reasonable /= 10;
        list[i].relevance /= 10;
      }
    },

    filterStatus(value, row) {
      // console.log(row.checkedTimes);
      return row.checkedTimes == value;
    },

    // column的key是columnKey，对应的 value 为用户选择的筛选条件的数组filters。
    filterChange(column) {
      // console.log(column)
      if (typeof(column.status) != 'undefined')
        this.globalStatus = column.status.length == 0 ? -1 : column.status[0];
      else if (typeof(column.difficulty) != 'undefined')
        this.globalDifficulty = column.difficulty;
      console.log(this.globalStatus + " " + this.globalDifficulty);
    },
    filterHandler(value, row, column) {
      // console.log(value, row, column)
      return row.checkedTimes === value;
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.fetchData(val);
      this.pageNumber = val;
    },

    //保留n位小数
    roundFun(value, n) {
      return Math.round(value*Math.pow(10,n))/Math.pow(10,n);
    },

    getDifficultyTag(difficulty) {
      switch (difficulty) {
        case 0:
          return {
            label:'简单',
            tag: 'success'
          };
        case 1:
          return {
            label:'中等',
            tag: 'warning'
          };
        case 2:
          return {
            label:'困难',
            tag: 'danger'
          };
        default:
          return {
            label:'未评',
            tag: 'info'
          };
      }
    }
  }
}
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
