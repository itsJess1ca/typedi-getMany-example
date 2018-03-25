import 'reflect-metadata';
import { FactoryToken } from './FactoryToken';
import { Container } from 'typedi';

const factories = Container.getMany(FactoryToken); // factories is Factory[]
factories.forEach(factory => factory.create());