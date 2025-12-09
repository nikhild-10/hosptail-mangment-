const baseUrl = 'http://localhost:4000/api/auth/login';

async function testLogin() {
    console.log('Testing Admin Login...');
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'admin@hospital.com',
                password: 'password123'
            })
        });

        const data = await response.json();

        if (response.ok) {
            console.log('✅ LOGIN SUCCESS!');
            console.log('User:', data.user);
            console.log('Token received.');
        } else {
            console.log(`❌ LOGIN FAILED: [${response.status}]`, data);
        }
    } catch (err) {
        console.error('❌ REQUEST ERROR:', err.message);
    }
}

testLogin();
