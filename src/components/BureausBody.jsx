import React from 'react';
import DataFile from "../JsonData/DataFile.json";

function BureausBody() {
  return (
    <>
      <div className='bg-[url("https://www.ugc.gov.in/Content/images/header/services2.jpg")] w-full flex flex-col h-auto p-12 text-white px-32 gap-6 flex-wrap'>
        <div className='text-amber-600'>
          Home / About Us / UGC Bureaus
        </div>
        <div className="text-5xl mb-2">
          Bureaus
        </div>
      </div>
      
      <div className='w-full flex flex-wrap flex-col justify-center items-start'>
        <div className="text-amber-600 pl-36 pt-5 text-3xl font-bold">
          Joint Secretaries
        </div>
        <div className="w-full flex flex-wrap justify-center items-start gap-10 p-10">      
        {DataFile.map((items, index) => (

          <>

            {items.joint && items.joint.map((person, i) => (
              <div
                key={`joint-${index}-${i}`}
                className='shadow-2xl shadow-neutral-950 border-2 border-gray-200 h-96 overflow-auto w-xl rounded-xl'
              >
                <div className='mt-4 w-full py-3 pl-3 text-white font-bold text-xl bg-amber-600'>
                  {person.name}
                </div>

                <div className='px-4 pt-2 flex gap-4 pb-12'>
                  
                  <img className='w-24 h-32 rounded-lg object-cover'
                    src={person.photo || "https://via.placeholder.com/100"}
                  />

                  <div className='flex flex-col gap-4'>
                    <div className='border-b-2 text-lg text-gray-600 italic pb-2 border-amber-600 pt-2.5'>
                      {person.post}
                    </div>

                    <div className='flex flex-col gap-2'>
                      {person.description.map((desc, idx) => (
                        <div key={idx} className='flex items-center gap-1'>
                          <i className="fa fa-arrow-circle-right text-amber-600" />
                          <span>{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </>

        ))}
        </div>
        <div className="text-amber-600 pl-36 pt-5 text-3xl font-bold">
          Deputy Secretaries
        </div>
        <div className="w-full flex flex-wrap justify-center items-start gap-10 p-10">
        
        {DataFile.map((items, index) => (

          <>
            {items.deputy && items.deputy.map((person, i) => (
              <div
                key={`deputy-${index}-${i}`}
                className='shadow-2xl shadow-neutral-950 border-2 border-gray-200 h-96 w-xl overflow-auto rounded-xl'
              >
                <div className='mt-4 w-full py-3 pl-3 text-white font-bold text-xl bg-amber-600'>
                  {person.name}
                </div>

                <div className='px-4 pt-2 flex gap-4 pb-12'>
                  
                  <img className='w-24 h-32 rounded-lg object-cover'
                    src={person.photo || "https://via.placeholder.com/100"}
                  />

                  <div className='flex flex-col gap-4'>
                    <div className='border-b-2 text-lg text-gray-600 italic pb-2 border-amber-600 pt-2.5'>
                      {person.post}
                    </div>

                    <div className='flex flex-col gap-2'>
                      {person.description.map((desc, idx) => (
                        <div key={idx} className='flex items-center gap-1'>
                          <i className="fa fa-arrow-circle-right text-amber-600" />
                          <span>{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </>

        ))}

        </div>
      </div>
      

    </>
  );
}

export default BureausBody;
