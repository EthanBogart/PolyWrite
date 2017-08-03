'use es6';

import * as jsonfile from 'jsonfile';
import * as fs from 'fs';

export default function (path, file) {
  jsonfile.writeFile(`${path}-temp`, file, (err) => {
    if (!err) {
      fs.rename(`${path}-temp`, path, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else {
      console.log(err);
    }
  });
}
