//const express = require('express') //옛날 방식=>common.js
import express from 'express' //요즘방식=>module 
import {checkPhone,getToken,sendTokenToSMS} from './phone.js' //export 가져오기
//import express from 'express' //export default 가져오기
//단 함수 이름도 바꿔야함 export default와 export를 함께 쓸 수 있음
//전부 다 가져 오는 방법은 import * as ttt from ./
//해서 ttt.getToken 이런식으로 써야함

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import {options} from './swagger/config.js'

const swaggerSpec = swaggerJsdoc(options);




const app = express()
app.use(express.json()) //옛날에는 bodyParser을 사용
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/boards', function (req, res) {
    //1.DB에 접속 후 데이터 조회 =>조회 했다고 가정
    const result=[
        {number: 1, writer:"철수",title:"제목입니다~~",contents:"철수 입니다"  },
        {number: 2, writer:"민지",title:"제목입니다~~",contents:"민지 입니다"  },
        {number: 3, writer:"지윤",title:"제목입니다~~",contents:"지윤 입니다"  }
    ]

    //2. DB에 꺼내온 결과를 브라우저에 응답(response) 주기
    res.send(result)
})

app.post('/boards', function (req, res) {
    //1. 브라우저에서 보내준 데이터 확인
    console.log(req)
    console.log("==========")
    console.log(req.body)

    //2.DB에 접속 후, 데이터를 저장 =>저장했다고 가정
    //3. DB에 저장된 결과를 브라우저에 응답(response) 주기

    res.send('게시글 등록에 성공하였습니다.')
})

app.post("/tokens/phone",function(req,res){
    const phoneNum=req.body.phoneNum
    const isValid=checkPhone(phoneNum); //1. 휴대폰 자릿수 맞는지 확인
    if(!isValid) return false;
    const token=getToken(); //2. 핸드폰 토큰 6자리 만들기
    sendTokenToSMS(phoneNum,token); //3. 핸드폰번호에 토큰 전송

    res.send("인증완료!")
})

app.listen(3000)