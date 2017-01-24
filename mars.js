
var xMax = 10;
var yMax = 10;
var f = new Array();

for (i = 0; i <= xMax; i++){
	f[i]=new Array();
	for (j=0; j <= yMax; j++){
		f[i][j] = 0;
	}
}

f.forEach(function(position){
	console.log(position);
});
