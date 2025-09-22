import { expect, test } from "@playwright/test";
const base = process.env.PREVIEW_URL!;
test("home renders", async ({ page }) => {
  await page.goto(base, { waitUntil: "domcontentloaded" });
  await expect(page.locator("h1")).toContainText(/Preview Vercel OK|Async Agent/i);
});
test("api hello works", async ({ request }) => {
  const r = await request.get(new URL("/api/hello", process.env.PREVIEW_URL!).toString());
  expect(r.ok()).toBeTruthy();
});