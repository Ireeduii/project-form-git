"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Buttons } from "./button";

export const FirstPage = ({ form, onChange, onChangeStep }) => {
  const [errors, setErrors] = useState({});
  const newErrors = {};

  useEffect(() => {
    const firstNameRegex = /^[A-Za-z]+$/;
    if (firstNameRegex.test(form.firstname)) {
      newErrors.firstname = null;
    } else {
      newErrors.firstname =
        "First name cannot contain special characters or numbers.";
    }
    setErrors(newErrors);
  }, [form.firstname]);

  useEffect(() => {
    const lastNameRegex = /^[A-Za-z]+$/;
    if (lastNameRegex.test(form.lastname)) {
      newErrors.lastname = null;
    } else {
      newErrors.lastname =
        "Last name cannot contain special characters or numbers.";
    }
    setErrors(newErrors);
  }, [form.lastname]);

  useEffect(() => {
    const userNameRegex = /^[a-zA-Z0-9]{3,16}$/;
    if (userNameRegex.test(form.username) || form.username === "") {
      newErrors.username = null;
    } else {
      newErrors.username =
        " This username is already taken. Please choose another one.";
    }
    setErrors(newErrors);
  }, [form.username]);

  function gotoNext() {
    const newErrors = {};

    const firstNameRegex = /^[A-Za-z]+$/;
    if (firstNameRegex.test(form.firstname)) {
      newErrors.firstname = null;
    } else {
      newErrors.firstname =
        "First name cannot contain special characters or numbers.";
    }

    const lastNameRegex = /^[A-Za-z]+$/;
    if (lastNameRegex.test(form.lastname)) {
      newErrors.lastname = null;
    } else {
      newErrors.lastname =
        "Last name cannot contain special characters or numbers.";
    }

    const userNameRegex = /^[a-zA-Z0-9]{3,16}$/;
    if (userNameRegex.test(form.username)) {
      newErrors.username = null;
    } else {
      newErrors.username =
        " This username is already taken. Please choose another one.";
    }

    setErrors(newErrors);
    if (!newErrors.firstname && !newErrors.lastname && !newErrors.username) {
      localStorage.setItem("my-form", JSON.stringify(form));
      onChangeStep("second");
    }
  }

  return (
    <motion.div
      className="mt-10 h-fit"
      initial={{ opacity: 0, right: -30 }}
      animate={{ opacity: 1, right: 0 }}
      transition={{ duration: 1 }}
      style={{ position: "relative" }}
    >
      <div>
        <p className="font-semibold text-black">
          First name <span className="text-red-600">*</span>
        </p>
        <input
          placeholder="Placeholder"
          value={form.firstname}
          onChange={(e) => onChange({ ...form, firstname: e.target.value })}
          className="w-full px-3 py-2 border text-black border-gray-300 rounded-md mt-2"
        />
        {errors.firstname && (
          <div className="text-red-600 text-[14px] mt-2">
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
          className="w-full px-3 py-2 border text-black border-gray-300 rounded-md mt-2"
        />
        {errors.lastname && (
          <div className="text-red-600 text-[14px] mt-2">{errors.lastname}</div>
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
          className="w-full px-3 py-2 border text-black border-gray-300 rounded-md mt-2"
        />
        {errors.username && (
          <div className="text-red-600 text-[14px] mt-2">{errors.username}</div>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        // transition={{ duration: 1 }}
        onClick={gotoNext}
        className="flex items-center gap-2 bg-[#121316] text-white rounded-md w-full  px-6 py-2 justify-center mt-25 hover:bg-gray-800"
      >
        Continue 1/3
        <img className="w-[24px] h-[24px]" src="chevron_right.png" alt="Next" />
      </motion.button>
    </motion.div>
  );
};
