import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

export function displayHeader() {
    clear();
    console.log(
        chalk.hex('#cf2fb3')(
            figlet.textSync(' Hyperlane ', { font: 'Big', horizontalLayout: 'full' })
        )
    );
}