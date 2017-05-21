var path = require( 'path' );
var gulp=require("gulp");
var sass=require("gulp-sass");
var chokidar = require('chokidar');
var process=require("process")
process.setMaxListeners(0);

let convertFromScssToCss=(fullpath)=>{
	gulp.src(fullpath)
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(path.dirname(fullpath)))
};
						
let findNConvertInPresentAndSubFolders=(presentDir='.')=>{
	var watcher=chokidar.watch(presentDir, {
	  ignored: '*.js',
	  ignoreInitial: false,
	  followSymlinks: true,
	  cwd: '.',
	  disableGlobbing: false,

	  usePolling: true,
	  interval: 100,
	  binaryInterval: 300,
	  alwaysStat: false,
	  depth: 99,
	  awaitWriteFinish: {
	    stabilityThreshold: 2000,
	    pollInterval: 100
	  }
	});
	watcher.on('add',fullpath=>{
		if(fullpath.includes(".scss")){
			console.log(`${fullpath} has been added`);
			convertFromScssToCss(fullpath);		
		}
	})
	watcher.on('change',fullpath=>{
		if(fullpath.includes(".scss")){
			console.log(`${fullpath} has been changed`);
			convertFromScssToCss(fullpath);
		}
	})
}
module.exports=findNConvertInPresentAndSubFolders;