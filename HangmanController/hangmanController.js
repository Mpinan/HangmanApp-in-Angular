app.controller("AppController", function ($scope) {
    const words = ["rat", "cat", "bat"];
    $scope.wrongGuess = [];
    $scope.rightGuess = [];
    $scope.guesses = 6;
    $scope.displayWord = "";
    $scope.input = {
        letter: ""
    }



    selectWord(){
        let index = Math.round(Math.random() * words.length)
        return words[index];
    }

})