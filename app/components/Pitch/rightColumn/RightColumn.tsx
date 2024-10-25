import React from "react";
import DealTerms from "./DealTerms";
import Documents from "./Documents";
import BonusPerks from "./BonusPerks";

function RightColumn() {
  return (
    <div className="text-gray-500 w-full flex flex-col gap-12">
      <DealTerms />
      <Documents />
      <BonusPerks />
    </div>
  );
}

export default RightColumn;
