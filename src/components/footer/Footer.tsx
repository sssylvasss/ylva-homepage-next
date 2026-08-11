"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Main, BottomTextWrapper, Text } from "./StyleFooter";

const Footer: React.FC = () => {
  const pathname = usePathname();
  const isDarkMode = pathname === "/code";

  return (
    <Main $isDark={isDarkMode}>
      <BottomTextWrapper $isDark={isDarkMode}>
        <Text $isDark={isDarkMode}>
          Website Developed by Ylva Landoff Lindberg
        </Text>
      </BottomTextWrapper>
    </Main>
  );
};

export default Footer;
