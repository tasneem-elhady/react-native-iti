// task 1
var x = 10;
var y = 11;
[y,x] = [x,y];
console.log(x);
console.log(y);


// task 2
function find_min_max(...arr){
    arr.sort( function(a,b){return a-b;} );
    return [arr[0],arr[arr.length-1]];
}
var min = 0;
var max = 0;
var test = [8,6,4,1000,10];
[min, max] = find_min_max(...test);
console.log("min : "+min+" , " +"max : "+max);


// task 3
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
console.log(fruits.every((val) => typeof val === 'string'));
console.log(fruits.some(val => val.startsWith('a')));
var fruits1 = fruits.filter(val => val.startsWith('s')||val.startsWith('b'))
var fruits2 = fruits.map(val=>"I like " + val);
fruits1.forEach(val=>console.log(val));
fruits2.forEach(val=>console.log(val))