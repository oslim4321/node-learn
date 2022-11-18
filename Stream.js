const fs=require('fs')

const readstream = fs.createReadStream('./doc/blog1.txt', { encoding: 'utf8' })
const writestream =fs.createWriteStream('./doc/blog2.txt')

// readstream.on('data', (chunk) => {
//     console.log('-------New Chunk--------')
//     // console.log(chunk)
//     writestream.write('\n NEW CHUNK\n')
//     writestream.write(chunk)
// })
writestream.write('\n NEW CHUNK\n')
readstream.pipe(writestream)


