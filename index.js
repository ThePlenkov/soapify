const soap = require("soap");

module.exports = (sPath, sUrl, oOptions) => {
  var soapClient = soap.createClientAsync(sUrl, oOptions);

  const OPERATION = "operation";

  return [
    `${sPath}/:${OPERATION}`,
    async (req, res) => {
      try {
        // we get soap service method from path
        let service = await soapClient;
        let api = service[req.param(OPERATION) + "Async"];

        switch (req.method) {
          case "GET": {
            let result = await api(req.query);

            res.send(result[0]);

            break;
          }

          case "POST": {
            let results = [];

            if (Array.isArray(req.body)) {
              for (const oData of req.body) {
                let result = await api(oData);
                results.push(result[0]);
              }
            }

            res.send(results);

            break;
          }

          default:
            break;
        }
      } catch (error) {
        res.send(error);
      }
    }
  ];
};
