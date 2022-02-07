import input from 'input';

function drive(direction) {
    switch (direction) {
        case 'left':
            console.log('Turning left.');
            break;
        case 'right':
            console.log('Turning right.');
            break;
        case 'forward':
            console.log('Driving forward.');
            break;
        case 'backward':
            console.log('Driving backwards.');
            break;
        default:
            console.log('Unknown direction');
    }
}
async function main() {
    while (true){
        const resp = await input.text('Enter a direction (or cancel)');

        if (resp == 'cancel') {
            break;
        } else {
            drive(resp);
        }
    }
}

main();