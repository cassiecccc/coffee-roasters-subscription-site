import { AboutBanner } from "./AboutBanner";
import { AboutCommit } from "./AboutCommit";
import { AboutHQ } from "./AboutHQ";
import { AboutQuality } from "./AboutQuality";

export function About() {
  return (
    <>
      <AboutBanner />
      <AboutCommit />
      <AboutQuality />
      <AboutHQ />
    </>
  );
}
