import express from "express";
import {
  deleteTransaction,
  getTransactionById,
  insertNewTrans,
} from "../model/transaction/transactionModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const trans = await getTransactionById(req.body);

    res.json({
      status: "success",
      message: "here are the list of the transaction",
      trans,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});
router.post("/", async (req, res) => {
  const { authorization } = req.headers;
  try {
    const result = await insertNewTrans({ ...req.body, userId: authorization });
    result?._id
      ? res.json({
          status: "success",
          message: "new transaction has been added",
        })
      : res.json({
          status: "error",
          message: "unable to process your request",
        });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    const { ids } = req.body;

    const result = await deleteTransaction(ids);
    console.log(result);

    result?.deletedCount > 0
      ? res.json({
          message: "task has been deleted",
        })
      : res.json({
          message: "unable to delete try again later",
        });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Something went wrong in server. Please contact the provider.",
    });
  }
});
export default router;
