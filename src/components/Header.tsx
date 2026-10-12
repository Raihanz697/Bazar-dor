
import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full border-b border-gray-200 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        
        <div className="flex items-center gap-4">
          <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-green-700">
            <Image
              src="/logo-icon.webp"
              alt="Bazar Dor"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              বাজার দর
            </h1>
            <p className="text-sm text-gray-600">
              {date}
            </p>
          </div>
        </div>

        
        <div className="flex items-center gap-8">
          <button className="font-semibold text-gray-900 hover:text-green-700">
            সাইন ইন
          </button>

          <button className="rounded-xl bg-green-700 px-6 py-4 font-semibold text-white shadow-md transition hover:bg-green-800">
            সাইন আপ
          </button>
        </div>

      </div>

      <NavLinks/>
    </header>
  );
};

export default Header;
