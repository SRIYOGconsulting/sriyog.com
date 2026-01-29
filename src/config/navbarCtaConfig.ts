export const navbarConfig = [
  {
    match: (path: string) => path.startsWith("/partners/apply"),
    text: "Our Partners",
    link: "/partners",
  },
    {
    match: (path: string) => path.startsWith("/branches"),
    text: "Become a Partner",
    link: "partners/apply",
  },

];
