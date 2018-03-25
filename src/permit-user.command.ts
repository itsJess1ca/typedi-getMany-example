import { Inject, Service } from 'typedi';
import { InternalCommand } from './internal-command.interface';
import { InternalCommandToken } from './internal-command';

@Service({ id: InternalCommandToken, multiple: true })
export class PermitUserCommand implements InternalCommand {
  trigger: '!permit';

  runCommand(event: any) {
    console.log(`Run permitUser command`);
  }
}