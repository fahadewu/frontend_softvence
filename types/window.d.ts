export {};

declare global {
  interface Window {
    AOS: any;
    gsap: any;
    Splitting: any;
    splittingInitialized?: boolean;
    heroAnimationsInitialized?: boolean;
  }
}
