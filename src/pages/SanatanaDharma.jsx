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
        <main className="max-w-screen-lg flex flex-col items-center py-10 mx-auto ">
        
        <section className="flex flex-col items-center">
          <article className="w-full items-center justify-center align-middle">
          <div>
          <img
            className="align-middle"
            src={pic}
            loading="lazy"
            alt="Sanatana Dharma Pooja"
          />  </div> 
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
          </h2><div className="w-full justify-center items-center align-middle">
          <img src={Yog} className="align-middle" atl="Sanatana Dharma Yoga" /></div>
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
        </p></article>
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
        </p> </article>
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
        </p></article>
        <article>
        <h2 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
          Brahman
        </h2>
        <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
          Brahman, in Sanatana Dharma (Hinduism), represents the ultimate
          reality or cosmic spirit, encompassing all existence and beyond. It is
          described as formless, infinite, and transcendent, existing beyond the
          confines of time, space, and causation. Brahman is the source and
          sustainer of the universe, the eternal and unchanging essence
          underlying all phenomena. Despite its transcendental nature, Brahman
          is also immanent in all things, permeating every aspect of creation.
          This concept emphasizes the inherent unity of existence, asserting
          that everything in the universe is interconnected and ultimately
          rooted in Brahman. Realizing the nature of Brahman through spiritual
          practice leads to profound insight, spiritual liberation, and the
          experience of divine consciousness.
        </p></article></section>
        <Divider />
        <section>
          <article>
        <h2 className="my-10 text-5xl font-bold text-center text-gray-800 font-oswald">
          {" "}
          Scriptures{" "}
        </h2>
        <div className="w-full justify-center">
        <img loading="lazy" className=" w-45 h-45" src={scrip} alt="script" /></div>
        <h3 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
          Vedas
        </h3>
        <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
          The Vedas, the foundational scriptures of Sanatana Dharma (Hinduism),
          are revered as the oldest and most authoritative texts in the
          tradition. They are considered divine revelations, believed to have
          been directly revealed to ancient sages (rishis) during deep states of
          meditation. Composed in Sanskrit, the Vedas are revered for their
          profound spiritual wisdom, cosmic insights, and timeless teachings.
          The Vedas are divided into four main collections:
          <br></br>
          <h4 className="my-10 text-2xl font-bold text-center text-gray-800 font-oswald">
            Rigveda:
          </h4>
          The Rigveda, the oldest of the Vedas, is a collection of hymns and
          prayers composed in ancient Sanskrit. It consists of 1,028 hymns
          divided into ten books, known as Mandalas. Each hymn is dedicated to
          various deities and cosmic forces, expressing the spiritual
          aspirations and cosmic vision of the ancient seers (rishis). The
          Rigveda not only serves as a repository of religious and philosophical
          insights but also reflects the cultural, social, and historical
          context of ancient India. Its profound metaphysical hymns, known as
          the Upanishads, explore the nature of reality, the self, and the
          ultimate truth, making it a cornerstone of Hindu philosophy and
          spirituality.
          <br></br>
          <h4 className="my-10 text-2xl font-bold text-center text-gray-800 font-oswald">
            Samaveda:
          </h4>
          The Samaveda, derived from the Rigveda, is primarily a collection of
          melodies or chants (saman) used in Vedic rituals and ceremonies. It is
          considered the "Veda of melodies" and is closely associated with the
          chanting of hymns during sacrificial rites. The Samaveda reinterprets
          the hymns of the Rigveda into musical form, adding a melodic and
          rhythmic dimension to the sacred verses. Through its intricate
          melodies and poetic expressions, the Samaveda enhances the spiritual
          experience of Vedic rituals, invoking divine blessings and fostering a
          deeper connection with the cosmic forces.
          <h4 className="my-10 text-2xl font-bold text-center text-gray-800 font-oswald">
            Yajurveda:
          </h4>
          The Yajurveda, known as the "Veda of sacrifices," is a collection of
          prose and verse formulas used by priests (brahmins) during Vedic
          rituals and sacrificial ceremonies (yajnas). It provides detailed
          instructions for performing rituals, including the construction of
          altars, the offering of oblations, and the chanting of mantras. The
          Yajurveda emphasizes the importance of proper ritual conduct and the
          precise recitation of prayers to ensure the efficacy of the
          sacrifices. Through its practical teachings and ceremonial practices,
          the Yajurveda facilitates communication with the divine, fostering
          spiritual growth and divine blessings.
          <h4 className="my-10 text-2xl font-bold text-center text-gray-800 font-oswald">
            Atharvaveda:
          </h4>
          The Atharvaveda, characterized by its diverse subject matter, is a
          unique collection of hymns, spells, charms, incantations, and healing
          remedies. Unlike the other Vedas, which focus primarily on religious
          rituals and philosophical teachings, the Atharvaveda addresses
          practical aspects of life, including health, prosperity, protection
          from malevolent forces, and domestic rites. It reflects the concerns
          and aspirations of everyday life, offering remedies for physical
          ailments, social challenges, and spiritual afflictions. Through its
          pragmatic approach and folk traditions, the Atharvaveda serves as a
          practical guide for navigating the complexities of human existence,
          promoting well-being, harmony, and spiritual fulfillment.
        </p>

        </article> </section>

        <section>
    <article>
        <h2 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
          Upanishads
        </h2>
        <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
          The Upanishads, philosophical texts that form the culmination of the
          Vedas, delve into the deepest mysteries of existence, consciousness,
          and reality. Composed in Sanskrit and dating back to around 800 BCE,
          these ancient scriptures are revered for their profound insights and
          metaphysical teachings. The word "Upanishad" translates to "sitting
          down near," implying the close, intimate transmission of spiritual
          knowledge from teacher to disciple in a sacred setting.
          <br></br>
          The Upanishads explore fundamental questions about the nature of
          reality, the self, and the ultimate truth. They challenge conventional
          notions of existence and consciousness, offering radical perspectives
          on the nature of reality and the self. Through dialogues, parables,
          and contemplative insights, the Upanishads unveil the underlying unity
          of all creation, asserting that the individual self (Atman) is
          identical with the cosmic reality (Brahman).
          <br></br>
          These texts are characterized by their mystical and contemplative
          nature, often employing symbolic language and allegorical narratives
          to convey profound truths. They emphasize the importance of
          self-inquiry (Atma-Vichara) and direct spiritual experience
          (Brahma-Vidya) as the means to transcendental knowledge and liberation
          (Moksha).
          <br></br>
          The Upanishads introduce key philosophical concepts such as Maya
          (illusion), Karma (action and its consequences), and Samsara (the
          cycle of birth and death). They elucidate the process of spiritual
          realization and liberation from the cycle of rebirth, guiding seekers
          on the path to self-discovery and enlightenment.
          <br></br>
          Despite their diversity in style and content, the Upanishads share a
          common theme: the quest for ultimate truth and the realization of
          one's divine nature. They inspire seekers to transcend the limitations
          of the ego-mind, cultivate inner wisdom, and awaken to the eternal
          essence that pervades all existence.
          <br></br>
          The Upanishads continue to be a source of inspiration and guidance for
          spiritual seekers and philosophers worldwide, transcending cultural
          and temporal boundaries. Their timeless wisdom resonates with the
          universal quest for meaning and liberation, offering profound insights
          into the nature of reality and the journey of the soul towards
          self-realization and ultimate freedom.
        </p>
        </article>
        </section>

