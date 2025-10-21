# 🧪 SwagLabs Automated Tests

Automated testing project for [SauceDemo](https://www.saucedemo.com/) built with **Selenium WebDriver** and **JavaScript**, following the **Page Object Model (POM)** design pattern.

---

## 🚀 Project Overview

This project aims to ensure the correct functionality of the SauceDemo website by automating end-to-end test cases such as:

- ✅ User login validation  
- 🛒 Add and remove products from the shopping cart  
- 💳 Complete a purchase process  

Each test is structured to promote reusability, scalability, and maintainability through the **POM (Page Object Model)** pattern.

---

## 🏗️ Project Structure

SWAGLABS_SELENIUMTEST
├── .vscode
├── node_modules
├── pages
│ ├── login.page.js
│ ├── shopcar.page.js
│ ├── shopping.page.js
├── reports
├── tests
│ ├── login.test.js
│ ├── shopcar.test.js
│ ├── shopping.test.js
├── utils
├── package.json
├── package-lock.json
└── README.md


### 📂 Folder Details

- **pages/** → Contains Page Object classes for each page under test.  
- **tests/** → Contains test cases implemented using Mocha (or Jest, if configured).  
- **reports/** → Stores test execution reports.  
- **utils/** → Utility functions or shared helpers.  

---

## ⚙️ Technologies Used

- **JavaScript (Node.js)**  
- **Selenium WebDriver**  
- **Mocha / Chai** (test framework & assertions)  
- **Page Object Model (POM)** architecture  
- **Allure / Mochawesome** (for test reports, optional)

---

## 🧰 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/swaglabs_seleniumtest.git
cd swaglabs_seleniumtest
2️⃣ Install dependencies
npm install

3️⃣ Run tests
npx mocha tests/*.test.js

4️⃣ (Optional) Generate test reports
npm run report

🧩 Example Test Flow

Open SauceDemo
.

Log in with valid credentials.

Add items to the shopping cart.

Proceed to checkout and confirm the purchase.

Validate the successful purchase message.

🧠 Design Pattern: Page Object Model (POM)

The POM pattern separates the test logic from the page interactions, making tests more readable and easier to maintain.

Example:

login.page.js

class LoginPage {
  get usernameInput() { return $('#user-name'); }
  get passwordInput() { return $('#password'); }
  get loginButton() { return $('#login-button'); }

  async login(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();


login.test.js

const LoginPage = require('../pages/login.page');

describe('Login Functionality', () => {
  it('should log in successfully with valid credentials', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
    // Add assertions here
  });
});

📈 Future Improvements

Add cross-browser testing configuration

Integrate with CI/CD pipelines (GitHub Actions / Azure DevOps)

Generate HTML or Allure reports

Implement visual regression tests

👩‍💻 Author

Maria Ximena López Chunga
QA Automation Engineer
💼 LinkedIn Profile https://www.linkedin.com/in/marialopezchunga/