const WhyChoose = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-24 mt-28 text-center">
      <h1 className="text-4xl font-jakarta font-medium">
        Why Choose <span className="font-bold">Upride</span> as your choice
        <br /> for a comprehensive driving learning experience?
      </h1>
      <div className="grid grid-cols-4 mt-16">
        <div className="font-jakarta">
          <h2 className=" text-5xl text-white font-bold mb-3">
            <span className="bg-[#FF5757] text-white px-1 rounded-lg">
              1000+
            </span>
          </h2>
          <h2 className="text-5xl font-bold">Trained</h2>
          <p className="text-[#4E4E4E] mt-4">through Upride</p>
        </div>
        <div className="font-poppins">
          <h2 className=" text-5xl text-white font-bold mb-3">
            <span className="bg-[#2EC2B8] text-white px-3 rounded-lg">99%</span>
          </h2>
          <h2 className="text-5xl font-bold">Rating</h2>
          <p className="text-[#4E4E4E] mt-4">Customer satisfaction</p>
        </div>
        <div className="font-poppins">
          <h2 className=" text-5xl text-white font-bold mb-3">
            <span className="bg-[#FFDC6B] text-white px-3 rounded-lg">60</span>
          </h2>
          <h2 className="text-5xl font-bold">Minutes</h2>
          <p className="text-[#4E4E4E] mt-4">per Session</p>
        </div>
        <div className="font-poppins">
          <h2 className=" text-5xl text-white font-bold mb-3">
            <span className="bg-[#FD5444] text-white px-3 rounded-lg">150+</span>
          </h2>
          <h2 className="text-5xl font-bold">Reviews</h2>
          <p className="text-[#4E4E4E] mt-4">Five-star rated in Google</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
