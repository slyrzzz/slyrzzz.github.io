import { Column, Heading, Schema, Text } from "@once-ui-system/core";
import { Metadata } from "next";
import { baseURL, about, person, work, home } from "@/resources";
import { Projects } from "@/components/work/Projects";

export const metadata: Metadata = {
  title: work.title,
  description: work.description,
  alternates: {
    canonical: work.path,
  },
  openGraph: {
    title: work.title,
    description: work.description,
    url: work.path,
    images: [{ url: home.image }],
  },
};

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="s" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Text
        marginBottom="m"
        align="center"
        variant="body-default-m"
        onBackground="neutral-weak"
      >
        Transformando visiones de negocio en experiencias digitales eficientes y escalables.
      </Text>
      <Projects />
    </Column>
  );
}
