const targetUrl = process.argv[2];
const newName = process.argv[3];
const fileType = process.argv[4] || false;
const recursive = process.argv[5] || false;

const fs = require("fs");
const path = require("path");

const options = {
  withFileTypes: fileType,
  recursive: recursive,
};

const handleRename = (err, files) => {
  files.map((file, index) => {
    const finalName = index === 0 ? newName : `${newName}(${index})`;

    const oldPath = path.join(targetUrl, file);
    const fileExt = path.parse(oldPath).ext;
    const newPath = path.join(targetUrl, `${finalName}${fileExt}`);

    fs.rename(oldPath, newPath, (err) => {
      if (!err) return;
      console.error(err);
    });
  });
};

fs.readdir(targetUrl, options, handleRename);
