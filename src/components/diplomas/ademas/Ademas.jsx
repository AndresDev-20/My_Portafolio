import React from "react";
import { Images } from "../../../assets/images";
import DiplomaGallery from "../DiplomaGallery";

const Ademas = ({ t }) => {
  const institution = {
    logo: Images.Ademas,
    name: t("education.institutions.ademass.name"),
    institution: t("education.institutions.ademass.institution"),
    dates: t("education.institutions.ademass.dates"),
  };

  const sections = [
    {
      title: t("ui.career"),
      featured: true,
      items: [{ title: t("education.diploma"), image: null }],
    },
    {
      title: t("education.title_curso2"),
      items: [
        { title: "Html5", image: Images.Ademas_html },
        { title: "Css3", image: Images.Ademas_css },
        { title: "JavaScript", image: Images.Ademas_js },
        { title: "TypeScript", image: Images.Ademas_ts },
        { title: "Python", image: Images.Ademas_py },
      ],
    },
  ];

  return <DiplomaGallery t={t} institution={institution} sections={sections} />;
};

export default Ademas;
