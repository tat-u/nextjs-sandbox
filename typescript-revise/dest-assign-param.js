// 分割代入引数 (destructuring assignment parameter)
var contacts = [
    {
        name: "Jessie Milka",
        phoneNumber: "483-838-8548",
        email: "jmilka@example.com",
    },
    {
        name: "Nadiye Tarek",
        phoneNumber: "1-605-714-4524",
        email: "tarek@acme.com",
    },
    {
        name: "Maymuna Beitris",
        phoneNumber: "1-375-638-6224",
        email: "beit@example.com",
    },
];
function f1(contact) {
    var name = contact.name, phoneNumber = contact.phoneNumber, email = contact.email;
    console.log(name, phoneNumber, email);
}
function f2(contact) {
    var name = contact.name, phoneNumber = contact.phoneNumber, email = contact.email;
    console.log(name, phoneNumber, email);
}
function f3(_a) {
    var name = _a.name, phoneNumber = _a.phoneNumber, email = _a.email;
    console.log(name, phoneNumber, email);
}
var contact = contacts[0];
f1(contact);
f2(contact);
f3(contact);
