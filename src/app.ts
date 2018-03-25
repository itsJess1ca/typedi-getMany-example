import { Container } from 'typedi';
import { InternalCommandToken } from './internal-command';

const event = {
  message: '!permit test'
};
const trigger = event.message.split(' ')[0];
console.log(`Trigger: ${trigger}`);
const internalCommands = Container.getMany(InternalCommandToken);
console.log(`${JSON.stringify(internalCommands)}`);
for (const command of internalCommands) {
  if (command.trigger === trigger) {
    command.runCommand(event);
    break;
  }
}