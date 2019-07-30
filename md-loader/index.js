
const slugify = require('transliteration').slugify
const striptags = require('./strip-tags')
const hljs = require('highlight.js')
const convert = require('./utils.js').convert
const wrap = require('./utils.js').wrap

const md = require('markdown-it')({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>'
      } catch (__) {}
    }

    return '<pre v-pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
}).use(require('markdown-it-anchor'), {
  level: 2,
  slugify: slugify,
  permalink: true,
  permalinkBefore: true
}).use(require('markdown-it-container'), 'demo', {
  validate: function (params) {
    return params.trim().match(/^demo\s*(.*)$/);
  },
  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
    if (tokens[idx].nesting === 1) {
      // 获取正则捕获组中的描述内容,即::: demo xxx中的xxx
      var description = (m && m.length > 1) ? m[1] : ''
      // 获得内容
      var content = tokens[idx + 1].content
      // 解析过滤解码生成html字符串
      var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
      // 获取script中的内容
      var script = striptags.fetch(content, 'script')
      // 获取style中的内容
      var style = striptags.fetch(content, 'style')
      // 组合成prop参数,准备传入组件
      var jsfiddle = { html: html, script: script, style: style };
      // 是否有描述需要渲染
      var descriptionHTML = description
        ? md.render(description)
        : ''
      // 将jsfiddle对象转换为字符串,并将特殊字符转为转义序列
      jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle))
      // 起始标签,写入demo-block模板开头,并传入参数
      return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                <div class="source" slot="source">${html}</div>
                ${descriptionHTML}
                <div class="highlight" slot="highlight">`
    }
    return '</div></demo-block>\n'
  }
}).use(require('markdown-it-container'), 'tip'
).use(require('markdown-it-container'), 'warning')

module.exports = function (MarkdownIt, source) {
  MarkdownIt.renderer.rules.table_open = function () {
    return '<table class="table">'
  }
  MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence)
  return source
}
