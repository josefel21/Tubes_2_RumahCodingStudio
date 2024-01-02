//filter
const dd = document.querySelector("#att1");

function attSel() {
  const quote = document.querySelector(".quote");
  const ampli = document.querySelector(".ampli");
  const del = document.querySelector(".bb");

  ampli.style.display = "none";
  quote.style.display= "none";
  if (del) {
    del.remove();
  }

  switch (dd.value) {
    case "def": quote.style.display= "flex", ampli.style.display = "flex";;
    break;

    case "year": 
      bb.generate({
        data: {
          columns: [
        ["Year Birth", 1,2,3,4,5],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
      });
    break;

    case "education":
      bb.generate({
        data: {
          columns: [
        ["Education", 2,3,4,5,6],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#education"
      });
    break;

    case "marital":
      bb.generate({
        data: {
          columns: [
        ["Marital Status", 123,36,46,1234,364,8,234],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#marital"
      });
    break;

    case "income":
      bb.generate({
        data: {
          columns: [
        ["Income", 345,23,57,4,2,26,84,8,3],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#income"
      });
    break;

    case "kidhome":
      bb.generate({
        data: {
          columns: [
        ["Kid Home", 36,375,84,625,564,47,46,7],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#kidhome"
      });
    break;

    case "teenhome":
      bb.generate({
        data: {
          columns: [
        ["Teen Home", 30, 200, 100, 400, 150, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#teenhome"
      });
    break;

    case "dt":
      bb.generate({
        data: {
          columns: [
        ["Date Customer", 30, 200, 10, 400, 1500, 250, 10, 20, 30, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#dt"
      });
    break;

    case "recency":
      bb.generate({
        data: {
          columns: [
        ["Recency", 30, 200, 10, 400, 150, 25, 10, 20, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#recency"
      });
    break;

    case "mntwines":
      bb.generate({
        data: {
          columns: [
        ["MntWines", 30, 10, 40, 150, 20, 10, 200, 340, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#mntwines"
      });
    break;

    case "mntfruits":
      bb.generate({
        data: {
          columns: [
        ["MntFruits", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#mntfruits"
      });
    break;

    case "mntmeatproducts":
      bb.generate({
        data: {
          columns: [
        ["MntMeatProducts", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#mntmeatproducts"
      });
    break;

    case "mntfishproducts":
      bb.generate({
        data: {
          columns: [
        ["MntFishProducts", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#mntfishproducts"
      });
    break;

    case "mntsweetproducts":
      bb.generate({
        data: {
          columns: [
        ["MntSweetProducts", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#mntsweetproducts"
      });
    break;

    case "mntgoldprods":
      bb.generate({
        data: {
          columns: [
        ["MntGoldProducts", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#mntgoldprods"
      });
    break;

    case "numdealspurchases":
      bb.generate({
        data: {
          columns: [
        ["NumDealsPurchases", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#numdealspurchases"
      });
    break;

    case "numwebpurchases":
      bb.generate({
        data: {
          columns: [
        ["NumWebPurchases", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#numwebpurchases"
      });
    break;

    case "numcatalogpurchases":
      bb.generate({
        data: {
          columns: [
        ["NumCatalogPurchases", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#numcatalogpurchases"
      });
    break;

    case "numstorepurchases":
      bb.generate({
        data: {
          columns: [
        ["NumStorePurchases", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#numstorepurchases"
      });
    break;

    case "numwebvisitsmonth":
      bb.generate({
        data: {
          columns: [
        ["NumWebVisitsMonth", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#numwebvisitsmonth"
      });
    break;

    case "acceptedcmp1":
      bb.generate({
        data: {
          columns: [
        ["AcceptedCmp1", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#acceptedcmp1"
      });
    break;

    case "acceptedcmp2":
      bb.generate({
        data: {
          columns: [
        ["AcceptedCmp2", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#acceptedcmp2"
      });
    break;

    case "acceptedcmp3":
      bb.generate({
        data: {
          columns: [
        ["AcceptedCmp3", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#acceptedcmp4"
      });
    break;

    case "acceptedcmp4":
      bb.generate({
        data: {
          columns: [
        ["AcceptedCmp4", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#acceptedcmp4"
      });
    break;

    case "acceptedcmp5":
      bb.generate({
        data: {
          columns: [
        ["AcceptedCmp5", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#acceptedcmp5"
      });
    break;

    case "complain":
      bb.generate({
        data: {
          columns: [
        ["Complain", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#complain"
      });
    break;

    case "zcostcontact":
      bb.generate({
        data: {
          columns: [
        ["ZCostContact", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#zcostcontact"
      });
    break;

    case "zrevenue":
      bb.generate({
        data: {
          columns: [
        ["ZRevenue", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#zrevenue"
      });
    break;

    case "response":
      bb.generate({
        data: {
          columns: [
        ["Response", 30, 200, 100, 400, 1500, 250, 10, 200, 300, 110, 123],
          ],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.7
          }
        },
        bindto: "#response"
      });
    break;
  }
}

dd.addEventListener("change", attSel);

dd.addEventListener("click", () => {
  dd.removeEventListener("change", attSel);
  dd.addEventListener("change", attSel);
});