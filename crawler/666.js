const http = require('http');
const url = 'http://www.imooc.com/learn/348';
const cheerio = require('cheerio');
function filterChapters(html){
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    var courseDate = [];
    chapters.each(function(item){
        var chapter = $(this);
        var chapterTitle = chapter.find('strong').text();
        var videos = chapter.find('.video').find('li');
        var chapterDate = {
            chapterTitle : chapterTitle,
            videos : []
        }
        videos.each(function(item){
            var video = $(this).find('.J-media-item');
            var videoTitle = video.text();
            var videoId = video.attr('href').split('video/')[1];
            chapterDate.videos.push({
                title : videoTitle,
                id : videoId
            })
        })
        courseDate.push(chapterDate);
    })
    return courseDate;
}
function printCourseDate(courseDate){
    courseDate.forEach(function(item){
        console.log(item.chapterTitle + '\n');
        item.videos.forEach(function(video){
                console.log('[' + video.id + ']' + video.title );
        })
    })
}
http.get(url,function(res){

    var html='';
    res.on('data',function(data){
        html+=data;
    })

    res.on('end',function(){

    var courseDate = filterChapters(html);
    printCourseDate(courseDate);
    // console.log(courseDate);

    })
}).on('error',function(){
    console.log('出错了');
});