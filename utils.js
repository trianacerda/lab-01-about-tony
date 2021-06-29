export function isYes(word){

    word = word.toLowerCase();

    if (word === 'yes' || word === 'Yes') 
        return true;
    return false;
}

