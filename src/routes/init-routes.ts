import { Router, Request, Response } from "express";
const router = Router();

// Check if the server is currently running.
router.get("/", async (req: Request, res: Response) => {
  try {
    res.send({
      success: true,
      message: "Server is running.",
      time: new Date(),
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(422).send({
        success: false,
        message: err.message,
      });
    }
  }
});

// Send current time in Epoch seconds
router.get("/time", async (req: Request, res: Response) => {
  try {
    res.send({
      success: true,
      properties: {
        epoch: {
          description: Date.now(),
          type: "number",
        },
      },
      required: ["epoch"],
      type: "object",
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(422).send({
        success: false,
        message: err.message,
      });
    }
  }
});
module.exports = router;
