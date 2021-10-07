import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import JobAdvertisementService from "../services/JobAdvertisementService";

export default function JobAdvertisementDetail() {
  let { id } = useParams();

  const [jobAdvertisement, setJobAdvertisement] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getById(id)
      .then((result) => setJobAdvertisement(result.data.data));
  });

  return (
    <div>
      <div className=" min-w-max min-h-full text-gray-500"></div>
    </div>
  );
}
