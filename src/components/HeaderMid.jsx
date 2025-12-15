import React from 'react'

function HeaderMid() {
  return (
    <div className="flex flex-wrap justify-around items-center p-0 m-0 gap-46">
      <div className="p-0 m-0">
        <img
          src="https://www.ugc.gov.in/Content/images/Header/ugc_logo.png"
          className="p-0 m-0"
        />
      </div>

      <div className="flex flex-wrap justify-evenly items-center gap-10 p-0 mt-2">
        <img
          src="https://www.ugc.gov.in/Content/images/Header/G20_India_Logo.png"
          className="h-20 w-auto p-0 m-0"
        />
        <img
          src="https://www.ugc.gov.in/Content/images/Header/MHRD_logo.png"
          className="p-0 m-0"
        />
      </div>
    </div>
  );
}

export default HeaderMid;
