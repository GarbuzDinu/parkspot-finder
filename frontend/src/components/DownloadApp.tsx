import appImage from "@/assets/Phone.png";
import googlePlay from "@/assets/Google_Play-Logo.png";
import appStore from "@/assets/apple-store.svg";

const DownloadApp = () => {
  return (
    <section className="w-full py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className=" rounded-[28px] overflow-hidden grid lg:grid-cols-2 items-center">

          {/* LEFT SIDE */}
          <div className="p-8 md:p-12 text-black space-y-6">

            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold leading-snug">
              Descarca aplicatia favorita a soferilor din Moldova
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm md:text-base max-w-md">
              Browsing, rezervari, plati - toate in telefonul tau. In doar cateva secunde.
            </p>

            {/* Store buttons */}
            <div className="flex items-center gap-4 pt-2">
              <img
                src={googlePlay}
                alt="Google Play"
                className="h-12 md:h-14 cursor-pointer hover:scale-105 transition"
              />
              <img
                src={appStore}
                alt="App Store"
                className="h-12 md:h-14 cursor-pointer hover:scale-105 transition"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="h-full flex justify-center lg:justify-end p-6 md:p-0">
            <img
              src={appImage}
              alt="App preview"
              className="w-full max-w-sm md:max-w-md object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadApp;