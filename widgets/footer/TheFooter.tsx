"use client";
import React, { useEffect, useMemo, useState } from "react";
import { observer } from "mobx-react-lite";
import { NavLink, useLocation } from "react-router-dom";
import { shoppingCartStore } from "@/store/ShoppingCartStore";
import "@/styles/widgets/footer.css";
import { detectIOS } from "@/utils/detectIOS";

const TheFooter = observer(() => {
  const location = useLocation();
  const [isIOS, setIsIOS] = useState(false);

  const [links, setLinks] = useState([
    {
      id: 1,
      icon:
        '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M7.34655 18.9553H3.98376C2.74494 18.9553 1.74121 17.9516 1.74121 16.7127V10.1159C1.74197 9.63537 1.84541 9.1605 2.0446 8.72315C2.2438 8.2858 2.53415 7.89606 2.89621 7.58005L8.95742 2.30077C9.36557 1.94571 9.88831 1.75015 10.4293 1.75015C10.9703 1.75015 11.493 1.94571 11.9011 2.30077L17.9624 7.58107C18.3243 7.89697 18.6146 8.28654 18.8138 8.72371C19.0129 9.16087 19.1165 9.63554 19.1174 10.1159V16.7127C19.1174 17.3073 18.8812 17.8776 18.4609 18.2981C18.0406 18.7186 17.4704 18.955 16.8758 18.9553H13.7921V12.2287C13.7921 11.3006 13.0398 10.5473 12.1107 10.5473H9.02897C8.09986 10.5473 7.34757 11.3006 7.34757 12.2287L7.34655 18.9553ZM7.34655 18.9553H13.7931" stroke="#8B8B8B" strokeWidth="1.3" strokeLinejoin="round"/>\n' +
        "</svg>",
      href: "/",
      isActive: false,
    },
    {
      id: 2,
      icon:
        '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M4.375 8.75H6.125C7.875 8.75 8.75 7.875 8.75 6.125V4.375C8.75 2.625 7.875 1.75 6.125 1.75H4.375C2.625 1.75 1.75 2.625 1.75 4.375V6.125C1.75 7.875 2.625 8.75 4.375 8.75Z" stroke="#8B8B8B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>\n' +
        '<path d="M14.875 8.75H16.625C18.375 8.75 19.25 7.875 19.25 6.125V4.375C19.25 2.625 18.375 1.75 16.625 1.75H14.875C13.125 1.75 12.25 2.625 12.25 4.375V6.125C12.25 7.875 13.125 8.75 14.875 8.75Z" stroke="#8B8B8B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>\n' +
        '<path d="M14.875 19.25H16.625C18.375 19.25 19.25 18.375 19.25 16.625V14.875C19.25 13.125 18.375 12.25 16.625 12.25H14.875C13.125 12.25 12.25 13.125 12.25 14.875V16.625C12.25 18.375 13.125 19.25 14.875 19.25Z" stroke="#8B8B8B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>\n' +
        '<path d="M4.375 19.25H6.125C7.875 19.25 8.75 18.375 8.75 16.625V14.875C8.75 13.125 7.875 12.25 6.125 12.25H4.375C2.625 12.25 1.75 13.125 1.75 14.875V16.625C1.75 18.375 2.625 19.25 4.375 19.25Z" stroke="#8B8B8B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>\n' +
        "</svg>",
      href: "/catalog",
      isActive: false,
    },
    {
      id: 4,
      icon:
        '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M11.0425 18.2088C10.745 18.3138 10.255 18.3138 9.9575 18.2088C7.42 17.3426 1.75 13.7288 1.75 7.60384C1.75 4.90009 3.92875 2.71259 6.615 2.71259C8.2075 2.71259 9.61625 3.48259 10.5 4.67259C11.3837 3.48259 12.8013 2.71259 14.385 2.71259C17.0713 2.71259 19.25 4.90009 19.25 7.60384C19.25 13.7288 13.58 17.3426 11.0425 18.2088Z" stroke="#8B8B8B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>\n' +
        "</svg>",
      href: "/favorites",
      isActive: false,
    },
    {
      id: 5,
      icon:
        '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M7.70913 1.75L4.54163 4.92625" stroke="#8B8B8B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>\n' +
        '<path d="M13.2916 1.75L16.4591 4.92625" stroke="#8B8B8B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>\n' +
        '<path d="M1.75 6.86816C1.75 5.24941 2.61625 5.11816 3.6925 5.11816H17.3075C18.3838 5.11816 19.25 5.24941 19.25 6.86816C19.25 8.74941 18.3838 8.61816 17.3075 8.61816H3.6925C2.61625 8.61816 1.75 8.74941 1.75 6.86816Z" stroke="#8B8B8B" strokeWidth="1.3"/>\n' +
        '<path d="M8.54004 12.25V15.3562" stroke="#8B8B8B" strokeWidth="1.3" strokeLinecap="round"/>\n' +
        '<path d="M12.5653 12.25V15.3562" stroke="#8B8B8B" strokeWidth="1.3" strokeLinecap="round"/>\n' +
        '<path d="M3.0625 8.75L4.29625 16.31C4.57625 18.0075 5.25 19.25 7.7525 19.25H13.0288C15.75 19.25 16.1525 18.06 16.4675 16.415L17.9375 8.75" stroke="#8B8B8B" strokeWidth="1.3" strokeLinecap="round"/>\n' +
        "</svg>",
      href: "/shoppingcart",
      isActive: false,
    },
  ]);

  const cartCount = useMemo(() => {
    const items = [...shoppingCartStore.items];
    return items.reduce((acc, item) => acc + (item.quantity || 1), 0);
  }, [shoppingCartStore.items]);

  useEffect(() => {
    setLinks(
      links.map((link) => {
        return link.href === location.pathname
          ? { ...link, isActive: true }
          : { ...link, isActive: false };
      })
    );
  }, [location]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsIOS(detectIOS());
    }
  }, []);

  return (
    <footer className={`footer ${isIOS ? "footer-ios" : ""}`}>
      <nav className="footer-nav">
        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            className={`footer-nav-link click-effect-block ${link.isActive ? "activeLink" : ""}`}
            dangerouslySetInnerHTML={{ __html: link.icon }}
          ></NavLink>
        ))}

        {cartCount > 0 && (
          <span
            className={`footer-cart-badge${location.pathname.includes("shoppingcart") ? " footer-cart-badge--active" : ""}`}
          >
            {cartCount}
          </span>
        )}
      </nav>
    </footer>
  );
});

export default TheFooter;
