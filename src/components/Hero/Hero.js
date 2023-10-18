import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Showcasing my developments within the last year of learning the ins and outs of front end!
        </SectionText>
        <Link href="#projects"><Button onClick={props.handleClick}>
        Learn More
        </Button></Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
.