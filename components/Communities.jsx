import React from "react";
import Image from "next/image";

const Communities = () => {
  return (
    <div className="flex flex-col gap-2 shadow-md rounded-lg p-3 m-4 justify-around mb-1 bg-white">
      <span className="text-5xl font-bold">Join Communities today!</span>
      <span className="text-xl">
        Connect with people who had similar experiences and make new friends!
      </span>
      <Community
        name="Anxiety Fighters"
        memberNumber="10"
        info="Join us if you are facing Anxiety Problems"
        imgSrc="https://hips.hearstapps.com/hmg-prod/images/what-are-the-physical-symptoms-of-anxiety-64cb84440a2db.jpg?crop=0.700xw:1.00xh;0.151xw,0&resize=1200:*"
      />
      <Community
        name="Not Alone"
        memberNumber="10"
        imgSrc="https://static.vecteezy.com/system/resources/thumbnails/022/188/689/small/alone-sad-boy-alone-concept-generative-ai-photo.jpg"
        info="Dealing with loneliness?... Well not anymore! We are here to make you feel better"
      />
      <Community
        name="Uplift!"
        memberNumber="10"
        imgSrc="https://i.redd.it/alt1xwitwar71.png"
        info="Want to boost your self confidence and learn how to love yourself! Join one of the most positive communities on VentOut!"
      />
    </div>
  );
};

const Community = ({ name, memberNumber, info, imgSrc }) => {
  return (
    <div>
      <section className=" shadow-md rounded-lg p-2 h-max w-9/10 m-1 mt-4 bg-white border-t-2">
        <div className="flex flex-row p-1">
          <Image
            className="rounded-full mr-2 object-cover"
            height={24}
            width={44}
            alt="user-image"
            src={imgSrc}
          />
          <div className="flex flex-col">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-xs text-gray-500">{memberNumber} Members</p>
          </div>
        </div>
        <div className="p-1 mb-2">
          <p className="text-sm text-gray-600 p-1">{info}</p>
        </div>
      </section>
    </div>
  );
};

export default Communities;
