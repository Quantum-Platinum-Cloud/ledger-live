// @flow
import React from "react";
import { useTranslation } from "react-i18next";
import SectionInformative from "~/renderer/screens/exchange/Swap2/Form/FormSummary/SectionInformative";

const FormLoginBanner = ({ provider, onClick }: { provider?: string, onClick: Function }) => {
  const { t } = useTranslation();

  if (!provider) return null;

  const { message, cta } = {
    message: t("swap2.form.providers.login.required"),
    cta: t("swap2.form.providers.login.complete"),
  };

  return <SectionInformative message={message} ctaLabel={cta} onClick={onClick} />;
};

export default FormLoginBanner;
