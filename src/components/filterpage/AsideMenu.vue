<template>
  <div id="selector">
    <el-form ref="form" :model="selector" label-width="100px">
      <el-form-item label="机器类型：">
        <el-radio-group v-model="selector.machine">
          <el-radio-button label="拖拉机"></el-radio-button>
          <el-radio-button label="联合收割机"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="整机用途：">
        <el-select v-model="selector.purpose" placeholder="下拉选择">
          <el-option label="农业用途" value="1"></el-option>
          <el-option label="工业用途" value="2"></el-option>
          <el-option label="低湿地用途" value="3"></el-option>
          <el-option label="超湿地用途" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="驱动形式：">
        <el-select v-model="selector.drive" placeholder="下拉选择">
          <el-option label="农业用途" value="1"></el-option>
          <el-option label="工业用途" value="2"></el-option>
          <el-option label="低湿地用途" value="3"></el-option>
          <el-option label="超湿地用途" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="转向形式：">
        <el-select v-model="selector.diversion" placeholder="下拉选择">
          <el-option label="农业用途" value="1"></el-option>
          <el-option label="工业用途" value="2"></el-option>
          <el-option label="低湿地用途" value="3"></el-option>
          <el-option label="超湿地用途" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="驾驶室：">
        <el-radio-group v-model="selector.cage">
          <el-radio label="true">有</el-radio>
          <el-radio label="false">无</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">开始智能推荐</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AsideMenu",
  data() {
    return {
      selector: {
        machine: "拖拉机",
        purpose: "",
        drive: "",
        diversion: "",
        cage: ""
      }
    }
  },
  methods:{
      onSubmit(){
        //   console.log(this.selector.drive)
        // axios post提交到后台
      }
  }
};
</script>

<style scoped>
#selector {
  margin: 20px 20px;
}
</style>
