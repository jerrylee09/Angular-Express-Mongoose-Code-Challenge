app.controller('HeroController', ['$scope', '$http', function ($scope, $http) {
  $scope.heros = []; // the array of heros we expect
  $scope.newHero = {}; // a single hero to be added to db



  getheros();
  $scope.OrderBySelect = 'title';


  $scope.superpowers = [{
    id: 1,
    power_name: 'Invisibility'
  }, {
    id: 2,
    power_name: 'Flight'
  }, {
    id: 3,
    power_name: 'Super Speed'
  }, {
    id: 4,
    power_name: 'Heat Vision'
  }, {
    id: 5,
    power_name: 'Super Strength'
  }, {
    id: 6,
    power_name: 'Power Blast'
  }, {
    id: 7,
    power_name: 'Animal Affinity'
  }, {
    id: 8,
    power_name: 'Accelerated Healing'
  }];

  /** --- Scoped functions -- **/
  $scope.submitNewHero = function () {
    var data = $scope.newHero;
    $http.post('/heros', data)
      .then(function () {
        console.log('POST /heros', data);
        getheros();
      });
  };

  $scope.deletehero = function (id) {
    $http.delete('/heros/' + id)
      .then(function () {
        console.log('DELETE /heros/', id);
        getheros();
      });
  };



  /** -- Utility functions -- **/
  function getheros() {
    $http.get('/heros')
      .then(function (response) {
        console.log('GET /heros', response.data);

        var heroDataArray = response.data;


        $scope.heros = heroDataArray;
      });
  }
}]);
