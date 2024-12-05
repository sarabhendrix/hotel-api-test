import '../styles/Listing.css'

function Listing({
    type,
    name,
    description,
    link,
    gps_coordinates = { latitude: 'N/A', longitude: 'N/A' },
    check_in_time = 'N/A', 
    check_out_time = 'N/A',
    rate_per_night = { lowest: 'N/A', before_taxes_fees: 'N/A' },
    total_rate = { lowest: 'N/A', before_taxes_fees: 'N/A' },
    deal = 'None',
    deal_description = 'N/A',
    nearby_places = [],
    hotel_class = 'N/A',
    images = [],
    overall_rating = 'Not Rated',
    reviews = 0,
    ratings = [],
    location_rating = 'Not Rated',
    reviews_breakdown = [],
    amenities = [],
    property_token = 'N/A',
    serpapi_property_details_link,
}) {

    return (
        <div className="listing-details">
            <h2>{type}</h2>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{link}</p>
            <div>
                <h4>GPS Coordinates</h4>
                <p>Latitude: {gps_coordinates.latitude}</p>
                <p>Longitude: {gps_coordinates.longitude}</p>
            </div>
            <p>Check-in: {check_in_time}</p>
            <p>Check-out: {check_out_time}</p>
            <div>
                <h4>Rate per Night</h4>
                <p>Lowest: {rate_per_night.lowest}</p>
                <p>Before Taxes & Fees: {rate_per_night.before_taxes_fees}</p>
            </div>
            <div>
                <h4>Total Rate</h4>
                <p>Lowest: {total_rate.lowest}</p>
                <p>Before Taxes & Fees: {total_rate.before_taxes_fees}</p>
            </div>
            <div>
                <h4>Deal: {deal}</h4>
                <p>Description: {deal_description}</p>
            </div>
            <div>
                <h4>Nearby Places</h4>
                <ul>
                    {nearby_places.length > 0 ? (
                        nearby_places.map((place, index) => (
                            <li key={index}>
                                <h5>{place.name}</h5>
                                <ul>
                                    {place.transportations.map((transport, transportIndex) => (
                                        <li key={transportIndex}>
                                            <strong>Type:</strong> {transport.type} <br />
                                            <strong>Duration:</strong> {transport.duration}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))
                    ) : (
                        <p>No nearby places available.</p> 
                    )}
                </ul>
            </div>
            <h4>{hotel_class}</h4>
            <div className="listing-images">
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <div className="image-container" key={index}>
                            <img src={image.thumbnail} alt={`Image ${index + 1}`} />
                        </div>
                    ))
                ) : (
                    <p>No images available.</p> // Provide fallback message when no images
                )}
            </div>
            <div className="listing-ratings">
                <h4>Overall Rating: {overall_rating || 'Not Rated'}</h4>
                <h4># of Reviews: {reviews || 'No Reviews'}</h4>
                <h4>Location Rating: {location_rating || 'Not Rated'}</h4>
                
                <div className="rating-breakdown">
                    <h4>Rating Breakdown:</h4>
                    {ratings.length > 0 ? (
                        ratings.map((rating, index) => (
                            <div key={index} className="rating-item">
                                <span>{rating.stars} Stars: </span>
                                <span>{rating.count} reviews</span>
                            </div>
                        ))
                    ) : (
                        <p>No reviews available</p>
                    )}
                </div>
            </div>

            <h4>Reviews Breakdown</h4>
            <div className="reviews-breakdown">
                {reviews_breakdown && reviews_breakdown.length > 0 ? (
                    <ul>
                        {reviews_breakdown.map((item, index) => (
                            <li key={index}>
                                <h5>{item.name}</h5>
                                <p><strong>Description:</strong> {item.description}</p>
                                <p><strong>Total Mentions:</strong> {item.total_mentioned}</p>
                                <p><strong>Positive:</strong> {item.positive}</p>
                                <p><strong>Negative:</strong> {item.negative}</p>
                                <p><strong>Neutral:</strong> {item.neutral}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No review breakdown available.</p>
                )}
            </div>

            <div>
                <h4>Amenities</h4>
                {amenities && amenities.length > 0 ? (
                    <ul>
                        {amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No amenities listed.</p>
                )}
            </div>
            
            <p>Property Token: {property_token}</p>
            {serpapi_property_details_link && (
                <a href={serpapi_property_details_link} target="_blank" rel="noopener noreferrer">More Details</a>
            )}
        </div>
    );
}

export default Listing;