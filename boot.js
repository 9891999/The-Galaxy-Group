var Boot=Boot||{
	version:'1.0.0',
	//wxAppid:'wxb9c69c9ab1d9172f',
	//ossDomain:'oss.thjzchina.com',
	ossDomain:'/OSS',
	appDomain:'120.77.255.68',
	//appDomain:'oa.abc.mt4mate.com',
	//appDomain:'192.168.31.127:8080',
	//apiDomain:'api.thjzchina.com',
	//serviceDomain:'websocket.mt4-dc.net:8888',
	//serviceDomain:'192.168.31.188:81',
	appUrl:function(method){
		return '//'+Boot.appDomain+method;
	},
	extend:function(destination,source){
		for(var property in source){
			destination[property]=source[property];
		}
		return destination;
	},
	random:function(){
		return new Date().getTime();
	},
    loadJs:function(src,cdn){
		var src=!cdn?src+'?_dc='+Boot.random():src;
		document.write('<'+'script src="'+src+'"'+' defer><'+'/script>');
	},
	maintenance:function(){
		window.location.href='maintenance.html';
	},
	upgrade:function(){
		//Boot.maintenance();
		//return false;
		var version=window.localStorage.getItem('version');
		if(version!=Boot.version){
			window.location.href='upgrade.html?_dc='+Boot.random();
		}
	}
}


