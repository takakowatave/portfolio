import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottiePlayer = ({ src }: { src: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const anim = lottie.loadAnimation({
      container: ref.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: src,
    });
    return () => anim.destroy();
  }, [src]);

  return <div ref={ref} style={{ width: 300, height: 300, marginBottom: 20 }} />;
};

export default LottiePlayer;
