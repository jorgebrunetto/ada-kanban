import Head from "next/head";
import { Kanban } from "components/Kanban";
import { Flex, IconButton, Link } from "@chakra-ui/react";

import { IoLogoWhatsapp } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanban - ADA</title>
        <meta name="description" content="Kanban Ada - Gestão de tarefas" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="og:title"
          content="Jorge Brunetto - criação e desenvolvimento"
        />
        <meta
          name="og:description"
          content="Site profissional de Jorge Brunetto. Freelancer Frontend, com VueJS, React/Native, Angular, criação de sites, designer ux/ui, mail marketing, SEO para seus sites e sistemas em geral."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Kanban />
        <Flex position="fixed" right={4} bottom={4}>
          <Link
            href="https://api.whatsapp.com/send?phone=5515981346495&text=Gostaria%20de%20conversar%20com%20você🥰"
            target="_blank"
          >
            <IconButton
              borderRadius={40}
              colorScheme="green"
              aria-label="Call Segun"
              size="lg"
              icon={<IoLogoWhatsapp size={30} />}
            />
          </Link>
        </Flex>
      </main>
    </>
  );
}
