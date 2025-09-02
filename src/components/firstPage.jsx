"use client";

import { useState } from "react";

export const FirstPage = ({ form, onChange, onChangeStep }) => {
  const [errors, setErrors] = useState({});

  function gotoNext() {
    const newErrors = {};

    if (form.firstname === "") {
      newErrors.firstname =
        "First name cannot contain special characters or numbers.";
    } else {
      newErrors.firstname = null;
    }

    if (form.lastname === "") {
      newErrors.lastname =
        "Last name cannot contain special characters or numbers.";
    } else {
      newErrors.lastname = null;
    }

    if (form.username === "") {
      newErrors.username =
        "This username is already taken. Please choose another one.";
    } else {
      newErrors.username = null;
    }

    setErrors(newErrors);
    if (!newErrors.firstname && !newErrors.lastname) {
      onChangeStep("second");
    }
  }

  // console.log(errors);

  return (
    <div className="mt-10">
      <div>
        <p className="font-semibold text-black">
          First name <span className="text-red-600">*</span>
        </p>
        <input
          placeholder="Placeholder"
          value={form.firstname}
          onChange={(e) => onChange({ ...form, firstname: e.target.value })}
          className="w-full px-3 py-2 border text-[#8B8E95] border-gray-300 rounded-md mt-2"
        />
        {errors.firstname && (
          <div className="text-red-600 text-[16px] mt-2">
            {errors.firstname}
          </div>
        )}
      </div>

      <div>
        <p className="font-semibold mt-2 text-black">
          Last name <span className="text-red-600">*</span>
        </p>
        <input
          value={form.lastname}
          onChange={(e) => onChange({ ...form, lastname: e.target.value })}
          placeholder="Placeholder"
          className="w-full px-3 py-2 border text-[#8B8E95] border-gray-300 rounded-md mt-2"
        />
        {errors.lastname && (
          <div className="text-red-600 text-[16px] mt-2">{errors.lastname}</div>
        )}
      </div>

      <div>
        <p className="font-semibold mt-2 text-black">
          Username <span className="text-red-600">*</span>
        </p>
        <input
          value={form.username}
          onChange={(e) => onChange({ ...form, username: e.target.value })}
          placeholder="Placeholder"
          className="w-full px-3 py-2 border text-[#8B8E95] border-gray-300 rounded-md mt-2"
        />
        {errors.username && (
          <div className="text-red-600 text-[16px] mt-2">{errors.username}</div>
        )}
      </div>

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={gotoNext}
          className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white rounded-md w-full px-6 py-2 justify-center mt-20"
        >
          Continue 1/3
          <img className="w-[24px] h-[24px]" src="chevron_right.png" />
        </button>
      </div>
    </div>
  );
};
