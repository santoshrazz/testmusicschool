"use client";
import { MaskContainer } from "../ui/svg-mask-effect";

export function Mask_Reveal() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            The first rule of Dance Academy is you do not talk about Dance
            Academy. The second rule of Dance Academy is you DO NOT talk about
            Dance Academy.
          </p>
        }
        className="h-[40rem] border rounded-md"
      >
        The first rule of <span className="text-red-500">Dance Academy</span> is
        you do not talk about Dance Academy. The second rule of Dance Academy is
        you DO NOT talk about{" "}
        <span className="text-red-500">Dance Academy</span>.
      </MaskContainer>
    </div>
  );
}
