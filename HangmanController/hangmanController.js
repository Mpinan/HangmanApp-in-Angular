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

        selectedWord = selectedWord()

        let tempDisplayWord = "";
        for (let i = 0; i < selectedWord.length; i++) {
            tempDisplayWord += "*"
        }
        $scope.displayWord = tempDisplayWord


        console.log(selectedWord)
    }


    let selectedWord = function () {
        let index = Math.round(Math.random() * words.length);
        return words[index];
    }

    $scope.letterChosen = function () {
        for (let i = 0; i < $scope.rightGuess.length; i++) {
            if ($scope.rightGuess[i].toLowerCase() == $scope.input.letter.toLowerCase()); {
                $scope.input.letter = "";
                return;
            }

        }

        for (let i = 0; i < $scope.wrongGuess.length; i++) {
            if ($scope.wrongGuess[i].toLowerCase() == $scope.input.letter.toLowerCase()); {
                $scope.input.letter = "";
                return;
            }

        }

        let correct = false;
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i].toLowerCase() == $scope.input.letter.toLowerCase()) {
                $scope.displayWord = $scope.displayWord.slice(0, i) + $scope.input.letter.toLowerCase() + $scope.displayWord.slice(i + 1)
                correct = true;
            }
        }
        if (correct) {
            $scope.rightGuess.push($scope.input.letter.toLowerCase());
        } else {
            $scope.wrongGuess.push($scope.input.letter.toLowerCase());
        }
        $scope.input.letter = ""
    }

    newGame()
})