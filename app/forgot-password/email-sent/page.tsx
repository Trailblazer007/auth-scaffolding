import Image from "next/image";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="hero-image"></div>

      <div className="relative max-w-xl p-8 px-24 bg-white mx-auto mt-32 shadow-2xl">
        <div>
          <p className="font-bold text-center py-4">
            Kindly check your email address for a link that was sent to you
          </p>
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
