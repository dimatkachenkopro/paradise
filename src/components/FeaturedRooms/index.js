import React, { Component } from "react";
import { RoomContext } from "../../contex";
import Loading from "../Loading";
import Room from "../Room";
import Title from "../Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? (
            <Loading />
          ) : (
            (rooms = rooms.map(room => <Room key={room.id} room={room} />))
          )}
        </div>
      </section>
    );
  }
}
