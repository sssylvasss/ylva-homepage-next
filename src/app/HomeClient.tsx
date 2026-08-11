"use client";

import { useEffect, useState } from "react";
import { useAnimation } from "../context/AnimationContext";
import {
  LandingContainer,
  HeroSection,
  CloverContainer,

  CircleText,
  CircleLinkLeft, 
  CircleLinkRight, 
  CircleLinkBottom, 
  SmallCircleLinkCV,
  SmallCircleLinkContact,
  SmallCircleText,
} from "./homeStyling";

export default function HomeClient() {
  const { hasSeenAnimation, setHasSeenAnimation } = useAnimation();
  // Decided once per mount so marking the animation "seen" below can't cut
  // this instance's own crash-in animation short.
  const [shouldAnimate] = useState(() => !hasSeenAnimation);

  useEffect(() => {
    if (!hasSeenAnimation) {
      setHasSeenAnimation(true);
    }
  }, [hasSeenAnimation, setHasSeenAnimation]);

  return (
    <LandingContainer>
      <HeroSection>
        <CloverContainer>
          <CircleLinkLeft href="/code" $shouldAnimate={shouldAnimate}>
            <CircleText>Code</CircleText>
          </CircleLinkLeft>
          <CircleLinkRight href="/art" $shouldAnimate={shouldAnimate}>
            <CircleText>Art</CircleText>
          </CircleLinkRight>
          <CircleLinkBottom href="/video" $shouldAnimate={shouldAnimate}>
            <CircleText>Video</CircleText>
          </CircleLinkBottom>
          <SmallCircleLinkCV href="/cv" $shouldAnimate={shouldAnimate}>
            <SmallCircleText>CV</SmallCircleText>
          </SmallCircleLinkCV>
          <SmallCircleLinkContact href="/contact" $shouldAnimate={shouldAnimate}>
            <SmallCircleText>Contact</SmallCircleText>
          </SmallCircleLinkContact>
        </CloverContainer>
      </HeroSection>
    </LandingContainer>
  );
}