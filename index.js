import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

// 익스프레스 어플리케이션 초기화 ( app = express )
const app = express();

// 어플리케이션 포트 설정 ( 프론트: 3000 / 백엔드: 5000 )
const PORT = 5000;

// 바디 파서 미들웨어 초기화
app.use(bodyParser.json());

// usersRoutes
app.use('/users', usersRoutes);

// '/' get 요청
app.get('/', (req, res) => {
    res.send('Hello from Hompage')
});

// 들어오는 요청을 수신
app.listen(PORT, () => {
    console.log(`Server Running on port: http://localhost:${PORT}`)
})