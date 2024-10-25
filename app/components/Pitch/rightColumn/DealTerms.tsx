import React from "react";

const DealTermsData = [
  {
    text: "Funds Raised",
    value: "$163,247",
  },
  {
    text: "Allocation",
    value: "$5M",
  },
  {
    text: "Valuation",
    value: "$80.85M",
  },
  {
    text: "Share price",
    value: "$4",
  },
  {
    text: "Security type",
    value: "Preferred Shares",
  },
  {
    text: "Minimum investment",
    value: "$2,500",
  },
  {
    text: "Deadline",
    value: "October 1, 2024",
  },
];

function DealTerms() {
  return (
    <div>
      <p className="text-2xl font-bold">Deal Terms</p>
      <div className="border-t-[1px] mt-1 mb-1 w-10" />
      <div className="flex flex-col divide-y-[1px]">
        {DealTermsData.map((item, index) => (
          <div key={index} className="flex justify-between py-3">
            <div>
              <p className="text-gray-600">{item.text}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-black font-bold">{item.value}</p>
              <div className="bg-gray-200 rounded px-2 text-sm text-gray-400 font-bold">
                i
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealTerms;
