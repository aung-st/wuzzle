import { test, expect } from "@playwright/test";
import { setTimeout as sleep } from "node:timers/promises";

test("walkthrough", async ({ page,baseURL }) => {
  await page.goto(baseURL as string);
  
  // index 
  await page.getByRole('button', { name: /Start Solving!/i }).click();
  
  // part one
  await page.getByRole("checkbox", {name: "answer2"}).check();
  await page.getByRole('button', { name: /Submit/i }).click();

  await sleep(3000);
});
