function Sidebar() {
  return (
    <aside className="w-[260px] bg-[#111827] border-r border-[#1f2937] p-6 flex flex-col">
      <h1 className="text-3xl font-bold tracking-tight">
        FitMacro AI
      </h1>

      <p className="text-gray-400 mt-2 text-sm">
        Your personal fitness intelligence
      </p>

      <div className="mt-10 space-y-3">
        <button className="w-full text-left bg-[#1f2937] hover:bg-[#374151] transition rounded-xl p-4">
          Workout Plans
        </button>

        <button className="w-full text-left hover:bg-[#1f2937] transition rounded-xl p-4">
          Macro Calculator
        </button>

        <button className="w-full text-left hover:bg-[#1f2937] transition rounded-xl p-4">
          Meal Plans
        </button>
      </div>

      <div className="mt-auto">
        <div className="bg-[#1f2937] rounded-2xl p-4">
          <p className="text-sm text-gray-300">
            Powered by Llama 3
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;