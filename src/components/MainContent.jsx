function MainContent(props) {
  return (
    <nav className="main-content">
      <img src={`${props.img}`} alt="" className="main-image"/>
      <div>
        <div>
          <img src={`${props.locationImg}`} alt="" className="location-img"/>
          <span className="country">{props.country}</span>
          <span className="google-map">{props.googleMap}</span>
        </div>
        <div>
          <h2 className="main-location">{props.location}</h2>
        </div>
        <div>
          <h3 className="main-date">{props.date}</h3>
        </div>
        <div>
          <p className="main-description">{props.description}</p>
        </div>
      </div>
    </nav>
  )
}

export default MainContent