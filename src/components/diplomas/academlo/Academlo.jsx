import React from "react";
import { Images } from "../../../assets/images";
import DiplomaGallery from "../DiplomaGallery";

const Academlo = ({ t }) => {
  const institution = {
    logo: Images.Academlo,
    name: t("education.institutions.academlo.name"),
    institution: t("education.institutions.academlo.institution"),
    dates: t("education.institutions.academlo.dates"),
  };

  const sections = [
    {
      title: t("ui.career"),
      featured: true,
      items: [{ title: t("education.diploma"), image: Images.Academlo_fullstack }],
    },
    {
      title: t("ui.courses"),
      items: [
        { title: t("education.levels.fundamento"), image: Images.Academlo_fundamentos },
        { title: t("education.levels.frontend"), image: Images.Academlo_frontend },
        { title: t("education.levels.backend"), image: Images.Academlo_backend },
      ],
    },
  ];

  return <DiplomaGallery t={t} institution={institution} sections={sections} />;
};

export default Academlo;
