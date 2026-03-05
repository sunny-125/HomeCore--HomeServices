"use client";

import React, { useEffect, useState, use } from "react";
import BusinessList from "@/app/_components/BusinessList";
import GlobalApi from "@/app/_services/GlobalApi";

function BusinessByCategory({ params }) {

  const resolvedParams = use(params); // ✅ unwrap promise
  const { category } = resolvedParams;

  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    if (category) {
      getBusinessList();
    }
  }, [category]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(category)
      .then((resp) => {
        setBusinessList(resp?.businessLists);
      });
  };

  return (
    <div>
      <BusinessList
        title={category}
        businessList={businessList}
      />
    </div>
  );
}

export default BusinessByCategory;