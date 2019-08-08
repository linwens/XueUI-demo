# 生成组件入口文件
npm run build:entry

# 打包lib
npm run lib

# 发布到GitHub页面
npm run build
cd ./dist
git init
git config user.name "${U_NAME}"
git config user.email "${U_EMAIL}"
git add .
git commit -m "Update tools"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:${P_BRANCH}