const targetUrl = process.argv[2];
const newName = process.argv[3];
const fileType = process.argv[4] || false;
const recursive = process.argv[5] || false;

const { log } = require("console");
const fs = require("fs");
const path = require("path");

const options = {
  withFileTypes: fileType,
  recursive: recursive,
};

const handleName = (err, files) => {
  const result = files.map((file, index) => {
    if (index === 0) return newName;
    return `${newName}(${index})`;
  });
  console.log(result);
};

fs.readdir(targetUrl, options, handleName);