<section>
  <article>
        <h2 className="my-10 text-4xl font-bold text-center text-gray-800 font-oswald">
          Bhagavad Gita
        </h2>
        <p className="p-4 mt-5 mb-5 text-justify bg-gray-100 rounded-lg shadow-lg">
          The Bhagavad Gita, often referred to as the Gita, is one of the most
          revered and influential texts in Sanatana Dharma (Hinduism). Composed
          as part of the Indian epic Mahabharata, the Gita is a dialogue between
          Prince Arjuna and Lord Krishna, who serves as his charioteer.
          <br></br>
          This sacred scripture unfolds on the battlefield of Kurukshetra, where
          Arjuna is plagued by moral dilemmas and existential questions about
          duty, righteousness, and the nature of reality. In response, Krishna
          imparts profound spiritual teachings, guiding Arjuna towards clarity,
          resolve, and self-realization.
          <br></br>
          The Bhagavad Gita addresses timeless philosophical themes, including
          the nature of the self (Atman), the cosmic order (Dharma), and the
          paths to spiritual liberation (Moksha). It expounds on the concepts of
          Karma Yoga (the path of selfless action), Bhakti Yoga (the path of
          devotion), and Jnana Yoga (the path of knowledge), offering practical
          guidance for leading a fulfilling and purposeful life.
          <br></br>
          Renowned for its depth of wisdom and universal relevance, the Bhagavad
          Gita has inspired countless seekers, scholars, and leaders throughout
          history. Its teachings transcend religious and cultural boundaries,
          offering profound insights into the human condition and the quest for
          spiritual enlightenment.
          <br></br>
          As a timeless scripture that blends philosophy, ethics, and
          spirituality, the Bhagavad Gita continues to be a source of guidance
          and inspiration for individuals seeking inner peace,
          self-transformation, and a deeper understanding of life's mysteries.
        </p>
        </article>
        </section>
      </main>
    </>
  );
};

export default SanatanaDharma;
