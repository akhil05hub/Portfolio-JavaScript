const ncp = require('ncp').ncp;
const path = require('path');

// Specify source and destination directories
const sourceDir = path.join(__dirname);  
const buildDir = path.join(__dirname, 'build');  

// Use ncp to copy the files to the build directory
ncp(sourceDir, buildDir, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Files copied to build directory');
});
