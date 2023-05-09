import React, { Component, useState, useEffect } from 'react';
import axios from "axios";
import GoogleMapReact from 'google-map-react';
import '../../src/index.css';
const AnyReactComponent = ({
  text, url, nombre, lat, lng
}) =>

(<i class="fas fa-battery-three-quarters fa-lg" style={{ color: "black", background: "relative" }} data-toggle="tooltip" data-placement="top" title={`${text} en: ${lat}, ${lng}`}>
  {<a href={`${process.env.REACT_APP_GOOGLE_MAPS_KEY}${lat},${lng}`} target={`_blank`}>Punto de carga</a>}</i>
  
  );

class MapView extends Component {
  state = {
    map: null,
    maps: null,
    center: {
      lat: 6.2083924,
      lng: -75.5890823
    },
    zoom: 16,
    locations: [],
  };

  handleApiLoaded = (map, maps) => {
    this.setState({
      map
    });
    this.setState({
      maps
    });

  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

  }

  showPosition = (position) => {
    console.log(position)
    this.setState({

    });
  }
  // metodo para pintar 
  getAllCasos = async () => {
    const respuesta = await axios.get('https://api.thingspeak.com/channels/1810697/feeds.json?api_key=BKUEK569AOLSNUU6&results=2')
    this.setState({ locations: [respuesta.data.channel] });

  }

  componentDidMount = () => {
    this.getLocation();
    this.getAllCasos();
    /* getAllCasos()
     .then(c => {
       console.log(c.data);
       this.setState({locations: c.data});
     })
     .catch(e => {
       console.log(e);
     });*/

  }

  render() {
    return (
      <>
        <div style={
          {
            height: '100vh',
            width: '100%',
            marginBottom: '10vh',
          }
        }
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) =>
              this.handleApiLoaded(map, maps)}
          >
            {
              this.state.locations.map((l, i) => {
                return (
                  <AnyReactComponent
                    key={i}
                    lat={l.latitude}
                    lng={l.longitude}
                    text={l.field3}
                    url={l.id}
                    nombre={l.name}
                  />)
              })
            }
          </GoogleMapReact>
        </div>
        <div>
          <view style={{ flex: 1, justifyContent: "center", color:"white", alignItems: "center" }}>
            <dl>
              <dt style={{ textAlignVertical: "center", textAlign: "center" }}> Puntos de carga para dispositivos moviles</dt>
            </dl>
            <p style={{ textAlignVertical: "center", textAlign: "center" }}>Diseño de una aplicación web para el monitoreo y gestión de puntos de carga eléctrica fotovoltaica para dispositivos móviles en ambientes comerciales.</p>
          </view>
        </div>
      </>
    );
  }
  

}

export default MapView;