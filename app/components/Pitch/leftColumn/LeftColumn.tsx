import React from "react";
import InvestmentSummary from "./InvestmentSummary";
import ActualPitch from "./ActualPitch";
import Leadership from "./Leadership";
import Opportunity from "./Opportunity";
import MarketTraction from "./MarketTraction";
import BusinessModel from "./BusinessModel";
import Competition from "./Competition";
import Summary from "./Summary";
import Disclamer from "./Disclamer";

function LeftColumn() {
  return (
    <div className="flex flex-col gap-20">
      <InvestmentSummary />
      <ActualPitch />
      <Leadership />
      <Opportunity />
      <MarketTraction />
      <BusinessModel />
      <Competition />
      <Summary />
      <Disclamer />
    </div>
  );
}

export default LeftColumn;
