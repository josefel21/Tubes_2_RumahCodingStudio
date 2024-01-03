import dbConnect from "./database.js";

export const barPage = async (req, res) => {
    const conn = await dbConnect();
    conn.release();
  
    res.render("page/barChart", {
    });
  };