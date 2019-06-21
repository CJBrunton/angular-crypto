angular.module("mainApp").controller("HomeController", [
	"$scope",
	"$http",
	function($scope, $http) {
		/*
		 * ui elements rendered on the view
		 */
		$scope.ui = {
			isLoading: true
		};

		/*
		 * Call to coin market cap to return all crypto currencies
		 */
		$http.get(" https://api.coinmarketcap.com/v1/ticker/").then(
			function(response) {
				$scope.ui.isLoading = false;
				$scope.currencies = response.data;
			},
			function(error) {
				console.log("error from call to coinmarket cap", error);
			}
		);
	}
]);
