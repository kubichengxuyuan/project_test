const mysql = require('mysql');
const  express = require('express');
const  router = express.Router();
const models = require('./db');

const connection = mysql.createConnection(models.mysql);

connection.connect();

const jsonWrite = function (res,ret){
  if(typeof ret === "undefined"){
    // res.send(404)
    res.sendStatus(503)
  } else {
    res.json(ret)
  }
}
//接口:查询
router.get('/Marklist',(req,res) => {
  const sql = 'select * from list';
  const params = req.body;
  console.log(params);
  connection.query(sql,function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.get('/Aclasslist',(req,res) => {
  const sql = 'select * from list where mark>=90';
  const params = req.body;
  console.log(params);
  connection.query(sql,function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.get('/Passlist',(req,res) => {
  const sql = 'select * from list where mark>=60';
  const params = req.body;
  console.log(params);
  connection.query(sql,function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.get('/Optionlist',(req,res) => {
  const sql = 'select * from average_scoring';
  const params = req.body;
  console.log(params);
  connection.query(sql,function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.get('/numberStu',(req,res) => {
  const sql = 'select count(*) from list';
  const params = req.body;
  console.log(params);
  connection.query(sql,function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

//增加
router.post('/addStu',(req,res) => {
  const sql = 'insert into list values(?,?,?)';
  const params = req.body;
  // console.log(params);
  connection.query(sql,[params.id,params.name,params.mark],function (err, result) {
    if (err) {
      jsonWrite(res,undefined)
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
//删除
router.post('/delStu',(req,res) => {
  const sql = 'delete from list where id = ?';
  const params = req.body;
  connection.query(sql,[params.id],function (err, result) {
    if (err) {
      jsonWrite(res,undefined)
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
//修改
router.post('/updateStu',(req,res) => {
  const sql = 'update list set id=?,name=?,mark=? where id = ?';
  const params = req.body;
  connection.query(sql,[params.id,params.name,params.mark,params.id],function (err, result) {
    if (err) {
      jsonWrite(res,undefined)
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})


module.exports = router
