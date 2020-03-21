describe("Google", () => {
  beforeAll(async () => {
    // await page.goto("https://google.com");
    await page.goto("https://google.com/gmail");
    debugger;
  });

  // it("should display search reasult for puppeteer", async () => {
  //   await expect(page).toMatch("google");
  //   const searchInput = await page.$('input[name="q"]');
  //   await searchInput.focus();
  //   await searchInput.type("puppeteer");
  //   await searchInput.press("Enter");
  //   await page.waitForNavigation();
  //   await expect(page).toMatch(
  //     "puppeteer/puppeteer: Headless Chrome Node.js API - GitHub"
  //   );
  // });

  it("should display search reasult for puppeteer", async () => {
    await expect(page);
    const emailid = await page.$("#identifierId");
    await emailid.focus();
    await emailid.type("snehal.yelkar@synerzip.com");
    await emailid.press("Enter");
    await page.waitForNavigation();
  });
});
