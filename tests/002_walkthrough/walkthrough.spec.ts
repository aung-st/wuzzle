import { test, expect } from "@playwright/test";
import { setTimeout as sleep } from "node:timers/promises";

test("walkthrough", async ({ page,baseURL }) => {
  await page.goto(baseURL as string);
  
  // index 
  await page.getByRole('button', { name: /Start Solving!/i }).click();
  
  // part one
  await expect(page.getByRole("button", {name: "I don\'t know"})).toBeVisible;
  await page.locator("div.item:nth-child(2) > li:nth-child(1) > label:nth-child(2)").check();
  // note: there will not be any alert showing in the head so we are just clicking the submit button instead
  await page.getByRole('button', { name: /Submit/i }).click();
  await page.getByRole('button', { name: /Submit/i }).click();
  await page.getByRole('button', { name: /Submit/i }).click();
  await page.getByRole('button', { name: /Submit/i }).click();
  await page.getByRole('button', { name: /Submit/i }).click();
  await page.getByRole('button', { name: /Next Part/i }).click();

  // part 2
  await sleep(3000);
});
