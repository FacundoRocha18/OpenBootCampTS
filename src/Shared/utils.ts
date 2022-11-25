import fs, { PathOrFileDescriptor } from 'fs'

export const jsonReader = (path: PathOrFileDescriptor) => {
	return fs.readFileSync(path, { encoding: 'utf-8' })
}
