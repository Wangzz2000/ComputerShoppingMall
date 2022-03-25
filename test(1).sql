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

/*今天要拷贝的代码 
/****产品页商品表****/
CREATE TABLE products(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  intro VARCHAR(128),
  price DECIMAL(10,2)
);

/****插入商品记录****/
INSERT INTO products VALUES
(NULL, 'img/product-detail/big-img.png', 'Apple MacBook Air 13.3英寸笔记本 银色(Core i5 处理器/8GB内存/128GB SSD闪存)', 6299),
(NULL, 'img/product-detail/big-img.png', 'Apple MacBook Air 13.3英寸笔记本 白色(Core i5 处理器/8GB内存/128GB SSD闪存)', 5199),
(NULL, 'img/product-detail/big-img.png', '华硕 高性价比游戏本 黑色', 5799),
(NULL, 'img/product-detail/big-img.png', '联想小新700 电竞版游戏本 白色',  6299),
(NULL, 'img/product-detail/big-img.png', 'Dell 灵越燃7000 轻薄窄边 银色', 5199),
(NULL, 'img/product-detail/big-img.png', 'Dell 灵越燃13000 轻薄窄边 黑色', 5799.00),
(NULL, 'img/product-detail/big-img.png', '戴尔灵越燃7000 轻薄窄边',6299),
(NULL, 'img/product-detail/big-img.png', 'Apple MacBook Air 16英寸笔记本 银色(Core i5 处理器/8GB内存/128GB SSD闪存)',5199.00),
(NULL, 'img/product-detail/big-img.png', 'Apple MacBook Air 16英寸笔记本 白色(Core i5 处理器/8GB内存/128GB SSD闪存)', 5799.00),
(NULL, 'img/product-detail/big-img.png', '三星 游戏本 红色', 6299),
(NULL, 'img/product-detail/big-img.png', '三星 商务本 黑色',5199),
(NULL, 'img/product-detail/big-img.png', 'Dell 超薄15寸 银色', 5799),
(NULL, 'img/product-detail/big-img.png', 'Dell 超薄15寸 黑色', 6299),
(NULL, 'img/product-detail/big-img.png', '华硕 商务笔记本 黑色',5199),
(NULL, 'img/product-detail/big-img.png', '联想 ThinkPad 黑色',5799),
(NULL, 'img/product-detail/big-img.png', '联想 一体机 银色', 6299),
(NULL, 'img/product-detail/big-img.png', 'hp 商务办公笔记本 白色',5199.00),
(NULL, 'img/product-detail/big-img.png', 'hp 游戏本 黑色', 5799.00);
