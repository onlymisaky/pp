const inquirer = require('inquirer');

async function create(projectName) {
  const answerMap = await inquirer.prompt([
    {
      name: 'name',
      message: '项目名称',
      type: 'input',
      default: projectName,
    },
    {
      name: 'description',
      message: '项目描述',
      type: 'inqweqweqweput',
    },
    {
      name: 'author',
      message: '作者',
      type: 'input',
    },
    {
      name: 'features',
      message: '检查项目所需的功能',
      type: 'checkbox',
      choices: [
        {
          name: 'Babel',
          value: 'babel',
          short: 'Babel',
          link: 'https://babeljs.io/',
          checked: true,
        },
        {
          name: 'TypeScript',
          value: 'ts',
          short: 'TS',
          link: 'https://www.tslang.cn/',
        },
        {
          name: 'ESLint',
          value: 'eslint',
          short: 'ESLint',
          link: 'https://eslint.org/',
          checked: true,
        },
        {
          name: 'StyleLint',
          value: 'stylelint',
          short: 'StyleLint',
          link: 'https://stylelint.io/',
        },
        {
          name: 'CSS 预处理器',
          value: 'css-preprocessor',
          short: 'CSS 预处理器',
        },
      ],
    },
    {
      name: 'eslint',
      message: '选择预设的 ESLint 规则',
      when: (answers) => answers.features.includes('eslint'),
      type: 'list',
      choices: [
        {
          name: 'ESLint with error prevention only',
          value: 'base',
          short: 'Basic',
        },
        {
          name: 'ESLint + Airbnb config',
          value: 'airbnb',
          short: 'Airbnb',
        },
        {
          name: 'ESLint + Standard config',
          value: 'standard',
          short: 'Standard',
        },
        {
          name: 'ESLint + Prettier',
          value: 'prettier',
          short: 'Prettier',
        },
      ],
    },
    {
      name: 'stylelint',
      message: '选择预设的 StyleLint 规则',
      when: (answers) => answers.features.includes('stylelint'),
      type: 'list',
      choices: [
        {
          name: 'StyleLint with error prevention only',
          value: 'base',
          short: 'Basic',
        },
        {
          name: 'StyleLint + Standard config',
          value: 'standard',
          short: 'Standard',
        },
      ],
    },
    {
      name: 'git',
      message: '是否创建 git 仓库',
      type: 'confirm',
      default: true,
    },
    {
      name: 'git-msg',
      message: 'git message',
      type: 'input',
      when: (answers) => answers.git,
      default: 'initial project',
    },
  ]);

  // eslint-disable-next-line no-console
  console.log(answerMap);
}

module.exports = create;
