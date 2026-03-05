"use client";

import { useEffect, useState } from "react";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import BusinessList from "./_components/BusinessList";
import GlobalApi from "./_services/GlobalApi";

export default function Home() {
  // State for categories
  const [categoryList, setCategoryList] = useState([]);

  // State for businesses
  const [businessList, setBusinessList] = useState([]);

  // Load data on page load
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch both Category and Business data
  const fetchData = async () => {
    try {
      const categoryResp = await GlobalApi.getCategory();
      const businessResp = await GlobalApi.getAllBusinessList();

      // Set data to state
      setCategoryList(categoryResp?.categories || []);
      setBusinessList(businessResp?.businessLists || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Category Section */}
      <CategoryList categoryList={categoryList} />

      {/* Business Section */}
      <BusinessList
        businessList={businessList}
        title="Popular Business"
      />
    </div>
  );
}





