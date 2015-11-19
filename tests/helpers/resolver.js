import Resolver from 'ember/resolver';
import config from '../../config/environment';

<<<<<<< HEAD
var resolver = Resolver.create();
=======
const resolver = Resolver.create();
>>>>>>> e4f1d68af75e6cb2630385998b1e18712d8d8d43

resolver.namespace = {
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix
};

export default resolver;
