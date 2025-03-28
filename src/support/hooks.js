const { Before, After, Status } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, '../screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

// Run before each scenario
Before(async function() {
  await this.driver.manage().window().maximize();
  await this.driver.manage().setTimeouts({ implicit: 5000 });
});

// Run after each scenario
After(async function(scenario) {
  // Take screenshot if scenario fails
  if (scenario.result.status === Status.FAILED) {
    const timestamp = new Date().toISOString().replace(/[:\.-]/g, '_');
    const screenshotPath = path.join(screenshotsDir, `failure_${timestamp}.png`);
    const screenshot = await this.driver.takeScreenshot();
    
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    this.attach(screenshot, 'image/png');
  }
  
  // Always quit the driver
  await this.quit();
});
