<template>
  <div>
    <el-input
      placeholder="快速搜索..."
      prefix-icon="el-icon-search"
      size="medium"
      class="searchbar"
      v-model="keywords"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  name: "SearchBar.vue",
  data() {
    return {
      keywords:[]
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
.searchbar{
  width: 300px;
  position:absolute;
  margin-top: 12px;
  right: 5%;
}
</style>
