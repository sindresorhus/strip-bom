import {expectType} from 'tsd';
import stripBom = require('.');

expectType<string>(stripBom('\uFEFFunicorn'));
