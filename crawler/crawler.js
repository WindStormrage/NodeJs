/*原始的代码
var http = require('http')
var url = 'http://www.imooc.com/learn/348'
http.get(url,function(res) {
    var html = ''

    res.on('data', function(data) {
        html += data
    })

    res.on('end', function() {
        console.log(html)
    })
}).on('error', function() {
    console.log("失败！");
});
*/

var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/348'

function filterChapters(html){
    var $ = cheerio.load(html)//使用cheerio来处理获得的html的数据
    var chapters = $('.chapter')//获得源码中所有class为chapter的标签来循环
    var courseData = []//先建一个数组
    chapters.each(function(item){//把chapter来循环
        var chapter = $(this)
        var chaptersTitle = chapter.find('strong').text()//当前标签下为strong的标签中的文字
        var videos = chapter.find('.video').find('li')
        var chapterData = {//先把每章的题目来储存一下
            chaptersTitle: chaptersTitle,
            videos: []
        }
        videos.each(function(item){//循环每个章节
            var video = $(this).find('.J-media-item')
            var videoTitle = video.text()//获取章节名字
            var id = video.attr('href').split('video/')[1]//章节的id
            chapterData.videos.push({//添加进去
                title: videoTitle,
                id: id
            })
        })
        courseData.push(chapterData)//添加进去
    })
    return courseData
}
//这里是输出函数
function pritCourseInfo(coutseData){
    coutseData.forEach(function(item){
        console.log(item.chaptersTitle + '\n')

        item.videos.forEach(function(video){
            console.log('  [' +video.id +']' +  video.title + '\n')
        })
    })
}

http.get(url,function(res) {
    var html = ''

    res.on('data', function(data) {
        html += data//获取源码数据
    })

    res.on('end', function() {
        var courseData = filterChapters(html)
        pritCourseInfo(courseData)
    })
}).on('error', function() {
    console.log("失败！");
});