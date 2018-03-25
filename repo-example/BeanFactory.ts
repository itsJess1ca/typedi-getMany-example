import { Factory } from './Factory';
import { FactoryToken } from './FactoryToken';
import { Service } from 'typedi';

@Service({ id: FactoryToken, multiple: true })
export class BeanFactory implements Factory {

  create() {
    console.log("bean created");
  }

}