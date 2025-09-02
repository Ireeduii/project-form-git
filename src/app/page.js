"use client";

import { FirstPage, SecondPage, ThirdPage } from "@/components";

import { useState } from "react";

const Form = () => {
  const [step, setStep] = useState("first");
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenmbr: "",
    password: "",
    conpassword: "",
  });

  //  page 1
  if (step === "first") {
    return (
      <div className="bg-[#F4F4F4] w-full h-screen flex justify-center items-center">
        <div className=" w-[480px] h-[655px] rounded-md bg-white shadow-lg p-8">
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
      </div>
    );
  }

  //page2
  if (step === "second") {
    return (
      <div className="bg-[#F4F4F4] w-full h-screen flex justify-center items-center">
        <div className=" w-[480px] h-[655px] rounded-md bg-white shadow-lg p-8">
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
      </div>
    );
  }

  // page 3
  if (step === "third") {
    return (
      <div className="bg-[#F4F4F4] w-full h-screen flex justify-center items-center">
        <div className=" w-[480px] h-[655px] rounded-md bg-white shadow-lg p-8">
          <div>
            <img className="w-[60px] h-[60px]" src="Main 1.png" />
            <h2 className="font-semibold text-[26px] text-black ">
              Join Us! 😎
            </h2>
            <p className="text-[#8E8E8E] text-[18px]">
              Please provide all current information accurately.
            </p>
          </div>

          <ThirdPage onChangeStepPage3={setStep} />
        </div>
      </div>
    );
  }
};

export default Form;
