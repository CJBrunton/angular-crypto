mainApp.controller("homeCtrl", ['$scope', '$http', function($scope, $http){	
	$http.get(" https://api.coinmarketcap.com/v1/ticker/")
    .then(function(response) {
        $scope.currencies = response.data;
        console.log('derpsss',$scope.currencies)
    }, function(error){
    	console.log('derp error derps');	
    })
}]);