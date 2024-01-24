import { Montserrat } from "@next/font/google";

const mt = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: ["400", "500", "700"],
});

export { mt };
