app.controller("AppController", function ($scope, $timeout, $http) {
    
    $scope.incorrectLettersChosen = [];
    $scope.correctLettersChosen = [];
    let selectedWord = ""
    $scope.randomWord = ""
    $scope.displayWord = "";
    $scope.guesses = 6;

    $http({
        method: 'GET',
        url: '../words.md',

    }).then(function success(response) {
        newGame()
        let index = response.data.wordObject.length
        $scope.randomWord = response.data.wordObject[Math.round(Math.random() * index)]
        selectedWord = $scope.randomWord.word
        console.log(selectedWord)
        console.log($scope.randomWord)
        
    });

    $scope.input = {
        letter: ""
    }

    
    let newGame = function () {
        $scope.incorrectLettersChosen = [];
        $scope.correctLettersChosen = [];
        $scope.guesses = 6;
        console.log($scope.randomWord)
        console.log(selectedWord)
        $scope.displayWord = "";
        var tempDisplayWord = '';
        for (var i = 0; i < selectedWord.length; i++) {
            tempDisplayWord += '*';
        }
        $scope.displayWord = tempDisplayWord;
        
        // Random word selection.
    }

    console.log(selectedWord)
    $scope.letterChosen = function () {
        console.log(selectedWord)
        for (let i = 0; i < $scope.correctLettersChosen.length; i++) {

            if ($scope.correctLettersChosen[i].toUpperCase() == $scope.input.letter.toUpperCase()) {
                $scope.input.letter = "";
                return;
            }

        }

        for (let i = 0; i < $scope.incorrectLettersChosen.length; i++) {

            if ($scope.incorrectLettersChosen[i].toUpperCase() == $scope.input.letter.toUpperCase()) {
                $scope.input.letter = "";
                return;
            }

        }

        let correct = false;
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i].toLowerCase() == $scope.input.letter.toLowerCase()) {
                $scope.displayWord = $scope.displayWord.slice(0, i) + $scope.input.letter.toUpperCase() + $scope.displayWord.slice(i + 1);
                correct = true;
            }
        }

        if (correct) {
            console.log("I am correct")
            $scope.correctLettersChosen.push($scope.input.letter.toUpperCase());
        } else {
            $scope.guesses--;
            console.log("I am incorrect")
            $scope.incorrectLettersChosen.push($scope.input.letter.toUpperCase());
        }

        $scope.input.letter = ""
        if ($scope.guesses == 0) {
            $timeout(function () {
                newGame();
            }, 500);
        }

        if ($scope.displayWord.indexOf('*') == - 1) {
            $timeout(function () {
                newGame();
            }, 500);
        }
        $scope.showHint = false;
        $scope.hint = function () {
            $scope.showHint = !$scope.showHint
            $scope.guesses--;
            $scope.hint = $scope.randomWord.hint
        }
    }
    
    
    // newGame()
})