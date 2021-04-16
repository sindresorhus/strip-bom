import {expectType} from 'tsd';
import stripBom from './index.js';

expectType<string>(stripBom('\uFEFFunicorn'));
