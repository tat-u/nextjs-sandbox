function InnerText() {
  return <> My Button Component </>;
}

export function MyButton() {
  return (
    <button>
      <InnerText />
    </button>
  );
}
