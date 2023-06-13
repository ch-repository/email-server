const mysql = require('mysql');

// 创建mysql的连接池
const pool = mysql.createPool({
    host: 'localhost', // 数据库地址
    user: 'root', // 数据库用户名
    password: 'Yaochaohang@129', // 数据库密码
    database: 'koa_demo', // 数据库名称
    port: 3306 // 数据库端口
});

// 对数据库进行增删改查的基础
function query(sql, callbacks) {
    pool.getConnection(function(err, connection) {
        connection.query(sql, function(err, rows) {
            callbacks(err, rows);
            connection.release();
        });
    });
}

module.exports = query;

// create table tb_site (
//     id int(11) NOT NULL AUTO_INCREMENT,
//     site_name varchar(255) NOT NULL COMMENT '站点地址',
//     visit_number BIGINT,
//     PRIMARY KEY (id)
// );

// insert into tb_site (site_name, visit_number) values ('localhost', 1);