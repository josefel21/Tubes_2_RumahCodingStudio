export const barPage = async (req, res) => {
    res.render("page/barChart");
};

export const scatterPage = async (req,res) => {
   res.render("page/scatterPlot");
}

export const landingPage = async (req, res) => {
    res.render("page/landing");
}

export const homePage = async (req, res) => {
    res.render("page/home");
}

export const summaryPage = async (req, res) => {
    res.render("page/summary");
}

export const uploadPage = async (req, res) => {
    res.render("page/upload");
}