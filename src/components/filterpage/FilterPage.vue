<template>
  <el-container class="filter-container">
    <el-header height="100px">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside style="width: 25vw;height=300px">
        <aside-menu></aside-menu>
      </el-aside>
      <el-main>
        <case-show></case-show>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '@/components/filterpage/Header'
import AsideMenu from '@/components/filterpage/AsideMenu'
import CaseShow from './CaseShow'
export default {
  name: "FilterPage",
  components: {
    Header,
    AsideMenu,
    CaseShow
  }
};
</script>

<style scoped>
.filter{
  height:100%;
}
.el-header, .el-footer {
    background-color: #ceddfc;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #eeeeee;
    height:100%vh
    /* color: #333;
    text-align: center;
    line-height: 160px; */
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

