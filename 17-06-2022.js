// complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str){
    let result = []
    if(str === ""){
      return []
    }else{
      for(let i  = 0; i < str.length; i += 2){
      let toom = str.split("").splice(i,2).join("")
      result.push(toom)
    }
   if(result[result.length - 1].length === 1){
     result[result.length - 1] = result[result.length - 1].concat("","_")
   }
   return result
   }
 }
 