import { useEffect } from "react";
import { useState } from "react";
import { HomeBanner } from "./HomeBanner";
import { HomeSecOne } from "./HomeSecOne";
import { HomeSecThree } from "./HomeSecThree";
import { HomeSecTwo } from "./HomeSecTwo";

export function Home() {
  return (
    <>
      <HomeBanner />
      <HomeSecOne />
      <HomeSecTwo />
      <HomeSecThree />
    </>
  );
}
