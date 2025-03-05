// function createTokenOfPhone(phoneNum){
//     if(phoneNum.length===11){
//         let token=String(Math.floor(Math.random()*1000000)).padStart(6,"0");
//         console.log(token);

//         console.log("인증번호 전송완료")
//     }else{
//         console.log("핸드폰 번호를 제대로 입력해주세요");
//     }
// }


function createTokenOfPhone(phoneNum) {
    if (phoneNum.length < 10 || phoneNum.length < 11) {
        console.log("핸드폰 번호를 제대로 입력해주세요");
        return;
    }
    let token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    console.log(token);
    console.log("인증번호 전송완료")
}
createTokenOfPhone("01012345678");