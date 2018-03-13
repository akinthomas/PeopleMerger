var fs = require('fs');
var people_merge;
var p_1;
var p_2 ;
 //fs.unlink('peopleComplete.txt'); 
 
fs.readFile('people1.json', 'utf8', function(err, people_1){
  p_1  = JSON.parse(people_1);

fs.readFile('people2.json', 'utf8', function(err, people_2){ 
     p_2  = JSON.parse(people_2);
     
     people_merge = (p_1 + "," + p_2);
     console.log(typeof people_merge);
 

 fs.writeFile("peopleComplete.txt", people_merge);
 	console.log(typeof people_merge);

   })
 })

 //fs.unlink('peopleComplete.txt'); 
 
 fs.readFile('people1.json', 'utf8', function(err, people_1){
   p_1  = JSON.parse(people_1);
   
   fs.readFile('people2.json', 'utf8', function(err, people_2){ 
     p_2  = JSON.parse(people_2); 
     
     people_merge = (p_1.concat(p_2).sort());
     console.log(people_merge);
     fs.writeFile("peopleComplete.txt", people_merge);
   })
 })

