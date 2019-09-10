ALQX:
#创建数据库
SET NAMES UTF8;
DROP DATABASE IF EXISTS ?;
CREATE DATABASE ? CHARSET=UTF8;
USE ?;
....... 

#db.sql 创建表添加数据
#学子商城 mintui版本

#功能一:创建表xz_login 用户登录表
USE xz;
CREATE TABLE xz_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50),
  upwd  VARCHAR(32)
);
#功能二:添加二条测试数据 
INSERT INTO xz_login VALUES(null,'tom',md5('123'));
INSERT INTO xz_login VALUES(null,'jerry',md5('123'));


###功能商品添加  16 ~ 23
#功能三:向商品表中添加一列 img_url
USE xz;
ALTER TABLE xz_laptop ADD img_url VARCHAR(255);
#更新商品表图片 01.jpg 02.jpg
UPDATE xz_laptop SET img_url='01.jpg'
WHERE lid = 1;
UPDATE xz_laptop SET img_url='02.jpg'
WHERE lid > 1;

USE xz;
CREATE TABLE prodcut( 
  lid  INT PRIMARY KEY AUTO_INCREMENT,
  price  DECIMAL(10,2),
  lname  VARCHAR(255),
  img_url  VARCHAR(255)
);
INSERT INTO prodcut VALUES(NULL,5999,'AppMacBook Air',"01.jpg"); 
INSERT INTO prodcut VALUES(NULL,6999,'AppleMacBook Air',"02.jpg");
INSERT INTO prodcut VALUES(NULL,7999,'小米Air',"03.jpg");
INSERT INTO prodcut VALUES(NULL,8999,'华为p30',"04.jpg");
INSERT INTO prodcut VALUES(NULL,8999,'华为p40',"05.jpg");
INSERT INTO prodcut VALUES(NULL,6999,'无人机p50',"06.png");

#创建表 购物车
#DECIMAL 高精度浮点数 2.00-1.99=0.01
#INT     199分 /100  无误差
#lid 商品编号/price 价格/count数量
#lname 商品名称/uid用户编号
USE xz;
CREATE TABLE xz_cart(
  id     INT PRIMARY KEY AUTO_INCREMENT,
  lid    INT,
  price  DECIMAL(10,2),
  count  INT,
  lname  VARCHAR(255),
  uid    INT
);

USE xz;
CEATE TABLE xz_data(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title1 VARCHAR(32),
  title2 VARCHAR(32),
  tiem1   VARCHAR(25),
  time2   VARCHAR(25)
);
INSERT INTO xz_data VALUES(NULL,"你有一张券到期1","余额宝收益到账啦1","一个小时前","三个小时"); 
INSERT INTO xz_data VALUES(NULL,"你有一张券到期2","余额宝收益到账啦2","二个小时前","八个小时"); 
INSERT INTO xz_data VALUES(NULL,"你有一张券到期3","余额宝收益到账啦3","三个小时前","五个小时"); 
INSERT INTO xz_data VALUES(NULL,"你有一张券到期4","余额宝收益到账啦4","四个小时前","三个小时"); 

###功能商品添加  16 ~ 23
#功能三:向商品表中添加一列 img_url
USE xz;
ALTER TABLE xz_data ADD img_url VARCHAR(255);
#更新商品表图片 01.jpg 02.jpg
UPDATE xz_data SET img_url='login1.png'
WHERE id = 1;
UPDATE xz_data SET img_url='200.jpg'
WHERE id = 2;
UPDATE xz_data SET img_url='4000.jpg'
WHERE id = 3;
UPDATE xz_data SET img_url='5000.jpg'
WHERE id = 4;

#商品表prodcuts_item
USE xz;
CREATE TABLE prodcuts_item( 
  lid  INT PRIMARY KEY AUTO_INCREMENT,
  price  DECIMAL(10,2),
  lname  VARCHAR(255),
  title   VARCHAR(255),
  subtitle   VARCHAR(255),
  promise    VARCHAR(255),
  spec        VARCHAR(128),
  shelf_time   INT,
  sold_count   INT,
  img_url  VARCHAR(255)
);
INSERT INTO prodcuts_item VALUES(NULL,5999,'AppMacBook Air',"AppMacBook Air13.3英寸笔记本 银色(Core i7 处理器/8GB内存/2...","10月焕新季，领券买新机！神券满8000减800！一体成型金属机身，纤薄轻巧，长达12小时续航","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","定制款：双核i7/8G内存/128G闪存","1567927684148","120","01.jpg"); 
INSERT INTO prodcuts_item VALUES(NULL,6999,'AppleMacBook Air',"AppMacBook Air13.3英寸笔记本 银色(Core i7 处理器/8GB内存/2...","10月焕新季，领券买新机！神券满8000减800！一体成型金属机身，纤薄轻巧，长达12小时续航","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","定制款：双核i7/8G内存/128G闪存","1567927684148","120","02.jpg"); 
INSERT INTO prodcuts_item VALUES(NULL,7999,'小米Air',"小米Air 13.3英寸笔记本 银色(Core i7 处理器/8GB内存/2...","10月焕新季，领券买新机！神券满8000减800！一体成型金属机身，纤薄轻巧，长达12小时续航","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","定制款：双核i7/8G内存/128G闪存","1567927684148","120","03.jpg");
INSERT INTO prodcuts_item VALUES(NULL,6999,'华为p30',"华为p30 6英寸手机 银色(Core 8核/8GB内存/2...","10月焕新季，领券买新机！神券满5000减500！","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","定制款：8核/8G内存/128G闪存","1567927684148","100","04.jpg"); 
INSERT INTO prodcuts_item VALUES(NULL,7999,'华为p40',"华为p40 6英寸手机 银色(Core 8核/8GB内存/2...","10月焕新季，领券买新机！神券满5000减500！","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","定制款：8核/8G内存/128G闪存","1567927684148","120","05.jpg"); 
INSERT INTO prodcuts_item VALUES(NULL,6999,'无人机p50',"AppMacBook Air13.3英寸笔记本 银色(Core i7 处理器/8GB内存/2...","10月焕新季，领券买新机！神券满8000减800！一体成型金属机身，纤薄轻巧，长达12小时续航","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","定制款：双核i7/8G内存/128G闪存","1567927684148","120","06.jpg"); 
INSERT INTO prodcuts_item VALUES(NULL,5999,'MackBook50',"MackBook 13.3英寸笔记本 银色(Core i7 处理器/8GB内存/2...","10月焕新季，领券买新机！神券满8000减800！一体成型金属机身，纤薄轻巧，长达12小时续航","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","定制款：双核i7/8G内存/128G闪存","1567927684148","120","02.jpg"); 
INSERT INTO prodcuts_item VALUES(NULL,7999,'小米p50','小米p50 6英寸手机 银色(Core 8核 /8GB内存/2...','10月焕新季，领券买新机！神券满8000减800！','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','定制款：双核i7/8G内存/128G闪存','1567927684148','120','03.jpg'); 
