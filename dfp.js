const fs = require('fs');

const inputFile = "outputfile.csv"
const outputFile = "datafile.csv"


function parseFile (indata, outdata, delimiter = ';') {
  if (fs.existsSync(outdata)) {
    fs.unlinkSync(outdata)
  }

}



  



// Leave this code here for the automated tests
module.exports = {
  parseFile,
}