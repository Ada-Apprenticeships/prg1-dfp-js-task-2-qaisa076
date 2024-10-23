const fs = require('fs');
const inputFile = "datafile.csv";
const outputFile = "outputfile.csv"; 

function parseFile(inputFile, outputFile, delimiter = ';') {

  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
  const data = fs.readFileSync(inputFile, "utf-8");
  const lines = data.split(/\n/).slice(1); 

  let totalRecords = 0;
  for (let line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine) continue;

    const elements = trimmedLine.split(delimiter);
    if (elements.length < 2) continue; 

    const review = elements[0].trim();
    const sentiment = elements[1].trim();
    const outputLine = `${sentiment}${delimiter}${shortReview}\n`;
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