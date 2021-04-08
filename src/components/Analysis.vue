<template>
<div id='analysis'>
  <div id="head">
    <router-link class="icon-fanhui" to="/Menue"></router-link>
  </div>
  <div id="title">
    <h1>三年级二班成绩分析表</h1>
  </div>
  <div class="icon-qiehuan" style="text-align: center;margin-bottom: 5%" v-on:click="qiehuan"></div>
  <div class='list-content'>
    <div>
      <h3>平均分</h3>
    </div>
    <div>
      <h3>{{average.toFixed(2)}}</h3>
    </div>
  </div>
  <div class='list-content'>
    <div>
      <h3>合格率</h3>
    </div>
    <div>
      <h3>{{pass.toFixed(2)}}</h3>
    </div>
  </div>
  <div class='list-content'>
    <div>
      <h3>优秀率</h3>
    </div>
    <div>
      <h3>{{aclass.toFixed(2)}}</h3>
    </div>
  </div>
  <div class="tongjitu">
    <div class="tongjitu-tile"><h2>统计图</h2></div>
    <div class="row" >
      <div class="row-biaoqian" >
        <span>100</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>60</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>0</span>
      </div>
      <div class="row-content" >
        <div class="tongji-tiao">
          <div  :style="{height:(average+'%')}">{{average}}</div>
        </div>
        <div class="tongji-tiao">
          <div  :style="{height:(topmark+'%')}">{{topmark}}</div>
        </div>
        <div class="tongji-tiao">
          <div  :style="{height:(lowmark+'%')}">{{lowmark}}</div>
        </div>
      </div>
    </div>
    <div class="cru">
      <div class="cru-title" >&nbsp;</div>
      <div class="tongji-tihao" >
        <div>平均分</div>
        <div>最高分</div>
        <div>最低分</div>
      </div>
    </div>

    <div class="tongjitu">
      <div class="tongjitu-tile"><h2>&nbsp;</h2></div>
      <div class="row" >
        <div class="row-biaoqian" >
          <span>100%</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>60%</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>0%</span>
        </div>
        <div class="row-content" >
          <div class="tongji-tiao">
            <div  :style="{height:(pass*100+'%')}">{{pass.toFixed(2)*100}}%</div>
          </div>
          <div class="tongji-tiao">
            <div  :style="{height:(aclass*100+'%')}">{{aclass.toFixed(2)*100}}%</div>
          </div>
        </div>
        </div>
      </div>
      <div class="cru">
        <div class="cru-title">&nbsp;</div>
        <div class="tongji-tihao" >
          <div>及格率</div>
          <div>优秀率</div>
        </div>
      </div>
  </div>
  <div id="bottom"><h4>&nbsp;</h4></div>
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import $ from "jquery";

export default {
  data () {
    axios.get('http://localhost:10200/src/http/mysql/Marklist')
      .then((response) => {
        let tmark = response.data[0].mark, lmark = response.data[0].mark
        for(var i=0;i<response.data.length;i++){
          this.$data.average=this.$data.average+response.data[i].mark
          if (response.data[i].mark > tmark){
            tmark = response.data[i].mark
          }
          if (response.data[i].mark < lmark){
            lmark = response.data[i].mark
          }
          if (response.data[i].mark >= 60){
            this.$data.pass++
          }
          if(response.data[i].mark >= 90){
            this.$data.aclass++
          }
        }
        this.$data.topmark = tmark
        this.$data.lowmark = lmark
        this.$data.average = this.$data.average / response.data.length
        this.$data.pass = this.$data.pass / response.data.length
        this.$data.aclass = this.$data.aclass / response.data.length
      })
      .catch((error) => {
        console.log(error)
      })
    return{
      average: 0.00,
      pass: 0.00,
      aclass: 0.00,
      topmark: 0.00,
      lowmark: 0.00,
      qiehuan: function () {
        $('.list-content').toggle()
        $('.tongjitu').toggle()
      }
    }
  },
  name: 'Analysis'
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
  .list-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  .list-content div{
    justify-content:center;
    display: flex;
    flex: 1;
    border: black solid 1px;
  }
  .tongjitu{
    display: none;
  }
  .tongjitu-tile{
    text-align: center;
  }
  .row{
    display: flex;
  }
  .row-biaoqian{
    min-width: 43px;
    display: flex;
    flex-direction: column;
    border-right: 3px solid gray;
  }
  .row-content{
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
    text-align: center;
    min-width: 43px;
    background-color: cornflowerblue;
  }
  .cru{
    display: flex;
  }
  .cru-title{
    min-width: 43px;
  }
  .tongji-tihao {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .tongji-tihao div{
    width: 43px;
    text-align: center;
  }
  #bottom{
  }
</style>
