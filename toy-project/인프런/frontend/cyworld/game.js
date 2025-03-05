const startWord = () => {
    let myword = document.getElementById("myword").value
    let word = document.getElementById("word").innerText

    let lastword = word[word.length - 1]
    let firstword = myword[0]
    if (firstword === lastword) {
        document.getElementById("result").innerText = "정답입니다!"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    } else {
        document.getElementById("result").innerText = "땡!"
        document.getElementById("myword").value = ""
    }
}
const startLotto = () => {
    let lotto = [];
    for (let i = 1; i < 7; i++) {
        let num = String(Math.floor(Math.random() * 100) + 1)
        lotto[i] = num
        let duplicate = false;

        for (let j = 1; j < i; j++) {
            if (lotto[j] === num) {
                duplicate = true;
                break;
            }
        }

        if (duplicate) {
            i = i - 1;
        }
    }

    // 나머지 코드는 동일하게 유지
    for (let i = 1; i < 7; i++) {
        document.getElementById("resultNum" + i).innerText = lotto[i];
    }
}
