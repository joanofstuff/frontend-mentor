import { statSync } from 'fs';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';

const PAGES_PATH = join(cwd(), 'src/pages');

export const getAllProjects = async (): Promise<string[]> => {
	return readdir(PAGES_PATH).then((pages) =>
		pages.filter(
			(name) =>
				name !== 'api' && statSync(join(PAGES_PATH, name)).isDirectory(),
		),
	);
};
