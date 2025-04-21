export default function Listing({
  users,
}: {
  users: { id: number; name: string }[];
}) {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <p>
        リストのレンダー。map()の中で直接JSX要素を使用する場合は、li要素でkey属性を指定する必要がある。
      </p>
      <p>
        keyに指定する値は一意であるべきで、動的に生成せず元からあるデータとして用意しておくべきである。例えば、Math.randomでその場しのぎ的にキーを生成すると、レンダーのたびにキーが変化し、コンポーネントとDOMが再生成され、UXの悪化につながる。
      </p>
    </>
  );
}
