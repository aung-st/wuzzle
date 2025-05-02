import { test, expect } from "@playwright/test";

test("has title", async ({ page,baseURL }) => {
  await page.goto(baseURL as string);
  await page.getByRole('button', { name: /Start Solving!/i }).click();
  await expect(page.getByRole("button", {name: "I don\'t know"})).toBeVisible;
  await page.locator("div.item:nth-child(2) > li:nth-child(1) > label:nth-child(2)").check();
  await page.getByRole('button', { name: /Submit/i }).click();
  await page.getByRole('button', { name: /Submit/i }).click();
  await page.getByRole('button', { name: /Submit/i }).click();
  await page.getByRole('button', { name: /Submit/i }).click();
  await page.getByRole('button', { name: /Submit/i }).click();
  await expect(page.getByRole('button', { name: /Next Part/i })).toBeVisible();
  await page.getByRole('button', { name: /Next Part/i }).click();

  await expect(page).toHaveTitle(/Wuzzle/);
});