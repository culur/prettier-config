import { Options } from 'prettier';

export type PrettierOptions = Options & {
    overrides: {
        files: string | string[];
        options: Options;
    }[];
};
