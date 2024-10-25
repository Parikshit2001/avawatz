import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

const companyDocuments = [
  "Subscription Agreement",
  "AvaWatz IOM Supplement #3.pdf",
  "AvaWatz IOM Supplement #2.pdf",
  "AvaWatz Reg S IOMSupplement #1 (05.28.24).pdf",
  "AvaWatz Company 10M.pdf",
  "Form CRS.pdf",
  "Disclosures & Disclaimers.pdf",
  "Additional Risk Disclosures.pdf",
];

function Documents() {
  return (
    <div>
      <p className="text-2xl font-bold">Documents</p>
      <div className="border rounded">
        <div className="border-b-[1px]">
          <p className="text-sm px-3 py-4 text-neutral-500">
            Capital R (OpenDeal Broker LLC, CRD #291387) is hosting this Reg S
            securities offering by AvaWatz Company.
          </p>
        </div>
        <div>
          <p className="text-sm text-neutral-500 px-3 py-4">
            Company Documents
          </p>
          <div className="text-black">
            {companyDocuments.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer flex items-center gap-2 w-full hover:text-blue-500 hover:bg-gray-200 focus:text-blue-500 focus:bg-gray-200 px-3 py-4"
              >
                <div>
                  <IoDocumentTextOutline size={25} className="font-bold" />
                </div>
                <div>
                  <p className="">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documents;
