function getWelcomeTemplate({name,age,school,createdAt}){
   const mytemplate=`
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr/>
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
   ` 
   console.log(mytemplate);
}
const profile={
    name:"인혁",
    age:23,
    school:"영남대학교",
    createdAt:"2024-02-21"
}
const {name,age,school,createdAt}=profile;
getWelcomeTemplate({name,age,school,createdAt});
