"use client"

import React from "react"
import { CompanyIconList } from "./company-icon-list"
import { companyIconListData } from "./company-icon-list-data"

const Company = () => {
  return (
    <section className="brands max-w-6xl mx-auto py-12">
      <CompanyIconList iconDatas={companyIconListData} />
    </section>
  )
}

export { Company }
