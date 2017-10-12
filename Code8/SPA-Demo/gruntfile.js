module.exports=function(grunt){
console.log("Grunt Loaded...");	
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	uglify: {
    letsdoit: {
      files: {
        'release/output.min.js': ['scripts/*.js']
      }
	}
    
		
  }
	
});
grunt.loadNpmTasks('grunt-contrib-uglify');	
grunt.registerTask('default', ['uglify:letsdoit']);	
}