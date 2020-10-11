import React from "react";
import { useSelector } from "react-redux";

import { MapWithAMarker } from "HOC/googleMap";
import { getDefaultData } from "services/defaultService";

function HomePage() {
  const [markers, setMarkers] = React.useState();

  const isUserLogin = useSelector(state => {
    return state.userReducer.user.login
  })

  React.useEffect(() => {
    getDefaultData().then(setMarkers)
  }, []);


  return (
    <div className="container mt-4">
      {isUserLogin && (
        <div className="alert alert-warning mt-4" role="alert">
          Ви увійшли в додаток
        </div>
      )}
      <div className="row">
        <div className="col">
          <MapWithAMarker
            markers={markers}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBci1mGRYnglwUxOqWrLmj-M1IrpGt7FuY&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
