import Image from "next/image";
import Link from "next/link";


// Creating login of screen
const LoginScreen = () => {
  return (
    <div className="relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[734.44px] text-left text-[18px] text-black font-inter">
      <div className="absolute top-[0px] left-[0px] w-full h-[923px] ">
        <div className="absolute top-[0px] left-[0px] bg-gray-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border  w-full h-full overflow-hidden border-[1px] border-solid border-gray-300 ">
          <Image // image de background
            width={800}
            height={800}
            className="absolute top-[0px] left-[0px] w-full h-[923px]  object-cover "
            alt=""
            src="/imageBackground.png"
          />
          <div className="absolute top-[108px] left-[560px] rounded-3xs bg-gray-200 w-[907px] h-[504px]" />
          <div className="absolute top-[118px] left-[600px] bg-gainsboro w-[432px] h-[445px]" />

          <Link
            href="/Story"
            type="button"
            className=" absolute no-underline top-[401px] left-[1120px] cursor-pointer  w-[200px] h-[45px] text-black bg-[#ffffff] hover:bg-[#f1f1f1]/90 focus:ring-4 focus:outline-none focus:ring-[#05020E]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fill-rule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            Sign in with Google
          </Link>

          <Image // image of loginScreen
            width={800}
            height={800}
            className="absolute top-[119px] left-[600px] rounded-3xs w-[432px] h-[444px] object-cover"
            alt=""
            src="/griddixit.png"
          />
          <b className="absolute top-[264px] left-[1070px] text-[22px] inline-block text-white w-[345px] h-[89px]">
            <p className="m-0">
              Make your own cards for the Dixit game or create narratives using
              your own cards.
            </p>
          </b>
          
        </div>
      </div>
    </div>
    
  );
};

export default LoginScreen;
