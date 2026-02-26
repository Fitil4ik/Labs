function array() {
    const data = [];
    const arr = function(i) {
        console.log (data[i]);
    };
    arr.push = function(value) {
        data.push(value);
    };
    arr.pop = function() {
        console.log (data.pop());
    };

    return arr;
}
const arr = array();
arr.push('first'); 
arr.push('second'); 
arr.push('third');
arr.push('fourth');

arr(0);
arr(1);
arr(2);
arr(3);

arr.pop();
arr.pop();
arr.pop();  
arr.pop();
arr.pop(); //undefined