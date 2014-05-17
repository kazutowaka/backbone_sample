'use strict';

/* Controllers */

var gistApp = angular.module('gistApp', []);
/*
gistApp.controller('GistListCtrl', ['$scope', '$http',
  function($scope, $http) {
    if($scope.query() != undefined){
    	$http.get('https://api.github.com/users/' +
	      $scope.query() + '/gists?callback=?').success(
	      function(data) {
	      	$scope.gists = data;
	      }
	    );
    }
    

  }]);
*/

gistApp.controller('GistListCtrl', function($scope, $http) {
  	console.log($scope.query);
	
	//ng-modelの値が変化するたびに呼ばれる  
  	$scope.onChange = function () {
	    $http({
  		method:'get',
  		params:'callback=json',
  		url:'https://api.github.com/users/'+$scope.query+'/gists',
  		responseType:"json"
  		}
  		).success(function(response) {
			//console.log(response.data);
			//console.log(response);

		$scope.gists = response;
		});
	};
  	
  	
  
});
//取得後のjsonpの前にあるコメントが邪魔してうまく動かない
//jsonpを使う場合callbackメソッドを呼ばないと行けない
// gistApp.controller('GistListCtrl', function($scope, $http) {
//   	$http.jsonp('https://api.github.com/users/ta/gists?callback=jsonp').success(function(response) {
// 		//console.log(response.data);
// 		console.log(response);
// 		//console.log(callback(response.data));
		
// 		$scope.gists = [];
// 	});
  
// });

// gistApp.controller("GistListCtrl", ["$scope","$resource",function($scope,$resource) {
//           var contents = $resource("hiratsuka.json");
//           console.log(contents.data);
// 			console.log(contents);
//           $scope.gists = contents.data; // getはobject、queryはarray
//         }]);