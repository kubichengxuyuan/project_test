<template>
  <div id="menue">
    <div id="head">&nbsp;
      <div id="biaoti">主页</div>
      <div id="lunbo-title" style="position: absolute;color: whitesmoke;left: 13%;top: 3%">
        <h2>高校风采</h2>
      </div>
      <div id="lunbo-div">
        <div id="lunbo-wrapper">
          <div  class="lunbo-img">
            <img :src='pg0'>
          </div>
          <div  class="lunbo-img">
            <img :src='pg1'>
          </div>
          <div  class="lunbo-img">
            <img :src='pg2'>
          </div>
          <div  class="lunbo-img">
            <img :src='pg0'>
          </div>
        </div>
        <div id="pagination">
          <ul id="ul-1"></ul>
          <ul id="ul-2"></ul>
          <ul id="ul-3"></ul>
        </div>
      </div>
    </div>
    <div class="menueList">
      <div id="marklist">
        成绩表
      </div>
      <div class="marklist-content">
        <router-link to="/Marklist">
          成绩表
        </router-link>
      </div>
      <div class="marklist-content">
        <router-link to="/Passlist">
          及格表
        </router-link>
      </div>
      <div class="marklist-content">
        <router-link to="/Aclasslist">
          优等生表
        </router-link>
      </div>
      <div id="analysislist">
        分析表
      </div>
      <div class="analysislist-content">
        <router-link to="/Optionlist">
          选择题分析表
        </router-link>
      </div>
      <div class="analysislist-content">
        <router-link to="/Analysis">
          分析表
        </router-link>
      </div>
      <div class="analysislist-content">
        <router-link to="/markTotal">
          各阶段分析表
        </router-link>
      </div>
    </div>
    <div id="bottom">
        <div id="bottom-top">
          <router-link  to='/Menue'>
            <div id="look" class="iconfont icon-cangpeitubiao_chakan">
            </div>
            <div class="bottom-content">查看</div>
          </router-link>
        </div>
        <div id="bottom-foot">
          <router-link to='/Setting'>
            <div id="play" class="iconfont iconfont icon-caozuo"></div>
            <div class="bottom-content">操作</div>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
import lunbo1 from '../assets/gaoxiao1.jpg'
import lunbo2 from '../assets/gaoxiao2.jpg'
import lunbo3 from '../assets/gaoxiao3.jpg'
export default {
  name: 'menue',
  data () {
    return {
      pg0: lunbo1,
      pg1: lunbo2,
      pg2: lunbo3,
      sta: null
    }
  },
  mounted () {
    const sta = (function () {
      let step = 0
      let interval = 2000
      let ele = '#ul-'
      function autoMove () {
        step++
        if (step >= 4) {
          $(ele + (step - 3)).css('background-color', 'cornflowerblue')
          $('#lunbo-wrapper').css('transitionDuration', '0ms')
          $('#lunbo-wrapper').css('left', '0px')
          step = 0
        } else {
          if (step === 3) {
            $(ele + 1).css('background-color', 'cornflowerblue')
            $(ele + 3).css('background-color', 'whitesmoke')
          } else {
            $(ele + (step + 2)).css('background-color', 'whitesmoke')
            $(ele + (step)).css('background-color', 'whitesmoke')
            $(ele + (step + 1)).css('background-color', 'cornflowerblue')
          }
          $('#lunbo-wrapper').css('transitionDuration', '500ms')
          $('#lunbo-wrapper').css('left', (-step * $('.lunbo-img').width()) + 'px')
        }
      }
      let sta = setInterval(autoMove, interval)
      return sta
    })()
    $('#marklist').on('click', function () {
      $('.marklist-content').slideToggle()
    })
    $('#analysislist').on('click', function () {
      $('.analysislist-content').slideToggle()
    })
    if (this.$route.path === '/Menue') {
      $('#bottom-top').css('background-color', 'lightgray')
    } else {
      $('#bottom-top').css('background-color', '')
    }
    this.$data.sta = sta
  },
  beforeDestroy () {
    clearInterval(this.sta)
  }
}
</script>
<style scoped>
  @import '../iconfont/bottom/iconfont.css';

  #biaoti{
    font-size: 25px;
    font-weight: bold;
    border-bottom: 1px solid lightgray;
    position: absolute;
    color: whitesmoke;
    width: 100%;
    text-align: center;
  }
  #lunbo-div{
    position: relative;
    margin: 20% auto;
    height: 200%;
    width: 80%;
    border-radius: 10px;
    /*border: lightgray solid 1px;*/
    box-shadow:1px 1px 1px lightgray;
    box-sizing: border-box;
    overflow: hidden;
    user-select: none;
  }
  #lunbo-wrapper{
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: flex-start;
    transition: left 300ms linear 0ms;
    box-sizing: border-box;
    width: 400%;
    height: 100%;

  }
  #lunbo-wrapper  .lunbo-img {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .lunbo-img img {
    width: 100%;
    height: 100%;
  }
  #pagination{
    color: whitesmoke;
    width: 100%;
    height: 10%;
    position: absolute;
    top:80%;
    z-index: 2;
    display: flex;
    justify-content: center;
  }
  #pagination ul{
    margin-right: 5%;
    background-color: whitesmoke;
    width: 5%;
    height: 20%;
  }
  #pagination #ul-1 {
    background-color: cornflowerblue;
  }

  #menue {
    height: 100%;
    width: 100%;
  }

  .menueList {
    margin-top: 50%;
    width: 100%;
    height: 100%
  }

  #marklist,#analysislist{
    background-color: whitesmoke;
  }
  .menueList div{
    font-family: "Microsoft YaHei UI Light";
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    height: 40px;
    width: 100%;
    border-top: lightgrey  solid 1px;
  }
  .marklist-content{
    display: none;
  }

  .analysislist-content{
    display: none;
  }

  .menueList div a{
    color: black;
    text-decoration: none;
    height: 40px;
    width: 100%;
  }

  #head {
    background-color: cornflowerblue;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  #bottom {
    display: flex;
    justify-content: space-between;
    background-color: whitesmoke;
    margin-left: 0px;
    margin-right: 0px;
    position: fixed;
    width: 100%;
    height: 10%;
    bottom: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  #bottom-foot, #bottom-top{
    text-align: center;
    color: black;
    justify-content: center;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  #bottom-top {
    border-bottom-left-radius: 20px;
  }
  #bottom-foot{
    border-bottom-right-radius: 20px;
  }

  #bottom-top a {
     color: black;
     -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }
  #bottom-foot a {
    color: black;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }
  #bottom-foot a :active{
    background-color: rgba(0,0,0,0);
  }
  #bottom-foot div, #bottom-top div {
    justify-content: center;
    display: flex;
  }
  #play , #look {
    line-height: 50px;
  }

  .bottom-content{
    font-weight: bold;
    font-family: "Microsoft YaHei UI Light";
    line-height: 10px;
  }

</style>
