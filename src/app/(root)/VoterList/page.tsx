import React from "react";
import { VotersListPages } from "../../../../constants";
import Image from "next/image";
const VoterList = () => {
  return (
    <section className="font-bold text-center mt-16 text-4xl">
      <div
        style={{
          marginTop: "1.5rem",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
        className="flex items-center  justify-center text-yellow-500 "
      >
        {VotersListPages.map((voter) => (
          <div className="" key={voter.id}>
            <Image
              src={voter.imgURL}
              alt={voter.title}
              width={500}
              height={500}
              priority
            />
            <div
              style={{ marginTop: "1rem",} }
              className="flex "
            >
              <h1 className="text-2xl text-center text-yellow-500">{voter.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VoterList;
