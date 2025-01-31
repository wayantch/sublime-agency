import React from 'react'

const PowefullCard = ({ img, h1, p }) => {
  return (
      <div className="w-full h-80 bg-white shadow-lg rounded-xl p-10 outline outline-1 outline-slate-200 space-y-8">
          <div className="w-full mx-auto flex items-center justify-center ">
              <img src={img} width={50} alt="" />
          </div>
          <div className="w-full mx-auto text-center">
              <h1 className="text-2xl mb-4">
                  {h1}
              </h1>
              <p className="text-[#4D4D56] ">
                  {p}
              </p>
          </div>
      </div>
  );
}

export default PowefullCard