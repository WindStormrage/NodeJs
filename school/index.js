var klass = require('./klass.js');

klass.add('XHY','HHH');

/*
模块：teacher.js
导出模块： exports.add = function(){}
加载模块：var teacher = require('./teather.js')
使用模块：teacher.add("xhy");
关于这个导出模块中的exports.add = function(){}在之前实例中写的是exports.add = add;其中第一个add是，在外部文件访问这个文件里面的函数是调用的方法，然后第二个add而是指向你想调用当前文件的函数名称，所以第二个add要和文件内函数名相同，第一个add要和外部文件调用的时候相同。
*/