function rot13(str) { 
  let cipher = [
    {input:"N", output:"A"},
    {input:"O", output:"B"},
    {input:"P", output:"C"},
    {input:"Q", output:"D"},
    {input:"R", output:"E"},
    {input:"S", output:"F"},
    {input:"T", output:"G"},
    {input:"U", output:"H"},
    {input:"V", output:"I"},
    {input:"W", output:"J"},
    {input:"X", output:"K"},
    {input:"Y", output:"L"},
    {input:"Z", output:"M"},
    {input:"A", output:"N"},
    {input:"B", output:"O"},
    {input:"C", output:"P"},
    {input:"D", output:"Q"},
    {input:"E", output:"R"},
    {input:"F", output:"S"},
    {input:"G", output:"T"},
    {input:"H", output:"U"},
    {input:"I", output:"V"},
    {input:"J", output:"W"},
    {input:"K", output:"X"},
    {input:"L", output:"Y"},
    {input:"M", output:"Z"},
  ];
  let words = str.split(" ");
  let letters = words.map(word=>{
  let result = []; 
  word.split("").map(letter=>{
  let regex = /[!.?,]/g;
      for (let i=0; i<cipher.length; i++) {
        if (letter == cipher[i].input){
          result.push(cipher[i].output)
        }else if(regex.test(letter)){
          result.push(letter)
          break;
        }
      }

    });
    return result.join('');
    });
  return letters.join(" ")
}

// Change the inputs below to test
rot13("SERR CVMMN!");
