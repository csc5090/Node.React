//익스프레스란 js의 스프링 
//type commonjs는 node에서만 사용하는 방식 require를 사용

import express from 'express'
import serveIndex from 'serve-index';

const serverPort = 8272;

const app = express();

//미들웨어. serve-index는 디렉토리의 모든 파일을 리스트(indexing) 해주는 라이브러리
app.use('/',express.static("./csc"),serveIndex('./csc',{icons:true})); 

app.listen(serverPort,()=>{
    console.log(`csc on ${serverPort}`);
});