angular.module("myApp",[])
.controller('mainCtrl',function($scope , $http){
	$scope.books = [];
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
})
