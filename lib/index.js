const { program } = require('commander');
const create = require('./create');

function pp(pkg) {
  program
    .version(pkg.version)
    .description(pkg.description)
    .usage('<command> [options]');

  program
    .command('create <项目名称>')
    .description('创建一个新项目')
    .action((name) => {
      create(name);
    });

  program.parse();
}

module.exports = pp;
