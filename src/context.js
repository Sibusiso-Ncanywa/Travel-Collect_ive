import React, { Component } from "react";
import items from "./data";

const LocationContext = React.createContext();

// Provider
// allows the components in the compenents tree to access it
// have to wrap

// consumer is used to access the info in the provider

class LocationProvider extends Component {
  state = {
    locations: [],
    featuredLocations: [],
    loading: true
  };

  // get data
  // used to access external data
  componentDidMount() {
    let locations = this.formatData(items);
    let featuredLocations = locations.filter(
      location => location.featured === true
    );
    this.setState({
      locations,
      featuredLocations,
      loading: false
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let location = { ...item.fields, images, id };
      return location;
    });
    return tempItems;
  }

  getLocation = slug => {
    let tempLocations = [...this.state.locations];
    const location = tempLocations.find(location => location.slug === slug);
    return location;
  };

  render() {
    return (
      <LocationContext.Provider
        value={{ ...this.state, getLocation: this.getLocation }}
      >
        {this.props.children}
      </LocationContext.Provider>
    );
  }
}

const LocationConsumer = LocationContext.Consumer;

export function withLocationConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <LocationConsumer>
        {value => <Component {...props} context={value} />}
      </LocationConsumer>
    );
  };
}

export { LocationProvider, LocationConsumer, LocationContext };
