var http=require('http')
var querystring = require('querystring')
var postData =querystring.stringify({
'content':'超级高兴，就是postdata.length忘记写了，最后再测试一下就走，哈哈哈',
'mid':'8837'
})
var options ={
    hostname : 'www.imooc.com',
    port:80,
    path :'/course/docomment',
    method:'POST',
    headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,////以后这里要记得修改一下！！
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=efbcb0b6-3a8b-4daa-a9b5-ee35e374d51f; imooc_isnew_ct=1486451018; loginstate=1; apsid=Y5ZjVmMDY1YjFkYzkxYTVjMGQwMTM5ZDA3MzUzNWUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjQxNjMwNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2OTU3MjkwMzNAcXEuY29tAAAAAAAAAAAAAAAAAAAAADg3ZTVjODQ2MDY2OTRmY2MwMDYwYWYzOTIwNDY4MWYxqP%2BrWKj%2Fq1g%3DM2; last_login_username=695729033%40qq.com; PHPSESSID=1870eiuscoveremh8kp38rgp20; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1489932896,1489992527,1490009276,1490009429; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1490019777; imooc_isnew=2; cvde=58cf7b4cedb71-139',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/video/8837',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}

var req =http.request(options,function(res){
    console.log('status:'+res.statusCode);
    console.log('headers:'+JSON.stringify(res.headers));


    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk);
    })

    res.on('end',function(){
        console.log('评论完毕')
    });
    res.on('error',function(e){
        console.log('Error:'+e.message)
    })
})
req.write(postData);
req.end();