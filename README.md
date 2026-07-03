# Coding-Exercise-Playwright REST API Automation

## Technology Stack

- Playwright
- TypeScript
- Page Object Model (POM)

## Project Structure

```
pages/
tests/
utils/
```
```
playwright-rest-api/
│
├── pages/
│   └── ObjectsAPI.ts
│
├── tests/
│   └── objects.spec.ts
│
├── utils/
│   └── testData.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md
├── .gitignore
└── package-lock.json
```

## Installation

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

## Execute Tests

```bash
npx playwright test
```

## Execute Specific Test

```bash
npx playwright test tests/objects.spec.ts
```

## Generate HTML Report

```bash
npx playwright show-report
```

## Test Scenarios

-1. Get all objects
-2. Create object
-3. Get created object
-4. Update object
-5. Delete object
-6. Verify deleted object

## API Documentation:
RESTful API Documentation

Base URL:
```
https://api.restful-api.dev
```
Required Endpoints
Scenario	Method	Endpoint
01. Get all objects	
```
GET	/objects
```
02. Create object
```
POST /objects
```
03. Get object by ID
```
GET	/objects/{id}
```
04. Update object
```
PUT	/objects/{id}
```
05. Delete object	
```
DELETE /objects/{id}
```
