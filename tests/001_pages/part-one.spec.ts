import { test, expect } from "@playwright/test";

test("has title", async ({ page,baseURL }) => {

  await page.goto(baseURL as string);
 
  await page.getByRole('button', { name: /Start Solving!/i }).click();

  await expect(page).toHaveTitle(/Wuzzle/);
});

test("has top heading", async ({ page,baseURL }) => {
  await page.goto(baseURL as string);
  
  await page.getByRole('button', { name: /Start Solving!/i }).click();

  await expect(page.getByRole("heading", { name: "Why is this called a wuzzle?" })).toBeVisible();
});

test("has top radio button", async ({ page,baseURL }) => {
  await page.goto(baseURL as string);

  await expect(page.getByRole("button", {name: "Just because"})).toBeVisible;
});

test("has middle radio button", async ({ page,baseURL }) => {
  await page.goto(baseURL as string);

  await expect(page.getByRole("button", {name: "I don\'t know"})).toBeVisible;
});

test("has bottom radio button", async ({ page,baseURL }) => {
  await page.goto(baseURL as string);

  await expect(page.getByRole("button", {name: "Bad at naming"})).toBeVisible;
});

test("has submit button", async ({ page,baseURL }) => {
  await page.goto(baseURL as string);

  await expect(page.getByRole("button", {name: "Submit"})).toBeVisible;
});