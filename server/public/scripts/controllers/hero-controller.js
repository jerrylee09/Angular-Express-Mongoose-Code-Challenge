app.controller('HeroController', ['$scope', '$http', function ($scope, $http) {
  $scope.heros = []; // the array of heros we expect
  $scope.newHero = {}; // a single hero to be added to db

  getheros();
  $scope.OrderBySelect = 'alias';

$scope.options = {
  "power_name_1": "Flight",
  "power_name_2": "Invisibility",
  "power_name_3": "Accelerated Healing",
  "power_name_4": "Super Strength",
  "power_name_5": "Super Speed",
  "power_name_6": "Power Blast",
  "power_name_7": "Heat Vision",
  "power_name_8": "Animal Affinity"
}

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
