let   fs  =require('fs');

// 写文件
// 文件路径，文本内容，回调函数
       /* 成功
            error:null
        失败
            error:错误对象*/
// fs.writeFile('./write.md','大家好，我叫Node js',function (error) {
//     if (error){
//         console.log('写入文件失败');
//     }else{
//         console.log('文件写入成功');
//     }
// })

// 读文件
fs.readFile('./write.md',function (error,data) {
    if (error){
        console.log('写入文件失败');
    }else{
        console.log(data.toString());
    }


})