import React, { Component } from 'react'

import { Link } from 'react-router-dom';



export default class Home extends Component {
  render() {
    return (
      <div style={{ margin: '10%' }}>
        <h1>ANA SAYFA</h1>
        <Link to="/admin/cargot">
        <div  style={{ textAlign: 'center' }}>Kargom takip yeri</div>
        </Link>
      </div>
    )
  }
}