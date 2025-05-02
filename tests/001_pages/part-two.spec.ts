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

test("has top heading", async ({ page,baseURL }) => {
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

  await expect(page.getByRole("heading", { name: "I guess that wasn't really that much of a wuzzle..." })).toBeVisible();
});

test("has top heading in second line", async ({ page,baseURL }) => {
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

  await expect(page.getByRole("heading", { name: "Bingo 3?" })).toBeVisible();
});

test("has dial pad one", async ({ page,baseURL }) => {
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

  await expect(page.locator("button.dial-pad-button:nth-child(1)")).toBeVisible();
  await page.locator("button.dial-pad-button:nth-child(1)").click();
});

test("has dial pad two", async ({ page,baseURL }) => {
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

  await expect(page.locator("button.dial-pad-button:nth-child(2)")).toBeVisible();
});

test("has dial pad three", async ({ page,baseURL }) => {
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

  await expect(page.locator("button.dial-pad-button:nth-child(3)")).toBeVisible();
});

test("has dial pad four", async ({ page,baseURL }) => {
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

  await expect(page.locator("button.dial-pad-button:nth-child(4)")).toBeVisible();
});

test("has dial pad five", async ({ page,baseURL }) => {
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

  await expect(page.locator("button.dial-pad-button:nth-child(5)")).toBeVisible();
});

test("has dial pad six", async ({ page,baseURL }) => {
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

  await expect(page.locator("button.dial-pad-button:nth-child(6)")).toBeVisible();
});

test("has dial pad seven", async ({ page,baseURL }) => {
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

  await expect(page.locator("button.dial-pad-button:nth-child(7)")).toBeVisible();
});

test("has dial pad eight", async ({ page,baseURL }) => {
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

  await expect(page.locator("button.dial-pad-button:nth-child(8)")).toBeVisible();
});

test("has dial pad nine", async ({ page,baseURL }) => {
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

  await expect(page.locator("button.dial-pad-button:nth-child(9)")).toBeVisible();
});