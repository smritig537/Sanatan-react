import React from "react";
import LandingImage from "../assets/cow.jpg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex-grow p-5">
      <h1 className="text-xl font-semibold mb-2 text-center">
        A community that shows the best of Sanatana Dharma to the world!
      </h1>
      <div className="w-full h-[300px] mb-2">
        <img
          src={LandingImage}
          alt=""
          className="h-full w-full object-cover sm:w-2/3 sm:mx-auto"
        />
      </div>
      <p className="sm:w-2/3 sm:mx-auto text-justify">
        Sanatana Dharma, meaning "eternal duty" or "eternal law," is the
        spiritual and philosophical foundation of Hinduism. It is not just a
        religion but a way of life, embracing a rich tapestry of beliefs,
        customs, and practices that have evolved over millennia. At its core,
        Sanatana Dharma teaches the eternal principles of righteousness,
        morality, duty, and cosmic order. Central to Sanatana Dharma is the
        concept of dharma, which encompasses the duties, responsibilities, and
        moral obligations that individuals must uphold in their lives. Dharma
        guides individuals in living harmoniously with themselves, others, and
        the universe.
      </p>
      <Link to="/volunteer">
        <div className="flex justify-center m-3">
          <Button
            variant="gradient"
            size="sm"
            color="deep-orange"
            className="rounded-full"
          >
            Volunteer Now
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default About;
