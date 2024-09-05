import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import mjcet from "../../assets/images/mjcet.png";
import lths from "../../assets/images/lths.jpg";
import chaitanyaclg from "../../assets/images/chaitanyaclg.jpg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
        <Paragraph>
      I'm Mohammed Aman, a passionate software developer from Hyderabad with a passion for 
      creating new innovative applications. <br />
      I enjoy solving coding challenges and continuously learning. Outside of work, 
      I play the guitar, read, and play video games.
       </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "Muffakkham Jah College of Engineering & Technology, Hyderabad",
                p: "Bachelors of Mechanical Engineering (2018-2022)",
                image: mjcet,
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "Sri Chaitanya Junior College, Hyderabad",
                p: "Intermediate (2016-2018)",
                image: chaitanyaclg,
              }}
            />
            <AboutItem
              color={yellow}
              data={{
                title: "Little Tulips High School, Hyderabad",
                p: "Secondary Education (2006-2016)",
                image: lths,
              }}
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
