<template>
  <div id="login">
    <img src="../assets/logo.png" style="height: 100px;width: 100px">
    <div id="d1">
      <form id="form1">
        <input type="text" name="username" id="username" value="请输入你的账号" v-on:click="Remove()"/>
        <br/>
        <input type="password" name="userpwd" id="userpwd"/>
        <br/>
        <router-link id="sub1" tag="a" to='/Menue' replace>
          Login
        </router-link>
      </form>
    </div>
    <div id="bottom">
      <router-link to="#">
        忘记密码
      </router-link>
      <p class="bottom-p">|</p>
      <router-link to="#">
        用户注册
      </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'login',
  data(){
    return{
     Remove: function Remove() {
      if (document.getElementById('username').value === '请输入你的账号') {
        document.getElementById('username').value = ''
      }
     }
    }
  }
}
</script>

<style scoped>
  #login {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #d1 {
    margin: 50px auto;
    text-align: center;
    font-size: 30px;
  }

  #username, #userpwd {
    text-align: center;
    font-family: Georgia;
    font-weight: bold;
    font-size: 15px;
    background-color: lightgrey;
    margin-top: 20px;
    height: 30px;
    width: 180px;
    border: 0px;
    border-radius: 15px;
    outline: none;
  }

  #sub1 {
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 40px;
    flex-direction: column;
    margin-top: 30px;
    font-weight: bold;
    border: 0px;
    outline: 0px;
    border-radius: 20%;
    font-size: 20px;
    color: white;
    background-color: royalblue;
  }

  #sub1:active {
    background-color: cornflowerblue;
    color: white;
  }

  #bottom {
    font-family: Georgia;
    font-weight: bold;
    width: 100%;
    height: 30px;
    display: flex;
    position: absolute;
    bottom: 50px;
    justify-content: center;
    align-content: center;
    align-items: center;

  }

  #bottom a {
    color: cornflowerblue;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .bottom-p {
    margin-right: 20px;
    margin-left: 20px;
  }
</style>
