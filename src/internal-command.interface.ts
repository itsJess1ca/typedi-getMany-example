export interface InternalCommand {
  trigger: string;
  runCommand(event: any): void;
}