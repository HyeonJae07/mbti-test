window.onload = function() {
    var testE = 0, testI = 0;

    let randomArr = [];
    for(let i = 0; i < 18; i++) {
        randomArr.push(i);
    }

    for(let i = randomArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [randomArr[i], randomArr[j]] = [randomArr[j], randomArr[i]];
    }

    var text = new Array("다양한 활동을 선호하는 편이다.",
    "밖에서 활동하기 좋아하는 편이다.",
    "말을 많이 하는 편이다.",
    "말 중간에 잘 끼어드는 편이다.",
    "성급하다는 말을 듣는 편이다.",
    "감정을 솔직하게 표현하는 편이다.",
    "폭넓게 친구를 사귀는 편이다.",
    "사람들과 만나는 것을 즐기는 편이다.",
    "활동적인 취미를 즐기는 편이다.",
    "한 가지에 집중하는 편이다.", //I시작
    "실내에 있기를 좋아한다.",
    "말을 적게하는 편이다.",
    "말을 끝까지 잘 듣는 편이다.",
    "침착하다는 말을 듣는 편이다.",
    "속마음을 잘 드러내지 않는 편이다.",
    "소수의 친한 친구를 사귀는 편이다.",
    "혼자 있어도 싫지 않은 편이다.",
    "조용한 취미를 즐기는 편이다");
    var testtype = [];
    for(let i = 0; i < 9; i++) {
        testtype.push(1);
    }
    for(let i = 0; i < 9; i++) {
        testtype.push(2);
    }

    for(var i = 0; i < text.length; i++) {
        var div = document.createElement('div');
        var div2 = document.createElement('div');
        var div3 = document.createElement('div');
        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        div3.className = 'deco-line';
        div2.className = 'radio-box';
        div.className = 'test-box-main';
        div.innerHTML = '<p>' + text[randomArr[i]] + '</p>';
        document.body.appendChild(div);
        p1.textContent = '동의';
        div2.appendChild(p1);
        for(let j = 7; j > 0; j--) {
            let radioButton = document.createElement('input');
            radioButton.type = 'radio';
            radioButton.name = 'test' + randomArr[i];
            radioButton.value = j;
            radioButton.className = 'radio-bnt';
            div2.appendChild(radioButton);
        }
        p2.textContent = '비동의';
        div2.appendChild(p2);
        div.append(div2);
        div.append(div3);
    }
    let submitButton = document.createElement('button');
    submitButton.innerHTML = 'Submit';

    submitButton.onclick = function(event) {
        testE = 0, testI = 0;
        event.preventDefault();
        for(let j = 0; j < text.length; j++) {
            let radios = document.getElementsByName('test' + randomArr[j]);
            let value;
            for(let i = 0; i < radios.length; i++) {
                if(radios[i].checked) {
                    value = radios[i].value;
                    break;
                }
            }
            if ($('input:radio[name=test' + randomArr[j] + ']:checked').length > 0) {
                if(testtype[randomArr[j]] == 1) {
                    testE += Number(value);
                } else if(testtype[randomArr[j]] == 2) {
                    testI += Number(value);
                }
            }
            console.log('Selected value: ' + value);
        }
        console.log('결과E ' + testE);
        console.log('결과I ' + testI);
    };
    document.body.appendChild(submitButton);
}