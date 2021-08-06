const apiKey = '146648dae16d4b';

const getCurrLoc = async () => {
    const base = 'https://ipinfo.io/?token=';
    
    const response = await fetch(base + apiKey);
    const data = await response.json();

    return data;
}