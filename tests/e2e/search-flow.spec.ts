import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const searchInput = page.getByRole('textbox', { name: 'Search' });
    const productList = page.getByRole('main');

    await expect(searchInput).toHaveValue('');

    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('Galaxy');
    await expect(page.getByRole('textbox', { name: 'Search' })).toHaveValue(
        'Galaxy',
    );

    await expect(page.locator('article')).toHaveCount(6);

    const filteredArticles = await productList.locator('article').all();

    for (const article of filteredArticles) {
        const text = await article.innerText();
        await expect(text).toMatch(/Galaxy/i);
    }
});
