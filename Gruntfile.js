module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('aws-credentials.json'),
    s3: {
      options: {
        accessKeyId: '<%= aws.accessKeyId %>',
        secretAccessKey: '<%= aws.secretAccessKey %>',
        bucket: 'hr22welp-sidebar',
        region: 'us-west-1'
      },
      build: {
        cwd: 'static/',
        src: 'bundle.js'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'client/components/',
          src: ['*.css'],
          dest: 'build',
          ext: '.css'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['static/bundle.js'],
        tasks: ['s3', 'cssmin'],
        options: {
          spawn: false,
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-aws');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};