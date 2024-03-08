import Image from "next/image";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="hero-image">
        <div className="flex justify-between items-center m-8">
          <h1 className="font-bold text-3xl">myApp</h1>

          <Link className="border-2 border-black p-2 px-6" href="./logIn">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="relative max-w-xl p-8 px-24 bg-white mx-auto mt-32 shadow-2xl">
        <div>
          <p className="font-bold text-2xl text-center py-4">Login</p>
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

              <div className="flex justify-between items-center border border-gray-300 p-4 focus-within:border-black">
                <div>
                  <p className="pb-2 text-xs uppercase">Password:</p>
                  <input
                    className="outline-none "
                    type="text"
                    placeholder="**********"
                  />
                </div>

                <div className="hover:cursor-pointer">
                  <IoMdEye />
                </div>
              </div>

              <div className="py-5 flex justify-between items-center">
                <div className="flex gap-1">
                  <input className="padding-4" type="checkbox" />
                  <p className="capitalize border-b-2 text-[#616161] leading-4">
                    remember me
                  </p>
                </div>

                <div>
                  <p className="capitalize border-b-2 text-[#616161] leading-4">
                    forgot password?
                  </p>
                </div>
              </div>

              <button className="w-full my-2 p-5 bg-black text-white uppercase">
                proceed
              </button>

              <div>
                <p className="uppercase text-center my-6">or use</p>

                <div className="flex gap-6 mx-auto my-4 justify-center">
                  <Link href="#">
                    <Image
                      className="hover:cursor-pointer"
                      src="/images/google.png"
                      height={40}
                      width={40}
                      alt="google image"
                    />
                  </Link>

                  <Link href="#">
                    <Image
                      className="hover:cursor-pointer"
                      src="/images/apple.png"
                      height={40}
                      width={40}
                      alt="ios image"
                    />
                  </Link>

                  <Link href="#">
                    <Image
                      className="hover:cursor-pointer"
                      src="/images/fb.png"
                      height={40}
                      width={40}
                      alt="facebook image"
                    />
                  </Link>
                </div>
              </div>
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
