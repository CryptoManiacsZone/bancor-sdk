import { Token } from './types';
export declare function toWei(amount: any, decimals: any): string;
export declare function fromWei(amount: any, decimals: any): string;
export declare function toDecimalPlaces(amount: any, decimals: any): any;
export declare function isTokenEqual(token1: Token, token2: Token): boolean;
export declare function calculatePurchaseReturn(supply: any, reserveBalance: any, reserveWeight: any, depositAmount: any): any;
export declare function calculateSaleReturn(supply: any, reserveBalance: any, reserveWeight: any, sellAmount: any): any;
export declare function calculateCrossReserveReturn(sourceReserveBalance: any, sourceReserveWeight: any, targetReserveBalance: any, targetReserveWeight: any, amount: any): any;
export declare function calculateFundCost(supply: any, reserveBalance: any, reserveRatio: any, amount: any): any;
export declare function calculateLiquidateReturn(supply: any, reserveBalance: any, reserveRatio: any, amount: any): any;
export declare function getFinalAmount(amount: any, conversionFee: any, magnitude: any): any;