import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

function Notfoundpage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <Typography placeholder={undefined} variant="h1">
            404 Not Found
          </Typography>
          <Typography placeholder={undefined} variant="small" className="pt-8">
            Your visited page not found. You may go home page.
          </Typography>
          <div className="flex justify-center ">
            <Button color="red" placeholder={undefined} size="md">
              <a href="/" className="flex items-center">
                Back to home page
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notfoundpage;
