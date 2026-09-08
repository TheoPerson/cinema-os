import { expect, test } from "@playwright/test";

test("home renders cinema identity", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Your personal history of cinema")).toBeVisible();
  await expect(page.getByText("Remember every film.")).toBeVisible();
});
