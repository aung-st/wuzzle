import { test, expect } from "@playwright/test";
import { setTimeout as sleep } from "node:timers/promises";

test("walkthrough", async ({ page,baseURL }) => {
  await page.goto(baseURL);
  
  // index 
  await page.getByRole('button', { name: /Start Solving!/i }).click();
  
  // part one
  await page.getByRole("checkbox", {name: "I don't know"}).click();
  
  await page.getByRole('button', { name: /Submit/i }).click();

  await sleep(3000);
});
