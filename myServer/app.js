//app.js 服务器端项目
//1:下载第三方模块 
//express/express-session/cors/mysql
//2:将第三方模块引入到当前程序中
const express= require("express");
//引入body-parser中间件
const bodyParser=require('body-parser');
const session = require("express-session");
const cors = require("cors");
const mysql = require("mysql");
//3:创建数据库连接池
var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   connectionLimit:20,
   database:"xz"
})


//4:创建web服务器监听 8080 端口
var server = express();
server.listen(8080);
//5:处理跨域 cors 
//5.1：配置允许访问程序地址(脚手架)
//     http://127.0.0.1:5050  (ok)
//     http://localhost:5050
//5.2:每请求是否验证true
server.use(cors({
  origin:["http://127.0.0.1:5050","http://localhost:5050",
    "http://127.0.0.1:3001"
  ],
  credentials:true
}))
//6:配置session
//#session配置一定要在所有请求之前
server.use(session({
   secret:"128位字符串",    //#安全字符串
   resave:true,            //#每次请求保存数据 
   saveUninitialized:true  //#保存初始化数据
}));
//7:配置静态目录
//http://127.0.0.1:8080/01.jpg
server.use(express.static("public"));
//使用body-parser中间件
server.use( bodyParser.urlencoded({
  extended:false
}) );

//功能0:注册
server.get('/reg',(req,res)=>{
   //1.1获取post请求的数据
   var uname=req.query.uname;
   var upwd=req.query.upwd;
   var email=req.query.email;
   var phone=req.query.phone;
 console.log(uname+":"+upwd+"+"+email+":"+phone);
   //1.3执行SQL语句
   var sql=`INSERT INTO zfb_reg VALUES(null,'${uname}',md5('${upwd}'),'${email}','${phone}')`;
   pool.query(sql,(err,result)=>{
     if(err) throw err;
     console.log(result);
     //如果插入成功
     if(result.affectedRows>0) {
       res.send({code:200,msg:"reg succ"});
     }
   });
});

//功能一:完成用户登录
//启动服务器app.js/启动数据库
//打开浏览器
//http://127.0.0.1:8080/login?uname=tom&upwd=123
//http://127.0.0.1:8080/login?uname=tom&upwd=122

server.get("/login",(req,res)=>{
  //6.1:接收网页传递数据 用户名和密码
  var u = req.query.uname;
  var p = req.query.upwd;

  //6.2:创建sql
  var sql = "SELECT id FROM xz_login";
  sql+=" WHERE uname = ? AND upwd = md5(?)";
  //6.3:执行sql语句并且获取返回结果
  pool.query(sql,[u,p],(err,result)=>{
   //6.4:判断登录是否成功
   if(err)throw err;
   //6.5:将结果返回网页
   if(result.length==0){
     res.send({code:-1,msg:"用户名或密码有误"})
   }else{
    // console.log(result);
     //获取当前登录用户id
     //result=[{id:2}]
     var id = result[0].id;
     //将用户id保存session对象中
     //uid当前登录：用户凭证
     req.session.uid = id;
     //console.log(req.session);
     res.send({code:1,msg:"登录成功"});
   }
  });
})
//首页动态生成的那几条数据
server.get("/data",(req,res)=>{
  var sql="SELECT id,title1,title2,tiem1,time2,img_url";
  sql+=" FROM xz_data";
  pool.query(sql,[],(err,result)=>{
      if(err) throw err;
      res.send({code:1,msg:"查询成功",data:result});
     // console.log(result);
  });
});

//首页每天必抢的六条数据
server.get("/product",(req,res)=>{
  //单纯获取数据直接查
  var sql="SELECT lid,price,lname,img_url";
  sql+=" FROM prodcut";
  pool.query(sql,[],(err,result)=>{
  //获取返回结果
  if(err) throw err;
  res.send({code:1,msg:"查询成功",data:result});
  //console.log(result);
  });
});

//功能二:商品分页显示
// http://127.0.0.1:8080/products
// http://127.0.0.1:8080/products?pno=2
// http://127.0.0.1:8080/products?pno=3&pageSize=5
 //1:接收客户请求 /products get
server.get("/products",(req,res)=>{
  //2:接收客户请求数据
  // pno 页码  pageSize 页大小
  var pno=req.query.pno;
  var ps=req.query.pageSize;
  //3:如果客户没有请示数据设置数据
  //pno=1     pageSize=4
  if(!pno){
    pno=1;
  }  
  if(!ps){
    ps=4;
  }
  //4:创建sql 语句
  var sql="SELECT lid,lname,price,img_url,sold_count,is_checked";
  sql+=" FROM prodcuts_item";
  sql+=" LIMIT ?,?";
  var offset=(pno-1)*ps; //其实记录数  ?
       ps=parseInt(ps);   //行数       ?
   //5:发送sql语句
   pool.query(sql,[offset,ps],(err,result)=>{
     if(err) throw err;
     res.send({code:1,msg:"查询成功",data:result});
   });    
});

