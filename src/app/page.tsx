import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Services } from "@/components/home/services";
import { Submenu } from "@/components/home/submenu";
import { getDataHome } from '@/utils/actions/get-data'
import { HomeProps } from "@/utils/model/home.type";
import { Phone } from "lucide-react";

export default async function Home() {

  const { object }: HomeProps = await getDataHome()

  return (
    <main>
      <Submenu services={object.metadata.services}/>

      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#FFF"/>}
      />

      <Container>
        <Services object={object}/>
      </Container>



    </main>
  );
}
