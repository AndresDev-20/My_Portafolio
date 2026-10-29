import React from "react";
import { Images } from "../../../assets/images";
import DiplomaGallery from "../DiplomaGallery";

const Sena = ({ t }) => {
  const institution = {
    logo: Images.Sena,
    name: t("education.institutions.sena.name"),
    institution: t("education.institutions.sena.institution"),
    dates: t("education.institutions.sena.dates"),
  };

  const sections = [
    {
      title: t("ui.career"),
      featured: true,
      items: [{ title: t("education.diploma"), image: Images.Sena_tecnologo }],
    },
    {
      title: t("education.title_curso1"),
      items: [
        { title: t("education.levels.english1"), image: Images.Sena_english_one },
        { title: t("education.levels.english2"), image: Images.Sena_english_two },
        { title: t("education.levels.english3"), image: Images.Sena_english_three },
        { title: t("education.levels.english4"), image: Images.Sena_english_fourt },
        { title: t("education.levels.english5"), image: Images.Sena_english_five },
        { title: t("education.levels.english6"), image: Images.Sena_english_six },
      ],
    },
    {
      title: t("education.title_curso2"),
      items: [{ title: "Python", image: Images.Sena_python }],
    },
  ];

  return <DiplomaGallery t={t} institution={institution} sections={sections} />;
};

export default Sena;
