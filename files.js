const fs=require('fs')    /* fs: file system */ 
// const fs=require('./doc/blog.txt')
/* Reading files */
// fs.readFile('./doc/blog.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

/* Writing Files */
// fs.writeFile('./doc/blog.txt', 'i hate coding', () => {
//     console.log('done Updating the stuffs')
// })

/* Directories */
// if (!fs.existsSync('./Asset')) {
//    fs.mkdir('./Asset', (err) => {
//    if (err) {
//      console.log(err)
//     }
//     console.log('Nice')
//     })
// } else {
//     fs.rmdir('./Asset', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder Remove')
//     })
// }

    // deleting files
    // if (fs.existsSync('./doc/dele.txt')) {
    //     fs.unlink('./doc/dele.txt', (err)=> {
    //         if (err) {
    //             console.log(err)
    //         }
    //         console.log('file deleted')
    //     })
    // } else {
    //     console.log('file doesnt not exist')
    // }

    