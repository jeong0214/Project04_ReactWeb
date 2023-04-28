## 🖥 Issue History

<p align="center"> <img src="./Readme_img/GWTO.png" alt="index"></img></p>
<p>API를 불러오기 위해 제공하는 json경로을 확인 중 각 데이터들이 다른 경로에 있어 AXIOS api를 가져오는 데 어려움이 생겼습니다.
  이제 문제를 해결하기 위해 각 경로에 있는 데이터를 가져와서 하나의 json 파일에 담는 방법을 선택하여 해당 문제를 해결하는 코드를 작성하였습니다.
  
```const https = require("https");
const querystring = require("querystring");
const fs = require("fs");
const baseUrl = "https://www.pettravel.kr/api/detailSeqPart.do";
const allData = [];
for (let i = 1; i <= 5; i++) {
  // PC01 ~ PC05
  for (let j = 1; j <= 500; j++) {
    // contentNum 1 ~ 500
    const queryParams = querystring.stringify({
      partCode: "PC" + i.toString().padStart(2, "0"),
      contentNum: j,
    });
    const url = `${baseUrl}?${queryParams}`;
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          const jsonData = JSON.parse(data);
          if (jsonData.length > 0 && jsonData[0].errorCode !== "ERR_03") {
            allData.push(...jsonData);
          }
          if (i === 5 && j === 500) {
            const fileName = "allData.json";
            fs.writeFile(fileName, JSON.stringify(allData), (err) => {
              if (err) {
                console.error(err);
              } else {
                console.log(`All data saved to file ${fileName}`);
              }
            });
          }
        });
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  }
}```
이 코드는 각 경로에 데이터를 가져올 때 경로에 데이터가 없을 때 나오는 err_03이 출력되는 페이지를 제외한 나머지 데이터 정상적으로 출력되는 페이지만 가져와 json에 담는 코드입니다.</p>
