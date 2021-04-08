import Vue from 'vue'
import Router from 'vue-router'
import MarkList from '../components/mark_list'
import Login from '../components/login'
import Menue from '../components/menue'
import Passlist from '../components/Passlist'
import Optionlist from '../components/Option_analysis_list'
import Aclasslist from '../components/Aclass_list'
import Analysis from '../components/Analysis'
import Setting from '../components/Setting'
import markTotal from '../components/markTotal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Marklist',
      name: 'mark_list',
      component: MarkList
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Menue',
      name: 'Menue',
      component: Menue
    },
    {

      path: '/Passlist',
      name: 'Passlist',
      component: Passlist
    },
    {

      path: '/Optionlist',
      name: 'Optionlist',
      component: Optionlist
    },
    {

      path: '/Aclasslist',
      name: 'Aclasslist',
      component: Aclasslist
    },
    {
      path: '/Analysis',
      name: 'Analysis',
      component: Analysis
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/markTotal',
      name: 'markTotal',
      component: markTotal
    }
  ]
})
