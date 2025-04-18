import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  useGSAP(() => {
    const row = document.querySelector(".services_row");

    const rowWidth = row.scrollWidth;
    const scrollAmount = rowWidth - window.innerWidth;

    const tween = gsap.to(row, {
      x: -scrollAmount,
      ease: "none",
      duration: 3,
    });

    ScrollTrigger.create({
      trigger: ".services_row",
      start: "top 20%",
      end: `+=${scrollAmount}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      animation: tween,
    });
  }, []);
  useGSAP(() => {
       gsap.to(".lap_icon", {
         x: 600,
         scrollTrigger: {
           trigger: ".icon_wrapper",
           start: "top 18%",
           end: "top 18%",
           toggleActions: "play none none reverse ",
           invalidateOnRefresh: true
         },
       });
     });
  useGSAP(() => {
       gsap.to(".app_icon", {
         x: 600,
         scrollTrigger: {
           trigger: ".icon_wrapper",
           start: "top -88%",
           end: "top -88%",
           toggleActions: "play none none reverse",
           invalidateOnRefresh: true
         },
       });
     });
  useGSAP(() => {
       gsap.to(".ui_icon", {
         x: 600,
         scrollTrigger: {
           trigger: ".icon_wrapper",
           start: "top -194%",
           end: "top -194%",
           toggleActions: "play none none reverse",
           invalidateOnRefresh: true
         },
       });
     });
  useGSAP(() => {
       gsap.to(".amc_icon", {
         x: 600,
         scrollTrigger: {
           trigger: ".icon_wrapper",
           start: "top -300%",
           end: "top -300%",
           toggleActions: "play none none reverse",
           invalidateOnRefresh: true
         },
       });
     });
     useGSAP(() => {
        gsap.to(".servers_icon", {
          x: 600,
          scrollTrigger: {
            trigger: ".icon_wrapper",
            start: "top -350%",
            end: "top -350%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          },
        });
      });
     useGSAP(() => {
        gsap.to(".digital_icon", {
          x: 600,
          scrollTrigger: {
            trigger: ".icon_wrapper",
            start: "top -360%",
            end: "top -360%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          },
        });
      });
};

