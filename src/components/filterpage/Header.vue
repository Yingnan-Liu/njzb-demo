<template>
  <div id="logo">
    <span>农机装备智能化设计知识服务系统</span>
    <p>
      KNOWLEDGE SERVICE SYSTEM FOR ARGRICUTURAL EQUIPMENT INTELLIGENT DESIGN
    </p>
     <search-bar @onSearch="searchResult" ref="searchBar"></search-bar>
  </div>
</template>

<script>
import SearchBar from '@/components/filterpage/SearchBar'
export default {
  name:'Header',
  components:{
    SearchBar
  },
  methods:{
    searchResult() {
      var _this = this;
      this.$axios
        .get("/cases/search?keywords=" + this.$refs.searchBar.keywords, {})
        .then(resp => {
          _this.cases = resp.data;
        });
    },
  }

};
</script>

<style scoped>
#logo span {
  position: absolute;
  padding-top: 5px;
  left: 2%;
  font-size: 1.8em;
  font-weight: bold;
  font-family: serif;
  pointer-events: none;
  color: #409eff;
  display: flex;
}

#logo p {
  position: absolute;
  padding-top: 35px;
  left: 2%;
  font-size: 10px;
}

</style>
