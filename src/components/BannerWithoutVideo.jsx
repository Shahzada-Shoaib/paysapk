import React from "react";

function BannerWithoutVideo(props) {
  return (
    <div>
      {" "}
      <div className="banner px-4 md:px-0">
        <h1 className="max-w-[914px]"> {props.title}</h1>

        <p className="max-w-[600px]   text-center mt-5">
          {" "}
          {props.description}{" "}
        </p>
      </div>
    </div>
  );
}

export default BannerWithoutVideo;
