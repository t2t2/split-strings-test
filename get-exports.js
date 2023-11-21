// Get list of available exports to use in import option of size-limit
import * as ALL_SEMVER_EXPORTS from './build-split/index.js';

const keys = Object.entries(ALL_SEMVER_EXPORTS)
	.filter(([key, value]) => typeof value === 'string')
	.map(([key]) => key);

process.stdout.write(`{ ${keys.join(', ')} }`);
