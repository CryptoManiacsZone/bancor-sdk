import Web3 from 'web3';
import { Blockchain, Converter, ConversionEvent, Token } from '../../types';
export declare class Ethereum implements Blockchain {
    web3: Web3;
    networkType: string;
    bancorNetwork: Web3.eth.Contract;
    converterRegistry: Web3.eth.Contract;
    multicallContract: Web3.eth.Contract;
    decimals: object;
    graph: object;
    trees: object;
    getPathsFunc: (sourceToken: string, targetToken: string) => string[][];
    static create(nodeEndpoint: string | Object): Promise<Ethereum>;
    static destroy(ethereum: Ethereum): Promise<void>;
    refresh(): Promise<void>;
    getAnchorToken(): Token;
    getPaths(sourceToken: Token, targetToken: Token): Promise<Token[][]>;
    getRates(tokenPaths: Token[][], tokenAmount: string): Promise<string[]>;
    getConverterVersion(converter: Converter): Promise<string>;
    getConversionEvents(token: Token, fromBlock: number, toBlock: number): Promise<ConversionEvent[]>;
    getConversionEventsByTimestamp(token: Token, fromTimestamp: number, toTimestamp: number): Promise<ConversionEvent[]>;
    getAllPathsFunc(sourceToken: string, targetToken: string): string[][];
    getSomePathsFunc(sourceToken: string, targetToken: string): string[][];
    private static getNormalizedToken;
}
export declare const getWeb3: (nodeEndpoint: any) => any;
export declare const getContractAddresses: (ethereum: any) => any;
export declare const getDecimals: (ethereum: any, token: any) => Promise<any>;
export declare const getRates: (ethereum: any, paths: any, amount: any) => Promise<any>;
export declare const getTokens: (ethereum: any) => Promise<any>;
