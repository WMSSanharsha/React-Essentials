function TabButton({ onClick, children, isActive }) {
  return (
    <li>
      <button className={isActive ? "active" : null} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
