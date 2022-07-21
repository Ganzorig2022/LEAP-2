const fs = require('fs');
const superAgent = require('superagent');

// =================2.======================
// ene function-aas PROMISE butsna.

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file 😫');
      resolve(data);
    });
  });
};

// =================3.======================
// ene function-aas PROMISE butsna.

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write file 🥱');
      resolve('success');
    });
  });
};

// =================1.======================
const getDogPic = async () => {
  try {
    //1. dog.txt file-aas "pug" nertei dog-nii breed/vvlderiig gargaj awna.
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    //2. dog API-aas nohoinii object file-iig FETCH hj awna.
    const res1 = superAgent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    const res2 = superAgent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    const res3 = superAgent.get(`https://dog.ceo/api/breed/${data}/images/random`);

    //2. waiting for 3 promises simultaneously
    const all = await Promise.all([res1, res2, res3]);

    const imgs = all.map((el) => el.body.message);
    console.log(imgs);

    //"https://images.dog.ceo/breeds/pug/n02110958_14111.jpg" iim message/link irne.

    //3. dog-img.txt file-iig shineer vvsgeed, 3n shriheg zuragnii link-iig dotor ni hadgalna.
    await writeFilePro('dog-img.txt', imgs.join('\n'));

    console.log('random dog image saved to file');
  } catch (err) {
    console.log(err);
  }
  return "2: Done! It's ready ✌";
};

(async () => {
  try {
    console.log('1: Will get dog pics!');
    // returning value from async function
    const result = await getDogPic();
    console.log(result);
  } catch (error) {
    console.log('error');
  }
})();
