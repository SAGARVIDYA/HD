function Moviecard({ poster_path, title }) {
  return (
    <div className="flex flex-col items-center m-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div
        className="relative h-[40vh] w-[180px] bg-center bg-cover rounded-xl shadow-lg"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${poster_path}')`,
        }}
      >
        {/* Optional dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
      </div>
      <div className="mt-2 text-center text-sm font-semibold w-[180px] truncate">
        {title}
      </div>
    </div>
  );
}

export default Moviecard;


