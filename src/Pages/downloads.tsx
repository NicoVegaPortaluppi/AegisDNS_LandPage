export function Downloads() {
  return (
    <div className="bg-[#020817] text-white min-h-screen flex flex-col items-center pt-20 px-8 pb-20">
      <h1 className="text-6xl font-bold text-white mb-2">Download</h1>
      <div className="w-16 h-1 bg-[#3b82f6] mx-auto rounded-full  mb-16" />
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl">
        {/* Windows */}
        <a
          href="#windows-download-link"
          className="flex-1 bg-[#0f172a] rounded-xl p-10 flex flex-col items-center gap-5 border border-[#1e293b] hover:border-[#3b82f6] transition-colors group"
        >
          {/* Windows logo */}
          <img
            src={"src/images/logowindows.png"}
            alt={"Logo-linux"}
            className="w-32 h-32 rounded-xl shadow-lg object-cover"
          />
          <h2 className="text-2xl font-bold text-white group-hover:text-[#3b82f6] transition-colors">
            Windows
          </h2>
          <p className="text-[#64748b] text-sm text-center">
            Compatible with Windows 10 and above
          </p>
          <span className="mt-2 px-6 py-2.5 bg-[#3b82f6] rounded-lg text-white font-semibold text-sm hover:bg-[#2563eb] transition-colors">
            Download for Windows
          </span>
        </a>

        {/* Linux */}
        <a
          href="#linux-download-link"
          className="flex-1 bg-[#0f172a] rounded-xl p-10 flex flex-col items-center gap-5 border border-[#1e293b] hover:border-[#3b82f6] transition-colors group"
        >
          {/* Linux logo */}
          <img
            src={"src/images/linuxlogo.png"}
            alt={"Logo-linux"}
            className="w-32 h-32 rounded-xl shadow-lg object-cover"
          />
          <h2 className="text-2xl font-bold text-white group-hover:text-[#3b82f6] transition-colors">
            Linux
          </h2>
          <p className="text-[#64748b] text-sm text-center">
            Compatible with major Linux distributions
          </p>
          <span className="mt-2 px-6 py-2.5 bg-[#3b82f6] rounded-lg text-white font-semibold text-sm hover:bg-[#2563eb] transition-colors">
            Download for Linux
          </span>
        </a>
      </div>

      <h1 className="text-6xl font-bold text-white mt-16 mb-2">
        Browser Extension
      </h1>
      <div className="w-16 h-1 bg-[#3b82f6] mx-auto rounded-full  mb-16" />
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl">
        {/* Windows */}
        <a
          href="#windows-download-link"
          className="flex-1 bg-[#0f172a] rounded-xl p-10 flex flex-col items-center gap-5 border border-[#1e293b] hover:border-[#3b82f6] transition-colors group"
        >
          {/* Windows logo */}
          <img
            src={"src/images/chromelogo.png"}
            alt={"Logo-linux"}
            className="w-32 h-32 rounded-xl shadow-lg object-cover"
          />
          <h2 className="text-2xl font-bold text-white group-hover:text-[#3b82f6] transition-colors"></h2>
          <p className="text-[#64748b] text-sm text-center">
            Compatible with Chrome based browsers.
          </p>
          <span className="mt-2 px-6 py-2.5 bg-[#3b82f6] rounded-lg text-white font-semibold text-sm hover:bg-[#2563eb] transition-colors">
            Add to Browser
          </span>
        </a>
      </div>
    </div>
  );
}
