import { animate, stagger } from "@motionone/dom";

export function startMotionSequence() {
  const items = document.querySelectorAll(".example li");
  if (!items.length) return;

  const fadeInDuration = 1;
  const delayBetweenItems = 1.5;
  const holdTime = 1;
  const totalFadeInTime =
    fadeInDuration + delayBetweenItems * (items.length - 1);

  function runSequence() {
    animate(
      items,
      { opacity: 1 },
      {
        duration: fadeInDuration,
        delay: stagger(delayBetweenItems),
        easing: "easeInOut",
      }
    );

    setTimeout(
      () => {
        animate(
          items,
          { opacity: 0 },
          {
            duration: 1,
            easing: "easeInOut",
            onComplete: runSequence,
          }
        );
      },
      (totalFadeInTime + holdTime) * 1000
    );
  }

  runSequence();
}
