export const SecondPage = ({ structure, onChangeStepPage2, onChangeForm }) => {
  return (
    <div className="mt-10">
      <div>
        <p className="font-semibold text-black">
          Email<span className="text-red-600">*</span>
        </p>
        <input
          placeholder="Placeholder"
          value={structure.email}
          onChange={(e) =>
            onChangeForm({ ...structure, email: e.target.value })
          }
          className="w-full px-3 py-2 border text-[#8B8E95] border-gray-300 rounded-md mt-2"
        />
      </div>

      <div>
        <p className="font-semibold mt-2 text-black">
          Phone Number <span className="text-red-600">*</span>
        </p>
        <input
          value={structure.phonenmbr}
          onChange={(e) =>
            onChangeForm({ ...structure, phonenmbr: e.target.value })
          }
          placeholder="Placeholder"
          className="w-full px-3 py-2 border text-[#8B8E95] border-gray-300 rounded-md mt-2"
        />
      </div>

      <div>
        <p className="font-semibold mt-2 text-black">
          Password <span className="text-red-600">*</span>
        </p>
        <input
          type="password"
          value={structure.password}
          onChange={(e) =>
            onChangeForm({ ...structure, password: e.target.value })
          }
          placeholder="Placeholder"
          className="w-full px-3 py-2 border text-[#8B8E95] border-gray-300 rounded-md mt-2"
        />
      </div>

      <div>
        <p className="font-semibold mt-2 text-black">
          Confirm password <span className="text-red-600">*</span>
        </p>
        <input
          type="password"
          value={structure.conpassword}
          onChange={(e) =>
            onChangeForm({ ...structure, conpassword: e.target.value })
          }
          placeholder="Placeholder"
          className="w-full px-3 py-2 border text-[#8B8E95] border-gray-300 rounded-md mt-2"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mt-20 gap-2">
          <button
            onClick={() => onChangeStepPage2("first")}
            className="flex items-center gap-2 px-4 py-2 border  border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition w-[128px] justify-center"
          >
            <img className="w-[24px] h-[24px]" src="chevron_left.png" /> Back
          </button>
          <button
            onClick={() => onChangeStepPage2("third")}
            className="bg-[#121316] flex items-center gap-2 text-white border rounded-md px-6 py-2 hover:bg-gray-800 transition w-[280px] justify-center"
          >
            Continue 2/3
            <img className="w-[24px] h-[24px]" src="chevron_right.png" />
          </button>
        </div>
      </div>
    </div>
  );
};
