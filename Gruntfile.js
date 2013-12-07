module.exports = function (grunt) {

	grunt.initConfig({

		/* Copia os arquivos para o diretoio 'dist' */
		copy: {
			projeto: {
				expand	: true,
				cwd		: 'loja',
				src		: '**',
				dest	: 'dist'
			}
		},

		clean: ['dist']

		// registrando tasks
		grunt.registerTasks('grunt-contrib-copy');
		grunt.loadNpmTasks('grunt-contrib-clean');

	});
}