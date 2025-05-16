"use client";
import React from "react";

import { projectData } from "@/data/fakeData";

const Metrics = () => {
  const footerText =
    projectData?.special_project_parameters
      ?.project_footer_special_text_extra_field_1 || "";

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: footerText,
      }}
    />
  );
};

export default Metrics;
