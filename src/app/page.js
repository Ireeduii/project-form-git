"use client";

import { FirstPage, SecondPage, ThirdPage } from "@/components";
import { motion } from "framer-motion";

import { useState } from "react";

const Form = () => {
  const [step, setStep] = useState("first");

  const localForm =
    typeof window !== "undefined" ? localStorage.getItem("my-form") : null;
  const [form, setForm] = useState(
    localForm
      ? JSON.parse(localForm)
      : {
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          phonenmbr: "",
          password: "",
          confpassword: "",
          date: "",
          image: "",
        }
  );
  console.log("localform", localForm);

  //  page 1
  if (step === "first") {
    return (
      <div className="bg-[#F4F4F4] w-full h-screen flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, right: -30 }}
          animate={{ opacity: 1, right: 0 }}
          transition={{ duration: 1 }}
          style={{ position: "relative" }}
        >
          <div className=" w-[480px] h-fit rounded-md bg-white shadow-lg p-8">
            <div>
              <img className="w-[60px] h-[60px]" src="Main 1.png" />
              <h2 className="font-semibold text-[26px] text-black">
                Join Us! 😎
              </h2>
              <p className="text-[#8E8E8E] text-[18px]">
                Please provide all current information accurately.
              </p>
            </div>

            <FirstPage form={form} onChange={setForm} onChangeStep={setStep} />
          </div>
        </motion.div>
      </div>
    );
  }

  //page2
  if (step === "second") {
    return (
      <div className="bg-[#F4F4F4] w-full h-screen flex overflow-hidden justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: "relative" }}
        >
          <div className=" w-[480px]  rounded-md bg-white shadow-lg p-8">
            <div>
              <img className="w-[60px] h-[60px]" src="Main 1.png" />
              <h2 className="font-semibold text-[26px] text-black">
                Join Us! 😎
              </h2>
              <p className="text-[#8E8E8E] text-[18px]">
                Please provide all current information accurately.
              </p>
            </div>

            <SecondPage
              structure={form}
              onChangeStepPage2={setStep}
              onChangeForm={setForm}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  // page 3
  if (step === "third") {
    return (
      <div className="bg-[#F4F4F4] w-full h-screen flex justify-center items-center">
        <div className=" w-[480px]  rounded-md bg-white shadow-lg p-8">
          <div>
            <img className="w-[60px] h-[60px]" src="Main 1.png" />
            <h2 className="font-semibold text-[26px] text-black ">
              Join Us! 😎
            </h2>
            <p className="text-[#8E8E8E] text-[18px]">
              Please provide all current information accurately.
            </p>
          </div>

          <ThirdPage
            onChangeStepPage3={setStep}
            formation={form}
            onChangeForm3={setForm}
          />
        </div>
      </div>
    );
  }
  // page 4
  if (step === "fourth") {
    return (
      <div className="bg-[#F4F4F4] w-full  h-screen flex justify-center items-center">
        <div className=" w-[480px]  rounded-md bg-white shadow-lg p-8">
          <div>
            <img className="w-[60px] h-[60px]" src="Main 1.png" />
            <h2 className="font-semibold text-[26px] text-black">
              You're All Set 🔥
            </h2>
            <p className="text-[#8E8E8E] text-[18px]">
              We have received your submission. Thank you!
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Form;
