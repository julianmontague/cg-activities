it("renders correctly", async () => {
  const page = await browser.newPage();
  await page.goto("http://localhost:9000", { waitUntil: "networkidle0" });

  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot();
});