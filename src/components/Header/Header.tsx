import './Header.css';

function Header() {
  return (
    <header>
      <h1>Tienda - El topo</h1>
      <div className='dropdown'>
        <button className='info-button'>ℹ️</button>
        <div className='dropdown-content'>
          <p>
            Si no respondo en el chat me quedé dormido, soy de españa y mañana
            madrugo, no me descarten por eso 😴✨
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
