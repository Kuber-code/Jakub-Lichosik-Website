import { test, expect } from "@playwright/test";

test.describe("Jakub Lichosik Portfolio", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads and has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Jakub Lichosik/);
  });

  test("hero section renders with name and CTA", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /Jakub Lichosik/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /View GitHub/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Download CV/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Let's talk/i })).toBeVisible();
  });

  test("navbar is present with all links", async ({ page }) => {
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();
    await expect(nav.getByRole("link", { name: "About" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Skills" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Experience" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Projects" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible();
  });

  test("proof strip shows stats", async ({ page }) => {
    await expect(page.getByText("Years in IT", { exact: true })).toBeVisible();
    await expect(page.getByText("Years Banking & HFT", { exact: true })).toBeVisible();
  });

  test("about section renders", async ({ page }) => {
    await page.locator("#about").scrollIntoViewIfNeeded();
    await expect(page.getByText("// about", { exact: true })).toBeVisible();
    await expect(page.getByText(/builds, deploys and drives process/i)).toBeVisible();
  });

  test("skills section renders with bars", async ({ page }) => {
    await page.locator("#skills").scrollIntoViewIfNeeded();
    await expect(page.getByText("// skills & stack", { exact: true })).toBeVisible();
    await expect(page.getByText("Software Engineering", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("DevOps / SRE", { exact: true }).first()).toBeVisible();
  });

  test("experience timeline renders and accordion works", async ({ page }) => {
    await page.locator("#experience").scrollIntoViewIfNeeded();
    await expect(page.getByText("// experience", { exact: true })).toBeVisible();

    const sixCard = page.locator("button").filter({ hasText: "SIX Digital Exchange" }).first();
    await expect(sixCard).toBeVisible();
    await expect(page.getByText("Portofino").first()).toBeVisible();

    // SIX expanded by default → unique responsibility text visible
    await expect(page.getByText("CordaCon 2022")).toBeVisible();

    // Collapse SIX
    await sixCard.click();
    await page.waitForTimeout(500);
    await expect(page.getByText("CordaCon 2022")).not.toBeVisible();

    // Expand Portofino
    await page.locator("button").filter({ hasText: /Portofino/ }).click();
    await page.waitForTimeout(400);
    await expect(page.getByText("Grafana").first()).toBeVisible();
  });

  test("projects bento grid renders", async ({ page }) => {
    await page.locator("#projects").scrollIntoViewIfNeeded();
    await expect(page.getByText("// projects", { exact: true })).toBeVisible();
    await expect(page.getByText("Alerting & Monitoring System")).toBeVisible();
    await expect(page.getByText("Packet Capturing Pipeline")).toBeVisible();
  });

  test("contact section has cards and form", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await expect(page.getByText("// contact", { exact: true })).toBeVisible();
    await expect(page.getByText("Let's build something together")).toBeVisible();

    await expect(page.getByText("kuba.lichosik@gmail.com")).toBeVisible();
    await expect(page.getByText("Kuber-code")).toBeVisible();
    await expect(page.getByText("jakublichosik")).toBeVisible();

    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Message")).toBeVisible();
    await expect(page.getByRole("button", { name: /Send message/i })).toBeVisible();
  });

  test("contact form sends (no API key — shows success)", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.getByLabel("Name").fill("Test User");
    await page.getByLabel("Email").fill("test@example.com");
    await page.getByLabel("Message").fill("Hello from Playwright test!");
    await page.getByRole("button", { name: /Send message/i }).click();
    await expect(page.getByText("Message sent!")).toBeVisible({ timeout: 8000 });
  });

  test("dark/light theme toggle works", async ({ page }) => {
    const html = page.locator("html");
    const themeBtn = page.getByRole("button", { name: /Toggle theme/i });
    await themeBtn.click();
    await expect(html).toHaveAttribute("data-theme", "light");
    await themeBtn.click();
    await expect(html).not.toHaveAttribute("data-theme", "light");
  });
});
