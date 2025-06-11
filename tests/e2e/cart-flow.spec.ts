import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await page
        .getByRole('link', { name: 'View details of Galaxy A25 5G' })
        .click();
    await page.getByRole('radio', { name: '256 GB' }).click();
    await page.getByRole('radio', { name: 'Azul' }).click();
    await page.getByRole('button', { name: 'Añadir al carrito' }).click();

    await expect(page.locator('h1')).toContainText('CART');

    await expect(page.locator('[data-testid="cart-item-name"]')).toContainText(
        'Galaxy A25 5G',
    );
    await expect(
        page.locator('[data-testid="cart-item-description"]'),
    ).toContainText('256 GB | Azul');
    await expect(page.locator('[data-testid="cart-item-price"]')).toContainText(
        '239 EUR',
    );

    await expect(page.getByLabel('Shopping Cart')).toContainText('239 EUR');

    await page.getByRole('link', { name: 'Navigate to home page' }).click();
    await page
        .getByRole('link', { name: 'View details of Galaxy S24' })
        .click();
    await page.getByRole('button', { name: 'Añadir al carrito' }).click();

    await expect(
        page.locator('[data-testid="cart-item-name"]').nth(1),
    ).toContainText('Galaxy S24 Ultra');
    await expect(
        page.locator('[data-testid="cart-item-description"]').nth(1),
    ).toContainText('256 GB | Titanium Violet');
    await expect(
        page.locator('[data-testid="cart-item-price"]').nth(1),
    ).toContainText('1229 EUR');

    await expect(page.getByLabel('Shopping Cart')).toContainText('1468 EUR');

    await page
        .getByRole('button', { name: 'Remove Galaxy A25 5G from cart' })
        .click();
    await expect(
        page.locator('[data-testid="cart-item-name"]'),
    ).not.toContainText('Galaxy A25 5G');

    await expect(page.getByLabel('Shopping Cart')).toContainText('1229 EUR');
});
