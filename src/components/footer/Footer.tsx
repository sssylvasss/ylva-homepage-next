import React from "react";
import { useRouter } from "next/router";
import { Main, BottomTextWrapper, Text } from "./StyleFooter";

const Footer: React.FC = () => {
  const router = useRouter();
  const isDarkMode = router.pathname === "/code";

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
