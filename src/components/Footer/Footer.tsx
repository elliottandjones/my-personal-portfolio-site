export default function Footer() {
  return (
    <footer id="footer" className="footer" style={styles}>
      <p>Copyright &copy; 2021</p>
    </footer>
  );
}

const styles: React.CSSProperties = {
  color: "var(--lightslate)",
  margin: 0,
  fontSize: 12,
  textShadow: "1px 2px 10px rgba(0, 0, 0, 0.7)",
  maxHeight: 38,
};
