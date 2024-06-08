import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

const Form = ({ title, subTitle }) => {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        {title}
      </Typography>
      <Typography
        variant="h5"
        color="gray"
        className="mt-1 font-normal text-center"
      >
        {subTitle}
      </Typography>
      <form className="mt-8 mb-2 h-[250px] max-w-screen-lg">
        <div className="mb-1 grid grid-cols-[40%_60%] gap-5">
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="Your name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div >
              <br />
              <Typography variant="h6" color="blue-gray" className="">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="Your email address"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Message
            </Typography>
            <Textarea label="Your message" className="h-[150px]" />
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="mt-6 text-white " color="deep-orange" onClick={() => {
            alert('Message sent!');
          }}>
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
