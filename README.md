### General requirements

- Install a git client such as [git bash](https://git-scm.com/downloads)

Download and install

- Latest version of [Node.js](https://nodejs.org/es/download/)
- Java Development Kit [(JDK)](https://www.oracle.com/java/technologies/downloads/)
  - Make sure you have the environment variable **JAVA_HOME** set to the path of the respective JDK. **(Required for Allure report generation)**.

#### **Install dependencies.**

    npm install

#### **To run the tests go to the root of the project and run (headless mode)**

    npm run test

#### **To run the tests go to the root of the project and run (headed mode)**

    npm run test-head

#### **To run the tests only on Firefox**

    npm run firefox

#### **To run the tests only on Chromium**

    npm run chromium

#### **To run the tests only on Webkit**

    npm run webkit

#### **To run the tests with UI + API Examples**

    npm run api-ui

#### **To run the tests with UI + API + Mockaroo Examples**

    npm run data-mgmt

**IMPORTANT**:

To run your own [Mockaroo](https://www.mockaroo.com/) examples you should create a free account, create a new schema and create a new .env file with your **API_KEY**

Example .env:

    BASE_URL=http://localhost:3000

and add the details in the env.ts in util folder.

#### **For running Accessibility Testing examples with [Lighthouse](https://www.npmjs.com/package/playwright-lighthouse)**

    npm run a11y

**IMPORTANT**:

In the `thresholds` section of the [a11y.lighthouse.spec.ts](./tests/a11y.lighthouse.spec.ts) file, you can configure the acceptance level of the `accessibility`, `performance`, `SEO`, `best-practices`, `pwa` respectively.

If our threshold is 100 for `accessibility`, our test must have 100% acceptance to be considered successful.

```typescript
thresholds: {
    performance: 50,
    accessibility: 100,
    'best-practices': 50,
    seo: 50,
    pwa: 0,
},
```

#### **To open Playwright's unified Html report of test results**

    npm run play-report

#### **To create and open the Allure unified report of test results**

    npm run open-report

#### **IMPORTANT**

After each upgrade of **Playwright**, the project must be restarted locally with the command:

    npm run reinstall

To download the latest versions of the Browsers.
