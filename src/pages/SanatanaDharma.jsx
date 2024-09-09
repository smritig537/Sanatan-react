import React from "react";
import "./SanatanaDharma.css";
import pic from "./SanatanaPic.webp";
import Yog from "../assets/yog.png";
import scrip from "./6628329.webp";
import Divider from "../components/Divider";
import { Helmet } from "react-helmet-async";

const SanatanaDharma = () => {
  return (
    <>
      <Helmet>
        <title>Sanatana Dharma: Core Concepts & Scriptures</title>
        <meta name="description" content="Discover Sanatana Dharma (Hinduism) principles like Dharma, Karma, Samsara, Moksha, Atman, Brahman, and key scriptures like Vedas, Upanishads, and Bhagavad Gita." />
        <meta name="keywords" content="Sanatana Dharma, Hinduism, Dharma, Karma, Moksha, Atman, Brahman, Vedas, Upanishads, Bhagavad Gita" />
        <meta name="author" content="Sanatana Dharma Foundation" />
        <meta property="og:title" content="Sanatana Dharma: Core Concepts & Scriptures" />
        <meta property="og:description" content="Explore the core principles and scriptures of Sanatana Dharma, including Dharma, Karma, Moksha, and key texts like Vedas and Bhagavad Gita." />
        <meta property="og:image" content={pic} />
        <meta property="og:url" content="https://yourwebsite.com/sanatana-dharma" />
        <meta property="og:type" content="website" />
      </Helmet>
      <header>
        <h1 className="my-10 text-5xl font-bold text-center text-gray-800 font-oswald">
          Sanatana Dharma 
        </h1>
      </header>
      <main className="max-w-screen-lg flex flex-col items-center px-4 py-10 mx-auto sm:px-6 lg:px-8">
        
        <section className="flex flex-col items-center">
          <article>
            <div className="w-full flex justify-center items-center">
              <img
                className="w-30 h-30"
                src={pic}
                loading="lazy"
                alt="Sanatana Dharma Pooja"
              />
            </div>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              The Inception of the Sanatana Dharma Foundation revolves around the
              idea of social reincarnation of the Sanatana Dharma. Sanatana
              Dharma, commonly known as Hinduism, is one of the world's oldest
              spiritual traditions, tracing its origins back over 4,000 years. The
              term "Sanatana Dharma" means "eternal order" or "eternal duty,"
              emphasizing timeless, universal principles that guide adherents in
              living a balanced and righteous life.
            </p>
          </article>

          <article>
            <h2 className="my-10 text-5xl font-bold text-center text-gray-800 font-oswald">
              Sanatana Dharma Core
            </h2>
            <div className="w-full flex justify-center items-center">
              <img src={Yog} className="w-45 h-45" alt="Sanatana Dharma Yoga" />
            </div>
            <h3 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              Dharma
            </h3>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              Dharma, central to Sanatana Dharma (Hinduism), represents the moral
              law and spiritual discipline guiding one's life. It encompasses
              duties, rights, laws, conduct, and virtues, emphasizing
              righteousness and ethical behavior. Dharma includes personal and
              social responsibilities, ensuring justice and societal harmony. It
              advocates virtues like honesty, non-violence, and compassion, urging
              individuals to live in harmony with the cosmic order and divine
              will. By aligning one's actions with Dharma, individuals achieve
              spiritual fulfillment and contribute positively to society,
              embodying the right way of living that fosters inner peace and
              universal balance.
            </p>
            <h4 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              Karma
            </h4>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              Karma, a fundamental principle in Sanatana Dharma (Hinduism), refers
              to the law of cause and effect governing all actions. It posits that
              every action, thought, or decision creates corresponding reactions
              in the future. Positive actions and intentions lead to beneficial
              outcomes and spiritual growth, while negative actions and harmful
              intentions result in adverse effects and obstacles. Karma operates
              across lifetimes, influencing one's current and future experiences
              based on past deeds. This principle encourages ethical living and
              personal responsibility, emphasizing that individuals shape their
              destiny through their actions, promoting justice, moral balance, and
              spiritual evolution.
            </p>
          </article>
        </section>

        <section>
          <article>
            <h2 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              Samsara
            </h2>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              Samsara, in Sanatana Dharma (Hinduism), refers to the continuous cycle
              of birth, death, and rebirth, known as reincarnation. Souls are bound
              to this cycle due to karma, where past actions influence future
              existences. This cycle is driven by desires and attachments, causing
              souls to undergo various life forms and experiences. The ultimate aim
              is to break free from Samsara and attain liberation (moksha).
              Liberation is achieved through self-realization, ethical living, and
              spiritual practices, culminating in union with the divine and freedom
              from the cycle of rebirth, leading to eternal peace and enlightenment.
            </p>
          </article>
          <article>
            <h2 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              Moksha
            </h2>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              Moksha, in Sanatana Dharma (Hinduism), signifies liberation from the
              cycle of samsara, which is the cycle of birth, death, and rebirth. It
              is considered the ultimate goal of human life, representing the soul's
              union with the divine or the realization of one's true nature.
              Achieving Moksha means transcending all earthly attachments, desires,
              and karma. It involves attaining profound spiritual knowledge,
              self-realization, and inner peace. Upon reaching Moksha, the soul is
              freed from the perpetual cycle of reincarnation, experiencing eternal
              bliss and unity with the divine consciousness, thus achieving the
              highest state of spiritual existence.
            </p>
          </article>
          <article>
            <h2 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              Atman
            </h2>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              Atman, in Sanatana Dharma (Hinduism), refers to the innermost essence
              of an individual, often translated as the "soul" or "self." It is
              believed to be eternal, immutable, and transcendent, existing beyond
              the limitations of the physical body and mind. Atman is considered
              identical with Brahman, the supreme cosmic power or ultimate reality.
              This concept underscores the fundamental unity of all existence,
              asserting that every individual's essence is inherently divine and
              interconnected with the universal consciousness. Realizing the true
              nature of Atman through spiritual practices leads to self-awareness,
              liberation from ignorance, and union with Brahman, ultimately
              attaining spiritual enlightenment and eternal bliss.
            </p>
          </article>
          <article>
            <h2 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              Brahman
            </h2>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              Brahman, in Sanatana Dharma (Hinduism), represents the ultimate
              reality or cosmic spirit, encompassing all existence and beyond. It is
              described as formless, infinite, and transcendent, existing beyond the
              confines of time, space, and causation. Brahman is the source and
              sustainer of the universe, embodying both immanent and transcendent
              aspects. All individual souls (Atman) are considered manifestations of
              Brahman, reflecting its divine essence. Realizing the unity of Atman and
              Brahman through spiritual knowledge and self-realization leads to
              liberation (moksha), transcending the cycle of birth and rebirth, and
              experiencing eternal unity with the supreme consciousness.
            </p>
          </article>
          <article>
            <h2 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              The Sanatana Dharma Scriptures
            </h2>
            <div className="w-full flex justify-center items-center">
              <img src={scrip} className="w-45 h-45" alt="Sanatana Dharma Scriptures" />
            </div>
            <h3 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              The Vedas
            </h3>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              The Vedas are the most ancient and sacred scriptures in Sanatana
              Dharma (Hinduism), consisting of four primary texts: Rigveda, Samaveda,
              Yajurveda, and Atharvaveda. They encompass a vast body of knowledge,
              including hymns, rituals, and philosophical discourses. The Vedas serve
              as the foundation for various aspects of Hindu religious and spiritual
              practice, guiding adherents in performing rites, understanding cosmic
              principles, and cultivating ethical conduct. They are revered as divine
              revelations and embody the spiritual wisdom and traditions of ancient
              India, playing a central role in shaping the theological and cultural
              heritage of Sanatana Dharma.
            </p>
            <h3 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              The Upanishads
            </h3>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              The Upanishads are a collection of philosophical texts that form the
              concluding part of the Vedas in Sanatana Dharma (Hinduism). They explore
              profound spiritual and metaphysical concepts, delving into the nature of
              reality, the self (Atman), and the ultimate reality (Brahman). The
              Upanishads emphasize the importance of self-realization, meditation,
              and direct experience of the divine, offering insights into the nature of
              existence and the path to liberation (moksha). They are highly revered
              for their philosophical depth and spiritual wisdom, influencing Hindu
              thought and practice across centuries.
            </p>
            <h3 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
              The Bhagavad Gita
            </h3>
            <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
              The Bhagavad Gita is a revered scripture in Sanatana Dharma (Hinduism),
              comprising a dialogue between Prince Arjuna and the deity Krishna on the
              battlefield of Kurukshetra. It addresses profound questions about duty,
              righteousness, and the nature of existence. The Gita presents various
              paths to spiritual realization, including devotion (bhakti), knowledge
              (jnana), and selfless action (karma). It offers guidance on ethical
              living, personal duty, and achieving liberation (moksha), making it a
              central text in Hindu philosophy and practice.
            </p>
          </article>
        </section>
      </main>
      <footer>
        <Divider />
      </footer>
    </>
  );
};

export default SanatanaDarma;
