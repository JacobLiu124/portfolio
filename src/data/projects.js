// ------------------------------------------------------------------
// Add one object per project. Every field is used somewhere:
//
//   title        — card heading
//   summary      — one or two sentences, shown on the card
//   skills       — array of short tags, shown as chips on the card
//   screenshot   — path relative to /public, shown at the top of the
//                  modal (e.g. "/projects/my-project/cover.png").
//                  Leave as null to skip the image.
//   links        — optional { label, href } entries, shown as buttons
//                  in the modal (e.g. repo, live demo, paper).
//   documentation — the body of the modal. This accepts an array of
//                  section blocks so you can write real docs, not
//                  just a paragraph. Two block types are supported:
//                    { heading, body }         → a titled paragraph
//                    { heading, list: [...] }  → a titled bullet list
//
// Leave documentation as an empty array until you're ready to write
// it — the modal will just show the summary in that case.
// ------------------------------------------------------------------

export const projects = [
  {
    id: "1",
    title: "Cove - Digital Wallet (Work in Progress)",
    summary: "A client-facing digital wallet application that allowers users to pay, request and split bills between their friends.",
    skills: ["React, Vite, Express, Nodejs, postgres, basiq, REST API"],
    screenshot: "/projects/covess.png",
    links: [
      // { label: "Repository", href: "https://github.com/you/project-one" },
      // { label: "Live demo", href: "https://project-one.example.com" },
    ],
    documentation: [
      {
       heading: "Abstract",
       body: "Cove was developed as a part of my contiuous professional development as a software engineer. The project was developed with the aim of learning and applying what I" +
       "already know and what I still need to learn in the field of full-stack web application development.",
      },
      {
       heading: "Project Description",
       body: "Cove serves as a client facing application for basiq.io. Basiq is is an application which allows users to connect to their financial institutions and manage their accounts. " +
       "After connecting to their financial institutions, users can pay, request and split bills between their friends, using their chosen username." +
       "The application is still currently under development and is not yet available for public use. This is due to the nature of financial applications, the security framework needed," +
       "the legal requirements surrounding digital wallents and the layers of security features, like Multi-Factor Authentication, that need to be implemented before the application can be released to the public.",
      },
      {
        heading: "Highlights",
        list: [
          "Full-stack web application development using React, Vite, Express, Nodejs and Postgres.",
          "Secured backend API endpoints using JWT authentication and authorization.",
          "Password strength validation, encrypting using salt and bcrypt.",
        ],
      },
    ],
  },

  {
    id: "2",
    title: "goFinance - Stock Market Analysis and Prediction Bot",
    summary: "A bot that analyses stock market data and predicts the future price of a stock using machine learning algorithms.",
    skills: ["XGboost, Python, Pandas, React, Vite"],
    screenshot: "/projects/stockbot.png",
    links: [
      // { label: "Repository", href: "https://github.com/you/project-one" },
      { label: "Live demo", href: "https://go-finance.streamlit.app/" },
    ],
    documentation: [
      {
       heading: "Abstract",
       body: "goFinance is a project that combined two of my intrests, the stock market and machine learning. Piquing my interest early 2026, investing my money for the future was at the forefront" +
       " of my mind during my final years as a software engineer. Researching deep learning applications in radiology, I was inspired to apply the machine learning skills that I saw in my thesis "+ 
       "to my personal intrests as well.",
      },
      {
       heading: "Project Description",
       body: "goFinance bot uses XGboost (extreme gradient boosting), a machine learning algorithm, to predict the future price of a stock based on historical data." +
       "The bot uses the Yahoo Finance API to fetch historical stock data and then uses the XGboost algorithm to train a model on that data." + 
       " Data is cached between sessions and updated regualarly to ensure accuracy. ",
      },
      {
        heading: "Highlights",
        list: [
          "Implementation of XGboost (extreme gradient boosting) for stock price prediction.",
          "Data fetching and caching using Yahoo Finance API.",
          "Confidence ratings on par with industry standards.",
        ],
      },
    ],
  },

  // Duplicate the shape above for each additional project.
  // {
  //   id: "project-two",
  //   title: "...",
  //   summary: "...",
  //   skills: [],
  //   screenshot: null,
  //   links: [],
  //   documentation: [],
  // },
];
