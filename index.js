var fs = require( 'fs' );
var path = require( 'path' );
var gulp=require("gulp");
var sass=require("gulp-sass");
var process=require("process")
process.setMaxListeners(0);
var findNConvertInPresentAndChildFolders=(prev='.',pres='.',itterate=true)=>{
	let content=fs.readdir(`${prev}/${pres}`,(err,files)=>{
		if(err){
			return;
		}
		files.forEach(x=>{
			fs.lstat(`${prev}/${pres}/${x}`,(err,stats)=>{
				if(err){
					return;
				}
				if(stats.isFile()){
					if(x.includes(".scss")){
						let conv=(previous,present,file)=>{
							gulp.src(`${previous}/${present}/${file}`)
							.pipe(sass().on('error', sass.logError))
							.pipe(gulp.dest(`${previous}/${present}`))
						};
						fs.watchFile(`${prev}/${pres}/${x}`,(cur,pre)=>{
							console.log(`${prev}/${pres}/${x} has changed`);
							conv(prev,pres,x)
						});
						conv(prev,pres,x);
					}
				}
				
				if(stats.isDirectory()&&itterate){
					findNConvertInPresentAndChildFolders(`${prev}/${pres}`,`${x}`);
				}
			});
		});
	});
}
module.exports=findNConvertInPresentAndChildFolders;