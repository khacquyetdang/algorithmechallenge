import React from 'react';
import missingInteger, { missingIntegerInteratif } from './missingInteger';


it('missingIntegerInteratif([1,2]) should return 3', () => {
    var A = [1,2];
    expect(missingIntegerInteratif(A)).toEqual(3);
});

it('missingInteger([1,2,3]) should return 4', () => {
    var A = [1,2,3];
    expect(missingInteger(A)).toEqual(4);
});

it('missingIntegerInteratif([1,2,3]) should return 4', () => {
    var A = [1,2,3];
    expect(missingIntegerInteratif(A)).toEqual(4);
});


it('missingInteger([1, 3]) should return 2', () => {
    var A = [1, 3];
    expect(missingInteger(A)).toEqual(2);
});

it('missingIntegerInteratif([1,3]) should return 2', () => {
    var A = [1,3];
    expect(missingIntegerInteratif(A)).toEqual(2);
});


it('missingInteger([1,9,3]) should return 2', () => {
    var A = [1,9,3];
    var result = missingInteger(A);
    expect(result).toEqual(2);
});

it('missingIntegerInteratif([1,9,3]) should return 2', () => {
    var A = [1,9,3];
    expect(missingIntegerInteratif(A)).toEqual(2);
});

it('missingInteger([1,9,3, 12]) should return 2', () => {
    var A = [1,9,3, 12];
    var result = missingInteger(A);
    expect(result).toEqual(2);
});

it('missingIntegerInteratif([1,9,3, 12]) should return 2', () => {
    var A = [1,9,3,12];
    expect(missingIntegerInteratif(A)).toEqual(2);
});

it('missingInteger([-1, -2, 9, 3, 12]) should return 1', () => {
    var A = [-1, -2, 9, 3, 12];
    var result = missingInteger(A);
    expect(result).toEqual(1);
});

it('missingIntegerInteratif([-1,-2, 9, 3, 12]) should return 1', () => {
    var A = [-1,-2, 9, 3, 12];
    expect(missingIntegerInteratif(A)).toEqual(1);
});

it('missingInteger([-1, -3, 9, 3, 12]) should return 1', () => {
    var A = [-1, -3, 9, 3, 12];
    var result = missingInteger(A);
    expect(result).toEqual(1);
});

it('missingIntegerInteratif([-1, -3, 9, 3, 12]) should return 1', () => {
    var A = [-1, -3, 9, 3, 12];
    expect(missingIntegerInteratif(A)).toEqual(1);
});

it('missingInteger([-1, -3, 0,  9, 3, 12]) should return 1', () => {
    var A = [-1, -3, 0, 9, 3, 12];
    var result = missingInteger(A);
    expect(result).toEqual(1);
});



it('missingIntegerInteratif([-1, -3, 0,  9, 3, 12]) should return 1', () => {
    var A = [-1, -3, 0, 9, 3, 12];
    expect(missingIntegerInteratif(A)).toEqual(1);
});


it('missingInteger([-1, -3, 1,  9, 3, 12]) should return 2', () => {
    var A = [-1, -3, 1, 9, 3, 12];
    var result = missingInteger(A);
    expect(result).toEqual(2);
});


it('missingIntegerInteratif([-1, -3, 1,  9, 3, 12]) should return 2', () => {
    var A = [-1, -3, 1,  9, 3, 12];
    var result = missingIntegerInteratif(A);
    expect(result).toEqual(2);
});
