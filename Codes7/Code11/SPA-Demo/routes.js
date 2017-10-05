app.config(function($routeProvider,$locationProvider,MOBILES,NEWS){
	$locationProvider.hashPrefix('');
	$routeProvider.when("/",{
		templateUrl:'home.html'
	}).when("/about",{
		templateUrl:'aboutus.html',
		controller:'aboutctrl'
	}).when("/contact/:name/:job",{
		templateUrl:'contactus.html',
		controller:'contactctrl'
		
	}).when(NEWS,{
		template:"<h1>News are </h1>"
	}).when(MOBILES,{
		templateUrl:'mobile.html',
		controller:'mobilectrl'
		
	}).otherwise({redirectTo:"/"
        });

})