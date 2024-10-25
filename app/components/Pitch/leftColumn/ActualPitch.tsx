import Image from "next/image";
import React from "react";

function ActualPitch() {
  return (
    <div className="flex flex-col gap-5 pr-5">
      <p className="text-2xl font-bold text-gray-500">Pitch</p>
      <div className="border-t-[1px] my-4 w-10" />
      <p className="text-2xl font-bold">
        AvaWatz: Unlocking the Power of AI Robotics
      </p>
      <p className="text-xl">
        At AvaWatz, we aim to unlock the true potential of robotics with our
        trusted AI platform. Our AI empowers robots to work together like
        teammates in harsh, unpredictable environments, freeing humans from
        danger and high-risk tasks. We aim to make robots smarter and safer,
        boosting efficiency and keeping humans out of harm&#39;s way. Think
        advanced AI for robotics that tackles inspections, maintenance, and
        more, all delivered through our easy-to-use platform.
      </p>
      <Image
        src="/images/whyavawatz.png"
        width={700}
        height={700}
        alt="Picture of Avawatz Logo"
      />
      <p className="text-2xl font-bold">
        Transforming Robots Into Cooperative Teams with Trusted AI
      </p>
      <div className="flex flex-col gap-3 ml-3">
        <div className="flex gap-3">
          <div className="h-2 w-4 rounded-full bg-black mt-2" />
          <p className="text-2xl">
            Share information and make joint decisions: Robots analyze data,
            assess situations, and adapt their actions like a cohesive unit.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="h-2 w-4 rounded-full bg-black mt-2" />
          <p className="text-2xl">
            Handle the hard stuff: From hazardous inspections to disaster
            response, our robots thrive in unpredictable environments, keeping
            humans safe.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="h-2 w-4 rounded-full bg-black mt-2" />
          <p className="text-2xl">
            Boost your workforce: Robots don&#39;t tire, get bored, or face
            danger. They work tirelessly alongside humans, maximizing efficiency
            and productivity.
          </p>
        </div>
      </div>
      <p className="text-2xl">
        We&#39;re not just about robotics; we&#39;re about progress. AvaWatz
        empowers industries like:
      </p>
      <div className="mt-2 ml-3 flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="h-2 w-2 rounded-full bg-black mt-2" />
          <p className="text-xl">
            Airline and Transportation: Safety inspections and maintenance.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="h-2 w-2 rounded-full bg-black mt-2" />
          <p className="text-xl">
            Hospitality and Healthcare: Increased safety and efficiency.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="h-2 w-2 rounded-full bg-black mt-2" />
          <p className="text-xl">
            Defense and Security: Enabling rapid response and reconnaissance in
            critical operations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActualPitch;
