function groupAnagrams(words){
    const map = new Map();
    let result = [];
    words.forEach(word => {
        let letters = new Array(26).fill(0); 
        for (let i = 0; i < word.length; i++) {
            letters[word.charCodeAt(i) - 97]++;
        }
        
        if (!map.has(JSON.stringify(letters))) {
            map.set(JSON.stringify(letters), [word]);
        } else {
            map.get(JSON.stringify(letters)).push(word);
        }
    });
    
    map.forEach((value, key) => result.push(value));
    return result;
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));
  