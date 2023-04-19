const { existsSync, mkdirSync, writeFileSync, readdirSync } = require('fs')
if (!existsSync('./src')) mkdirSync('./src')

const fileCount = readdirSync('./src', { withFileTypes: true }).filter(dirent =>
	dirent.isFile()
).length

const newNumber = fileCount + 1
writeFileSync(
	`./src/item-${newNumber < 10 ? '0' + newNumber : newNumber}.md`,
	new Date() + '\r\n',
	'utf-8'
)
