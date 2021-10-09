import React, { useEffect, useState } from "react";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import JobAdvertisementService from "../services/JobAdvertisementService";

export default function JobAdvertisements() {
  const [jobAnnouncements, setJobAnnouncements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllJobAdvertisements()
      .then((result) => setJobAnnouncements(result.data.data));
  }, []);

  return (
    <div className="min-w-full min-h-screen flex-row ">
      <div className="bg-transparent max-w-screen min-h-full h-80 flex items-center mt-4 rounded-lg bg-gray-400 z-40 justify-center">
       <div className="w-full h-full z-40  ">
       <img
          className="max-h-full  min-w-full "
          alt=""
          src="https://www.swissbusinessacademy.com/wp-content/uploads/2021/03/Human-Resources-Management-with-Intuit-QuickBase.jpg"
        ></img>
       </div>
      </div>
      <div className="w-full h-20 flex items-center justify-center -mt-6">
      <div className="z-50 absolute px-12 bg-white w-3/5  h-20 object-top flex items-center justify-center  rounded-2xl -mt-10 hover:bg-gray-400 ">
        arama barı
      </div>
      </div>

      <div className="max-w-screen mt-4 min-h-screen items-center justify-between" >
        {jobAnnouncements.map(jobadvertisement => (
          <Link to={`/jobAdvertisements/${jobadvertisement.id}`}> 
          <div className="bg-white h-40 rounded-xl m-8 grid gap-2 opacity-90 hover:opacity-100"  key={jobadvertisement.id}>
            <div className="text-center mt-2 font-sans text-xl" >{jobadvertisement.tittle}</div>

            <div className="grid grid-flow-col gap-4 mx-12 -mt-8">
              <div className="w-full col-span-2">
                <div className="rounded-lg ml-8 font-sans text-lg ">
                 {jobadvertisement.employer.companyName}
                </div>
                <div className=" rounded-lg ml-8 font-sans text-lg">{jobadvertisement.city.name}</div>
                <div className=" rounded-lg ml-8 font-sans text-lg">
                 {jobadvertisement.createdDate}
                </div>
              </div>
              <div className=" items-center flex justify-center mb-12 rounded-lg ">
                <BsStar size={20} />
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
