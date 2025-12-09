const baseUrl = 'http://localhost:4000';
const assets = [
    '/',
    '/hero.png',
    '/patient.png',
    '/doctor.png',
    '/admin.png',
    '/_next/static/css/90b8f48b4bdc0cd0.css',
    '/_next/static/chunks/main-app-2b2c1b701a68e78c.js',
    '/_next/static/chunks/webpack-ea67fa73cac97ff7.js'
];

async function checkAssets() {
    console.log('Checking assets...');
    for (const asset of assets) {
        try {
            const response = await fetch(baseUrl + asset);
            const contentType = response.headers.get('content-type');
            console.log(`[${response.status}] ${asset} - Type: ${contentType}`);
        } catch (error) {
            console.error(`[FAIL] ${asset}: ${error.message}`);
        }
    }
}

checkAssets();
