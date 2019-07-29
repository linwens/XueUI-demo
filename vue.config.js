const path = require('path')

// 为了解析md文件，写些方法
const md = require('markdown-it')()
const slugify = require('transliteration').slugify
const striptags = require('./strip-tags')

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
  })
  return str
}

function wrap(render) {
  return function() {
    return render.apply(this, arguments)
                .replace('<code v-pre class="', '<code class="hljs')
                .replace('<code>', '<code class="hljs">')
  }
}

module.exports = {
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'examples/main.js', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))

    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
    // 编译文档
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader')
      .options({
        use: [
          [require('markdown-it-anchor'), {
            level: 2,
            slugify: slugify,
            permalink: true,
            permalinkBefore: true
          }],
          [require('markdown-it-container'), 'demo', {
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
          }],
          [require('markdown-it-container'), 'tip'],
          [require('markdown-it-container'), 'warning']
        ]
      })
      .before('vue-markdown-loader')
      .use('define-rule')
      .loader(function (MarkdownIt, source) {
        MarkdownIt.renderer.rules.table_open = function () {
          return '<table class="table">'
        }
        MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence)
        return source
      })
      .end()
    // readme 编译
    // config.module.rule('md')
    //   .test(/\.md/)
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .end()
    //   .use('vue-markdown-loader')
    //   .loader('vue-markdown-loader/lib/markdown-compiler')
    //   .options({
    //     raw: true
    //   })
  }
}
