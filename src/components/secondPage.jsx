import { useState, useEffect } from "react";
import { motion } from "motion/react";

export const SecondPage = ({ structure, onChangeStepPage2, onChangeForm }) => {
  const newErrors = {};
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(structure.email)) {
      newErrors.email = null;
    } else {
      newErrors.email = "Please provide a valid email address";
    }
    setErrors({ ...errors, ...newErrors });
  }, [structure.email]);

  useEffect(() => {
    const phoneRegex = /^\d{8}$/;
    if (phoneRegex.test(structure.phonenmbr)) {
      newErrors.phonenmbr = null;
    } else {
      newErrors.phonenmbr = "Please enter a valid phone number.";
    }
    setErrors({ ...errors, ...newErrors });
  }, [structure.phonenmbr]);

  useEffect(() => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (passwordRegex.test(structure.password)) {
      newErrors.password = null;
    } else {
      newErrors.password = "Password must include letters and numbers.";
    }
    if (structure.password === structure.confpassword) {
      newErrors.confpassword = null;
    } else {
      newErrors.confpassword = "Password do not match";
    }
    setErrors({ ...errors, ...newErrors });
  }, [structure.password, structure.confpassword]);
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

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (passwordRegex.test(structure.password)) {
      newErrors.password = null;
    } else {
      newErrors.password = "Password must include letters and numbers.";
    }
    if (structure.password === structure.confpassword) {
      newErrors.confpassword = null;
    } else {
      newErrors.confpassword = "Password do not match";
    }

    setErrors(newErrors);
    if (
      !newErrors.email &&
      !newErrors.phonenmbr &&
      !newErrors.password & !newErrors.confpassword
    ) {
      localStorage.setItem("my-form", JSON.stringify(structure));
      onChangeStepPage2("third");
    }
  }
  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0, right: -30 }}
      animate={{ opacity: 1, right: 0 }}
      transition={{ duration: 1 }}
      style={{ position: "relative" }}
    >
      <div>
        <p className="font-semibold text-black">
          Email<span className="text-red-600">*</span>
        </p>
        <input
          type="email"
          placeholder="Placeholder"
          value={structure.email}
          onChange={(e) =>
            onChangeForm({ ...structure, email: e.target.value })
          }
          className="w-full px-3 py-2 border text-black border-gray-300 rounded-md mt-2"
        />
        {errors.email && (
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
          className="w-full px-3 py-2 border text-black border-gray-300 rounded-md mt-2"
        />
        {errors.phonenmbr && (
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
          className="w-full px-3 py-2 border text-black border-gray-300 rounded-md mt-2"
        />
        {errors.password && (
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
          className="w-full px-3 py-2 border text-black border-gray-300 rounded-md mt-2"
        />
        {errors.confpassword && (
          <div className="text-red-600 text-[14px] mt-2">
            {errors.confpassword}
          </div>
        )}
      </div>

      <div>
        <div className="flex justify-between items-center mt-14 gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChangeStepPage2("first")}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition w-[128px] justify-center"
          >
            <img className="w-[24px] h-[24px]" src="chevron_left.png" /> Back
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={gotoNext}
            className="bg-[#121316] flex items-center gap-2 text-white border rounded-md px-6 py-2 hover:bg-gray-800 transition w-[280px] justify-center"
          >
            Continue 2/3
            <img className="w-[24px] h-[24px]" src="chevron_right.png" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
