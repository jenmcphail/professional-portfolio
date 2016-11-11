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
  },
  dist: {
    options: {
      style: 'compressed',
      sourcemap: 'none',
    },
    files: {
      'public/stylesheets/style-min.css': 'public/stylesheets/sass/style.scss'
    }
  }
},

/**
* Autoprefixer
*/

autoprefixer: {
  options: {
    browsers: ['last 2 versions']
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: 'public/stylesheets/*.css',
    dest: 'public/stylesheets'
  }
},


/**
* Watch
*/
watch: {
css: {
  files: '**/*.scss',
  tasks: ['sass', 'autoprefixer']
    }
  },

});
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.registerTask('default',['watch']);
}