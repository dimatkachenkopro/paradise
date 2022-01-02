import React, { Component } from "react";
import items from "../data";

const RoomContext = React.createContext();

const RoomConsumer = RoomContext.Consumer;

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(({ featured }) => featured === true);
    let maxPrice = Math.max(...rooms.map(({ price }) => price));
    let maxSize = Math.max(...rooms.map(({ size }) => size));

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];

    return tempRooms.find(room => room.slug === slug);
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name);
    this.setState(
      {
        [name]: value
      },
      () => {
        this.filterRooms(name);
      }
    );
  };

  filterRooms = name => {
    let { rooms, type, capacity, breakfast, pets } = this.state;

    let tempRooms = [...rooms];

    if (type !== "all") {
      tempRooms = this.filterByType(tempRooms);
    }

    if (parseInt(capacity) !== 1) {
      tempRooms = this.filterByCapacity(tempRooms);
    }

    tempRooms = this.filterByPrice(tempRooms);

    tempRooms = this.filterBySize(tempRooms);

    if (breakfast) {
      tempRooms = this.filterByBreakfast(tempRooms);
    }

    if (pets) {
      tempRooms = this.filterByPets(tempRooms);
    }

    this.setState({
      ...this.state,
      sortedRooms: tempRooms
    });
  };

  filterByType = tempRooms => {
    return tempRooms.filter(room => room.type === this.state.type);
  };

  filterByCapacity = tempRooms => {
    return tempRooms.filter(
      room => room.capacity >= parseInt(this.state.capacity)
    );
  };

  filterByPrice = tempRooms => {
    return tempRooms.filter(room => room.price <= parseInt(this.state.price));
  };

  filterBySize = tempRooms => {
    return tempRooms.filter(
      room => room.size >= this.state.minSize && room.size <= this.state.maxSize
    );
  };

  filterByBreakfast = tempRooms => {
    return tempRooms.filter(room => room.breakfast === true);
  };

  filterByPets = tempRooms => {
    return tempRooms.filter(room => room.pets === true);
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomProvider, RoomConsumer, RoomContext };
