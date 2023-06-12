import React from "react";
import certificateData from "./certificateData.json";
import PageHeader from "../../components/PageHeader";

const Certificates = () => {
  const CertificateList = () => (
    <div className="cert-container">
      {certificateData.map((certificate, i) => (
        <div key={i} id={certificate.id}>
          <h2>{certificate.title}</h2>
          <img src={certificate.image} alt={certificate.title} />
          <p>{certificate.uni}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="portfolio">
      <PageHeader title="Certificates" description="Explore my credentials" />
      <div className="row">
        <CertificateList />
      </div>
    </section>
  );
};

export default Certificates;
