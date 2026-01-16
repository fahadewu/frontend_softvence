export { };

declare global {
  interface Window {
    AOS: any;
    gsap: any;
    Splitting: any;
    splittingInitialized?: boolean;
    heroAnimationsInitialized?: boolean;
  }
}


// Look for something like this:
interface CaseStudy {
  id: string;
  title: string;
  // Add this line:
  image: string;
  // ... other properties
}