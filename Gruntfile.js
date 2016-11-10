module.exports = function(grunt) {
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

/**
* Sass
*/
sass: {
  dev: {
    options: {
        style: 'expanded',
        sourcemap: 'none',
      },
    files: {
    'public/stylesheets/style.css': 'public/stylesheets/sass/style.scss'
    }
  }
},

/**
* Watch
*/
watch: {
css: {
  files: '**/*.scss',
  tasks: ['sass']
    }
  },

});
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default',['watch']);
}