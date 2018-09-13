# APIfy SOAP services with ExpressJS

This module provides Express middleware for proxying SOAP services into your express API

This helps to consume SOAP services just by triggering URL

Just a good example:

There is a WSDL service for VAT number checking. To call it from JS - you normally need to POST some XML file to the server.

With this module it's enough just to call URL something like this:

localhost:3000/api/eu_vat/checkVat?countryCode=HU&vatNumber=XXXXXXXX

It will send you back JSON file, not XML
