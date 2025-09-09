export default function Layout({ left, children, right }) {
  return (
    <div className="ig-shell">
      <aside className="ig-left">{left}</aside>
      <main className="ig-feed">{children}</main>
      <aside className="ig-right">{right}</aside>
    </div>
  );
}
