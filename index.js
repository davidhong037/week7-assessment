console.time('Run time')

function findLongestWord(string){
    let words = string.split(' ')
    let wordLength = 0

    for(let i = 0; i < words.length; i++){
        if(words[i].length > wordLength){
            wordLength = words[i].length
        }
    }
    return wordLength
}

console.log(findLongestWord("It's time to party"))
console.timeEnd('Run time')

// The run time for this function was approximately 6.919ms
// I believe the space complexity of this function is O(n)

