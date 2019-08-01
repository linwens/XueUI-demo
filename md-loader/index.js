
const slugify = require('transliteration').slugify
const striptags = require('./strip-tags').strip
const hljs = require('highlight.js')
const utils = require('./utils.js')

// 使用组件
// const md = require('markdown-it')()
// const MarkdownItAnchor = require('markdown-it-anchor')
const MarkdownItContainer = require('markdown-it-container')
const MarkdownItCheckBox = require('markdown-it-task-checkbox')
const MarkdownItDec = require('markdown-it-decorate')

const vueMarkdown = {
  raw: true, //
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    // ```html``` 给这种样式加个class hljs
    MarkdownIt.renderer.rules.fence = utils.wrap(
      MarkdownIt.renderer.rules.fence
    )
    // ```code``` 给这种样式加个class code_inline
    const codeInline = MarkdownIt.renderer.rules.code_inline
    MarkdownIt.renderer.rules.code_inline = function (...args) {
      args[0][args[1]].attrJoin('class', 'code_inline')
      return codeInline(...args)
    }
    return source
  },
  // highlight: function (str, lang) {
  //   if (lang && hljs.getLanguage(lang)) {
  //     try {
  //       return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>'
  //     } catch (__) {}
  //   }

  //   return '<pre v-pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  // },
  use: [
    // [MarkdownItAnchor, {
    //   level: 2, // 添加超链接锚点的最小标题级别, 如: #标题 不会添加锚点
    //   slugify: slugify, // 自定义slugify, 我们使用的是将中文转为汉语拼音,最终生成为标题id属性
    //   permalink: true, // 开启标题锚点功能
    //   permalinkBefore: true // 在标题前创建锚点
    // }],
    // 'markdown-it-container'的作用是自定义代码块
    [
      MarkdownItContainer,
      'demo',
      {
        validate: params => params.trim().match(/^demo\s*(.*)$/),
        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            const html = utils.convert(striptags(tokens[idx + 1].content, 'script'))
            // 移除描述，防止被添加到代码块
            tokens[idx + 2].children = []

            return `<demo-block>
                          <div slot="desc">${html}</div>
                          <div slot="highlight">`
          }
          return '</div></demo-block>\n'
        }
      }
    ],
    // [MarkdownItContainer, 'tip'],
    // [MarkdownItContainer, 'warning'],
    [MarkdownItCheckBox, {
      disabled: true
    }],
    [MarkdownItDec]
  ]
}

exports.vueMarkdown = vueMarkdown
