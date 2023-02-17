/*!
    @e53e04ac/ipp5-adlibitum-esm-loader/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from 'event-emitter';

/** @type {import('.').Ipp5AdlibitumEsmLoader.Constructor} */
const constructor = ((options) => {

    const _options = ({
        eval: options.eval,
    });

    /** @type {import('.').Ipp5AdlibitumEsmLoader._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        BlockImportA: ((params) => {
            const { substring } = params;
            const matchArray = substring.match(/^import \{ (.+?) as (.+?) \} from '(.+?)';$/);
            if (matchArray == null) {
                return null;
            }
            const p0 = matchArray[0];
            const p1 = matchArray[1];
            const p2 = matchArray[2];
            const p3 = matchArray[3];
            return {
                type: 'import',
                substring,
                codeLines: ({ importFunctionName }) => [
                    `/* ${p0} */`,
                    `const { ${p1}: ${p2} } = await ${importFunctionName}('${p3}');`,
                ],
                returnLines: () => [

                ],
            };
        }),
        BlockImportB: ((params) => {
            const { substring } = params;
            const matchArray = substring.match(/^import \{ (.+?) \} from '(.+?)';$/);
            if (matchArray == null) {
                return null;
            }
            const p0 = matchArray[0];
            const p1 = matchArray[1];
            const p2 = matchArray[2];
            return {
                type: 'import',
                substring,
                codeLines: ({ importFunctionName }) => [
                    `/* ${p0} */`,
                    `const { ${p1} } = await ${importFunctionName}('${p2}');`,
                ],
                returnLines: () => [

                ],
            };
        }),
        BlockImportC: ((params) => {
            const { substring } = params;
            const matchArray = substring.match(/^import (.+?) from '(.+?)';$/);
            if (matchArray == null) {
                return null;
            }
            const p0 = matchArray[0];
            const p1 = matchArray[1];
            const p2 = matchArray[2];
            return {
                type: 'import',
                substring,
                codeLines: ({ importFunctionName }) => [
                    `/* ${p0} */`,
                    `const ${p1} = await ${importFunctionName}('${p2}');`,
                ],
                returnLines: () => [

                ],
            };
        }),
        BlockExportA: ((params) => {
            const { substring } = params;
            const matchArray = substring.match(/^export \{ (.+?) as (.+?) \};$/);
            if (matchArray == null) {
                return null;
            }
            const p0 = matchArray[0];
            const p1 = matchArray[1];
            const p2 = matchArray[2];
            return {
                type: 'export',
                substring,
                codeLines: () => [
                    `/* ${p0} */`,
                ],
                returnLines: () => [
                    `${p2}: ${p1},`,
                ],
            };
        }),
        BlockExportB: ((params) => {
            const { substring } = params;
            const matchArray = substring.match(/^export \{ (.+?) \};$/);
            if (matchArray == null) {
                return null;
            }
            const p0 = matchArray[0];
            const p1 = matchArray[1];
            return {
                type: 'export',
                substring,
                codeLines: () => [
                    `/* ${p0} */`,
                ],
                returnLines: () => [
                    `${p1},`,
                ],
            };
        }),
        BlockImport: ((params) => {
            return (
                _self.BlockImportA(params) ??
                _self.BlockImportB(params) ??
                _self.BlockImportC(params)
            );
        }),
        BlockExport: ((params) => {
            return (
                _self.BlockExportA(params) ??
                _self.BlockExportB(params)
            );
        }),
        BlockOther: ((params) => {
            const { substring } = params;
            return {
                type: 'other',
                substring,
                codeLines: () => [
                    substring,
                ],
                returnLines: () => [

                ],
            };
        }),
        Block: ((params) => {
            return (
                _self.BlockImport(params) ??
                _self.BlockExport(params) ??
                _self.BlockOther(params)
            );
        }),
        Substrings: ((params) => {
            const { code } = params;
            return code.split(/(^(?:import|export) [^;]+;$)/m);
        }),
        DefineCallbackCode: ((params) => {
            const { blocks, importFunctionName, lineDelimiter } = params;
            return [
                '(async function (', importFunctionName, ') {', lineDelimiter,
                lineDelimiter,
                ...blocks.map((segment) => segment.codeLines({ importFunctionName }).join(lineDelimiter)),
                'return {', lineDelimiter,
                ...blocks.flatMap((segment) => segment.returnLines()).join(lineDelimiter) + lineDelimiter,
                '};', lineDelimiter,
                lineDelimiter,
                '});', lineDelimiter,
            ].join('');
        }),
    });

    /** @type {import('.').Ipp5AdlibitumEsmLoader.Self} */
    const self = ({
        ...EventEmitter({}),
        _Ipp5AdlibitumEsmLoader: (() => {
            return _self;
        }),
        loadFromCode: ((params) => {
            const { code } = params;
            const substrings = _self.Substrings({ code });
            const blocks = substrings.map((substring) => {
                return _self.Block({ substring });
            });
            const defineCallbackCode = _self.DefineCallbackCode({
                blocks,
                importFunctionName: '__import__',
                lineDelimiter: '\r\n',
            });
            /** @type {any} */
            const defineCallback = _options.eval(defineCallbackCode);
            return {
                blocks,
                defineCallbackCode,
                defineCallback,
            };
        }),
    });

    return self;

});

/** @type {import('.').Ipp5AdlibitumEsmLoader.Companion} */
const companion = ({});

/** @type {import('.').Ipp5AdlibitumEsmLoader.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Ipp5AdlibitumEsmLoader };
