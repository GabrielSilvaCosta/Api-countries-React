function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto py-6 px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Where in the world?</h1>
        
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Welcome
        </button>
      </div>
    </header>
  );
}

export default Header;
