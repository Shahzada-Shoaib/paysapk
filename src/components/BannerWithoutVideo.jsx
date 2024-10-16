import React from 'react'

function BannerWithoutVideo(props) {
  return (
    <div>
          {" "}
          < div className="banner" >
              <div>
                  <h1 className="max-w-[914px]">
                      {" "}
                      {props.title}
                  </h1>
              </div>
              <div>
                  <p className="max-w-[600px]   text-center mt-5">
                      {" "}     
                      {props.description}
                      {" "}
                  </p>
              </div>
          </div >
        
    </div>
    
      
  )
}

export default BannerWithoutVideo;