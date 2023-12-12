function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

export function Button() {
  return (
    <section>
      <h4>hello sir</h4>
    </section>
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Button />
      <Profile />
    </section>
  );
}
