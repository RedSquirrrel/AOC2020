const fs = require('fs');


function part1(){
  let counter = 0;
    fs.readFile('./input.txt', (err, data) => {
      console.log(err);
      const passwords = data.toString('utf-8')
    .split("\n")     
    .map(pass => {

      let splitedArray = pass.split(' '); 

      splitedArray[1] = splitedArray[1].slice(0, -1);      
      let found = 0;      
      let findMax, findMin;
      const content = [...splitedArray[2]];      
      
      for(let i = 0; i < splitedArray[2].length; i++){
          if(content[i].includes(splitedArray[1])){
            found++;                        
          } 
        }             
        const range = splitedArray[0];
        
        let splittedRange = range.split('-');
        findMax = splittedRange[1];
        findMin = splittedRange[0];    
      
          if(found <= findMax && found >= findMin){                
                counter++;
              }             
            })  
            console.log('counter part 1: ',counter); // 620
        })
      }

part1();


// ***************** PART 2 ***********************

function part2(){
  let counter = 0;
    fs.readFile('./input.txt', (err, data) => {
      console.log(err);
      const passwords = data.toString('utf-8')
    .split("\n")     
    .map(pass => {

      let splitedArray = pass.split(' '); 

      splitedArray[1] = splitedArray[1].slice(0, -1);    // remove :         
      
      let findMax, findMin;
      const content = [...splitedArray[2]];      
      const range = splitedArray[0];
        
        
        let splittedRange = range.split('-');

        findMax = splittedRange[1] - 1;
        findMin = splittedRange[0] - 1;       

          if((content[findMin] === splitedArray[1] || content[findMax] === splitedArray[1]) && 
            (content[findMin] !== content[findMax])
            ){              
              counter++;
          }
              
        })  
            console.log('counter part 2: ',counter); // 727
        })
      }

part2();