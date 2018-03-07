module.exports = function(grunt) {


    /**
    *   Register the needed grunt tasks.
    */
    ['grunt-contrib-uglify',
    'grunt-contrib-concat',
    'grunt-contrib-watch'].forEach( t => grunt.loadNpmTasks(t));

  grunt.initConfig({

    concat:{
        app:{
            src: [
              `./bower_components/angular/angular.js`, 
              `./app/javascript/main.js`,
              `./app/javascript/controllers/*.js`
            ],
            dest:'./public/javascript/main.js'
        }           
    },
    watch : {
      app: {
          files: [
              './bower_components/angular/angular.js',                
              './app/javascript/**/*.js'
          ],tasks: ['concat:app'] ,
          options: {
              livereload: true,
          },        
      }
    }


  })
    /** 
    * Register the commands
    */
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build-app', ['concat:app']);


};



