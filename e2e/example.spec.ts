import { type Page, expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/");
});

test.describe("New Todo", () => {
	test("should allow me to add todo items", async ({ page }) => {
		const video = page.getByTestId("video");
		await page.getByRole("button").click();
		await page.waitForTimeout(20000);
		test.expect(page.getByTestId("endText")).toBeInViewport();
	});
});
