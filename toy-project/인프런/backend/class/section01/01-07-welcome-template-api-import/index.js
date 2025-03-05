import {checkEmail,template,transTemplatetoEmail} from './email.js'

function createUser({name,age,school,email}){
    const isVaild=checkEmail(email);
    if(!isVaild)return;
    const mytemplate=template({name,age,school});
    transTemplatetoEmail(email,mytemplate);
}

const name="오민규";
const age=25;
const school="영남대학교"
const email="omg@byeongsin.com"
createUser({name,age,school,email});