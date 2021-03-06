import * as vlBin from './bin';
import * as vlChannel from './channel';
import * as vlConfig from './config';
import * as vlData from './data';
import * as vlEncoding from './encoding';
import * as vlFieldDef from './fielddef';
import * as vlCompile from './compile/compile';
import * as vlShorthand from './shorthand';
import * as vlSpec from './spec';
import * as vlTimeUnit from './timeunit';
import * as vlType from './type';
import * as vlValidate from './validate';
import * as vlUtil from './util';

export const bin = vlBin;
export const channel = vlChannel;
export const compile = vlCompile.compile;
export const config = vlConfig;
export const data = vlData;
export const encoding = vlEncoding;
export const fieldDef = vlFieldDef;
export const shorthand = vlShorthand;
export const spec = vlSpec;
export const timeUnit = vlTimeUnit;
export const type = vlType;
export const util = vlUtil;
export const validate = vlValidate;

export const version = '__VERSION__';
