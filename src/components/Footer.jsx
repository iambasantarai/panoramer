const Footer = () => {
  return (
    <div className="grid place-items-center p-5 pt-24 sm:pt-32">
      <div className="flex sm:flex-row w-full max-w-[22rem] items-center gap-2">
        <div className="h-px w-full sm:w-1/4 bg-current opacity-20"></div>
        <div className="shrink-0">A final year project, by</div>
      </div>

      <div className="flex items-start justify-center gap-5 mt-4 sm:mt-4">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-slate-800">
          <img
            src="/basanta.png"
            alt="Basanta Rai"
            className="h-full w-full object-cover transition duration-300 will-change-transform hover:scale-110"
            width="auto"
            height="auto"
          />
        </div>

        <div className="hidden sm:block text-center sm:text-left">
          <div className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-xl font-extrabold text-transparent">
            Basanta Rai
          </div>
          <div className="pt-0.5 font-bold">23473/076</div>
        </div>

        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-slate-800">
          <img
            src="/robin.png"
            alt="Robin Devkota"
            className="h-full w-full object-cover transition duration-300 will-change-transform hover:scale-110"
            width="auto"
            height="auto"
          />
        </div>

        <div className="hidden sm:block text-center sm:text-left">
          <div className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-xl font-extrabold text-transparent">
            Robin Devkota
          </div>
          <div className="pt-0.5 font-bold">23498/076</div>
        </div>

        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-slate-800">
          <img
            src="/sunil.png"
            alt="Sunil Chaudhary"
            className="h-full w-full object-cover transition duration-300 will-change-transform hover:scale-110"
            width="auto"
            height="auto"
          />
        </div>

        <div className="hidden sm:block text-center sm:text-left">
          <div className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-xl font-extrabold text-transparent">
            Sunil Chaudhary
          </div>
          <div className="pt-0.5 font-bold">23508/076</div>
        </div>
      </div>
      <div className="mt-6 h-px w-full max-w-[22rem] bg-current opacity-20"></div>
      <div className="pt-10 sm:pt-20 text-center text-xs">
        <p>&copy; Panoramer, All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
