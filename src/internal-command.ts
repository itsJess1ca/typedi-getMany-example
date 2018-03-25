import { Token } from 'typedi';
import { InternalCommand } from './internal-command.interface';

export const InternalCommandToken = new Token<InternalCommand>('INTERNAL_COMMAND');