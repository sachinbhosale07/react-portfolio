// Renders resume/resume.html to public/Sachin-Bhosale-Resume.pdf.
// Usage: node resume/build-pdf.js   (needs Playwright: npx playwright install chromium)
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + path.join(__dirname, "resume.html"));
  await page.pdf({
    path: path.join(__dirname, "..", "public", "Sachin-Bhosale-Resume.pdf"),
    format: "A4",
    preferCSSPageSize: true,
    printBackground: false,
  });
  await browser.close();
})();