//功能三:将指定商品添加至购物车

//#此功能先行条件登录
//#创建购物车数据表 xz_cart
//在mysql执行

//1:接收客户端请求 /addcart GET
//http://127.0.0.1:8080/login?uname=tom&upwd=123
//http://127.0.0.1:8080/addcart?lid=1&lname=kk&price=9

server.get("/addcart",(req,res)=>{
  //2:判断是否登录
  //uid
  //如果uid为undefined 没登录
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请先登录"});
    return;
  }
  //3:获取客户点击添加按钮传来的数据(客户端)->(服务器)->(数据库)加到数据库(操作数据)
  var lid=req.query.lid;
  var lname=req.query.lname;  //字符串特殊加'';
  var price=req.query.price;
  var img_url=req.query.img_url;
  var is_checked=req.query.is_checked;
//console.log(lid+":"+price+":"+lname)
  //4:创建查询sql:当前用户是否购买此商品
  var sql="SELECT id FROM xz_cart";
  sql+=" WHERE uid=? AND lid=?";
  pool.query(sql,[uid,lid],(err,result)=>{
    if(err) throw err;
    //6:在回调函数中判断一下操作
    // 没购买过此商品   添加
    //已购买过此商品    更新
    if(result.length==0){
      var sql=`INSERT INTO xz_cart VALUES(null,${lid},${price},1,'${lname}',${uid},'${img_url}','${is_checked}')`;
    }else{
      var sql=`UPDATE xz_cart SET count=count+1 WHERE uid=${uid} AND lid=${lid}`;
    }
    //(嵌套一条sql语句)
    //7:执行sql获得返回结果
    //没参数(以上是客户端传进来的)
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      //8:如果sql UPDATE INSERT DELELE 都是依据影响行数
      //判断执行成功   result.affectedRows  影响行数
      if(result.affectedRows>0){
        res.send({code:1,msg:"商品添加成功"});
      }else{
        res.send({code:-2,msg:"添加失败"});
      }
    });
  });
});

//功能四:查询指定用户购物车信息
server.get("/carts",(req,res)=>{
  //(1)参数uid
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请登录"});
    return;
  }
  //(2)创建sql语句
  var sql="SELECT id,lname,price,img_url,count,is_checked FROM";
  sql+=" xz_cart WHERE uid=?";   //uid意思是查看谁的购物车
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  });
});

//http://127.0.0.1:8080/delItem?id=1
//http://127.0.0.1:8080/login?uname=tom&upwd=123
//http://127.0.0.1:8080/delItem?id=1
//功能五:删除购物车表中指定数据
server.get("/delItem",(req,res)=>{
  //0:判断是否登录
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-2,msg:"请登录"});
    return;
  }
  //1:获取客户端发送数据id
  var id=req.query.id;
  //2:创建sql语句
  //194:逻辑错误lid改id
  var sql="DELETE FROM xz_cart WHERE id=?";
  //3:执行sql语句
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    //4:获取服务器获取结果判断删除是否成功
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"});
    }else{
      res.send({code:-1,msg:"删除失败"});
    }
  });
});

//http://127.0.0.1:8080/delItems?id=4,3
//http://127.0.0.1:8080/login?uname=tom&upwd=123
//http://127.0.0.1:8080/delItems?id=4,3
//功能六:删除购物车中多个商品
server.get("/delItems",(req,res)=>{
 //0:判断用户是否登录
 //1:获取参数 id=1,2,3
 var id = req.query.id;
 //2:创建 sql语句
 var sql=`DELETE FROM xz_cart`;
 sql+=` WHERE id IN (${id})`; 
 //3:执行sql语句
 pool.query(sql,(err,result)=>{
   if(err)throw err;
   if(result.affectedRows>0){
     res.send({code:1,msg:"删除成功"})
   }else{
     res.send({code:-1,msg:"删除失败"})
   }
 })
 //4:获取服务器返回结果
 //5:将结果返回客户端
})

//http://127.0.0.1:8080/Product-data?lid=20
//查询商品的详情信息
server.get("/Product-data",(req,res)=>{
   var lid=req.query.lid;
  
   console.log(lid);
  var sql=`SELECT * FROM prodcuts_item WHERE lid=?`;
  
  pool.query(sql,[lid],(err,result)=>{
     if(err) throw err;
    res.send({code:200,msg:"查询成功",data:result});  
  });
})