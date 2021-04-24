<template>
  <div>
    <!-- 翻页标签 -->
    <el-row class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="this.currentPage"
        :page-size="this.pageSize"
        :total="this.cards.length"
        @current-change="pageChange"
      >
      </el-pagination>
    </el-row>
    <!-- v-for="item in cards" :key="item.id" -->
    <el-col :span="6" style="margin-top: 20px;">
      <el-card
        :body-style="{ padding: '0px' }"
        shadow="hover"
        style="height: 250px;"
      >
        <img
          src="https://images.pexels.com/photos/416988/pexels-photo-416988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          class="image"
        />
        <!-- 下面的介绍 -->
        <div style="">
          <div class="bottom clearfix">
            <p>产品型号：</p>
            <p>整机型号：</p>
            <p>生产厂家：</p>
          </div>
        </div>
      </el-card>
      
    </el-col>
    
  </div>
</template>

<script>
export default {
  name: "CaseCards",
  data() {
    return {
      cards: [],
      currentPage: 1,
      pageSize: 12
    };
  },
  methods: {
    pageChange(val) {
      this.currentPage = val;
    }
  }
};
</script>

<style scoped>
.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  /* display: table; */
  content: "";
}

.clearfix:after {
  clear: both;
}
p {
  font-size: 10px;
}
</style>
