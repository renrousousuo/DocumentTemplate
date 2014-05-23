void function() {
  // 将 word 复制的文本转换成 markdown
  var editor = document.querySelector('textarea');

  if (!editor) {
    return;
  }

  var text = editor.value.replace(/^\d.*\s\d+$/gm, '' // 去掉目录
  ).replace(/^\s*$\n/gm, '' // 去掉空白行
  ).replace(/^[\d.]+/gm, function(all) { // 处理章节段落
    var list = all.split('.');
    return new Array(list.length + 2).join('#') + ' ';
  }).replace(/^[a-z][.．]\s*/gm, '1. ' // 处理列表
  ).replace(/^\s*([^!#\d].*)$/gm, function(all, line) { // 处理说明
    return '<!-- ' + line + ' -->';
  }).replace(/^(#|<\!).*$/gm, '$&\n'
  ).replace(/<!--\s*(.*?)\s*-->\s*((1\..*\n)+)/mg, '<!--\n$1\n$2-->\n\n'); // 合并说明

  console.log(text);
}();