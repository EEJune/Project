

export function checkPhone(phoneNum){
    if (phoneNum.length < 10 || phoneNum.length < 11) {
        console.log("핸드폰 번호를 제대로 입력해주세요");
        return false;
    }
    else{
        return true;
    }
}
export function getToken(){
    let token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    return token
}
export function sendTokenToSMS(phoneNum,token){
    console.log(phoneNum+" 번호로 인증번호 "+token+"을 전송합니다.");

}



function createTokenOfPhone(phoneNum) {
    const isValid=checkPhone(phoneNum);
    if(!isValid) return false;
    const token=getToken();
    sendTokenToSMS(phoneNum,token);
}
createTokenOfPhone("01012345678");