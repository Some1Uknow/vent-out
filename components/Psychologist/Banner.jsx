const Banner = () => {
    return (
      <div className="h-full pr-40 pt-24 border-r-2">
        <p className="font-Madimi mt-10 text-left text-pink-800">
          <span className="text-8xl">Psychologists</span>
          <br />
          <span className="text-8xl">on VentOut</span>
          <br />
          <span className="text-7xl">get a lot of perks!</span>
        </p>
        <ul className="mt-16 list-none list-inside font-Poppins font-semibold flex flex-col gap-2.5 text-xl text-pink-600">
          <li>- Expanded reach to clients worldwide</li>
          <li>- Flexible scheduling using client's details</li>
          <li>- Find patients according to your expertise</li>
          <li>- Your data stays safe here</li>
          <li>- We have the best support staff</li>
        </ul>
      </div>
    );
  };
  
  export default Banner;
  