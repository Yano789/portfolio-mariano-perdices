import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Mariano",
  lastName: "Perdices",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Analyst",
  avatar: "/images/avatar.jpg",
  location: "Asia/Singapore", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Yano789",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mariano-perdices/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:marianoperdices2010@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Mariano Perdices</>,
  subline: (
    <>
      I'm Yano, a data analyst  studying at 
      <br /><InlineCode>Singapore Univerity of Technology and Design(SUTD)</InlineCode>
      <br />where I plan to hone my skills and build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/mariano-perdices",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Yano is a Singapore-based design and computer science student who loves turning data into clear, useful insights. 
        He’s worked on data solutions at Aboitiz Data Innovation, competed nationally in the 2024 CFA Institute Research Challenge, 
        and thrives in collaborative, tech-driven spaces where design meets data.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Aboitiz Data Innovation",
        timeframe: "2022 - 2023",
        role: "Data Solutions",
        achievements: [
          <>
            Created network graphs using Gephi to analyze multivariable datasets, enhancing data visualization.
          </>,
          <>
            Built a Partner Relationship Management (PRM) Network by developing Python scripts and utilizing Databricks to clean and convert PDFs into a structured database.
          </>,
          <>
            Earned a Certificate in Designing and Building AI Products and Services from MIT.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ]
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Singapore University of Technology and Design",
        description: <>Studied Computer Science and Design.</>,
      },
      {
        name: "University of California, Berkeley",
        description: <>Studied Technology, Society, and Culture.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Python",
        description: <>Able to create machine learning models and statistical analyses.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/food-security/fsi-webapp.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        title: "Java",
        description: <>Created an All-in-One Calendar App for Android.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/kairo-android-app/slides-deck.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design, tech, and life...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
