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
  const createdTimeRef = [];

  const promises = files.map((file, index) => {
    return new Promise((resolve, reject) => {
      (response) => {
        fs.stat(`./test/${file}`, (err, stat) => {
          console.log(stat.birthtimeMs);
          createdTimeRef.push(stat.birthtimeMs);
        });
        resolve(createdTimeRef);
      },
        (error) => {
          reject(error);
        };
    });
  });

  Promise.allSettled(promises).then((results) => {
    results.forEach((result) => {
      console.log(result);
    });
  });
};

fs.readdir(targetUrl, options, handleName);
