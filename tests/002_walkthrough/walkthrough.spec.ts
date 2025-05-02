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
  await expect(page.locator("button.dial-pad-button:nth-child(1)")).toBeVisible();
  await page.locator("button.dial-pad-button:nth-child(1)").click();
  await sleep(1000);

  await expect(page.locator("button.dial-pad-button:nth-child(5)")).toBeVisible();
  await page.locator("button.dial-pad-button:nth-child(5)").click();
  await sleep(1000);

  await expect(page.locator("button.dial-pad-button:nth-child(9)")).toBeVisible();
  await page.locator("button.dial-pad-button:nth-child(9)").click();
  await sleep(1000);

  await page.getByRole('button', { name: /Submit/i }).click();
  await sleep(1000);
  await page.getByRole('button', { name: /Next Part/i }).click();

  // part 3
  await expect(page.locator(".modal-button-1")).toBeVisible();
  await page.locator(".modal-button-1").click();

  await expect(page.locator(".close-button-1 > i:nth-child(1)")).toBeVisible();
  await page.locator(".close-button-1 > i:nth-child(1)").click();

  await expect(page.locator("#answer")).toBeVisible();
  await page.locator("#answer").click();

  await page.getByRole('textbox').fill('One');
  await sleep(1000);
  await page.getByRole('button', { name: /Submit/i }).click();
  await sleep(1000);
  await page.getByRole('button', { name: /Next Part/i }).click();

  // part 4 
  await expect(page.locator("#dial-one")).toBeVisible();
  await page.locator("#dial-one").click();
  await page.locator("#dial-one").click();
  await page.locator("#dial-one").click();
  await sleep(2000);


  await expect(page.locator("#dial-two")).toBeVisible();
  await page.locator("#dial-two").click();
  await page.locator("#dial-two").click();
  await page.locator("#dial-two").click();
  await page.locator("#dial-two").click();
  await page.locator("#dial-two").click();
  await page.locator("#dial-two").click();
  await page.locator("#dial-two").click();
  await sleep(2000);

  await expect(page.locator("#dial-three")).toBeVisible();
  await page.locator("#dial-three").click();
  await page.locator("#dial-three").click();
  await page.locator("#dial-three").click();
  await page.locator("#dial-three").click();
  await page.locator("#dial-three").click();
  await sleep(2000);

  await expect(page.locator("#dial-four")).toBeVisible();
  await page.locator("#dial-four").click();
  await page.locator("#dial-four").click();
  await sleep(2000);
  await page.getByRole('button', { name: /Next Part/i }).click();

  // part last
  await expect(page.locator("div.eye:nth-child(1)")).toBeVisible();
  await page.locator("div.eye:nth-child(1)").click();
  await page.locator("div.eye:nth-child(1)").click();
  await page.locator("div.eye:nth-child(1)").click();
  await page.locator("div.eye:nth-child(1)").click();
  await page.locator("div.eye:nth-child(1)").click();
  await page.locator("div.eye:nth-child(1)").click();
  await page.locator("div.eye:nth-child(1)").click();
  await page.locator("div.eye:nth-child(1)").click();
  await page.locator("div.eye:nth-child(1)").click();
  await page.locator("div.eye:nth-child(1)").click();


  await page.locator("#next-button").click();
  await sleep(3000);


});

