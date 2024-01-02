// routes/scatter-plot.js
import dbConnect from "./database.js";

export const scatterPage = async (req,res) =>{
    const conn = await dbConnect();
    conn.release();
    res.render("page/scatterPlot.ejs");
}