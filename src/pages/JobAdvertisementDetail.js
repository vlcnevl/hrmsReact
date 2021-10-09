import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import JobAdvertisementService from "../services/JobAdvertisementService";

export default function JobAdvertisementDetail() {
  let { id } = useParams();

  const [jobadvertisement, setJobAdvertisement] = useState({});

  useEffect(() => {
      let jobAdvertisementService = new JobAdvertisementService()
      jobAdvertisementService.getById(id).then((result) => setJobAdvertisement(result.data.data))
  },)
 
  return (
    <div className="min-h-screen min-w-full flex justify-center">
      <div className="bg-white w-5/6 min-h-screen mb-8 mt-5 rounded-lg shadow-2xl ">
        <div className="flex  justify-around min-h-screen">
          <div className="w-3/5   justify-center  ">
            <div className="text-center text-xl font-sans mt-5 ">
             {jobadvertisement.tittle}
            </div>

            <div className=" mx-10 mt-5 text-lg font-sans ">
              {jobadvertisement.description}
            </div>
            <div className=" mx-10 mt-5 text-lg font-sans ">{jobadvertisement.minSalary} -{jobadvertisement.maxSalary} </div>

            <div className=" mx-10 mt-5 text-lg font-sans ">
             {jobadvertisement.openPosition}
            </div>

            <div className=" mx-10 mt-5 text-lg font-sans ">
              {jobadvertisement.jobType}
            </div>
            <div className=" mx-10 mt-5 text-lg font-sans ">{jobadvertisement.createdDate}</div>
            <div className=" mx-10 mt-5 text-lg font-sans ">{jobadvertisement.expirationDate}</div>

            <div className=" mx-10 mt-5 text-lg font-sans ">
               {/* {jobadvertisement.department.departmentName}
              {jobadvertisement.department.description} */}
            </div>
            <div className=" mx-10 mt-5 text-lg font-sans ">{/*jobadvertisement.city.name*/}</div>

            <div className="flex flex-center justify-center">
              <button className="absolute bottom-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex  font-sans">
                <span>Başvuru Yap</span>
              </button>
            </div>
          </div>
          <div className=" w-2/5 flex justify-center border-l-2 ">
            <div className="text-center text-xl font-sans mt-5 items-center justify-center flex flex-col">

            <div className="text-center text-xl font-sans mt-5 ">
              {/* {jobadvertisement.employer.companyName} */}
            </div>

            <div className=" mx-10 mt-5 text-lg font-sans ">
            {/* {jobadvertisement.employer.email} */}
            </div>
            <div className=" mx-10 mt-5 text-lg font-sans ">
            {/* {jobadvertisement.employer.webAddress} */}
            </div>
            <div className=" mx-10 mt-5 text-lg font-sans ">
            {/* {jobadvertisement.employer.phoneNumber} */}
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
