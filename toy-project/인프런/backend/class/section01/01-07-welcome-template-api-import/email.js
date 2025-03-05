import {todayDate} from './utils.js'

export function checkEmail(email){
    if(email===undefined||!(email.includes("@"))) 
    {
        console.log("이메일 주소를 제대로 입력해 주세요!!!");
        return false;
    }else return true;
}
export function template({name,age,school}){
    
    const template=`<html>
        <body>
            <h1>${name}님 가입을 축하드립니다.</h1>
            <hr/>
            <div>이름: ${name}</div>
            <div>나이: ${age}</div>
            <div>학교: ${school}</div>
            <div>가입일: ${todayDate()}</div>
        </body>
    </html>`
    return template;
}
export function transTemplatetoEmail(email,template){
    console.log(`${email}로 전송합니다.`);
    console.log(template);
}
