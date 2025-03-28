module.exports = {
    default: {
      parallel: 2,
      format: ['html:cucumber-report.html', 'json:cucumber-report.json'],
      paths: ['features/**/*.feature'],
      require: ['step_definitions/**/*.js', 'support/**/*.js']
    }
  };