
function wordCount(text){
    const [, ...words] = text.split("");
    const wordCounts = {};

    for(const [word] of words ){
        const lowerCaseWord = word.toLowerCase();

        if(lowerCaseWord in wordCounts){
            wordCounts[lowerCaseWord]++ ;
        } else {
            wordCounts[lowerCaseWord] = 1 ;
        }
            
    }
    return wordCounts ;
}

const text = "This is a test string. It contains few words. Our function will tell no of each letter and spaces used ";
const wordCounts = wordCount(text);
for (const [word, count] of Object.entries(wordCounts)) {
  console.log(`${word}: ${count}`);
}