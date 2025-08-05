import React, { useEffect, useState } from "react";
import { AppLayout } from "@layouts";
import { ContactUsScreen } from "@modules";

const ContactUsContainer: React.FC = () => {
  const [formSuccess, setFormSuccess] = useState<boolean>(false);

  useEffect(() => {
    setFormSuccess(false);
  }, []);

  return (
    <AppLayout>
      <ContactUsScreen
        formSuccess={formSuccess}
        setFormSuccess={setFormSuccess}
      />
    </AppLayout>
  );
};

export default ContactUsContainer;
