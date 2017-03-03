var name = {firstName: "Kurt", lastname: "Woonegut"};

function nameFactory() {
  return {firstName: "Kurt", lastname: "Woonegut", phone: "12345678"};
};

//var names = ["Kurt", "Bob", "Ian", "Ida", "Jan"];
//names.phone = "2132139912";
//console.log(names.phone);

var n = nameFactory();
//delete n.firstName;

for(p in n) {
    console.log(p, n[p]);
};

n.phone = "821312923";
console.log(n.firstName, n.lastname, n.phone);