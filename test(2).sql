SET NAMES UTF8;
DROP DATABASE IF EXISTS test;
CREATE DATABASE test CHARSET=UTF8;
USE test;


/****首页商品****/
CREATE TABLE index_products(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128)
);

/****插入首页商品记录****/
INSERT INTO index_products VALUES
(NULL, '联想小新700 电竞版游戏本', '酷睿双核i7处理器|1TGB SSD|8GB内存|英特尔HD显卡620含共享显卡内存', 'img/index/study_computer_img5.png', 6299, 'product-details.html?lid=17'),
(NULL, '戴尔灵越燃7000 轻薄窄边', '酷睿双核i5处理器|512GB SSD|2GB内存|英特尔HD显卡', 'img/index/study_computer_img3.png', 5199, 'product-details.html?lid=19'),
(NULL, '神州战神Z7M 高性价比游戏本', '酷睿双核i7处理器|1TGB SSD|8GB内存|英特尔HD游戏机独立显卡', 'img/index/study_computer_img4.png', 5799, 'product-details.html?lid=38');







/****详情页评论****/
CREATE TABLE detail_comments(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(64),
  fdate VARCHAR(64),
  comm VARCHAR(1024),
  likesCount INTEGER(64)
);

/****插入详情页评论记录****/
INSERT INTO detail_comments VALUES
(NULL, '游云ing', '2017年6月14日', '做一个飞机大神要用多长时间？', 10);