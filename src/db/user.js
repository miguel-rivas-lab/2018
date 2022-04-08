const user = {
  "name": "Jesus",
  "middleName": "Miguel",
  "lastName": "Rivas",
  "title": "Frontend Developer",
  "website": "miguel-rivas.github.io",
  "email": "miguel.portfolio.gi7pt@simplelogin.fr",
  "location": {
    "city": "Washington",
    "state": "DC"
  },
  "media": {
    "codepen": {
      "user": "planetwurlex"
    },
    "issuu": {
      "user": "jemiguelrivas"
    },
    "linkedin": {
      "user": "jemiguelrivas"
    },
    "github": {
      "user": "jmiguelrivas",
      "development": "miguel-rivas-lab",
      "production": "miguel-rivas"
    }
  }
};

const linkGithub = `https://github.com/${user.media.github.user}`;
const linkLinkedin = `https://www.linkedin.com/in/${user.media.linkedin.user}`

export { user, linkGithub, linkLinkedin };