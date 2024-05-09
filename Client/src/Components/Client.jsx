import React, { useState } from "react";
import clientsData from "../json/clients.json";
import companiesData from "../json/companies.json";

function YourComponent() {
  const [clientIndex, setClientIndex] = useState(0);
  const [companyIndex, setCompanyIndex] = useState(0);

  const clientsToShow = getCircularItems(clientsData, clientIndex, 3);
  const companiesToShow = getCircularItems(companiesData, companyIndex, 3);

  function getCircularItems(data, startIndex, count) {
    const length = data.length;
    const items = [];

    for (let i = 0; i < count; i++) {
      const index = (startIndex + i) % length;
      items.push(data[index]);
    }

    return items;
  }

  const showNextClients = () => {
    setClientIndex((prevIndex) => (prevIndex + 1) % clientsData.length);
  };

  const showNextCompanies = () => {
    setCompanyIndex((prevIndex) => (prevIndex + 1) % companiesData.length);
  };

  return (
    <section className="containerClient" id="clients">
      <div className="box">
        <h2>Clients</h2>
        <div className="scroll-container">
          {clientsToShow.map((client, index) => (
            <div className="client" key={index}>
              <img
                src={process.env.PUBLIC_URL + client.imageURL}
                alt={client.name}
              />
              <p>{client.name}</p>
            </div>
          ))}
        </div>
        <button onClick={showNextClients}>Next</button>
      </div>
      <div className="box">
        <h2>Companies</h2>
        <div className="scroll-container">
          {companiesToShow.map((company, index) => (
            <div className="company" key={index}>
              <img
                src={process.env.PUBLIC_URL + company.imageURL}
                alt={company.name}
              />
              <p>{company.name}</p>
            </div>
          ))}
        </div>
        <button onClick={showNextCompanies}>Next</button>
      </div>
    </section>
  );
}

export default YourComponent;
