/* 
    전화번호 하이픈 입력기
    Created by Jay, Mar 18 2019
    juicycool93@gmail.com
*/
/* 
    REQUIRED
    *. NodeJS

    HOW TO USE
    1. 수정이 필요한 전화번호들을 \n 형식으로 정렬하여 txt 파일로 저장한다. utf-8
    2. 해당 JS 파일과 동일한 location에 놔두고 실행한다. node hyphen.js
    3. output.txt가 해당 폴더에 생성될것이다. profit!!

    NOTICE THAT
    1. input 형식은 반드시 숫자로만 되어야 하며, 00000000000(11자리) 형식이 아닌경우 작동의 보장을 할 수 없다.
    2. 02 나 011 같은 구버전 번호는 작동을 보장하지 않으니, 수동 검사가 필요하다.
    
    SAMPLE INPUT DATA
    01012345678
    01012345679
    01012345680

    SAMPLE OUTPUT DATA
    010-1234-5678
    010-1234-5679
    010-1234-5680
*/
const input = './input.txt';
const output = './output.txt';
const outputdata = new Array();

function processFile(inputFile) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);
     
    rl.on('line', function (line) {
        console.log('\nraw : '+line);
        line = line.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
        console.log('\nrefactored : '+line);
        outputdata.push(line);
    });
    
    rl.on('close', function (line) {
        console.log(`done reading file. total ${outputdata.length} of line effected`);
        fs.writeFileSync(output,outputdata.join("\n"));
    });
}

processFile(input);
