var fs = require('fs');
var btoa = require('btoa');
var path = require('path');

var template = ['# one-click',
'',
'Helper links in just on click',
'## Bookmarks'];

var src = path.normalize(__dirname + '/../src/');
var rm = path.normalize(__dirname + '/../README.md');
var files = [{name: 'HTML Editor', filename: 'html.html'}];

for(var i = 0; i < files.length; i++) {
    var file = files[i];
    var content = fs.readFileSync(src + file.filename, 'utf-8');
    var packed = 'data:text/html;base64,'+btoa(content);
//    template.push('<a target="_blank" href="' + packed + '">' + file.name + '</a>');
    template.push('['+ file.name + ']('+packed+')');
}

fs.writeFileSync(rm, template.join('\n'), 'utf-8');
