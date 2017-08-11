module.exports = function (grunt) {
    
    grunt.initConfig({
        jshint: {
            all: ['js/*.js']
        },
        watch: {
            jshint: {
                files: ['js/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'js/*.js',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: true,
                    browser: ['chrome']
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    
    grunt.registerTask('default', ['jshint', 'browserSync', 'watch']);
};