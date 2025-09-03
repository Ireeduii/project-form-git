import { useState } from "react";

export const SecondPage = ({ structure, onChangeStepPage2, onChangeForm }) => {
  const [errors, setErrors] = useState({});

  function gotoNext() {
    const newErrors = {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(structure.email)) {
      newErrors.email = null;
    } else {
      newErrors.email = "Please provide a valid email address";
    }

    const phoneRegex = /^\d{8}$/;
    if (phoneRegex.test(structure.phonenmbr)) {
      newErrors.phonenmbr = null;
    } else {
      newErrors.phonenmbr = "Please enter a valid phone number.";
    }

    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    // if (passwordRegex.test(structure.password)) {
    //   newErrors.password = null;
    // } else {
    //   newErrors.password = "Password must include letters and numbers.";
    // }

    setErrors(newErrors);
    if (
      !newErrors.email &&
      !newErrors.phonenmbr &&
      !newErrors.password &&
      !newErrors.confpassword
    )
      onChangeStepPage2("third");
  }
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
        {<errors className="email"></errors> && (
          <div className="text-red-600 text-[14px] mt-2">{errors.email}</div>
        )}
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
        {<errors className="phonenmbr"></errors> && (
          <div className="text-red-600 text-[14px] mt-2">
            {errors.phonenmbr}
          </div>
        )}
      </div>

      <div>
        <p className="font-semibold mt-2 text-black ">
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
        {<errors className="password"></errors> && (
          <div className="text-red-600 text-[14px] mt-2">{errors.password}</div>
        )}
      </div>

      <div>
        <p className="font-semibold mt-2 text-black">
          Confirm password <span className="text-red-600">*</span>
        </p>
        <input
          type="password"
          value={structure.confpassword}
          onChange={(e) =>
            onChangeForm({ ...structure, confpassword: e.target.value })
          }
          placeholder="Placeholder"
          className="w-full px-3 py-2 border text-[#8B8E95] border-gray-300 rounded-md mt-2"
        />
        {<errors className="confpassword"></errors> && (
          <div className="text-red-600 text-[14px] mt-2">
            {errors.confpassword}
          </div>
        )}
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
            onClick={gotoNext}
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
