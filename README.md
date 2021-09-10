# pp

通用脚手架，灵感来源于 [@vue/cli](https://github.com/vuejs/vue-cli) ，现阶段(2021.09)该项目主要以**学习**和**自用**为目的。

##  设计目标

支持创建

- [ ] 前端项目 (默认支持 vue 和 react 的 spa 类型项目)
- [ ] 后端项目 (express)
- [ ] npm package (build target: lib)

内置以下功能

- [ ] babel
- [ ] typescript
- [ ] eslint 
- [ ] stylelint
- [ ] css preprocessor
- [ ] 创建 git
- [ ] 自动安装依赖
- [ ] 创建 web 服务

插件能力

为了实现创建更多类型的项目，需要提供插件能力，向外界暴露一些 api ，提供 `文件、模板读写` , `package.json读写` , `命令行询问` , `webpack 配置` , `执行命令` , `远程下载` 。
