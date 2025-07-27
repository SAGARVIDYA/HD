function Banner() {
  return (
    <div
      className="relative h-[60vh] md:h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('https://cdn-9.motorsport.com/images/amp/Yv87wB10/s6/f1-movie-scene.jpg')"
      }}
    >
      {/* Vibrant overlay text box */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-xl shadow-lg text-2xl font-bold z-10">
  F1
</div>


     


    </div>
  );
}

export default Banner;

