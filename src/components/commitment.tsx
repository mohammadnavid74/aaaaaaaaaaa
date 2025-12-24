import "./commitment.css";

const Commitment: React.FC = () => {
  return (
    <section
      dir="rtl"
      className="commit text-white w-full my-16 rounded-large bg-[url('/kamyoonet.webp')] bg-cover bg-center p-10"
      style={{
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div className=" container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className=" expr-box mb-6 md:mb-12">
              <h2 className="text-u !w-32 sm:w-auto text-responsiveP2 sm:text-sm mb-6 sm:mb-10 fz-16">
                پیشگام در صنعت
                <br /> خودروهای تجاری
              </h2>
              <div>
                <p className="text-xs sm:text-sm fw-600 mb-2 sm:mb-4 leading-tight">
                  سال <br /> تجربه
                </p>
                <h3 className="text-5xl sm:text-7xl leading-tight">۲۸</h3>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-row-reverse w-full">
            <div className="cont">
              <h3 className="text-responsiveH5  mb-2">
                <span className="flex main-color !w-full text-responsiveH3 sm:text-responsiveH2">
                  تعهد و مسئولیت پذیری
                </span>
              </h3>
              <p className="text-responsiveP2 sm:text-sm leading-relaxed w-full">
                ما برای جلب رضایت مشتریان و تقویت وفاداریشان به گروه مایان، خود
                را متعهد به عرضه خدمات و خودروهای باکیفیت می دانیم
              </p>
            </div>
          </div>
        </div>

        <div dir="ltr" className="grid grid-cols-1 gap-8 mt-24">
          <div className="">
            <div className="numbers grid grid-cols-4 gap-4">
              <div className="item">
                <p className="text-center text-2xl sm:text-3xl md:text-4xl">
                  0
                </p>
                <p className="text-center text-sm sm:text-base md:text-xl">
                  پروژه
                </p>
              </div>
              <div className="item">
                <p className="text-center text-2xl sm:text-3xl md:text-4xl">
                  0
                </p>
                <p className="text-center text-sm sm:text-base md:text-xl">
                  مشتری
                </p>
              </div>
              <div className="item">
                <p className="text-center text-2xl sm:text-3xl md:text-4xl">
                  0
                </p>
                <p className="text-center text-sm sm:text-base md:text-xl">
                  کشور
                </p>
              </div>
              <div className="item">
                <p className="text-center text-2xl sm:text-3xl md:text-4xl">
                  0
                </p>
                <p className="text-center text-sm sm:text-base md:text-xl">
                  جایزه
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
