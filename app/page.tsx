"use client";
import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import PageWrapper from "@/widgets/PageWrapper";
import HomePageContent from "@/widgets/pageContents/HomePageContent";
import CatalogContent from "@/widgets/pageContents/CatalogContent";
import FavoritesContent from "@/widgets/pageContents/FavoritesContent";
import ShoppingCartContent from "@/widgets/pageContents/ShoppingCartContent";
import ProductContent from "@/widgets/pageContents/ProductContent";

import "@/styles/widgets/homePage.css";
import Loading from "@/shared/Loading";
import ScrollToTop from "@/utils/ScrollToTop";


export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <main>
      <Loading />
    </main>
  }

  return (
    <HashRouter>
      <ScrollToTop>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<HomePageContent />} />
            <Route path="/catalog" element={<CatalogContent />} />
            <Route path="/favorites" element={<FavoritesContent />} />
            <Route path="/shoppingcart" element={<ShoppingCartContent />} />
            <Route path="/product/:productId" element={<ProductContent />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageWrapper>
      </ScrollToTop>
    </HashRouter>
  );
}
