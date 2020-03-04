const path = require('path');
const fs = require('fs');
const glob = require('glob');
const _ = require('lodash');
const cwd = process.cwd();

// 写入文件
const writeFile = data => {
  const dataStr = JSON.stringify(data);
  const fileName = `src/configs/routes.json`;
  fs.writeFile(fileName, dataStr, () => {});
};

const getNoteRoute = () => {
  const notes = glob.sync('**/*.md', {
    cwd: path.resolve(cwd, 'src/public/notes'),
    nodir: true,
  });

  const noteMaps = notes.reduce((cache, notePath) => {
    const notePaths = notePath.split('/');
    const note = notePaths.pop();
    const noteName = note.split('.')[0];
    _.set(cache, [...notePaths, noteName].join('.'), note);
    return cache;
  }, {});

  const formatTree = mapData => {
    return Object.keys(mapData).reduce((cache, key) => {
      const value = mapData[key];
      const treeNode = {
        title: key,
        path: key,
        childrens: _.isObject(value) ? formatTree(value) : undefined,
      };
      cache.push(treeNode);

      return cache;
    }, []);
  };
  console.log(JSON.stringify(noteMaps));
  const noteTree = formatTree(noteMaps);
  writeFile(noteTree);
};

getNoteRoute();
