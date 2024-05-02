import chalk = require('chalk');
import { Dgeni } from 'dgeni';
import { defer } from 'rxjs';
import { catchError, concatAll, filter, map, toArray } from 'rxjs/operators';

import { apiDocsPackage } from './docs-dgeni-package/package';

export const build = ({ source, dest }) => {
    apiDocsPackage.config((readFilesProcessor, readTypeScriptModules, writeFilesProcessor) => {
        readFilesProcessor.basePath = source;
        readTypeScriptModules.basePath = source;
        writeFilesProcessor.outputFolder = dest;
    });
    // defer will not execute the async function until subscribed.
    // that ensures that DGeni is not run before up in the queue
    // (see main.ts where we use concatAllto queue our tasks)
    return defer(async () => {
        // Create new instance in here to prevent a memory leak
        const dgeni = new Dgeni([apiDocsPackage]);
        console.log(chalk.green('Generating API docs'));
        return dgeni.generate();
    }).pipe(
        // travers received documents to populate a list of generated api files
        // so we can determine if a module has an api table available

        // process each document separately with rxj
        concatAll(),

        // we are only interested in the docs generated by the grouping dgeni processor
        filter((value: any) => value.docType === 'componentGroup'),
        // from that document grab only one key
        map(value => ({
            id: value.packageName,
            ngModule: value.ngModule?.name,
            directive: value.directives.map(t => ({
                name: t.name,
                directiveExportAs: t.directiveExportAs,
                directiveSelectors: t.directiveSelectors,
                title: t.description,
            })),
            component: value.components.map(t => ({
                name: t.name,
                directiveExportAs: t.directiveExportAs,
                directiveSelectors: t.directiveSelectors,
                title: t.description,
            })),
            services: value.services.map(t => ({
                name: t.name,
                title: t.description,
            })),
            classes: value.additionalClasses.map(t => ({
                name: t.name,
                title: t.description,
            })),
            interface: value.additionalInterfaces.map(t => ({
                name: t.name,
                title: t.description,
            })),
            typeAlias: value.additionalTypeAliases.map(t => ({
                name: t.name,
                title: t.description,
            })),
        })),
        toArray(),
        map(packages => ({ api: packages })),
        catchError(error => {
            console.error(chalk.magentaBright('Error while processing API docs'));
            console.error(chalk.magentaBright(error));
            return null;
        }),
    );
};
