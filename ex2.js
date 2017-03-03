var names = ["Kurt", "Bob", "Ian", "Ida", "Jan"];

//for (var i = 0; i < names.length; i++) {
//    console.log(names[i]);
//}

names.forEach(function(name){
    console.log(name);
});

var filtered = names.filter(function(name){
    return name[0] === "I";
});
console.log(filtered);

names = names.map(function(name){
   return "<li>" + name + "</li>"; 
});
var lis = "<ul>" + names.join("") + "</ul>";
console.log(lis);



//setTimeout(function() {
//    console.log("Hello");
//}, 0);
//console.log("hi");