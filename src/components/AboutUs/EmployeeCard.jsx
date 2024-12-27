import React from "react";

function EmployeeCard(props) {
  return (
    <div className="w-[272px] h-[350px] rounded-3xl bg-black flex flex-col overflow-hidden">
      <div className="text-white leading-[17px]  p-7 ">
        <p className="text-[18px] font-bold">{props.title}</p>
        <p className="text-[14px] pt-[4px]" style={{ fontWeight: 400 }}>
          {" "}
          {props.description}
        </p>
      </div>
      <div className="flex items-end mt-auto ">
        <img alt="Employees" src={props.imageUrl} />
      </div>
    </div>
  );
}

export default EmployeeCard;
