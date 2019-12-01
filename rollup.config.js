import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import size from 'rollup-plugin-size';
import babel from 'rollup-plugin-babel';

const production = !process.env.ROLLUP_WATCH;

export default [{
	input: 'src/three.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'three',
		file: 'public/build/three.js'
	},
	plugins: [
		size(),
		resolve(),
		commonjs(),
		// If we're building for production (npm run build
		// instead of npm run dev), minify
		terser()
	],
	watch: {
		clearScreen: false
	}
},
{
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		size(),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve(),
		commonjs(),
		babel(),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
}];
