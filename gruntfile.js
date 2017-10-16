module.exports=function(grunt){
console.log("Grunt Loaded...");	
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	watch: {
  scripts: {
    files: ['**/*.js'],
    tasks: ['clean:release','uglify:letsdoit']
   
  },
},
	uglify: {
    letsdoit: {
      files: {
        'release/output.min.js': ['scripts/*.js']
      }
	}
    
		
  },
clean: {
 
  release: ['release']
}	
	
});
grunt.loadNpmTasks('grunt-contrib-uglify');	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['watch']);	
}