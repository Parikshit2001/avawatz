import React from "react";

const investmentSummaryData = [
  "$4.5M+ funding raised, including $2.3M+ R&D funding from US Defense",
  "The US Air Force and Army are using our technology",
  "Beta launch of GENIE: Key to Precision & Efficiency in AI/ML Model Training",
  "Q2 '24 FALCON: Trustworthy AI and ML for Robot Teams",
  "The current Sales Pipeline is over $16M",
  "The AI market is predicted to reach $1.07Trillion by 2027",
  "The global Robotic market is predicted to reach $141B by 2027",
];

function InvestmentSummary() {
  return (
    <div>
      <p className="text-2xl font-bold text-gray-500">Investment Summary</p>
      <div className="border-t-[1px] my-4 w-10" />
      <div className="pl-4  py-1 mb-12">
        {investmentSummaryData.map((item, index) => (
          <div key={index} className="flex items-center gap-2 my-2">
            <div className="w-1 h-1 rounded bg-gray-500" />
            <p className="">{item}</p>
          </div>
        ))}
      </div>
      <div className="text-xs px-5 flex flex-col gap-5">
        <p>
          OpenDeal Broker LLC charges you a two percent (2%) administrative fee
          on the gross principal transaction with a minimum fee of $5 and a
          maximum of $300. The fee is added to the total amount of your
          investment at checkout.
        </p>
        <p className="text-center">
          Past financial results are no guarantee of future performance.{" "}
          <span className="text-blue-600 hover:underline cursor-pointer italic">
            Click here for important information regarding Financial Projections
          </span>{" "}
          which are not guaranteed.
        </p>
        <p className="text-center">
          Investments in private companies are particularly risky and may result
          in total loss of invested capital.
        </p>
        <p className="text-center">
          <span className="text-blue-600 hover:underline cursor-pointer italic">
            Risks of early stage investment.
          </span>{" "}
          Not an offer to buy or sell securities. This is a long-term
          speculative illiquid investment. Investment is not FDIC or SiPC
          insured.
        </p>
        <p className="text-center">
          There may be other available opportunities that are similar to this
          investment but have different attributes, characteristics, cost
          factors, and fees.
        </p>
      </div>
    </div>
  );
}

export default InvestmentSummary;
