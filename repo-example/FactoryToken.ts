import { Factory } from './Factory';
import { Token } from 'typedi';

export const FactoryToken = new Token<Factory>("factories");