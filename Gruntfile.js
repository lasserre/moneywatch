module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    auto_install: {
      local: {
        cwd: '',
        stdout: true,
        stderr: true,
        failOnError: true,
        npm: '--production'
      }
    },
    execute: {
      target: {
        src: ['server/app/app.js']
      }
    }
  });


  grunt.loadNpmTasks('grunt-auto-install');
  grunt.loadNpmTasks('grunt-execute');

  // Default task(s).
  grunt.registerTask('default', ['auto_install', 'execute']);

};
