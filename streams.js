const fs=require('fs');

const readStream=fs.createReadStream('./docs/text2.txt',{encoding:'utf-8'});
const writestream=fs.createWriteStream('./docs/text3.txt')
// readStream.on('data',(chunk)=>{
//     console.log('-------------NEW CHUNK ---------------');
//     console.log(chunk.toString());
//     writestream.write('\n NEW CHUNK \n');
//     writestream.write(chunk);
// })


readStream.pipe(writestream);