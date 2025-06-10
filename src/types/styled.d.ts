import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      white: string;
      orange: string;
      modalOverlay: string;
    };
  }
}
