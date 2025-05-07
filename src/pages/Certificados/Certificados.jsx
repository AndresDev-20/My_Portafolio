import React from "react";
import { useTranslation } from "react-i18next";
import Education from "../../components/Education/Education";

function Certificados() {
	const {t, i18n} = useTranslation("global")

	return(
		<section>
			<br />
			<br />
			<Education t={t}/>
		</section>
	)
};

export default Certificados;