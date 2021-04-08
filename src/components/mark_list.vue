<template>
  <div id="mark_list">
    <div id="head">
      <router-link class="icon-fanhui" to="/Menue"></router-link>
    </div>
    <div id="title">
      <h1>三年级二班成绩表</h1>
    </div>
    <div id="test_list">
      <h3>学号</h3>
      <h3>姓名</h3>
      <h3>成绩</h3>
    </div>
    <!--eslint-disable-next-line-->
    <div class="list_content"  v-for="item in list">
      <div>
        <h4>{{item.id}}</h4>
      </div>
      <div>
        <h4>{{item.name}}</h4>
      </div>
      <div>
        <h4>{{item.mark}}</h4>
      </div>
    </div>

    <div id="bottom">&nbsp;</div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  data () {
    axios.get('http://localhost:10200/src/http/mysql/Marklist')
      .then((response) => {
        this.$data.list = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    return{
      list: []
    }
  },
  name: 'mark_list'
}
</script>

<style scoped>
  @import "../iconfont/head/marklist/iconfont.css";
  #head {
    background-color: cornflowerblue;
    width: 100%;
    height: 100px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  #head a{
    position: absolute;
    color: whitesmoke;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color:cornflowerblue;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }
  #title {
    height: 100px;
    width: 100%;
    text-align: center;
    line-height: 100px;
  }

  #test_list {
    width: 100%;
    height: 100%;
    display: flex;
  }

  #test_list h3 {
    justify-content:center;
    display: flex;
    flex: 1;
  }

  .list_content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .list_content div{
    justify-content:center;
    display: flex;
    flex: 1;
    border: black solid 1px;
  }
  #bottom {
  }
</style>
