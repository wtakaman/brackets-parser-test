"use strict";
/**
 *  BracketsChecker.js
 *  Utility class to check for a string of brackets following the rules:
 *  - It contains no unmatched brackets;
 *  - The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets;
 *
 *  Examples:
 *      1. (){}[] is valid;
 *      2. [{()}](){} is valid;
 *      3. []{() is not valid;
 *      4. [{)] is not valid;
 */
class BracketsChecker {

    /**
     * Method to evalute string of brackets
     * @param evalText string of brackets
     * @returns {boolean}
     */
    static check(evalText) {

        // String of valid brackets
        const VALID_PAIRS = "[]{}()";

        // Regular Expression used to check for valid string
        const VALID_PAIRS_REGEXP = new RegExp(/^[\(\)\{\}\[\]]+$/);

        // parameter cannot be undefined
        if (evalText === undefined) {
            throw new Error('text is undefined.');
        }

        // parameter cannot be null
        if (evalText === null) {
            throw new Error('text is null.');
        }

        // check for invalid characters on string
        if (!VALID_PAIRS_REGEXP.test(evalText)) {
            const invalidChars = evalText.replace(/[\(\)\{\}\[\]]/g, "");
            throw new Error('text contains invalid characters: ' + invalidChars);
        }

        // check if there is missing brackets
        if (evalText.length % 2 > 0) {
            throw new Error('text is unbalanced');
        }

        let stack = [];
        let bracketPosition = 0;
        let character = null;
        let charPosition = 0;

        // check every bracket
        while(character = evalText.substr(charPosition++, 1)) {
            // check for position of the bracket
            bracketPosition = VALID_PAIRS.indexOf(character);
            // check if there is any brackets opened
            if (bracketPosition % 2 > 0) {
                //if there is no open brackets return false OR
                //if the opening parenthese does not match ( they should be neighbours )
                if (!stack.length || VALID_PAIRS.indexOf(stack.pop()) != bracketPosition - 1) {
                    return false;
                }
            } else {
                stack.push(character);
            }
        }
        //If anything is left on the stack <- not balanced
        return !stack.length;
    }

}

export {BracketsChecker};