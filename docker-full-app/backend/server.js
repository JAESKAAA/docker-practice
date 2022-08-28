const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db')

const app = express();

app.use(bodyParser.json());

//테이블 생성
db.pool.query(`CREATE TABLE lists(
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id))`,
    (err, results, fields) => {
      console.log('results', results);
    })


//DB lists 테이블에 있는 모든 데이터를 프론트 서버에 보내줌
app.get('/api/values', function (req, res) {

  //DB에 값 넣어주기
  db.pool.query('SELECT * FROM lists;',
      (err, results, fields) => {
    return err ? res.status(500).send(err) : res.json(results)
      })
});

//클라이언트에서 입력한 값을 데이터베이스 lists에 넣어주기
app.post('/app/value', function (req, res) {
  db.pool.query(`INSERT INTO lists (value)
                 VALUES ("${req.body.value}")`,
      (err, results, fields) => {
    return err ? res.status(500).send(err) : res.json({success: true, value: req.body.value})
      });
});

const port = 5000;

app.listen(5000, () => {
  console.log('애플리케이션 시작 포트 = ', port);
})