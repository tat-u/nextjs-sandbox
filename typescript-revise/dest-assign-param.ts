// 分割代入引数 (destructuring assignment parameter)
// f1, f2, f3 はいずれも同じ挙動

type Contact = {
  name: string;
  phoneNumber: string;
  email: string;
};

const contacts: Contact[] = [
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

function f1(contact: { name: string; phoneNumber: string; email: string }) {
  const { name, phoneNumber, email } = contact;
  console.log(name, phoneNumber, email);
}

function f2(contact: Contact) {
  const { name, phoneNumber, email } = contact;
  console.log(name, phoneNumber, email);
}

function f3({
  name,
  phoneNumber,
  email,
}: {
  name: string;
  phoneNumber: string;
  email: string;
}) {
  console.log(name, phoneNumber, email);
}

const contact = contacts[0];

f1(contact);
f2(contact);
f3(contact);
