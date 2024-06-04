export function getLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    console.log(lat, lon);
                    resolve({ lat, lon });
                },
                (error) => {
                    reject(error);
                }
            );
        } else {
            reject({null:null});
        }
    });
}