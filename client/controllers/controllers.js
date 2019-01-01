myApp.controller('attndController', function($scope,$route,$routeParams,$http){

	$scope.getattendance = function(){
		$http.get('/api/attendance/').then(function(response){
			$scope.attendance = response.data;
		});
	};

	$scope.showattendance = function(){
		var id = $routeParams.id;
		$http.get('/api/attendance/'+ id).then(function(response){
			$scope.attendance = response.data;
		});
	};

	$scope.addattendance = function(){
		$http.post('/api/attendance/', $scope.attendance).then(function(response){
			window.location.href = '/';
		});
	};

	$scope.updateattendance = function(){
		var id = $routeParams.id;
		$http.put('/api/attendance/'+ id , $scope.attendance).then(function(response){
			window.location.href = '/';
		});
	};
	
	$scope.deleteattendance = function(id){
		var id = id;
		$http.delete('/api/attendance/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});
