import React from "react";

function BannerWithoutVideo(props) {
  return (
    <div>
      {" "}
      <div className="px-4 banner md:px-0">
        <h1 className="max-w-[914px]"> {props.title}</h1>

        <p className="text-center mt-5"> {props.description} </p>
      </div>
    </div>
  );
}

export default BannerWithoutVideo;
