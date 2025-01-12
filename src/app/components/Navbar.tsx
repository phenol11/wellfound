import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="p-4 bg-[#FEFEFE] border-b border-gray-300">
      <ul className="flex justify-between items-center w-full">
        <li className="flex items-center">
          <a
            href="/"
            className="flex items-center text-black hover:no-underline"
          >
            <Image
              src="/images/whatbytes.svg"
              alt="Logo"
              width={30}
              height={30}
              className="mr-2"
            />
            <span className="font-semibold text-black text-2xl">WhatBytes</span>
          </a>
        </li>

        <li>
          <button className="flex items-center space-x-2 px-3 py-1 bg-white border border-gray-300 rounded-lg hover:shadow-md">
            <div className="bg-[#babfd1] rounded-full">
              <Image
                src="/images/profile.jpg"
                alt="Rahil Siddique"
                width={30}
                height={30}
                className="rounded-full bg-[#babfd1] "
              />
            </div>

            <span className="text-[14px] font-bold text-gray-800">
              Rahil Siddique
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
