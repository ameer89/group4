var myString = "MY NAME IS AMIRHY";

function Word(word) {
    this.setLength = function() {
        this.length = word.length;
    }
}

function findLongestString(myString) {
    var arr = myString.split(" ");

    maxLength = arr[0];
    for (var i = 0; i < arr.length; i++) {
        var word1 = new Word(arr[i]);
        word1.setLength();
        if (word1.length > maxLength.length )
        {
            maxLength = arr[i];
        }  
    }
    console.log(maxLength);
}

findLongestString(myString);