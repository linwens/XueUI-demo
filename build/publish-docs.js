#!/usr/bin/env node

/**
 * 一键发布文档到本仓库的gh-pages分支
 */
const execSync = require('child_process').execSync // child_process 模块提供了衍生子进程的能力, execSync是同步的方法将会阻塞 Node.js 事件循环
const VERSION = require('../package.json').version
const GIT_COMMIT = execSync('git rev-parse --short HEAD').toString().replace(/\n/, '')
// const CURRENT_BRANCH = execSync('git symbolic-ref --short -q HEAD').toString().replace(/\n/, '')
// const PUB_BRANCH = 'publish-docs'
// execSync(`git checkout ${PUB_BRANCH}`)
// execSync(`git merge develop --allow-unrelated-histories `)
// execSync('npm run build:docs')
// execSync(`git add . && git commit -m \"[deploy] ${GIT_COMMIT} - [release] ${VERSION}\"`)
// execSync('git subtree push --prefix dist github gh-pages')
// execSync(`git checkout ${CURRENT_BRANCH}`)

const ghpages = require('gh-pages')
execSync('npm run build')
ghpages.publish('dist', {
  user: {
    name: 'linwens',
    email: 'lws200841001@gmail.com'
  },
  repo: 'https://github.com/linwens/xueui-demo.git',
  message: `[deploy] ${GIT_COMMIT} - [release] ${VERSION}`
})
