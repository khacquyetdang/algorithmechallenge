import React from 'react';
import binaryGap from './binaryGap';


it('binaryGap(1041) should return 5', () => {
    expect(binaryGap(1041)).toEqual(5);
});


it('binaryGap(9) should return 2', () => {
    expect(binaryGap(9)).toEqual(2);
});


it('binaryGap(20) should return 1', () => {
    expect(binaryGap(20)).toEqual(1);
});


it('binaryGap(15) should return 0', () => {
    expect(binaryGap(15)).toEqual(0);
});


it('binaryGap(529) should return 4', () => {
    expect(binaryGap(529)).toEqual(4);
});
