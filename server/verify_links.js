const baseUrl = 'http://localhost:4000';

const pagesToScan = [
    '/',
    '/portal/patient/login',
    '/portal/patient/register',
    '/portal/doctor/login',
    '/portal/admin/login',
    '/portal/patient/dashboard',
    '/portal/doctor/dashboard',
    '/portal/admin/dashboard'
];

async function verifyLinks() {
    console.log('Starting comprehensive link verification...\n');

    for (const page of pagesToScan) {
        console.log(`Scanning Page: ${page}`);
        try {
            const response = await fetch(baseUrl + page);
            if (!response.ok) {
                console.error(`  [FAIL] Could not load page ${page} (Status: ${response.status})`);
                continue;
            }

            const html = await response.text();

            // Simple regex to find hrefs (robust enough for this verification)
            // Matches href="..." or href='...'
            const hrefRegex = /href=["']([^"']+)["']/g;
            let match;
            const links = new Set();

            while ((match = hrefRegex.exec(html)) !== null) {
                let link = match[1];
                // Filter out non-navigation links
                if (link.startsWith('http') && !link.includes('localhost')) continue; // External
                if (link.startsWith('#')) continue; // Anchors
                if (link.startsWith('mailto:')) continue;
                if (link.includes('_next/static')) continue; // Assets (already verified)

                // key logic: resolve relative paths if necessary (Next.js Link usually absolute)
                if (!link.startsWith('http')) {
                    if (!link.startsWith('/')) link = '/' + link;
                    link = baseUrl + link;
                }

                links.add(link);
            }

            console.log(`  Found ${links.size} navigation links.`);

            for (const link of links) {
                try {
                    const linkRes = await fetch(link);
                    const status = linkRes.status;
                    const statusIcon = status === 200 ? '✅' : '❌';
                    console.log(`    ${statusIcon} [${status}] ${link}`);
                } catch (err) {
                    console.log(`    ❌ [ERR] ${link}: ${err.message}`);
                }
            }
            console.log(''); // Newline
        } catch (error) {
            console.error(`  [CRITICAL] Failed to fetch page ${page}: ${error.message}\n`);
        }
    }
}

verifyLinks();
