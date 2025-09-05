import { useState, useEffect } from "react";
import { motion } from "motion/react";

export const ThirdPage = ({ onChangeStepPage3, formation, onChangeForm3 }) => {
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState();

  function handleImageChange(e) {
    const file = e.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);
    console.log(e.target.files);
  }

  // console.log(formation);
  // console.log("image:", errors.image);
  // console.log("date:", errors.date);
  function gotoNext() {
    const newErrors = {};

    const dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
    if (dateRegex.test(formation.date)) {
      newErrors.date = null;
    } else {
      newErrors.date = "Please select a date.";
    }

    const imageRegex = /\.(jpg|jpeg|png|webp)$/i;
    if (imageRegex.test(formation.image)) {
      newErrors.image = null;
    } else {
      newErrors.image = "Image cannot be blank";
    }

    setErrors(newErrors);

    console.log(newErrors);
    if (!newErrors.date && !newErrors.image) {
      localStorage.setItem("my-form", JSON.stringify(formation));
      onChangeStepPage3("fourth");
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, right: -30 }}
      animate={{ opacity: 1, right: 0 }}
      transition={{ duration: 1 }}
      style={{ position: "relative" }}
    >
      <div className="mt-5 relative">
        <p className="font-semibold text-[14px] text-[#334155]">
          Date of birth <span className="text-red-600">*</span>
        </p>

        <input
          onChange={(e) =>
            onChangeForm3({ ...formation, date: e.target.value })
          }
          value={formation.date}
          type="date"
          className="w-full border text-black rounded-md mt-2 pl-2 h-[44px]"
        />

        {errors.date ? (
          <div className="text-red-600 text-[14px] mt-2">{errors.date}</div>
        ) : undefined}
      </div>

      <div>
        <p className="text-[#334155] font-semibold text-[14px] mt-2">
          Profile image <span className="text-red-600"> *</span>
        </p>
      </div>

      {preview ? (
        <div className="w-[416px] h-[180px] mt-5 flex items-center justify-centers relative   rounded-md overflow-x-scroll overflow-y-scroll">
          <img className=" w-full" src={preview} />
        </div>
      ) : (
        <div className="w-[416px] h-[180px] bg-[#7F7F800D] mt-2 relative text-center pt-20 justify-center rounded-md">
          Add image
          <input
            type="file"
            className="absolute opacity-0 inset-0"
            onChange={(e) => {
              handleImageChange(e);
              onChangeForm3({ ...formation, image: e.target.files[0].name });
            }}
          />
        </div>
      )}
      {errors.image ? (
        <div className=" absolute text-red-600 text-[14px] mt-3">
          {errors.image}
        </div>
      ) : undefined}

      <div className="flex justify-between items-center mt-32 gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChangeStepPage3("second")}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100  w-[128px] justify-center"
        >
          <img className="w-[24px] h-[24px]" src="chevron_left.png" /> Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={gotoNext}
          className="bg-[#121316] flex items-center gap-2 text-white border rounded-md px-6 py-2 hover:bg-gray-800 w-[280px] justify-center "
        >
          Continue 3/3
        </motion.button>
      </div>
    </motion.div>
  );
};
