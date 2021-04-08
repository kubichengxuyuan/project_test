<template>
  <div id="markTotal">
    <div id="head">
      <router-link class="icon-fanhui" to="/Menue"></router-link>
    </div>
    <div id="cru-row-title">
      <div id="cru-title" >
        <span>&nbsp;</span>
        <span>0</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>{{(num/2).toFixed()}}</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>{{num}}</span>
      </div>
      <div id="row-title">
        <span>80-100分</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>60-80分</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>0-60分</span>
      </div>
    </div>
    <div id="row-content" >
      <div class="row-tiao" :style="{width:(a/num)*100 + '%'}">{{a}}人</div>
      <div class="row-tiao" :style="{width:(b/num)*100 + '%'}">{{b}}人</div>
      <div class="row-tiao" :style="{width:(c/num)*100 + '%'}">{{c}}人</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'

export default {
  data () {
    axios.get('http://localhost:10200/src/http/mysql/Marklist')
      .then((response) => {
        let a = 0
        let b = 0
        let c = 0
        this.$data.list = response.data
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].mark >= 80) {
            a++
          } else if (response.data[i].mark >= 60) {
            b++
          } else {
            c++
          }
        }
        this.$data.a = a
        this.$data.b = b
        this.$data.c = c
        this.$data.num = response.data.length
      })
      .catch((error) => {
        console.log(error)
      })
    return {
      list: [],
      a: 0,
      b: 0,
      c: 0,
      num: 0
    }
  },
  mounted () {
    (function () {
      $('#cru-row-title').fadeIn(3000)
      function autoMove () {
        $('.row-tiao').css('transitionDuration', '5000ms')
        $('.row-tiao').css('left', '0')
      }
      setTimeout(autoMove, 1000)
    })()
  },
  name: 'markTotal'
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
  #cru-row-title{
    display: none;
  }
  #cru-title{
    position: absolute;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    border-bottom: 3px solid lightgray;
  }
  #cru-title span{
    font-size: 20px;
    min-width: 10%;
  }
  #row-title{
    display: none;
    position: absolute;
    top: 25%;
    width: 12%;
    height: 63%;
    border-right: 3px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #row-title span{
    font-size: 20px;
    min-width: 10%;
  }
  #row-content{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 88%;
    height: 63%;
    top: 25%;
    left: 12%;
    transition: left 300ms linear 0ms;
    border-top: 3px solid lightgray;
    border-left: 3px solid lightgray;
    box-sizing: border-box;
    overflow: hidden;
  }
  .row-tiao{
    min-height: 8%;
    position: relative;
    text-align: right;
    font-size: 20px;
    left: -100%;
    background-color: cornflowerblue;
  }

</style>
