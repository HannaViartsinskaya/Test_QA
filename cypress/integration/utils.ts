export function getRandomName(): string {
    const firstNames = ["John", "Jane", "Alex", "Chris", "Taylor", "Morgan", "Sam", "Jordan", "Casey", "Robin"];
    const lastNames = ["Smith", "Doe", "Johnson", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson"];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${firstName} ${lastName}`;
}

export function getRandomPhoneNumber(): string {
    const areaCode = Math.floor(100 + Math.random() * 900); // Random 3-digit area code
    const firstPart = Math.floor(100 + Math.random() * 900); // Random 3-digit prefix
    const secondPart = Math.floor(1000 + Math.random() * 9000); // Random 4-digit line number

    return `${areaCode}-${firstPart}-${secondPart}`;
}

export function getRandomEmail(): string {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const domain = 'example.com';

    let username = '';
    const usernameLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

    for (let i = 0; i < usernameLength; i++) {
        const randomChar = letters.charAt(Math.floor(Math.random() * letters.length));
        username += randomChar;
    }

    // Combine username with domain
    return `${username}@${domain}`;
}