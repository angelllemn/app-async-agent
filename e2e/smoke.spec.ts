import { expect, test } from "@playwright/test";
const base = process.env.PREVIEW_URL!;
test("home", async ({ page }) => {
  await page.goto(base);
  await expect(page).toHaveTitle(/async agent/i);
})