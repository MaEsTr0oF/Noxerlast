import React from "react";

import PageWrapper from "@/widgets/PageWrapper";
import ProductContent from "@/widgets/pageContents/ProductContent";
import { getProjectData } from "@/data/fakeData";

export function generateStaticParams() {
  return [
    { productId: "1" },
    { productId: "2" },
    { productId: "3" },
    { productId: "4" },
    { productId: "5" },
  ];
}

const Page = () => {
  return (
    <PageWrapper>
      <ProductContent />
    </PageWrapper>
  );
};

export default Page;
