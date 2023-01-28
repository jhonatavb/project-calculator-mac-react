# Calculator
A simple calculator, based on the MAC operating system calculator, made in react. 

Calculator ships regularly with new features and bug fixes.

https://user-images.githubusercontent.com/30570208/215241754-5e9f8e3e-0918-4c4b-834e-c80bd21562c0.mp4

## Features
- It has the four basic operations of mathematics (addition, subtraction, multiplication and division).
- The display has a capacity of up to ten characters (including the dot).
- If the result of an account exceeds the display's maximum capacity, it will be represented in scientific notation.
- Some strange results due to the language were fixed, for example:
```js
// expect 0.30000000000000004
console.log(0.1 + 0.2); // 0.3
// expect 0.3999999999999999
console.log(1.4 - 1); // 0.4
// expect 0.020000000000000004
console.log(0.1 * 0.2); // 0.02
// expect 5699.999999999999
console.log(0.57 * 10000); // 5700
```

## Getting started
Prerequisites:
- Install the [Visual Studio Code](https://code.visualstudio.com/download) (or any IDE of your choice).
- Any internet browser in its latest version, preferably one of the most used.
  - [Chrome](https://www.google.com/intl/en-US/chrome/)
  - [Firefox](https://www.mozilla.org/en-US/firefox/new/)
- It is necessary to have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your computer, in linux distributions it is common to have both installed, you can check using the commands "git --version" and "npm --version".
- Clone and enter the project directory using the commands:
```bash
git clone repository && cd repository
```
- After cloning and being inside the project repository, install the dependencies using the command:
```bash
npm i
```
- With everything properly installed and working, we can start the project using the command:
```bash
npm start
```
