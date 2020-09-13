$(document).ready(function(){
	$(".venobox").venobox();
});

/* ------------------------------------------------------------------- */

var app = angular.module('gallery', []);

app.controller('galleryController', function(PROJECTS_DB, $scope, $filter){
	$scope.data = PROJECTS_DB;
	
	$scope.counted = $scope.data.length;
	$scope.$watch("search", function(query){
		$scope.filteredData = $filter("filter")($scope.data, query);

		var count = $scope.filteredData.length;

		if ( count % 4 == 0 )
		{
			$scope.newClass = "grid_4";
		}
		else if ( count % 2 == 0 )
		{
			$scope.newClass = "grid_2";
		}
		else
		{
			$scope.newClass = "grid_3";
		}

	});
});