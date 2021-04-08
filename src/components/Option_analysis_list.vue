<template>
  <div id="Optionlist">
    <div id="head">
      <router-link class="icon-fanhui" to="/Menue"></router-link>
    </div>
    <div id="title">
      <h1>三年级二班选择题分析表</h1>
    </div>
    <div class="icon-qiehuan" style="text-align: center" v-on:click="qiehuan"></div>
    <div id="test-list">
      <h3>题号</h3>
      <h3>人数</h3>
      <h3>准确率</h3>
    </div>
    <!--eslint-disable-next-line-->
    <div class="list-content"  v-for="item in list">
      <div>
        <h4>{{item.title}}</h4>
      </div>
      <div>
        <h4>{{item.rcount}}</h4>
      </div>
      <div>
        <h4>{{(item.rcount/numberStu[0]).toFixed(2)}}</h4>
      </div>
    </div>
    <div id="tongjitu">
      <div id="tongjitu-tile"><h2>统计图</h2></div>
      <div id="row" >
        <div id="row-biaoqian" >
          <span>100%</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>50%</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>0%</span>
        </div>
        <div id="row-content" >
          <!--eslint-disable-next-line-->
          <div class="tongji-tiao" v-for="index in list">
            <div  :style="{height:((index.rcount/numberStu[0])*100)+'%'}">{{(index.rcount/numberStu[0]*100).toFixed()}}%</div>
          </div>
        </div>
        </div>
      <div id="cru">
        <div id="cru-title" >题号</div>
        <div class="tongji-tihao" >
        <!--eslint-disable-next-line-->
          <div  v-for="index0 in list">{{index0.title}}</div>
        </div>
      </div>
    </div>
    <div id="bottom">&nbsp;</div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import $ from 'jquery'

export default {
  data () {
    axios.get('http://localhost:10200/src/http/mysql/Optionlist')
      .then((response) => {
        this.$data.list = response.data
        })
      .catch((error) => {
        console.log(error)
      })
    axios.get('http://localhost:10200/src/http/mysql/numberStu')
      .then((response) => {
        this.$data.numberStu = response.data[0]
        this.$data.numberStu = Object.values(this.$data.numberStu)
      })
      .catch((error) => {
        console.log(error)
      })

    return{
      list: [],
      numberStu: [],
      qiehuan: function () {
          $('#tongjitu').toggle()
          $('#test-list').toggle()
          $('.list-content').toggle()
      }
    }
  },
  name: 'Option_analysis_list'
}
</script>

<style scoped>
  @import "../iconfont/head/marklist/iconfont.css";
  @import "../iconfont/qiehuan/iconfont.css";
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

  #test-list {
    width: 100%;
    height: 100%;
    display: flex;
  }

  #test-list h3 {
    justify-content:center;
    display: flex;
    flex: 1;
  }

  .list-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .list-content div {
    justify-content: center;
    display: flex;
    flex: 1;
    border: black solid 1px;
  }
  #tongjitu{
    display: none;
  }
  #tongjitu-tile{
    text-align: center;
  }
  #row{
    display: flex;
  }
  #row-biaoqian{
    display: flex;
    flex-direction: column;
    border-right: 3px solid gray;
  }
  #row-content{
    height: 210px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 3px solid gray;
  }
  .tongji-tiao{
    display: flex;
    flex-direction: column-reverse;
  }
  .tongji-tiao div{
    min-width: 43px;
    background-color: cornflowerblue;
  }
  #cru{
    display: flex;
  }
  #cru-title{
    width: 50px;
  }
  .tongji-tihao {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .tongji-tihao div{
    min-width: 43px;
    text-align: center;
  }
  #bottom{
  }

</style>
