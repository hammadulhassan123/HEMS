import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AuthUser from '../../AuthUser';
import "./dashboard.css"

const LocationComponent = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  const { http, user } = AuthUser();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        //   console.log(user.user_id);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported.");
    }
  };

    // useEffect(() => {
    //     getLocation();
    // }, []);

  const setterLocation = async () => {
    getLocation();
    if (location.latitude !== null && location.longitude !== null) {
      try 
        {
            const response = await http.put(`/user/${user.user_id}`, {
            latitude: location.latitude,
            longitude: location.longitude
            });
            console.log(response);
            // console.log("Updated Successfully");
            alert("Location has been updated");
        } 
        catch (error) 
        {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.error("User denied the request for geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.error("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    console.error("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.error("An unknown error occurred.");
                    break;
            }
            // console.log("Error:", error);
        }
    } 
    else {
    // console.log("Location not available yet.");
    alert("Location updation failed")
    }
  };
  
  

  return (
    <div>
      <Button variant='outline-danger'  className='dashBtn'  onClick={getLocation}>Get Current Location</Button>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <Button variant='outline-primary' className="dashBtn" onClick={setterLocation}>Update Location</Button>
    </div>
  );
};

export default LocationComponent;
