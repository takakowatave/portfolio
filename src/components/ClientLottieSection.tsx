"use client";

import LottieGrid from "./LottieGrid";

type Props = {
  slug: string;
};

export default function ClientLottieSection({ slug }: Props) {
  if (slug !== "your-lottie-page-slug") return null;

  return (
    <section className="my-12">
      <LottieGrid />
    </section>
  );
}
