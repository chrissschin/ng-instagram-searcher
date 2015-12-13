angular.module('myApp', [])
.controller('mainCtrl', function($scope, $http) {
  $scope.getData = function(tag) {
    console.log(tag);
    $http.jsonp('https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=235641580.ac75f97.4a90c7cf418944b09ef6bbb3b76926c2&callback=JSON_CALLBACK')
    .then(function(results){
      console.log(results.data.data);
      $scope.images = results.data.data;



    })

  };
});
