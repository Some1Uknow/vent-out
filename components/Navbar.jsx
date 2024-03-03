const Navbar = () => {
  return (
    <nav className="bg-pink-800 p-4 flex justify-between items-center">
      <div className="text-white text-7xl font-Madimi font-bold">VentOut</div>
      <button className="transition hover:duration-300 hover:bg-pink-900 text-white bg-transparent font-bold py-2 px-4 rounded">
        <span className="font-Madimi text-2xl m-2 p-2">Sign In</span>
      </button>
    </nav>
  );
};

export default Navbar;
