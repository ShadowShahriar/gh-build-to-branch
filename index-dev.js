const { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } = require('fs')

function getList() {
	return readdirSync('./src', { withFileTypes: true })
		.filter(dirent => dirent.isFile())
		.map(dirent => dirent.name)
}

function build() {
	if (!existsSync('./docs')) mkdirSync('./docs')
	const items = getList()
	for (let item of items) {
		const content = readFileSync(`./src/${item}`, 'utf-8')
		writeFileSync(`./docs/${item}`, content + '\nUpdated: ' + new Date() + '\r\n', 'utf-8')
		console.log(`- [docs/${item}]`)
	}
}

build()
