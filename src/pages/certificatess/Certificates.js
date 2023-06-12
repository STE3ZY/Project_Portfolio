import React from "react";
import certificateData from "./certificateData.json";
import PageHeader from "../../components/PageHeader";
import "./certificates.css";

const Certificates = () => {
  const CertificateList = () => (
    <div>
      {certificateData.map((certificate, i) => (
        <div key={i} id={certificate.id}>
          <img src={certificate.image} alt={certificate.title} />
        </div>
      ))}
    </div>
  );

  return (
    <section className="certificates">
      <PageHeader title="Certificates" description="Explore my credentials" />
      <div className="row">
        <CertificateList />
      </div>
    </section>
  );
};

export default Certificates;
