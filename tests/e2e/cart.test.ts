import { Builder, By, until } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'
import chromedriver from 'chromedriver'

// Set up Chrome driver
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

describe('Cart E2E Tests', () => {
  let driver: any

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build()
  })

  afterAll(async () => {
    await driver.quit()
  })

  it('should add item to cart and proceed to checkout', async () => {
    // Navigate to products page
    await driver.get('http://localhost:3000/products')

    // Wait for products to load
    await driver.wait(
      until.elementLocated(By.css('.card')),
      10000
    )

    // Click "View Details" on the first product
    const viewDetailsButton = await driver.findElement(
      By.css('.btn-secondary')
    )
    await viewDetailsButton.click()

    // Wait for product details page to load
    await driver.wait(
      until.elementLocated(By.css('.btn-primary')),
      10000
    )

    // Add to cart
    const addToCartButton = await driver.findElement(
      By.css('.btn-primary')
    )
    await addToCartButton.click()

    // Navigate to cart
    await driver.get('http://localhost:3000/cart')

    // Verify item is in cart
    await driver.wait(
      until.elementLocated(By.css('.card')),
      10000
    )

    // Update quantity
    const quantitySelect = await driver.findElement(
      By.css('select')
    )
    await quantitySelect.sendKeys('2')

    // Proceed to checkout
    const checkoutButton = await driver.findElement(
      By.css('.btn-primary')
    )
    await checkoutButton.click()

    // Verify we're on checkout page
    await driver.wait(
      until.elementLocated(By.css('form')),
      10000
    )
  })

  it('should remove item from cart', async () => {
    // Navigate to cart
    await driver.get('http://localhost:3000/cart')

    // Wait for cart items to load
    await driver.wait(
      until.elementLocated(By.css('.card')),
      10000
    )

    // Click remove button
    const removeButton = await driver.findElement(
      By.css('button.text-red-500')
    )
    await removeButton.click()

    // Verify empty cart message
    await driver.wait(
      until.elementLocated(By.css('h1.text-3xl')),
      10000
    )
    const emptyCartMessage = await driver.findElement(
      By.css('h1.text-3xl')
    )
    expect(await emptyCartMessage.getText()).toBe('Your Cart is Empty')
  })
}) 