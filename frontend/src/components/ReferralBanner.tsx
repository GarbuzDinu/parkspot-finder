import bannerImg from "@/assets/friends-banner.jpg";

const ReferralBanner = () => {
  return (
    <section className="w-full py-2">
      <div className="overflow-hidden rounded-[24px] bg-[#111111] flex flex-col lg:flex-row items-stretch max-w-7xl mx-auto">
        {/* Left Image */}
        <div className="lg:w-1/2 h-[240px]">
          <img
            src={bannerImg}
            alt="Friends using phones"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-between p-4 md:p-5 text-white">
          <div className="text-xl md:text-2xl font-bold text-white flex flex-wrap items-center gap-2">
            <span>Invita-ti prietenii si primeste</span>

            <span className="text-lime-400">reducere 50%</span>

            <span>timp de o saptamana</span>
          </div>

          <div className="flex flex-row items-center justify-between mt-6">
            <button className="text-gray-300 text-sm hover:text-white transition">
              Termeni si Conditii
            </button>

            <button className="bg-lime-400 hover:bg-lime-500 transition-colors text-black font-semibold text-base px-5 py-2.5 rounded-full">
              Invita un prieten
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralBanner;
