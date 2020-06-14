import { enhancer } from './AboutMe.enhancer';
import { AboutMe } from './AboutMe';
//add enhancer
export const AboutMeContainer = enhancer(AboutMe);
