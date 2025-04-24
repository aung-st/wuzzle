import { test, expect } from "@playwright/test";
import { setTimeout as sleep } from "node:timers/promises";

test("has title", async ({ page,baseURL }) => {

  await page.goto(baseURL as string);

  await expect(page).toHaveTitle(/Wuzzle/);
});

test("has heading", async ({ page,baseURL }) => {
  await page.goto(baseURL as string);

  await expect(page.getByRole("heading", { name: "Are you ready to solve this little wuzzle?" })).toBeVisible();
});


test("has instruction paragraph", async ({ page,baseURL }) => {
  await page.goto(baseURL as string);

  await expect(page.getByText("Just press the button below and get ready to follow the steps!" )).toBeVisible();
});

test("has start button", async ({ page,baseURL }) => {
  await page.goto(baseURL as string);

  await expect(page.getByRole("button", {name: "Start Solving!"})).toBeVisible;
});

test("has bottom paragraph", async ({ page,baseURL }) => {
  await page.goto(baseURL as string);

  await expect(page.getByText("Prize at the end! What is it? I don't know!")).toBeVisible();
});

test("button is clickable", async ({ page,baseURL }) => {
  await page.goto(baseURL as string);
 
  await page.getByRole('button', { name: /Start Solving!/i }).click();
});
