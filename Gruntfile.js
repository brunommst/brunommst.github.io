module.exports = function (grunt) {

    // Configure main project settings

    grunt.initConfig({

        // Basic Settings and info
        pkg: grunt.file.readJSON('package.json'),

        // Name of Plugin (plugin name without the "grunt-contrib-")
//        cssmin: {
//            combine: {
//                files: {
//                    'grunted/main.css': ['base.css', 'mobile.css']
//                }
//            }
//        },
//
//        uglify: {
//            dist: {
//                files: {
//                    'grunted/javascript-complete.min.js': ['javascript.js', 'interacao-final.js', 'images.js']
//                }
//            }
//        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 4
                },
                files: [{
                    expand: true,
                    cwd: 'images/', 
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'grunted/imagens-min/'
                }]
            }
        }

    });

    // Load the Plugin
//    grunt.loadNpmTasks('grunt-contrib-cssmin');
//    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    //Do the Task
    grunt.registerTask('default', ['imagemin']);

}
