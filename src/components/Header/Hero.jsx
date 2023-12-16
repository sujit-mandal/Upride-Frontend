import image1 from "../../assets/images/Image 1.png";
import image2 from "../../assets/images/Image 2.png";
const Hero = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-24">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-10 gap-14 mt-24">
        <div className="col-span-6">
          <h1 className="font-jakarta text-[55px] text-[#171151] leading-[65px] tracking-[1.65px] w-9/12 mt-5">
            Learn Driving: Book <span className="font-bold">Top Driving</span>{" "}
            <span className="font-bold text-[#FD5444]">Schools</span> Near You
          </h1>
          <p className="mt-11 w-8/12 text-[#171151] text-lg mb-11">
            Empower yourself with safe and confident driving skills today. Book
            expert Instructors and top-rated driving schools near you.
          </p>
          <form className="mt-10 py-2 px-6 rounded-[30px] flex shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)]">
            <input
              type="text"
              placeholder="Search Location, Driving School or Services..."
              className="bg-transparent w-full placeholder:font-jakarta placeholder:font-normal text-lg px-0 py-0"
              name="topic"
            />
            <div className="inline-block h-[36px] min-h-[1em] w-[3px] self-stretch bg-neutral-100 opacity-100 mr-5"></div>
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.5766 8.89665C19.8047 4.61842 15.2575 2.18756 10.7159 3.09075C6.17429 3.99396 2.90314 7.97966 2.9031 12.6103C2.90308 15.184 3.92532 17.6524 5.74503 19.4727C9.01893 22.7473 14.1503 23.2535 18.0007 20.6811C21.8512 18.109 23.3482 13.1749 21.5766 8.89665ZM10.1497 0.24343C16.0499 -0.929924 21.9571 2.22799 24.2587 7.78587C26.5604 13.3438 24.6155 19.7535 19.6133 23.0951C14.6111 26.4368 7.9451 25.7793 3.69196 21.5251C1.32797 19.1607 -3.87071e-05 15.9539 8.4615e-10 12.6103C5.80628e-05 6.59459 4.24961 1.41678 10.1497 0.24343Z"
                  fill="#FF5757"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.7379 22.7396C23.3047 22.1727 24.2239 22.1727 24.7907 22.7396L29.5731 27.522C30.14 28.0889 30.14 29.008 29.5731 29.5749C29.0062 30.1417 28.0871 30.1417 27.5202 29.5749L22.7379 24.7925C22.171 24.2256 22.171 23.3065 22.7379 22.7396Z"
                  fill="#FF5757"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="35"
                viewBox="0 0 126 35"
                fill="none"
              >
                <rect width="125.323" height="35" rx="17.5" fill="#FF5757" />
                <path
                  d="M40.2678 16.7672H37.5796C37.2246 12.3209 33.6693 8.76324 29.2256 8.40825V5.73268C29.2256 5.32808 28.8977 5 28.4933 5C28.089 5 27.7611 5.32808 27.7611 5.73268V8.40825C23.3174 8.76324 19.7621 12.3209 19.4071 16.7672H16.7322C16.3279 16.7672 16 17.0953 16 17.5001C16 17.9047 16.3279 18.2328 16.7322 18.2328H19.4071C19.7621 22.6791 23.3174 26.2368 27.7611 26.5919V29.2673C27.7611 29.6719 28.089 30 28.4933 30C28.8979 30 29.2256 29.6719 29.2256 29.2673V26.5919C33.6693 26.2368 37.2248 22.6791 37.5796 18.2328H40.2678C40.6721 18.2328 41 17.9047 41 17.5001C41 17.0953 40.6721 16.7672 40.2678 16.7672ZM28.4933 25.156C24.2745 25.156 20.8422 21.7214 20.8422 17.5001C20.8422 13.2786 24.2745 9.84404 28.4933 9.84404C32.7122 9.84404 36.1445 13.2786 36.1445 17.5001C36.1445 21.7214 32.7122 25.156 28.4933 25.156Z"
                  fill="white"
                />
              </svg>
              <p className="absolute translate-x-24 text-white font-roboto font-light">
                Near me
              </p>
            </div>
          </form>
        </div>

        <div className="col-span-4">
          <img src={image1} alt="" className="ml-28" />
          <img
            src={image2}
            alt=""
            className="absolute -translate-y-52 translate-x-6"
          />
        </div>
      </div>
      <div className="mt-11 font-roboto-flex font-semibold text-[15px]">
        <button className="uppercase text-white px-11 py-5 bg-[#FD5444] rounded-lg mr-6 ">Book driving school</button>
        <button className="px-9 py-5 border-[1px] border-[rgba(0, 0, 0, 0.20)] rounded-lg">Hire instructors</button>
      </div>
    </div>
  );
};

export default Hero;
