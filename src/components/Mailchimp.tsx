"use client";

import { mailchimp, newsletter } from "@/resources";
import { Button, Heading, Input, Text, Background, Column, Row } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";



export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Si había un error pero ahora es válido, lo quitamos sutilmente mientras escribe
    if (error && validateEmail(value)) {
      setError("");
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Por favor ingresa un correo electrónico válido.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email) || !email) {
      setError("Por favor ingresa un correo válido.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        // Resetea el success message después de unos segundos
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(responseData.error || "Hubo un error al enviar el correo.");
        setSuccess(false);
      }
    } catch (err) {
      setError("Error de conexión interno. Revisa la consola.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  if (newsletter.display === false) return null;

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      id="trabajemos-juntos"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
          {newsletter.description}
        </Text>
      </Column>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 1,
        }}
        onSubmit={handleSubmit}
        id="contact-form"
        name="contact-form"
      >
        <Column fillWidth maxWidth={24} gap="8">
          <Row fillWidth gap="8">
            <Input
              id="contact-firstName"
              name="firstName"
              type="text"
              placeholder="Nombre"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              id="contact-lastName"
              name="lastName"
              type="text"
              placeholder="Apellido"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Row>
          <Input
            id="contact-email"
            name="email"
            type="email"
            placeholder="Tu correo electrónico"
            required
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={error}
          />
          <Row height="48" vertical="center" marginTop="4">
            <Button
              type="submit"
              disabled={loading || success}
              value="Enviar"
              size="m"
              fillWidth
            >
              {loading ? "Enviando..." : success ? "¡Enviado con éxito!" : "Enviar"}
            </Button>
          </Row>
        </Column>
      </form>
    </Column>
  );
};
