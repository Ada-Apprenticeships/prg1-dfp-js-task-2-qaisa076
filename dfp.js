const fs = require('fs');

const outputFile = "outputfile.csv";
const inputFile = "datafile.csv";

function parseFile(indata, outdata, delimiter = ';') {
  if (fs.existsSync(outdata)) {
    fs.unlinkSync(outdata);
  }

  const data = fs.readFileSync(indata, "utf-8");
  const reviewDictionary = {};
  const lines = data.split(delimiter);

  for (let line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine) continue;

    // Split by colon instead of semicolon
    const [review, sentiment] = trimmedLine.split(':');
    if (review && sentiment) {
      reviewDictionary[sentiment.trim()] = review.trim();
    }
  }

  // Print the dictionary
  for (const [sentiment, review] of Object.entries(reviewDictionary)) {
    const outputLine = `${sentiment} : ${review}\n`;
    console.log(outputLine); // Print each line
  }
}

parseFile(inputFile, outputFile);




// Leave this code here for the automated tests
module.exports = {
  parseFile,
}