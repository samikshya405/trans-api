// import transactionSchema from "./transactionSchema.js"

import transactionSchema from "./transactionSchema.js";

export const insertNewTrans = (transObj) => {
  return transactionSchema(transObj).save();
};

export const getTransactionById = (userId) => {
  return !userId ? null : transactionSchema.find(userId);
};
export const deleteTransaction = (ids) => {
  return transactionSchema.deleteMany({ _id: { $in: ids } });
};

