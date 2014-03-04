console.log('You are supa!');

$(function(){
	new MainView();
	
	var dinner = new WinnerCollection();
	dinner.fetch()
	console.log(dinner)
})
