function checkEmail(email){
    if(email===undefined||!(email.includes("@"))) 
    {
        console.log("이메일 주소를 제대로 입력해 주세요!!!");
        return false;
    }else return true;
}
function template({name,age,school,creatAt}){
    
    const template=`<html>
        <body>
            <h1>${name}님 가입을 축하드립니다.</h1>
            <hr/>
            <div>이름: ${name}</div>
            <div>나이: ${age}</div>
            <div>학교: ${school}</div>
            <div>가입일: ${creatAt}</div>
        </body>
    </html>`
    return template;
}
function transTemplatetoEmail(email,template){
    console.log(`${email}로 전송합니다.`);
    console.log(template);
}
function createUser({name,age,school,email,creatAt}){
    const isVaild=checkEmail(email);
    if(!isVaild)return;
    const mytemplate=template({name,age,school,creatAt});
    transTemplatetoEmail(email,mytemplate);
}
function todayDate(){
    const now=new Date();
    const year=now.getFullYear();
    const month=now.getMonth()+1;
    const day=now.getDate();
    
    return (`${year}-${month<10?'0':''}${month}-${day<10?'0':''}${day}`)
}
const name="조인혁";
const age=23;
const school="영남대학교"
const email="inhyuk@byeongsin.com"
const creatAt=todayDate();
createUser({name,age,school,email,creatAt});