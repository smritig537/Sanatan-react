import React from "react";
import { Helmet } from "react-helmet-async";
import "./SanatanaDharma.css";
import pic from "./SanatanaPic.webp";
import Yog from "../assets/yog.png";
import scrip from "./6628329.webp";
import Divider from "../components/Divider";

const SanatanaDharma = () => {
  return (
    <>
      <Helmet>
        <title>Sanatana Dharma - Core Principles and Scriptures</title>
        <meta
          name="description"
          content="Explore the core principles and scriptures of Sanatana Dharma, including Dharma, Karma, Samsara, Moksha, Atman, Brahman, and the Vedas, Upanishads, and Bhagavad Gita."
        />
      </Helmet>
      <main className="max-w-screen-lg px-4 py-10 mx-auto sm:px-6 lg:px-8">
        <header>
          <h1 className="my-10 text-5xl font-bold text-center text-gray-800 font-oswald">
            Sanatana Dharma
          </h1>
        </header>

        <section>
          <img
            className="p-5 w-30 h-30"
            src={pic}
            alt="Sanatana Dharma Pooja"
          />
          <article className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
            <p>
              The Inception of the Sanatana Dharma Foundation revolves around
              the idea of social reincarnation of the Sanatana Dharma. Sanatana
              Dharma, commonly known as Hinduism, is one of the world's oldest
              spiritual traditions, tracing its origins back over 4,000 years.
              The term "Sanatana Dharma" means "eternal order" or "eternal
              duty," emphasizing timeless, universal principles that guide
              adherents in living a balanced and righteous life.
            </p>
          </article>
        </section>

        <section>
          <header>
            <h2 className="my-10 text-5xl font-bold text-center text-gray-800 font-oswald">
              Sanatana Dharma Core
            </h2>
          </header>
          <img src={Yog} alt="Yog" />
          <article>
            <h3 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              Dharma
            </h3>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              Dharma, central to Sanatana Dharma (Hinduism), represents the
              moral law and spiritual discipline guiding one's life. It
              encompasses duties, rights, laws, conduct, and virtues,
              emphasizing righteousness and ethical behavior. Dharma includes
              personal and social responsibilities, ensuring justice and
              societal harmony. It advocates virtues like honesty, non-violence,
              and compassion, urging individuals to live in harmony with the
              cosmic order and divine will. By aligning one's actions with
              Dharma, individuals achieve spiritual fulfillment and contribute
              positively to society, embodying the right way of living that
              fosters inner peace and universal balance.
            </p>
          </article>

          <article>
            <h3 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              Karma
            </h3>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              Karma, a fundamental principle in Sanatana Dharma (Hinduism),
              refers to the law of cause and effect governing all actions. It
              posits that every action, thought, or decision creates
              corresponding reactions in the future. Positive actions and
              intentions lead to beneficial outcomes and spiritual growth, while
              negative actions and harmful intentions result in adverse effects
              and obstacles. Karma operates across lifetimes, influencing one's
              current and future experiences based on past deeds. This principle
              encourages ethical living and personal responsibility, emphasizing
              that individuals shape their destiny through their actions,
              promoting justice, moral balance, and spiritual evolution.
            </p>
          </article>

          <article>
            <h3 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              Samsara
            </h3>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              Samsara, in Sanatana Dharma (Hinduism), refers to the continuous
              cycle of birth, death, and rebirth, known as reincarnation. Souls
              are bound to this cycle due to karma, where past actions influence
              future existences. This cycle is driven by desires and
              attachments, causing souls to undergo various life forms and
              experiences. The ultimate aim is to break free from Samsara and
              attain liberation (moksha). Liberation is achieved through
              self-realization, ethical living, and spiritual practices,
              culminating in union with the divine and freedom from the cycle of
              rebirth, leading to eternal peace and enlightenment.
            </p>
          </article>

          <article>
            <h3 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              Moksha
            </h3>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              Moksha, in Sanatana Dharma (Hinduism), signifies liberation from
              the cycle of samsara, which is the cycle of birth, death, and
              rebirth. It is considered the ultimate goal of human life,
              representing the soul's union with the divine or the realization
              of one's true nature. Achieving Moksha means transcending all
              earthly attachments, desires, and karma. It involves attaining
              profound spiritual knowledge, self-realization, and inner peace.
              Upon reaching Moksha, the soul is freed from the perpetual cycle
              of reincarnation, experiencing eternal bliss and unity with the
              divine consciousness, thus achieving the highest state of
              spiritual existence.
            </p>
          </article>

          <article>
            <h3 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              Atman
            </h3>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              Atman, in Sanatana Dharma (Hinduism), refers to the innermost
              essence of an individual, often translated as the "soul" or
              "self." It is believed to be eternal, immutable, and transcendent,
              existing beyond the limitations of the physical body and mind.
              Atman is considered identical with Brahman, the supreme cosmic
              power or ultimate reality. This concept underscores the
              fundamental unity of all existence, asserting that every
              individual's essence is inherently divine and interconnected with
              the universal consciousness. Realizing the true nature of Atman
              through spiritual practices leads to self-awareness, liberation
              from ignorance, and union with Brahman, ultimately attaining
              spiritual enlightenment and eternal bliss.
            </p>
          </article>

          <article>
            <h3 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              Brahman
            </h3>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              Brahman, in Sanatana Dharma (Hinduism), represents the ultimate
              reality or cosmic spirit, encompassing all existence and beyond.
              It is described as formless, infinite, and transcendent, existing
              beyond the confines of time, space, and causation. Brahman is the
              source and sustainer of the universe, the eternal and unchanging
              essence underlying all phenomena. Despite its transcendental
              nature, Brahman is also immanent in all things, permeating every
              aspect of creation. This concept emphasizes the inherent unity of
              existence, asserting that everything in the universe is
              interconnected and ultimately rooted in Brahman. Realizing the
              nature of Brahman through spiritual practice leads to profound
              insight, spiritual liberation, and the experience of divine
              consciousness.
            </p>
          </article>
        </section>

        <section>
          <Divider />
          <header>
            <h2 className="my-10 text-5xl font-bold text-center text-gray-800 font-oswald">
              Scriptures
            </h2>
          </header>
          <img className="p-5 w-45 h-45" src={scrip} alt="script" />

          <article>
            <h3 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              Vedas
            </h3>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              The Vedas, the foundational scriptures of Sanatana Dharma
              (Hinduism), are revered as the oldest and most authoritative texts
              in the tradition. They are considered divine revelations, believed
              to have been directly revealed to ancient sages (rishis) during
              deep states of meditation. Composed in Sanskrit, the Vedas are
              revered for their profound spiritual wisdom, cosmic insights, and
              timeless teachings. The Vedas are divided into four main
              collections:
              <br />
              <br />
              <h4 className="my-10 text-2xl font-bold text-center text-gray-800 font-oswald">
                Rigveda
              </h4>
              The Rigveda, the oldest of the Vedas, is a
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default SanatanaDharma;
