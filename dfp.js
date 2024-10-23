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
  const data = fs.readFileSync(inputFile, "utf-8");
  //Getting rid of any headers while seperating reviews
  const lines = data.split(/\n/).slice(1); 
  let totalRecords = 0;

  for (let line of lines) {
    const trimmedLine = line.trim();
    const elements = trimmedLine.split(delimiter); //Cutting off at the semi colon
    const review = elements[0].trim(); 
    const sentiment = elements[1].trim();
    const shortReview = review.substring(0, 20);//Making reviews 20 characters max
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