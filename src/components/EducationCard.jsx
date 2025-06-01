import React from "react";
import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: "#00b0ff" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {/* You can add an icon here if you have one for education */}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{education.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {education.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {education.points && education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default EducationCard; 