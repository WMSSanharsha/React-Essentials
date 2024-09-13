function TabButton({ onClick, children }) {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
}

export default TabButton;
