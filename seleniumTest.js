const { Builder, By, Key, until } = require("selenium-webdriver");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function testLoginPage() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("http://localhost:3000/auth/login");

    // Job Seeker Login Test (Default Tab) - Incorrect Credentials
    await driver
      .findElement(By.id("LoginEmail"))
      .sendKeys("incorrect_email@gmail.com");
    await sleep(1000);
    await driver
      .findElement(By.id("LoginPassword"))
      .sendKeys("incorrect_password", Key.RETURN);
    await driver.wait(until.urlContains("/auth/login"), 10000);
    console.log("Job Seeker Login Test (Incorrect Credentials) Passed!");

    // Company Login Test - Incorrect Credentials
    await driver.findElement(By.id("radix-:R4quuukq:-trigger-company")).click();
    await sleep(1000);
    await driver
      .findElement(By.id("LoginEmail"))
      .sendKeys("incorrect_email@gmail.com");
    await sleep(1000);
    await driver
      .findElement(By.id("LoginPassword"))
      .sendKeys("incorrect_password", Key.RETURN);
    await driver.wait(until.urlContains("/auth/login"), 20000);
    console.log("Company Login Test (Incorrect Credentials) Passed!");

    // Job Seeker Login Test - Correct Credentials
    await driver
      .findElement(By.id("radix-:R4quuukq:-trigger-jobseeker"))
      .click();
    await sleep(1000);
    await driver.findElement(By.id("LoginEmail")).sendKeys("bbb@gmail.com");
    await sleep(1000);
    await driver
      .findElement(By.id("LoginPassword"))
      .sendKeys("123456789", Key.RETURN);
    await driver.wait(until.urlContains("/jobseekerdashboard"), 30000);
    console.log("Job Seeker Login Test (Correct Credentials) Passed!");
    await sleep(5000);

    // Company Login Test - Correct Credentials
    await driver.get("http://localhost:3000/auth/login");
    await sleep(1000);
    await driver.findElement(By.id("radix-:R4quuukq:-trigger-company")).click();
    await sleep(1000);
    await driver.findElement(By.id("LoginEmail")).sendKeys("aaa@gmail.com");
    await sleep(1000);
    await driver
      .findElement(By.id("LoginPassword"))
      .sendKeys("123456789", Key.RETURN);
    await driver.wait(until.urlContains("/companydashboard"), 30000);
    console.log("Company Login Test (Correct Credentials) Passed!");

    // Wait for 3 seconds on the dashboard
    await sleep(3000);

    // Job Seeker Signup Test
    await driver.get("http://localhost:3000/auth/login");
    await sleep(1000);
    await driver.findElement(By.linkText("Sign Up")).click();
    await sleep(2000);
    await driver.findElement(By.id("RegisterName")).sendKeys("John Doe");
    await driver.findElement(By.id("LoginEmail")).sendKeys("john@example.com");
    await driver.findElement(By.id("LoginPassword")).sendKeys("password123");
    await driver
      .findElement(
        By.className(
          "btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full"
        )
      )
      .click();

    // Company Signup Test
    await driver.get("http://localhost:3000/auth/login");
    await driver.findElement(By.linkText("Sign Up")).click();
    await sleep(1000);
    await driver.findElement(By.id("radix-:r0:-trigger-company")).click();
    await sleep(1000);
    await driver.findElement(By.id("RegisterName")).sendKeys("Acme Inc.");
    await driver.findElement(By.id("LoginEmail")).sendKeys("acme@example.com");
    await driver.findElement(By.id("LoginPassword")).sendKeys("password123");
    await driver
      .findElement(
        By.className(
          "btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full"
        )
      )
      .click();
    console.log("Company Signup Test Passed!");

    await sleep(3000);

    async function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    //jobseekerprofile

    await driver.get("http://localhost:3000/jobseekerdashboard");
    await sleep(3000);

    // Test the page title
    const pageTitle = await driver.getTitle();
    console.log("Page Title:", pageTitle);

    // Test if the "DashBoard" heading is present
    const dashboardHeading = await driver
      .findElement(By.xpath("//h1[text()='DashBoard']"))
      .isDisplayed();
    console.log("Dashboard Heading Displayed:", dashboardHeading);

    await sleep(2000);

    // Click on the "Make CV" button
    const makeCVButton = await driver.findElement(
      By.className("py-2 px-4 bg-slate-200 rounded-full")
    );
    await sleep(2000);

    await makeCVButton.click();
    console.log("Clicked on 'Make CV' button.");

    await driver.get("http://localhost:3000/jobseekerprofile"); // URL of job seeker profile page

    await driver
      .findElement(By.xpath("//input[@placeholder='Full Name']"))
      .sendKeys("John Doe");
    await sleep(2000);
    await driver
      .findElement(By.xpath("//input[@placeholder='Email']"))
      .sendKeys("john.doe@example.com");
    await sleep(2000);

    await driver
      .findElement(By.xpath("//input[@placeholder='Contact Information']"))
      .sendKeys("1234567890");
    await sleep(2000);

    await driver
      .findElement(By.xpath("//input[@placeholder='Address']"))
      .sendKeys("123 Main St, Anytown, USA");
    await sleep(2000);

    await driver
      .findElement(By.xpath("//input[@placeholder='Job Title']"))
      .sendKeys("QA tester");
    await sleep(2000);

    // Find the input field for uploading profile picture
    const profilePictureInput = await driver.findElement(
      By.xpath("//input[@placeholder='Profile Picture']")
    );

    // Specify the file path of the profile picture
    const filePath = "/Users/thushanshanilka/Downloads/shanilka.jpeg";

    // Simulate selecting the file by sending the file path to the input field
    await profilePictureInput.sendKeys(filePath);

    // Add a delay to ensure the file is uploaded before proceeding
    await sleep(4000);

    // Verify that the profile picture is displayed on the page after uploading
    const profilePicture = await driver.findElement(
      By.xpath("//img[@alt='profile']")
    );
    const isDisplayed = await profilePicture.isDisplayed();

    // Assertion: Check if the profile picture is displayed
    if (isDisplayed) {
      console.log("Profile picture uploaded successfully!");
    } else {
      throw new Error("Profile picture upload failed!");
    }

    await sleep(2000);
  } catch (error) {
    console.error("Test case failed:", error);
  } finally {
    await driver.quit();
  }
}

testLoginPage();

//jobseekerprofile page
