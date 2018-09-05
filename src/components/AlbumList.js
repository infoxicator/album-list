import React, { Component } from 'react';
import AlbumDetail from './AlbumDetail';
import loadAlbums from '../requests';


class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }


  async componentWillMount() {
    const albums = await loadAlbums();
    this.setState({ albums });
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail
        key={album.node.id}
        album={album}
      />
    ));
  }

  render() {
    return (
      <ul className="listContainer">
        {this.renderAlbums()}
      </ul>
    );
  }
}

export default AlbumList;
