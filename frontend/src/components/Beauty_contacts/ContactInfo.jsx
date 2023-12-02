// ContactInfo.jsx

import React from 'react';
import '../../styles/Beauty/BeautyContacts.css';  // Importă stilurile

const ContactInfo = () => {
  return (
    <div>
      <div className="column">
        <div className="title">Program de lucru</div>
        <div className="text">
          Luni - Duminica
          <br />
          9:00 - 20:00
        </div>
      </div>

      <div className="column">
        <div className="title">Adresa</div>
        <div className="text">
          Or. Chisinau
          <br />
          Dacia 60/5 A
          <br />
          vitastef@mail.ru
        </div>
      </div>

      <div className="column">
        <div className="socialTitle">Social Media</div>
        {/* Adaugă aici informațiile despre social media */}
      </div>
    </div>
  );
};

export default ContactInfo;
