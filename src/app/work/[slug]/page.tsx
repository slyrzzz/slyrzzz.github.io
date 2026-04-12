import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Schema,
  AvatarGroup,
  Button,
  Carousel,
  Column,
  Flex,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
  Avatar,
  Line,
} from "@once-ui-system/core";
import { baseURL, about, person, work, home } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";
import { Projects } from "@/components/work/Projects";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  const projectImage = post.metadata.images && post.metadata.images.length > 0 ? post.metadata.images[0] : home.image;

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    alternates: {
      canonical: `${work.path}/${post.slug}`,
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      url: `${work.path}/${post.slug}`,
      images: [{ url: projectImage }],
    },
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.images && post.metadata.images.length > 0 ? post.metadata.images[0] : home.image
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href="/work">
          <Text variant="label-strong-m">Proyectos</Text>
        </SmartLink>
        <Heading variant="display-strong-m">{post.metadata.title}</Heading>
      </Column>
      {post.metadata.images.length > 1 ? (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={post.metadata.images.map((image: string) => ({
            slide: image,
            alt: post.metadata.title,
          }))}
        />
      ) : post.metadata.images.length === 1 ? (
        <Media priority aspectRatio="16 / 9" radius="m" alt="image" src={post.metadata.images[0]} />
      ) : null}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <CustomMDX source={post.content} />
        {post.metadata.link && (
          <Flex horizontal="center" marginTop="32">
            <SmartLink
              href={post.metadata.link}
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
            >
              <Text variant="body-default-s">Ver Proyecto</Text>
            </SmartLink>
          </Flex>
        )}
      </Column>

      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          Proyectos relacionados
        </Heading>
        <Projects exclude={[post.slug]} range={[2]} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
