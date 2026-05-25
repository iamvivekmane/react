import { useState, useEffect } from "react";

const useLocation = () => {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        accuracy: null,
        error: null,
        loading: true,
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocation((prev) => ({
                ...prev,
                error: "Geolocation is not supported by your browser",
                loading: false,
            }));
            return;
        }

        const onSuccess = (position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy,
                error: null,
                loading: false,
            });
        };

        const onError = (error) => {
            setLocation((prev) => ({
                ...prev,
                error: error.message,
                loading: false,
            }));
        };

        const options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    }, []);

    return location;
};

export default useLocation;