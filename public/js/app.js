angular.module("myApp",[])
.controller('mainCtrl',function($scope , $http){
	$scope.books = [];
<<<<<<< HEAD
	$scope.bookInstance ={};

	$http.get('/api/book').success(function(data){
		$scope.books = data;
	})
	$scope.save = function(){
			$http.post('/api/book',$scope.bookInstance).success(function(data){
	    	console.log($scope.bookInstance);
	    	$scope.books.push(data);
	    	console.log(data);
	    	$scope.bookInstance = {};
	  	});
	}
=======
	$http.get('/api/book').success(function(data){
		$scope.books = data;
	})
>>>>>>> 265356c628495119c937d4ed8ac7ca4834eca5c6
})
