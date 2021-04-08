<template>
  <div id='Setting'>
    <div id="add-backgroud" v-on:click="closeaddContent"></div>
    <div id="add-content" >
      <div id="add-content-close"><span class="icon-cha" v-on:click="closeaddContent"></span></div>
      <div class="add-content-title"><span>学号:</span></div>
      <input type="text" name="stuId" v-model="id">
      <div class="add-content-title"><span>姓名:</span></div>
      <input type="text" name="stuId" v-model="name">
      <div class="add-content-title"><span>分数:</span></div>
      <input type="text" name="stuId" v-model="mark">
      <button id="btn-tianjia" v-on:click="add()" type="button">添加</button>
      <button id="btn-gengxin" v-on:click="updateStu()" type="button">更新</button>
  </div>
    <div id="head">
      <div id="biaoti">操作</div>
    </div>
    <div id="content">
      <h1 id='title'>学生信息</h1>
      <div id='stuInformation'>
        <div id="addStu" class="iconfont icon-jia" v-on:click="addContent()"></div>
        <div id="list-title">
          <h3>学号</h3>
          <h3>姓名</h3>
          <h3>成绩</h3>
          <h3></h3>
          <h3></h3>
        </div>
        <!--eslint-disable-next-line-->
        <div class="list-content"  v-for="item in list">
          <div>
            <h3>{{item.id}}</h3>
            <h3>{{item.name}}</h3>
            <h3>{{item.mark}}</h3>
            <h3><button type="button" v-on:click="delStu(item.id)">删除</button></h3>
            <h3><button type="button" v-on:click="updateContent(item.id,item.name,item.mark)">修改</button></h3>
          </div>
        </div>
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
import axios from 'axios'

export default {
  mounted () {
    if (this.$route.path === '/Setting') {
      $('#bottom-foot').css('background-color', 'lightgray')
    } else {
      $('#bottom-foot').css('background-color', '')
    }
  },
  data () {
    axios.get('http://localhost:10200/src/http/mysql/Marklist')
      .then((response) => {
        this.$data.list = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    return {
      list: [],
      id: '',
      name: '',
      mark: '',
      add: function () {
        axios.post('http://localhost:10200/src/http/mysql/addStu',
          {id: this.id, name: this.name, mark: this.mark}).then(result => {
          if (result.status === 200) {
            console.log(result.status)
            this.id = ''
            this.name = ''
            this.mark = ''
            alert('数据添加成功')
          }
        })
          .catch((error) => {
            alert('数据添加失败' + error)
          })
      },
      closeaddContent: function () {
        $('#add-content').css('display', 'none')
        $('#add-backgroud').css('display', 'none')
        $('#btn-tianjia').css('display', 'none')
        $('#btn-gengxin').css('display', 'none')
      },
      addContent: function () {
        this.id = ''
        this.name = ''
        this.mark = ''
        $('#add-content').css('display', 'block')
        $('#add-backgroud').css('display', 'block')
        $('#btn-tianjia').css('display', 'inline')
      },
      delStu: function delStu (stuId) {
        axios.post('http://localhost:10200/src/http/mysql/delStu',
          {id: stuId}).then(result => {
          if (result.status === 200) {
            alert('删除数据成功')
            this.$router.go(0)
          }
        })
          .catch((error) => {
            alert('数据添加失败' + error)
          })
      },
      updateStu: function () {
        axios.post('http://localhost:10200/src/http/mysql/updateStu',
          {id: this.id, name: this.name, mark: this.mark}).then(result => {
          if (result.status === 200) {
            alert('更新数据成功')
            this.id = ''
            this.name = ''
            this.mark = ''
            this.$router.go(0)
          }
        })
          .catch((error) => {
            alert('数据更新失败' + error)
          })
      },
      updateContent: function (stuId, stuName, stuMark) {
        this.id = stuId
        this.name = stuName
        this.mark = stuMark
        $('#add-content').css('display', 'block')
        $('#add-backgroud').css('display', 'block')
        $('#btn-gengxin').css('display', 'inline')
      }
    }
  },
  name: 'Setting'
}
</script>

<style scoped>
  @import '../iconfont/bottom/iconfont.css';
  @import "../iconfont/contenet/Settingtianjia/iconfont.css";
  @import "../iconfont/contenet/Settingcha/iconfont.css";

  #add-backgroud{
    display: none;
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.1);
  }
  #biaoti{
    position: absolute;
    color: whitesmoke;
    width: 100%;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    border-bottom: 1px solid lightgray;
  }
  #add-content{
    display: none;
    border: 2px solid lightgray;
    text-align: center;
    position: absolute;
    margin: 50% 10%;
    z-index: 2;
    width: 80%;
    height: 30%;
    background-color: white;
    box-shadow:1px 5px 5px lightgray;
    border-radius: 10px;
  }
  #add-content input{
    width: 60%;
    margin: 0  20%;
    border: 2px solid black;
    border-radius: 5px;
  }
  .add-content-title{
    width: 60%;
    margin: 0  20%;
    font-weight: bold;
    font-size: 18px;
    text-align: left;
  }
  #add-content button{
    display: none;
    border: 1px solid cornflowerblue;
    color: whitesmoke;
    border-radius: 5px;
    background-color:cornflowerblue ;
    margin-top: 3%;
  }
  #add-content-close{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color:  cornflowerblue;
    text-align: right;
  }
  #add-content-close span{
    border-top-right-radius: 10px;
    background: rgba(0,0,0,0.1);
  }
  #head {
    background-color: cornflowerblue;
    width: 100%;
    height: 100px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  #title {
    text-align: center;
    font-family: YaHei;
  }
  #addStu{
    text-align: center;
    color: cornflowerblue;
    /*box-shadow: 0px 0px 1px lightgray;*/
    border-bottom: 1px solid lightgray;
  }

  #list-title{
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid lightgray;
  }

  #list-title h3{
    text-align: center;
    width: 20%;
  }
  .list-content{
    border-bottom:1px solid lightgray;
  }

  .list-content div{
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
  .list-content div h3{
    text-align: center;
    width: 20%;
  }
  .list-content div h3 button{
    background: cornflowerblue;
    color: whitesmoke;
    border: 2px solid cornflowerblue;
    border-radius: 5px;
  }
  #stuInformation{
    margin-bottom: 20%;
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
  #bottom-top a :active{
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
