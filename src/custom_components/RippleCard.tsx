import Ripple from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function RippleCard() {
  return (
    <div className="py-24 max-w-5xl mx-auto relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-slate-200 md:shadow-xl">
      <div className="text-center">
        <Ripple />
        <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-red-500">
          AI Hunt 2.0 Coming Soon!
        </h2>
        {/* <p className="px-2 text-lg md:text-xl max-w-2xl text-center">
          Be part of a community that is passionate about Artificial
          Intelligence and making a difference. Join us and contribute to
          exciting projects, gain new skills, and connect with like-minded
          individuals.
        </p> */}
        <p className="px-2 text-lg md:text-xl max-w-2xl text-center">
          Get ready for AIS's flagship cryptic hunt event filled with
          challenges, puzzles, and fun! Compete against the clock to
          solve a series of 20 questions and try to maximise your
          points to win prizes from a prize pool of 10,000 INR!
        </p>
      </div>
      {/* <Link href="/join">
        <Button size="lg" className="z-10 mt-6">
          Join Now
        </Button>
      </Link> */}
    </div>
  );
}
