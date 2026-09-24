# Sachin Bhosale — Portfolio

Personal portfolio site built with React, Tailwind CSS and react-scroll.

Live site: https://sachinbhosale07.github.io/react-portfolio

## Development

```bash
npm install
npm start       # dev server at http://localhost:3000
npm run build   # production build in ./build
```

## Deployment

Every push to `main` builds the app and deploys it to GitHub Pages via
`.github/workflows/deploy.yml`. In the repository settings, set
**Pages → Build and deployment → Source** to **GitHub Actions**.

## Updating content

- All text, jobs, work sites, projects and skills: `src/data/portfolio.js`
- Screenshots: `src/asset/work/` (company sites) and `src/asset/projects/`
- Resume: edit `resume/resume.html`, then run `node resume/build-pdf.js` to
  regenerate `public/Sachin-Bhosale-Resume.pdf`
