# brackets-parser-test
Utility class to check for a string of brackets following the rules:
 - It contains no unmatched brackets;
 - The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets;

## Examples:
 1. \(){}[] is valid;
 2. \[{()}](){} is valid;
 3. \[]{() is not valid;
 4. \[{)] is not valid;

## Installation
* npm install
* npm test

## Contributors
* [Takashi Shimabucuro](mailto:takaman@gmail.com)

