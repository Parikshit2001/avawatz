import React from "react";

const BonusPerksData = [
  {
    invest: 20000,
    receiveShare: "5%",
  },
  {
    invest: 50000,
    receiveShare: "10%",
  },
  {
    invest: 100000,
    receiveShare: "15%",
  },
  {
    invest: 250000,
    receiveShare: "25%s",
  },
];

function BonusPerks() {
  return (
    <div>
      <p className="text-2xl font-bold">Bonus Perks</p>
      <p>
        In addition to your shares, you&#39;ll receive perks for investing in
        Avawatz.
      </p>
      <div className="border rounded flex flex-col divide-y-[1px]">
        {BonusPerksData.map((item, index) => (
          <div key={index} className="flex flex-col px-3 py-4 gap-4">
            <div>
              <p className="text-gray-600 font-semibold">Invest</p>
              <p className="text-4xl text-blue-700 font-semibold">${item.invest}</p>
            </div>
            <div className="text-sm">
              <p className="font-bold">Receive</p>
              <div className="flex gap-3">
                <div className="w-1 h-1 rounded mt-2 bg-gray-500" />
                <p>{item.receiveShare} Additional Bonus Share</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BonusPerks;
