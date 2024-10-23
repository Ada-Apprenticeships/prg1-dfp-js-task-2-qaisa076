const fs = require('fs');
const inputFile = "datafile.csv";
const outputFile = "outputfile.csv"; 

function parseFile(inputFile, outputFile, delimiter = ';') {
  if (!fs.existsSync(inputFile)) {
    return -1;
  }

  //Deleting any existing output file
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }

  const lines = fs.readFileSync(inputFile, "utf-8").split(/\n/).slice(1); //Getting rid of any headers while seperating reviews
  let totalRecords = 0;

  for (let line of lines) {
    const elements = line.trim().split(delimiter); //Cutting off at the semi colon
    const outputLine = `${elements[1].trim()}${delimiter}${elements[0].trim().substring(0, 20)}\n`;

    fs.appendFileSync(outputFile, outputLine);
    totalRecords++;
  }
  return totalRecords; 
}
console.log(parseFile(inputFile, outputFile));
// Leave this code here for the automated tests
module.exports = {
  parseFile,
}