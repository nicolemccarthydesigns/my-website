import { adapter } from '@sveltejs/kit/vite';

export default {
	adapter: adapter(),
	alias: {
		'@/*': './path/to/lib/*'
	}
};