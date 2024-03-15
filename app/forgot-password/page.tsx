import Image from "next/image";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="hero-image"></div>

      <div className="relative max-w-xl p-8 px-24 bg-white mx-auto mt-32 shadow-2xl">
        <div>
          <p className="font-bold text-2xl text-center py-4">Forgot Password</p>
          <form className="mt-14" action="">
            <div className="">
              <div className="border border-gray-300 p-4 focus-within:border-black">
                <p className="pb-2 text-xs uppercase">Email address:</p>
                <input
                  className="outline-none"
                  type="text"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <button className="w-full my-2 p-5 bg-black text-white uppercase">
                proceed
              </button>
            </div>
          </form>
        </div>
      </div>

      <section>
        <p className="text-center text-xs text-[#616161] mt-28 mb-14">
          c 2024 - 2028 All Rights Reserved. myApp
        </p>
      </section>
    </main>
  );
}
