import { connect } from "mongoose";


const URL: string =  "mongodb://localhost:27017/BeArticle"

export const dbConfig = async () => {
  try {
    return await connect(URL!)
      .then(() => {
        console.log("database connection established🔥❤️🔥");
      })
      .catch((err) => console.error());
  } catch (error) {
    return error;
  }
};
