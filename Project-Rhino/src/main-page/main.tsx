import React, { useState, useEffect, useRef } from 'react';

declare global {
    interface Window {
        google: any;
    }
}

const MainPage: React.FC = () => {

    const [address, setAddress] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const autocompleteRef = useRef<any>(null);

    // Load Google Maps script dynamically
    useEffect(() => {
        if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => initAutocomplete();
        document.head.appendChild(script);
        } else {
        initAutocomplete();
        }
    }, []);

    const initAutocomplete = () => {
        if (inputRef.current && window.google) {
            autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
            types: ['address'],
            });

            autocompleteRef.current.setFields(['formatted_address']);

            autocompleteRef.current.addListener('place_changed', () => {
            const place = autocompleteRef.current.getPlace();
            if (place && place.formatted_address) {
                setAddress(place.formatted_address);
            }
            });
        }
    };

    return (
        <div>
            <h1>Title</h1>

            <div style={{ marginTop: '20px' }}>
                <input
                ref={inputRef}
                type="text"
                placeholder="Enter an address"
                style={{ width: '300px', padding: '8px' }}
                />
                {address && (
                <p>
                    <strong>Selected address:</strong> {address}
                </p>
                )}
            </div>
        </div>
    )
}

export default MainPage;