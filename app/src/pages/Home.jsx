import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Home.css';
import Listing from '../components/Listing';

const Home = () => {
    const [listings, setListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await axios.get('/files/sample-api-call.json');
                setListings(response.data.properties);
                setFilteredListings(response.data.properties);
            } catch (err) {
                console.error(err);
                setError('Could not load listings');
            }
        };

        fetchListings();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search query:", searchQuery);

        if (searchQuery.trim() === '') {
            setFilteredListings(listings);
            return;
        }

        console.log("Listings before filtering:", listings);

        const results = listings.filter(listing => {
            const matchesType = listing.type && listing.type.toLowerCase().includes(searchQuery.toLowerCase());
            console.log(`Checking listing: ${listing.name}, matchesType: ${matchesType}`);

            const matchesName = listing.name && listing.name.toLowerCase().includes(searchQuery.toLowerCase());
            console.log(`Checking listing: ${listing.name}, matchesName: ${matchesName}`);

            const matchesDescription = listing.description && listing.description.toLowerCase().split(' ') 
                .some(word => 
                    searchQuery.toLowerCase().split(' ') 
                    .some(queryWord => word.includes(queryWord))
                );
            console.log(`Checking listing: ${listing.name}, matchesDescription: ${matchesDescription}`);

            const matchesAmenities = listing.amenities && Array.isArray(listing.amenities) && listing.amenities.some(amenity =>
                amenity.toLowerCase().includes(searchQuery.toLowerCase())
            );
            console.log(`Checking listing: ${listing.name}, matchesAmenities: ${matchesAmenities}`);

            return matchesType || matchesName || matchesDescription || matchesAmenities;
            
        });
        console.log("Filtered results:", results);
        setFilteredListings(results);
    };

    useEffect(() => {
    }, [filteredListings]);

    return (
        <div className="home-page">
            <div className="home-form">
            <h1>Welcome to VacationPlanner!</h1>
            <input
                type="text"
                placeholder="Search for listings"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <input
                type="date"
                placeholder="Check-in Date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
            />
            <input
                type="date"
                placeholder="Check-out Date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
            />
            <form onSubmit={handleSearch}>
                <button type="submit">Search</button>
            </form>
            </div>
            <div className="hotel-listings">
                {error && <p className="error-message">{error}</p>}
                {!error && listings.length === 0 && <p>Loading listings...</p>}
                {!error && filteredListings.length === 0 && <p>No listings found.</p>}
                {!error && filteredListings.length > 0 && (
                    <ul>
                        {filteredListings.map((listing, index) => (
                            <Listing key={index} {...listing} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Home;