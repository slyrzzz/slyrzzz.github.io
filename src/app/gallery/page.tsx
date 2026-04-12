import { Flex, Schema } from "@once-ui-system/core";
import { Metadata } from "next";
import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person, home } from "@/resources";

export const metadata: Metadata = {
  title: gallery.title,
  description: gallery.description,
  alternates: {
    canonical: gallery.path,
  },
  openGraph: {
    title: gallery.title,
    description: gallery.description,
    url: gallery.path,
  },
};

export default function Gallery() {
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <GalleryView />
    </Flex>
  );
}
