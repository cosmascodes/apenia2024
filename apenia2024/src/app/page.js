import Hero from "@/sections/landing/hero";

export default function Home() {
  return (
    <main className="bg-secondary">
      <div className="p-24 grid bg-hero-wave bg-center bg-cover">
        <div className="flex flex-row">
          <div className="w-1/2">
            <h1 className=" text-7xl font-bold mt-12">Divi Online Banking</h1>
            <p className="mt-8">
              Vitae consequat augue. Vivamus eget dolor vel quam condimentum
              sodales in bibendum odio urna sit amet.
            </p>
            <button className="bg-primary uppercase text-white rounded-full px-10 py-4 text-sm mt-8 flex flex-row">
              Join Apenia today
            </button>
          </div>
          <div className="w-[50vw] flex justify-end">
            <img
              src="/images/online-banking-28.png"
              alt="Apenia.com"
              className="w-[90%]"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 mt-3 gap-4">
          <div className=" col-start-1 col-end-1 p-6 border border-slate-300 rounded-xl">
            <img src="/images/wallet.png" alt="wallet" />
            <h2 className="text-xl font-bold my-4">Donec sed nisi</h2>
            <p>Quisque aliquet velit sit amet sem interdu</p>
          </div>
          <div className="  col-start-2 col-end-2 p-6 border border-slate-300 rounded-xl">
            <img src="/images/wallet.png" alt="wallet" />
            <h2 className="text-xl font-bold my-4">Donec sed nisi</h2>
            <p>Quisque aliquet velit sit amet sem interdu</p>
          </div>
          <div className="col-start-3 col-end-5 p-6 border border-slate-300 rounded-xl">
            <img src="/images/wallet.png" alt="wallet" />
            <h2 className="text-xl font-bold my-4">Donec sed nisi</h2>
            <p>Quisque aliquet velit sit amet sem interdu</p>
          </div>
        </div>
      </div>
    </main>
  );
}
