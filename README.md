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

- Get all objects
- Create object
- Get created object
- Update object
- Delete object
- Verify deleted object
