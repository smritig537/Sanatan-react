import React from "react";
import LandingImage from "../assets/cow.jpg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex-grow p-5">
      <h1 className="text-xl font-semibold mb-2">
        A community that shows the best of Sanatana Dharma to the world!
      </h1>
      <div className="w-full h-[300px] mb-2">
        <img
          src={LandingImage}
          alt=""
          className="h-full w-full object-cover "
        />
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
        distinctio nisi vero repellat tenetur animi debitis blanditiis
        architecto repudiandae dolorem impedit id, totam magni? Quia eveniet
        ipsum dolorum fuga sed. Rem neque culpa eum vel praesentium qui. Aut
        numquam quia soluta cum voluptatibus! Quaerat dolor ratione veniam sed
        quisquam repellat iure atque voluptate iste eos eligendi, iusto deleniti
        minima tempore! Quos culpa, quam ea dolores voluptas, soluta facere
        incidunt aspernatur quis magnam eos quo at obcaecati sequi maxime! At
        eligendi saepe eius porro iure. Ipsum est dolore incidunt soluta
        inventore. Ad saepe assumenda debitis qui, tempora iure voluptatum
        numquam praesentium minima aperiam maiores natus vero iusto dicta.
        Dolore sint deleniti delectus facilis dignissimos, est suscipit rerum.
        Nihil quas optio deserunt. Repellat tenetur cupiditate officiis
        voluptatum suscipit soluta molestias quas consectetur, ab accusamus
        quod, cumque ipsam optio itaque molestiae quis deleniti non unde minima,
        sed ad vitae nesciunt quam dolore! Labore!
      </p>
      <Link to="/volunteer">
        <div className="flex justify-center">
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
