import { Hero } from "@/components/hero";
import styles from "./styles.module.scss";
import { getItemBySlug } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/model/post.type";
import { Phone } from "lucide-react";
import { Container } from "@/components/container";
import Image from "next/image";
import { Metadata } from "next";

interface ParamsProp {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: ParamsProp): Promise<Metadata> {
  try {
    const { objects }: PostProps = await getItemBySlug(slug).catch(() => {
      return {
        title: "DevMotors - Sua oficina especializada!",
        description: "Oficina de carros em Santa Vitória",
      };
    });

    return {
      title: `DevMotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      openGraph: {
        title: `DevMotors - ${objects[0].title}`,
        images: [objects[0].metadata.banner.url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };

  } catch (err) {
    return {
      title: "DevMotors - Sua oficina especializada!",
      description: "Oficina de carros em Santa Vitória",
    };
  }
}

export default async function DefaultPage({ params: { slug } }: ParamsProp) {
  const { objects }: PostProps = await getItemBySlug(slug);
  //console.log(JSON.stringify(objects, null, 2));

  return (
    <>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
              {objects[0].metadata.description.title}
            </h1>
            <p>{objects[0].metadata.description.text}</p>

            {objects[0].metadata.description.button_active == true && (
              <a
                href={objects[0].metadata.description.button_url as string}
                target="_blank"
                className={styles.link}
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>

          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={objects[0].title}
              quality={100}
              priority={true}
              fill={true}
              src={objects[0].metadata.description.banner.url}
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
            />
          </div>
        </section>
      </Container>
    </>
  );
}
