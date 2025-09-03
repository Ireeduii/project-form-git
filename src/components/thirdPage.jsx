export const ThirdPage = ({ onChangeStepPage3 }) => {
  return (
    <div>
      <div className="mt-5 relative">
        <p className="font-semibold text-[14px] text-[#334155]">
          Date of birth <span className="text-red-600">*</span>
        </p>

        <input
          className="w-full border text-[#8B8E95] rounded-md mt-2 pl-2 h-[44px]"
          placeholder="--/--/-- "
        />
        <img
          src="calendar_today (1).png"
          className="w-[12px] h-[12px] absolute right-3 top-1/2 "
        />
      </div>

      <div>
        <p className="text-[#334155] font-semibold text-[14px] mt-2">
          Profile image <span className="text-red-600"> *</span>
        </p>

        <img
          src="Image Upload Container.png"
          className="w-[416px] h-[180px] justify-center mt-2"
        />
      </div>

      <div className="flex justify-between items-center mt-32 gap-2">
        <button
          onClick={() => onChangeStepPage3("second")}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition w-[128px] justify-center"
        >
          <img className="w-[24px] h-[24px]" src="chevron_left.png" /> Back
        </button>
        <button
          onClick={onChangeStepPage3("fourth")}
          className="bg-[#121316] flex items-center gap-2 text-white border rounded-md px-6 py-2 hover:bg-gray-800 transition w-[280px] justify-center "
        >
          Continue 3/3
        </button>
      </div>
    </div>
  );
};
