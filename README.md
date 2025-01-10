
# JavaScript Unit Testing Example

This repository demonstrates a practical implementation of unit testing in JavaScript using Mocha, Chai, and other modern testing tools. The project showcases various testing practices including positive and negative test cases, test coverage reporting, and code quality maintenance.

## 🛠 Technologies Used

- **Mocha**: Test framework
- **Chai**: Assertion library
- **C8**: Code coverage tool
- **ESLint**: Code quality and style checking
- **Mochawesome**: Test result reporter


## 🔍 Features

The `NumbersValidator` class includes several methods for number validation:

- `isNumberEven()`: Checks if a number is even
- `getEvenNumbersFromArray()`: Extracts even numbers from an array
- `isAllNumbers()`: Validates if all elements in an array are numbers
- `isInteger()`: Checks if a value is an integer

## 🚀 Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   
```bash
git clone https://github.com/yourusername/unit-tests.git
cd unit-tests
```

2. Install dependencies:

```bash
npm install
```

3. Run tests:

```bash
npm test
```

4. Generate test coverage report:

```bash
npm run coverage
```

5. View test results:
Open `coverage/index.html` in your browser to see the detailed test results and coverage report.


## 📊 Code Coverage Requirements

The project maintains high code quality standards with the following minimum coverage requirements:

- Branches: 80%
- Lines: 80%
- Functions: 100%
- Statements: 80%

## 📝 Test Reports

- Test results are generated using Mochawesome reporter
- Coverage reports are generated in HTML and text formats
- Reports can be found in the `mochawesome-report` and `coverage` directories after running tests

## 🔧 Code Quality

This project follows Airbnb's JavaScript style guide with some custom modifications. ESLint is configured to ensure code consistency and quality.



## 👤 Author
MCaius

Feel free to use this project as a reference for implementing unit tests in JavaScript or as a template for your own testing projects.

## 📝 Notes

- This project uses Mocha for running tests and Chai for assertions.
- The `NumbersValidator` class is tested for various edge cases and error handling.
- The test coverage report provides insights into which parts of the code are being tested and which areas need improvement.
