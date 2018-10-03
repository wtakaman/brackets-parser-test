'use strict';
import chai from "chai";
import {BracketsChecker} from '../src/BracketsChecker';

let expect = chai.expect;
let should = chai.should();

describe("BracketsChecker class", () => {
    describe("check", () => {
        it("should EXPORT a function", () => {
            expect(BracketsChecker.check).to.be.a("function")
        });
        it("should THROW AN ERROR for undefined parameter", () => {
            expect(function() {
                BracketsChecker.check();
            }).to.throw(Error);
        });
        it("should THROW AN ERROR for null parameter", () => {
            expect(function() {
                BracketsChecker.check(null);
            }).to.throw(Error);
        });
        it("should THROW AN ERROR for invalid parameter with invalid values", () => {
            expect(function() {
                BracketsChecker.check("123456{}[]()");
            }).to.throw(Error);
        });
        it("should THROW AN ERROR when there is bracket left opened", () => {
            expect(function() {
                BracketsChecker.check("([]{)")
            }).to.throw(Error);
        });
        it("should THROW AN ERROR for empty string", () => {
            expect(function() {
                BracketsChecker.check("")
            }).to.throw(Error);
        });
        it("should return FALSE when close comes before open", () => {
            expect(BracketsChecker.check("(}{)")).to.be.false;
        });
        it("should return FALSE for ][", () => {
            expect(BracketsChecker.check("][")).to.be.false;
        });
        it("should return FALSE for }{", () => {
            expect(BracketsChecker.check("}{")).to.be.false;
        });
        it("should return FALSE for )(", () => {
            expect(BracketsChecker.check(")(")).to.be.false;
        });
        it("should return FALSE for [)(]", () => {
            expect(BracketsChecker.check("[)(]")).to.be.false;
        });
        it("should return FALSE for [([{}])][([}{])]", () => {
            expect(BracketsChecker.check("[([{}])][([}{])]")).to.be.false;
        });
        it("should return TRUE for ()", () => {
            expect(BracketsChecker.check("()")).to.be.true;
        });
        it("should return TRUE for []", () => {
            expect(BracketsChecker.check("[]")).to.be.true;
        });
        it("should return TRUE for {}", () => {
            expect(BracketsChecker.check("{}")).to.be.true;
        });
        it("should return TRUE for ({})", () => {
            expect(BracketsChecker.check("({})")).to.be.true;
        });
        it("should return TRUE for (({})[({})])", () => {
            expect(BracketsChecker.check("(({})[({})])")).to.be.true;
        });
    })
})