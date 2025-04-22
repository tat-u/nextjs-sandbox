// 分割代入引数 (destructuring assignment parameter)
// f1, f2, f3 はいずれも同じ挙動

type Contact = {
  name: string;
  phoneNumber: string;
  email: string;
};

// 冗長かもしれないが、とりあえずこういうものがあるとする
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

// 一つのオブジェクトとして受け取り、愚直に型注釈を書く
function f1(contact: { name: string; phoneNumber: string; email: string }) {
  const { name, phoneNumber, email } = contact;
  console.log(name, phoneNumber, email);
}

// 一つのオブジェクトとして受け取り、typeで定義したものを用いて型注釈を書く
function f2(contact: Contact) {
  const { name, phoneNumber, email } = contact;
  console.log(name, phoneNumber, email);
}

// 分割代入引数を用いる場合
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

// 渡されるオブジェクトのプロパティのうち、一部だけ受け取ることも可能
function f4({ name, phoneNumber }: { name: string; phoneNumber: string }) {
  console.log(name, phoneNumber);
}

// 残余引数を使うことができる
function f5({ name, ...rest }: { name: string }) {
  console.log(name, rest);
}

// XXX: 受け取る側の引数名は、渡されるオブジェクトのプロパティ名と一致していないといけない
// 「プロパティ a, b, c が無いため代入できない」と言われる
function f6({ a, b, c }: { a: string; b: string; c: string }) {
  console.log(a, b, c);
}

// 別名で受け取る場合
// コロンの後に引数名が来て、プロパティ名に型注釈を行うのがポイント
function f7({
  name: a,
  phoneNumber: b,
  email: c,
}: {
  name: string;
  phoneNumber: string;
  email: string;
}) {
  console.log(a, b, c);
}

const contact = contacts[0];

f1(contact);
f2(contact);
f3(contact);
f4(contact);
f5(contact);
// f6(contact);
f7(contact);
