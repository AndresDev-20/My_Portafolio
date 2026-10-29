import React, { useCallback, useEffect, useMemo, useState } from "react";
import BackButton from "../back/BackButton";
import "./diplomaGallery.css";

/*
  Galería de certificados compartida por SENA, Academlo y Ademass.
  - institution: { logo, name, institution, dates }
  - sections: [{ title, featured?, items: [{ title, image | null }] }]
  Un item sin imagen se muestra como "no disponible".
*/
const DiplomaGallery = ({ t, institution, sections }) => {
  const [current, setCurrent] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Lista plana de los certificados que sí tienen imagen (para anterior / siguiente)
  const viewable = useMemo(
    () => sections.flatMap((section) => section.items.filter((item) => item.image)),
    [sections]
  );

  const total = viewable.length;
  const isOpen = current !== null;
  const selected = isOpen ? viewable[current] : null;

  const open = (item) => {
    setImageLoaded(false);
    setCurrent(viewable.indexOf(item));
  };

  const close = useCallback(() => setCurrent(null), []);

  const move = useCallback(
    (step) => {
      setImageLoaded(false);
      setCurrent((index) => (index + step + total) % total);
    },
    [total]
  );

  // Teclado: Escape cierra, flechas navegan. Además bloquea el scroll del fondo.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, move]);

  return (
    <div className="Diplomados" id="Education">
      <BackButton t={t} section="Education" />

      <header className="Diplomados_hero" data-aos="fade-up">
        <figure className="Diplomados_hero-logo">
          <img src={institution.logo} alt={institution.institution} />
        </figure>
        <div className="Diplomados_hero-info">
          <span className="Diplomados_hero-kicker">
            <i className="bx bxs-graduation"></i> {institution.institution}
          </span>
          <h1 className="Diplomados_hero-title">{institution.name}</h1>
          <div className="Diplomados_hero-meta">
            <span>
              <i className="bx bx-calendar"></i> {institution.dates}
            </span>
            <span>
              <i className="bx bx-award"></i> {total} {t("ui.certificates")}
            </span>
          </div>
        </div>
      </header>

      {sections.map((section) => (
        <section className="Diplomados_section" key={section.title}>
          <h2 className="Diploma_Curso-title">
            <span>{section.title}</span>
          </h2>

          <div
            className={
              section.featured
                ? "Diplomados__carrer-diploma"
                : "Diplomados__complementarios"
            }
          >
            {section.items.map((item, index) => (
              <article
                key={item.title}
                className={`Diploma_card Reveal Reveal--zoom ${section.featured ? "Diploma_card--featured" : ""} ${
                  item.image ? "" : "Diploma_card--soon"
                }`}
                style={{ "--i": index, "--delay": `${Math.min(index * 80, 400)}ms` }}
                data-tilt="8"
                data-spotlight
              >
                {item.image ? (
                  <button
                    type="button"
                    className="Diploma_card-btn"
                    onClick={() => open(item)}
                    aria-label={`${t("ui.view")}: ${item.title}`}
                  >
                    <img
                      className="Diploma_card-image"
                      src={item.image}
                      alt=""
                      loading="lazy"
                    />
                    <span className="Diploma_card-overlay">
                      <span className="Diplomados__title">{item.title}</span>
                      <span className="Diploma_card-cta">
                        <i className="bx bx-show"></i> {t("education.ver")}
                      </span>
                    </span>
                  </button>
                ) : (
                  <div className="Diploma_card-btn">
                    <span className="Diploma_card-placeholder">
                      <i className="bx bx-time-five"></i>
                    </span>
                    <span className="Diploma_card-overlay">
                      <span className="Diplomados__title">{item.title}</span>
                      <span className="Diploma_card-cta Diploma_card-cta--muted">
                        {t("education.not_available")}
                      </span>
                    </span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}

      {isOpen && (
        <div
          className="Diploma_Image"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={close}
        >
          <div className="Diploma_viewer" onClick={(e) => e.stopPropagation()}>
            <div className="Diploma_viewer-bar">
              <span className="Diploma_viewer-title">{selected.title}</span>
              <span className="Diploma_viewer-count">
                {current + 1} / {total}
              </span>
              <a
                className="Diploma_viewer-action"
                href={selected.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("ui.open")}
                title={t("ui.open")}
              >
                <i className="bx bx-link-external"></i>
              </a>
              <button
                type="button"
                className="Diploma_viewer-action"
                onClick={close}
                aria-label={t("ui.close")}
                title={t("ui.close")}
                autoFocus
              >
                <i className="bx bx-x"></i>
              </button>
            </div>

            <div className="Diploma_viewer-stage">
              {!imageLoaded && <span className="Diploma_viewer-spinner" aria-hidden="true"></span>}
              <img
                key={selected.image}
                src={selected.image}
                alt={selected.title}
                className={imageLoaded ? "is-loaded" : ""}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {total > 1 && (
              <>
                <button
                  type="button"
                  className="Diploma_viewer-nav Diploma_viewer-nav--prev"
                  onClick={() => move(-1)}
                  aria-label={t("ui.prev")}
                >
                  <i className="bx bx-chevron-left"></i>
                </button>
                <button
                  type="button"
                  className="Diploma_viewer-nav Diploma_viewer-nav--next"
                  onClick={() => move(1)}
                  aria-label={t("ui.next")}
                >
                  <i className="bx bx-chevron-right"></i>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DiplomaGallery;
