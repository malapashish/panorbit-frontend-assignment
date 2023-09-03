import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useUsers } from "../../context/UserContext";
import "../../styles/Userprofilepanel.css"; // assuming you have a CSS file named UserProfile.css in the same folder

export const UserProfile = () => {
  const { selectedUser } = useUsers();
  const {
    address,
    company,
    email,
    name,
    phone,
    profilepicture,
    username,
    website,
    id,
  } = selectedUser ?? {};

  const { city, geo, street, suite, zipcode } = address ?? {};

  const { lat, lng } = geo ?? {};

  const { bs, catchPhrase, name: companyName } = company ?? {};

  return (
    <Container>
      <Row className="align-items-start">
        <Col md={6} className="border-right vertical-line">
          <div className="profile-info-section">
            <img
              src={profilepicture}
              alt={`${name}'s profile`}
              className="rounded-circle"
              style={{
                width: "180px",
              }}
            />
            <p>{name}</p>
          </div>
          <div>
            <h6>Username: {username}</h6>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
          </div>
          <hr className="horizontal-line" />
          <div>
            <h6>Company</h6>
            <p>Name: {companyName}</p>
            <p>Catchphrase: {catchPhrase}</p>
            <p>bs: {bs}</p>
          </div>
        </Col>

        <Col md={6}>
          <div>
            <h2>Address</h2>
            <p>Street: {street}</p>
            <p>Suite: {suite}</p>
            <p>City: {city}</p>
            <p>ZIP: {zipcode}</p>
          </div>
          <iframe
            title="location"
            width="100%"
            height="300"
            src={`//maps.google.com/maps?q=${lat},${lng}&output=embed`}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
