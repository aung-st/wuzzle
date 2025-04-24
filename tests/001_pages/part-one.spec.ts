import { test, expect } from "@playwright/test";
import { setTimeout as sleep } from "node:timers/promises";

test("has title", async ({ page,baseURL }) => {

  await page.goto(baseURL);
 
  await page.getByRole('button', { name: /Start Solving!/i }).click();

  await expect(page).toHaveTitle(/Wuzzle/);
});