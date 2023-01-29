/*!
    @e53e04ac/ipp5-adlibitum-esm-loader/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

export declare namespace Ipp5AdlibitumEsmLoader {

    type Get<T> = { (): T; };

    type Block = {
        readonly type: 'import' | 'export' | 'other';
        readonly substring: string;
        readonly codeLines: {
            (params: {
                readonly importFunctionName: string;
            }): string[];
        };
        readonly returnLines: {
            (): string[];
        };
    };

    type BlockFunctionParams = {
        readonly substring: string;
    };

    type NullableBlockFunction = {
        (params: BlockFunctionParams): null | Block;
    };

    type BlockFunction = {
        (params: BlockFunctionParams): Block;
    };

    type DefineCallback = {
        <T>(__import__: {
            (moduleName: string): Promise<unknown>;
        }): Promise<T>;
    };

    type LoadResult = {
        readonly blocks: Block[];
        readonly defineCallbackCode: string;
        readonly defineCallback: DefineCallback;
    };

    type Options = Record<never, never>;

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly Substrings: {
            (params: {
                readonly code: string;
            }): string[];
        };
        readonly BlockImportA: NullableBlockFunction;
        readonly BlockImportB: NullableBlockFunction;
        readonly BlockImportC: NullableBlockFunction;
        readonly BlockExportA: NullableBlockFunction;
        readonly BlockExportB: NullableBlockFunction;
        readonly BlockImport: NullableBlockFunction;
        readonly BlockExport: NullableBlockFunction;
        readonly BlockOther: BlockFunction;
        readonly Block: BlockFunction;
        readonly DefineCallbackCode: {
            (params: {
                readonly blocks: Block[];
                readonly importFunctionName: string;
                readonly lineDelimiter: string;
            }): string;
        };
    };

    type Self = {
        readonly _Ipp5AdlibitumEsmLoader: Get<_Self>;
        readonly loadFromCode: {
            (params: {
                readonly code: string;
            }): LoadResult;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5AdlibitumEsmLoader = Ipp5AdlibitumEsmLoader.Self;

export declare const Ipp5AdlibitumEsmLoader: Ipp5AdlibitumEsmLoader.ConstructorWithCompanion;
