const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.google.co.in/");
  const searchInput = await page.$('input[name="q"]');
  await searchInput.focus();
  await searchInput.type("puppeteer");
  await searchInput.press("Enter");
  //   await page.screenshot({path: 'example.png'});

  //   await browser.close();
})();
