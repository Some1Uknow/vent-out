const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-7xl font-Madimi font-bold">Ventout</div>
      <div className="flex gap-4"></div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <span className="font-Madimi text-2xl m-2 p-2">Sign In</span>
      </button>
    </nav>
  );
};

export default Navbar;
