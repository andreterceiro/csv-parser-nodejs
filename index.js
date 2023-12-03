const fs = require("fs");
const csvParser = require("csv-parser");

const result = [];

fs.createReadStream("./base.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    result.push(data);
  })
  .on("end", () => {
    //console.log(result);

    //console.log(result[0]['Telefone(s)'])

    console.log(adjustCellphone(result[0]['Telefone(s)']));
  });

function adjustCellphone(cellphone) {
  return "+55" + cellphone.substr(10,14)
        .replace(')', '')
        .replace(' ', '')
        .replace('-', ''); 
}
