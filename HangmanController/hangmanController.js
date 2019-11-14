app.controller("AppController", function ($scope) {
    const words = ["rat", "cat", "bat"];
    $scope.wrongGuess = [];
    $scope.rightGuess = [];
    $scope.guesses = 6;
    $scope.displayWord = "";

    $scope.input = {
        letter: ""
    }

    let newGame = function () {
        $scope.wrongGuess = []
        $scope.rightGuess = [];
        $scope.guesses = 6;
        $scope.displayWord = "";

        selectWord = selectWord()

        let tempDisplayWord = "";
        for (let i = 0; i < selectWord.length; i++) {
            tempDisplayWord += "*"
        }
        $scope.displayWord = tempDisplayWord


        console.log(selectWord)
    }


    let selectWord = function () {
        let index = Math.round(Math.random() * words.length)
        return words[index];
    }

    $scope.letterChose = function(){
        
    }

    newGame()
})