const triangleStars = function(h){
	const inner = function(height){
		if(height<=0)
		return"";
	const str = function(num,char){
		if(num<=0)
			return "";
		return char+str(num-1,char);
	}
	console.log(str(h-height," ")+str(2*height-1,"*"));
	inner(height-1);
	}
	inner(h);
}

const reverse = function(str){
	const func = function(index){
		if(index<0){
			return "";
		}
		return str[index]+func(index-1);
	}
	return func(str.length-1);
}

const pow = function(base,n){
	if(n<=0)
		return 1;
	return base * pow(base,n-1);
}
const checkerboard = function(size){
	const func = function(n){
		if(n<=0)
		return"";
	const str = function(num,char){
		if(num<=0)
			return "";
		return char+" "+str(num-1,char);
	}
	if(n%2==0)
		console.log(" "+str(size,"*"));
	else
		console.log(str(size,"*"));
	func(n-1);
	}	
	func(size);
}

const boat = function(h){
	const str = function(num,char){
		if(num<=0)
			return"";
		return char+" "+str(num-1,char);
	}
	const sail= function(n)
	{
		if(n>h/2)
		return;
	console.log(str(h/2," ")+str(n,"*"));
	sail(n+1);
	}
	const mast= function(n){
		if(n>h/5){
			if(h%2!==0)
			console.log(str(h/2," ")+str(h/30,"*"));
			return;
}
		console.log(str(h/2," ")+str(h/30,"*"));
		
		mast(n+1);
	};
	const hull= function(n){
		if(n<=7*h/10+1)
		{
			
			return;
		}
		console.log(str(h+1-n," ")+str(n-(h-n)-1,"*"));
		hull(n-1);
	}
	sail(1);
	mast(1);
	hull(h+1);
}
