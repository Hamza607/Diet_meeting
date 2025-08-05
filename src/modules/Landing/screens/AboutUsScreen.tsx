import React from "react";
import { Box, Typography } from "@mui/material";
import { Col, Row } from "antd";
import { IMG } from "@constants";

const AboutUsScreen: React.FC = () => {
  return (
    <Box className="lg:py-[8em] sm:py-[5em] py-[4em] bg-white-light">
      <Typography variant="h1" className="text-center mb-[2em]">
        About Us
      </Typography>
      <Row gutter={[{ md: 32 }, { md: 0, sm: 32, xs: 32 }]}>
        <Col md={12} xs={24} className="lg:text-end">
          <Box
            component="img"
            src={IMG.LANDING.ABOUT_US_CONTAINER_IMG}
            alt=""
            className="w-full md:h-full md:max-w-[559px] h-[325px] md:pl-3 md:object-fill object-cover"
          />
        </Col>
        <Col md={12} xs={24}>
          <Box className="w-full md:max-w-[600px] md:pr-3 px-4">
            <Typography className="text-[1.75em] font-bold font-poppins-bold">
              A Note from Diet Meetings
            </Typography>
            <Typography>
              Hi there —
              <Box component="br" />
              <Box component="br" />
              I’m
              {"  "}
              <Box component="span" className="font-inter-bold font-bold">
                Jane McCoy
              </Box>
              , and I’m so excited to welcome you to{"  "}
              <Box component="span" className="font-inter-bold font-bold">
                DietMeetings.com!
              </Box>
              <Box component="br" />
              Helping people feel their best — through nutrition, fitness, and
              community — has been a huge part of my life for as long as I can
              remember. I studied{"  "}
              <Box component="span" className="font-inter-bold font-bold">
                Health Education and Biology
              </Box>
              {"  "}
              in college, then went on to earn a{"  "}
              <Box component="span" className="font-inter-bold font-bold">
                Master’s Degree in Health Promotion and Wellness Management,
              </Box>
              {"  "}
              because I knew early on that I wanted to make a real difference in
              people’s lives. And focusing on health was the best way I knew
              how.
              <Box component="br" />
              <Box component="br" />
              In 1987, I started my first business,{"  "}
              <Box component="span" className="font-inter-bold font-bold">
                Personal Fitness,
              </Box>
              {"  "}
              where I worked one-on-one with clients to build healthier habits.
              A few years later, I expanded by adding a{"  "}
              <Box component="span" className="font-inter-bold font-bold">
                Diet Center franchise,
              </Box>
              {"  "}
              giving even more people access to structured, supportive programs.
              I also spent time in{"  "}
              <Box component="span" className="font-inter-bold font-bold">
                corporate health and fitness
              </Box>
              {"  "}
              at Bally’s, and I loved getting to help larger groups get excited
              about wellness. Throughout it all, I kept teaching{"  "}
              <Box component="span" className="font-inter-bold font-bold">
                Health Education in the public schools, —
              </Box>
              {"  "}
              and kept learning from the amazing people I had the chance to
              coach and work alongside.
              <Box component="br" />
              As life evolved, I also had the opportunity to develop and manage
              a{"  "}
              <Box component="span" className="font-inter-bold font-bold">
                multi-million dollar law firm
              </Box>
              {"  "}
              for over 20 years. It was an incredible experience building a
              thriving business — but no matter what path I followed
              professionally,{"  "}
              <Box component="span" className="font-inter-bold font-bold">
                health and wellness always remained my true passion.
              </Box>
              <Box component="br" />
              <Box component="br" />
              <Box component="span" className="font-inter-bold font-bold">
                DietMeetings.com was the next step in that journey —
              </Box>{" "}
              a place where we can meet, share, learn, and lift each other up in
              our quest for a healthy lifestyle..
              <Box component="br" />
              It’s a space{"  "}
              <Box component="span" className="font-inter-bold font-bold">
                “where dieters meet”
              </Box>
              {"  "}
              — and where support, understanding, and progress go hand in hand.
              <Box component="br" />
              <Box component="br" />
              Whether you're just starting out, trying to reach a big goal, or
              looking to help others do the same, you’ll find a community here
              that “gets it”.
              <Box component="br" />
              <Box component="br" />
              No judgment. No hype. Just real people supporting each other,
              every step of the way.
              <Box component="br" />
              I'm so glad you’re here — and I can't wait to see what we’ll
              achieve together.
              <Box component="br" />
              <Box component="br" />
              Here’s to your journey,
              <Box component="br" />
              <Box component="br" />
              <Box
                component="span"
                className="block font-inter-bold font-bold text-primary-hard"
              >
                Jane McCoy
              </Box>
              Founder, DietMeetings.com
            </Typography>
          </Box>
        </Col>
      </Row>
    </Box>
  );
};

export default AboutUsScreen;
