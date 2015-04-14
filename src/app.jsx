import React from 'react/addons';
import Cortex from 'cortexjs';

import FilterableProductTable from './components/FilterableProductTable';

var Categories = new Cortex([
    { "name": "" },
    { "name": "Kitchen" },
    { "name": "Sporting Goods" },
    { "name": "Electronics" }
  ]),
  Products = new Cortex([
    {
      "name": "Knife",
      "category": 1,
      "price": 10,
      "stock": 10000,
      "country": "MEX"
    },
    {
      "name": "Spoon",
      "category": 1,
      "price": 15,
      "stock": 3000,
      "country": "GBR"
    },
    {
      "name": "Baseball",
      "category": 2,
      "price": 18,
      "stock": 4000,
      "country": "USA"
    },
    {
      "name": "iPhone",
      "category": 3,
      "price": 299,
      "stock": 0,
      "country": "DEU"
    }
  ]),
  Countries = new Cortex([
    {
      "id": "",
      "alpha": "",
      "name": "",
      "date": ""
    },
    {
      "id": "AFG",
      "alpha": "AF",
      "name": "Afghanistan",
      "date": "22-02-2007"
    },
    {
      "id": "ALA",
      "alpha": "AX",
      "name": "Åland Islands",
      "date": "15-10-2014"
    },
    {
      "id": "ALB",
      "alpha": "AL",
      "name": "Albania",
      "date": "27-04-2015"
    },
    {
      "id": "DZA",
      "alpha": "DZ",
      "name": "Algeria",
      "date": "02-12-2005"
    },
    {
      "id": "ASM",
      "alpha": "AS",
      "name": "American Samoa",
      "date": "30-10-2009"
    },
    {
      "id": "AND",
      "alpha": "AD",
      "name": "Andorra",
      "date": "10-01-2012"
    },
    {
      "id": "AGO",
      "alpha": "AO",
      "name": "Angola",
      "date": "27-11-2009"
    },
    {
      "id": "AIA",
      "alpha": "AI",
      "name": "Anguilla",
      "date": "14-12-2011"
    },
    {
      "id": "ATA",
      "alpha": "AQ",
      "name": "Antarctica",
      "date": "07-12-2004"
    },
    {
      "id": "ATG",
      "alpha": "AG",
      "name": "Antigua and Barbuda",
      "date": "14-06-2005"
    },
    {
      "id": "ARG",
      "alpha": "AR",
      "name": "Argentina",
      "date": "15-08-2005"
    },
    {
      "id": "ARM",
      "alpha": "AM",
      "name": "Armenia",
      "date": "18-08-2004"
    },
    {
      "id": "ABW",
      "alpha": "AW",
      "name": "Aruba",
      "date": "16-10-2007"
    },
    {
      "id": "AUS",
      "alpha": "AU",
      "name": "Australia",
      "date": "30-12-2006"
    },
    {
      "id": "AUT",
      "alpha": "AT",
      "name": "Austria",
      "date": "23-10-2011"
    },
    {
      "id": "AZE",
      "alpha": "AZ",
      "name": "Azerbaijan",
      "date": "10-06-2006"
    },
    {
      "id": "BHS",
      "alpha": "BS",
      "name": "Bahamas",
      "date": "10-07-2012"
    },
    {
      "id": "BHR",
      "alpha": "BH",
      "name": "Bahrain",
      "date": "01-05-2014"
    },
    {
      "id": "BGD",
      "alpha": "BD",
      "name": "Bangladesh",
      "date": "16-12-2005"
    },
    {
      "id": "BRB",
      "alpha": "BB",
      "name": "Barbados",
      "date": "19-09-2009"
    },
    {
      "id": "BLR",
      "alpha": "BY",
      "name": "Belarus",
      "date": "04-02-2010"
    },
    {
      "id": "BEL",
      "alpha": "BE",
      "name": "Belgium",
      "date": "08-08-2005"
    },
    {
      "id": "BLZ",
      "alpha": "BZ",
      "name": "Belize",
      "date": "27-10-2014"
    },
    {
      "id": "BEN",
      "alpha": "BJ",
      "name": "Benin",
      "date": "06-03-2012"
    },
    {
      "id": "BMU",
      "alpha": "BM",
      "name": "Bermuda",
      "date": "25-09-2014"
    },
    {
      "id": "BTN",
      "alpha": "BT",
      "name": "Bhutan",
      "date": "19-09-2004"
    },
    {
      "id": "BOL",
      "alpha": "BO",
      "name": "Bolivia (Plurinational State of)",
      "date": "30-01-2015"
    },
    {
      "id": "BES",
      "alpha": "BQ",
      "name": "Bonaire, Sint Eustatius and Saba",
      "date": "20-03-2014"
    },
    {
      "id": "BIH",
      "alpha": "BA",
      "name": "Bosnia and Herzegovina",
      "date": "21-05-2010"
    },
    {
      "id": "BWA",
      "alpha": "BW",
      "name": "Botswana",
      "date": "14-03-2010"
    },
    {
      "id": "BVT",
      "alpha": "BV",
      "name": "Bouvet Island",
      "date": "19-12-2005"
    },
    {
      "id": "BRA",
      "alpha": "BR",
      "name": "Brazil",
      "date": "09-10-2009"
    },
    {
      "id": "IOT",
      "alpha": "IO",
      "name": "British Indian Ocean Territory",
      "date": "24-07-2014"
    },
    {
      "id": "BRN",
      "alpha": "BN",
      "name": "Brunei Darussalam",
      "date": "07-03-2008"
    },
    {
      "id": "BGR",
      "alpha": "BG",
      "name": "Bulgaria",
      "date": "16-07-2004"
    },
    {
      "id": "BFA",
      "alpha": "BF",
      "name": "Burkina Faso",
      "date": "26-09-2013"
    },
    {
      "id": "BDI",
      "alpha": "BI",
      "name": "Burundi",
      "date": "15-01-2006"
    },
    {
      "id": "KHM",
      "alpha": "KH",
      "name": "Cambodia",
      "date": "04-06-2014"
    },
    {
      "id": "CMR",
      "alpha": "CM",
      "name": "Cameroon",
      "date": "16-10-2004"
    },
    {
      "id": "CAN",
      "alpha": "CA",
      "name": "Canada",
      "date": "05-05-2010"
    },
    {
      "id": "CPV",
      "alpha": "CV",
      "name": "Cabo Verde",
      "date": "28-01-2009"
    },
    {
      "id": "CYM",
      "alpha": "KY",
      "name": "Cayman Islands",
      "date": "19-02-2014"
    },
    {
      "id": "CAF",
      "alpha": "CF",
      "name": "Central African Republic",
      "date": "16-01-2011"
    },
    {
      "id": "TCD",
      "alpha": "TD",
      "name": "Chad",
      "date": "09-10-2009"
    },
    {
      "id": "CHL",
      "alpha": "CL",
      "name": "Chile",
      "date": "20-11-2006"
    },
    {
      "id": "CHN",
      "alpha": "CN",
      "name": "China",
      "date": "16-03-2004"
    },
    {
      "id": "CXR",
      "alpha": "CX",
      "name": "Christmas Island",
      "date": "20-12-2014"
    },
    {
      "id": "CCK",
      "alpha": "CC",
      "name": "Cocos (Keeling) Islands",
      "date": "02-12-2005"
    },
    {
      "id": "COL",
      "alpha": "CO",
      "name": "Colombia",
      "date": "14-08-2011"
    },
    {
      "id": "COM",
      "alpha": "KM",
      "name": "Comoros",
      "date": "31-05-2008"
    },
    {
      "id": "COG",
      "alpha": "CG",
      "name": "Congo",
      "date": "22-10-2008"
    },
    {
      "id": "COD",
      "alpha": "CD",
      "name": "Congo,  the Democratic Republic of the",
      "date": "17-11-2013"
    },
    {
      "id": "COK",
      "alpha": "CK",
      "name": "Cook Islands",
      "date": "21-02-2004"
    },
    {
      "id": "CRI",
      "alpha": "CR",
      "name": "Costa Rica",
      "date": "23-06-2010"
    },
    {
      "id": "CIV",
      "alpha": "CI",
      "name": "Côte d'Ivoire",
      "date": "26-06-2006"
    },
    {
      "id": "HRV",
      "alpha": "HR",
      "name": "Croatia",
      "date": "25-08-2010"
    },
    {
      "id": "CUB",
      "alpha": "CU",
      "name": "Cuba",
      "date": "02-02-2015"
    },
    {
      "id": "CUW",
      "alpha": "CW",
      "name": "Curaçao",
      "date": "16-11-2006"
    },
    {
      "id": "CYP",
      "alpha": "CY",
      "name": "Cyprus",
      "date": "07-04-2004"
    },
    {
      "id": "CZE",
      "alpha": "CZ",
      "name": "Czech Republic",
      "date": "16-10-2006"
    },
    {
      "id": "DNK",
      "alpha": "DK",
      "name": "Denmark",
      "date": "03-04-2004"
    },
    {
      "id": "DJI",
      "alpha": "DJ",
      "name": "Djibouti",
      "date": "28-08-2010"
    },
    {
      "id": "DMA",
      "alpha": "DM",
      "name": "Dominica",
      "date": "01-12-2004"
    },
    {
      "id": "DOM",
      "alpha": "DO",
      "name": "Dominican Republic",
      "date": "15-07-2015"
    },
    {
      "id": "ECU",
      "alpha": "EC",
      "name": "Ecuador",
      "date": "02-07-2011"
    },
    {
      "id": "EGY",
      "alpha": "EG",
      "name": "Egypt",
      "date": "29-06-2009"
    },
    {
      "id": "SLV",
      "alpha": "SV",
      "name": "El Salvador",
      "date": "16-07-2004"
    },
    {
      "id": "GNQ",
      "alpha": "GQ",
      "name": "Equatorial Guinea",
      "date": "24-07-2006"
    },
    {
      "id": "ERI",
      "alpha": "ER",
      "name": "Eritrea",
      "date": "23-12-2014"
    },
    {
      "id": "EST",
      "alpha": "EE",
      "name": "Estonia",
      "date": "23-11-2008"
    },
    {
      "id": "ETH",
      "alpha": "ET",
      "name": "Ethiopia",
      "date": "15-01-2010"
    },
    {
      "id": "FLK",
      "alpha": "FK",
      "name": "Falkland Islands (Malvinas)",
      "date": "30-04-2011"
    },
    {
      "id": "FRO",
      "alpha": "FO",
      "name": "Faroe Islands",
      "date": "20-07-2007"
    },
    {
      "id": "FJI",
      "alpha": "FJ",
      "name": "Fiji",
      "date": "29-04-2010"
    },
    {
      "id": "FIN",
      "alpha": "FI",
      "name": "Finland",
      "date": "15-11-2009"
    },
    {
      "id": "FRA",
      "alpha": "FR",
      "name": "France",
      "date": "02-06-2010"
    },
    {
      "id": "GUF",
      "alpha": "GF",
      "name": "French Guiana",
      "date": "19-09-2008"
    },
    {
      "id": "PYF",
      "alpha": "PF",
      "name": "French Polynesia",
      "date": "28-07-2014"
    },
    {
      "id": "ATF",
      "alpha": "TF",
      "name": "French Southern Territories",
      "date": "18-03-2004"
    },
    {
      "id": "GAB",
      "alpha": "GA",
      "name": "Gabon",
      "date": "16-06-2008"
    },
    {
      "id": "GMB",
      "alpha": "GM",
      "name": "Gambia",
      "date": "11-02-2011"
    },
    {
      "id": "GEO",
      "alpha": "GE",
      "name": "Georgia",
      "date": "18-12-2012"
    },
    {
      "id": "DEU",
      "alpha": "DE",
      "name": "Germany",
      "date": "03-01-2008"
    },
    {
      "id": "GHA",
      "alpha": "GH",
      "name": "Ghana",
      "date": "21-07-2012"
    },
    {
      "id": "GIB",
      "alpha": "GI",
      "name": "Gibraltar",
      "date": "20-08-2004"
    },
    {
      "id": "GRC",
      "alpha": "GR",
      "name": "Greece",
      "date": "03-03-2006"
    },
    {
      "id": "GRL",
      "alpha": "GL",
      "name": "Greenland",
      "date": "15-01-2006"
    },
    {
      "id": "GRD",
      "alpha": "GD",
      "name": "Grenada",
      "date": "27-12-2007"
    },
    {
      "id": "GLP",
      "alpha": "GP",
      "name": "Guadeloupe",
      "date": "03-06-2014"
    },
    {
      "id": "GUM",
      "alpha": "GU",
      "name": "Guam",
      "date": "15-11-2012"
    },
    {
      "id": "GTM",
      "alpha": "GT",
      "name": "Guatemala",
      "date": "13-12-2007"
    },
    {
      "id": "GGY",
      "alpha": "GG",
      "name": "Guernsey",
      "date": "01-03-2013"
    },
    {
      "id": "GIN",
      "alpha": "GN",
      "name": "Guinea",
      "date": "30-10-2006"
    },
    {
      "id": "GNB",
      "alpha": "GW",
      "name": "Guinea-Bissau",
      "date": "12-02-2010"
    },
    {
      "id": "GUY",
      "alpha": "GY",
      "name": "Guyana",
      "date": "19-08-2014"
    },
    {
      "id": "HTI",
      "alpha": "HT",
      "name": "Haiti",
      "date": "25-05-2007"
    },
    {
      "id": "HMD",
      "alpha": "HM",
      "name": "Heard Island and McDonald Islands",
      "date": "28-11-2012"
    },
    {
      "id": "VAT",
      "alpha": "VA",
      "name": "Holy See (Vatican City State)",
      "date": "10-08-2004"
    },
    {
      "id": "HND",
      "alpha": "HN",
      "name": "Honduras",
      "date": "01-02-2005"
    },
    {
      "id": "HKG",
      "alpha": "HK",
      "name": "Hong Kong",
      "date": "08-04-2013"
    },
    {
      "id": "HUN",
      "alpha": "HU",
      "name": "Hungary",
      "date": "15-07-2010"
    },
    {
      "id": "ISL",
      "alpha": "IS",
      "name": "Iceland",
      "date": "06-08-2012"
    },
    {
      "id": "IND",
      "alpha": "IN",
      "name": "India",
      "date": "14-05-2015"
    },
    {
      "id": "IDN",
      "alpha": "ID",
      "name": "Indonesia",
      "date": "30-07-2004"
    },
    {
      "id": "IRN",
      "alpha": "IR",
      "name": "Iran",
      "date": "23-02-2008"
    },
    {
      "id": "IRQ",
      "alpha": "IQ",
      "name": "Iraq",
      "date": "26-07-2009"
    },
    {
      "id": "IRL",
      "alpha": "IE",
      "name": "Ireland",
      "date": "02-08-2012"
    },
    {
      "id": "IMN",
      "alpha": "IM",
      "name": "Isle of Man",
      "date": "27-07-2008"
    },
    {
      "id": "ISR",
      "alpha": "IL",
      "name": "Israel",
      "date": "24-09-2012"
    },
    {
      "id": "ITA",
      "alpha": "IT",
      "name": "Italy",
      "date": "24-01-2015"
    },
    {
      "id": "JAM",
      "alpha": "JM",
      "name": "Jamaica",
      "date": "07-12-2008"
    },
    {
      "id": "JPN",
      "alpha": "JP",
      "name": "Japan",
      "date": "05-05-2008"
    },
    {
      "id": "JEY",
      "alpha": "JE",
      "name": "Jersey",
      "date": "09-04-2010"
    },
    {
      "id": "JOR",
      "alpha": "JO",
      "name": "Jordan",
      "date": "25-09-2007"
    },
    {
      "id": "KAZ",
      "alpha": "KZ",
      "name": "Kazakhstan",
      "date": "11-11-2014"
    },
    {
      "id": "KEN",
      "alpha": "KE",
      "name": "Kenya",
      "date": "02-11-2007"
    },
    {
      "id": "KIR",
      "alpha": "KI",
      "name": "Kiribati",
      "date": "12-02-2009"
    },
    {
      "id": "PRK",
      "alpha": "KP",
      "name": "Korea",
      "date": "05-03-2004"
    },
    {
      "id": "KOR",
      "alpha": "KR",
      "name": "Korea",
      "date": "27-04-2008"
    },
    {
      "id": "KWT",
      "alpha": "KW",
      "name": "Kuwait",
      "date": "04-06-2007"
    },
    {
      "id": "KGZ",
      "alpha": "KG",
      "name": "Kyrgyzstan",
      "date": "24-07-2008"
    },
    {
      "id": "LAO",
      "alpha": "LA",
      "name": "Lao People's Democratic Republic",
      "date": "03-10-2008"
    },
    {
      "id": "LVA",
      "alpha": "LV",
      "name": "Latvia",
      "date": "25-03-2010"
    },
    {
      "id": "LBN",
      "alpha": "LB",
      "name": "Lebanon",
      "date": "04-05-2013"
    },
    {
      "id": "LSO",
      "alpha": "LS",
      "name": "Lesotho",
      "date": "28-12-2005"
    },
    {
      "id": "LBR",
      "alpha": "LR",
      "name": "Liberia",
      "date": "01-07-2013"
    },
    {
      "id": "LBY",
      "alpha": "LY",
      "name": "Libya",
      "date": "02-05-2014"
    },
    {
      "id": "LIE",
      "alpha": "LI",
      "name": "Liechtenstein",
      "date": "24-07-2004"
    },
    {
      "id": "LTU",
      "alpha": "LT",
      "name": "Lithuania",
      "date": "26-04-2011"
    },
    {
      "id": "LUX",
      "alpha": "LU",
      "name": "Luxembourg",
      "date": "16-01-2004"
    },
    {
      "id": "MAC",
      "alpha": "MO",
      "name": "Macao",
      "date": "06-01-2010"
    },
    {
      "id": "MKD",
      "alpha": "MK",
      "name": "Macedonia",
      "date": "12-10-2012"
    },
    {
      "id": "MDG",
      "alpha": "MG",
      "name": "Madagascar",
      "date": "24-01-2013"
    },
    {
      "id": "MWI",
      "alpha": "MW",
      "name": "Malawi",
      "date": "29-08-2004"
    },
    {
      "id": "MYS",
      "alpha": "MY",
      "name": "Malaysia",
      "date": "30-06-2007"
    },
    {
      "id": "MDV",
      "alpha": "MV",
      "name": "Maldives",
      "date": "10-10-2007"
    },
    {
      "id": "MLI",
      "alpha": "ML",
      "name": "Mali",
      "date": "13-05-2012"
    },
    {
      "id": "MLT",
      "alpha": "MT",
      "name": "Malta",
      "date": "28-06-2013"
    },
    {
      "id": "MHL",
      "alpha": "MH",
      "name": "Marshall Islands",
      "date": "31-03-2009"
    },
    {
      "id": "MTQ",
      "alpha": "MQ",
      "name": "Martinique",
      "date": "09-02-2010"
    },
    {
      "id": "MRT",
      "alpha": "MR",
      "name": "Mauritania",
      "date": "30-04-2010"
    },
    {
      "id": "MUS",
      "alpha": "MU",
      "name": "Mauritius",
      "date": "14-09-2005"
    },
    {
      "id": "MYT",
      "alpha": "YT",
      "name": "Mayotte",
      "date": "22-12-2008"
    },
    {
      "id": "MEX",
      "alpha": "MX",
      "name": "Mexico",
      "date": "24-03-2007"
    },
    {
      "id": "FSM",
      "alpha": "FM",
      "name": "Micronesia",
      "date": "26-02-2004"
    },
    {
      "id": "MDA",
      "alpha": "MD",
      "name": "Moldova",
      "date": "23-02-2012"
    },
    {
      "id": "MCO",
      "alpha": "MC",
      "name": "Monaco",
      "date": "26-10-2005"
    },
    {
      "id": "MNG",
      "alpha": "MN",
      "name": "Mongolia",
      "date": "31-05-2015"
    },
    {
      "id": "MNE",
      "alpha": "ME",
      "name": "Montenegro",
      "date": "16-05-2012"
    },
    {
      "id": "MSR",
      "alpha": "MS",
      "name": "Montserrat",
      "date": "28-09-2007"
    },
    {
      "id": "MAR",
      "alpha": "MA",
      "name": "Morocco",
      "date": "10-06-2013"
    },
    {
      "id": "MOZ",
      "alpha": "MZ",
      "name": "Mozambique",
      "date": "29-03-2012"
    },
    {
      "id": "MMR",
      "alpha": "MM",
      "name": "Myanmar",
      "date": "20-09-2004"
    },
    {
      "id": "NAM",
      "alpha": "NA",
      "name": "Namibia",
      "date": "13-08-2010"
    },
    {
      "id": "NRU",
      "alpha": "NR",
      "name": "Nauru",
      "date": "01-09-2004"
    },
    {
      "id": "NPL",
      "alpha": "NP",
      "name": "Nepal",
      "date": "30-03-2007"
    },
    {
      "id": "NLD",
      "alpha": "NL",
      "name": "Netherlands",
      "date": "19-10-2011"
    },
    {
      "id": "NCL",
      "alpha": "NC",
      "name": "New Caledonia",
      "date": "23-09-2014"
    },
    {
      "id": "NZL",
      "alpha": "NZ",
      "name": "New Zealand",
      "date": "09-12-2011"
    },
    {
      "id": "NIC",
      "alpha": "NI",
      "name": "Nicaragua",
      "date": "29-05-2008"
    },
    {
      "id": "NER",
      "alpha": "NE",
      "name": "Niger",
      "date": "17-10-2009"
    },
    {
      "id": "NGA",
      "alpha": "NG",
      "name": "Nigeria",
      "date": "20-11-2010"
    },
    {
      "id": "NIU",
      "alpha": "NU",
      "name": "Niue",
      "date": "27-11-2004"
    },
    {
      "id": "NFK",
      "alpha": "NF",
      "name": "Norfolk Island",
      "date": "27-01-2009"
    },
    {
      "id": "MNP",
      "alpha": "MP",
      "name": "Northern Mariana Islands",
      "date": "19-08-2008"
    },
    {
      "id": "NOR",
      "alpha": "NO",
      "name": "Norway",
      "date": "28-04-2012"
    },
    {
      "id": "OMN",
      "alpha": "OM",
      "name": "Oman",
      "date": "13-01-2005"
    },
    {
      "id": "PAK",
      "alpha": "PK",
      "name": "Pakistan",
      "date": "22-05-2014"
    },
    {
      "id": "PLW",
      "alpha": "PW",
      "name": "Palau",
      "date": "08-02-2009"
    },
    {
      "id": "PSE",
      "alpha": "PS",
      "name": "Palestine",
      "date": "13-02-2009"
    },
    {
      "id": "PAN",
      "alpha": "PA",
      "name": "Panama",
      "date": "23-01-2013"
    },
    {
      "id": "PNG",
      "alpha": "PG",
      "name": "Papua New Guinea",
      "date": "07-03-2014"
    },
    {
      "id": "PRY",
      "alpha": "PY",
      "name": "Paraguay",
      "date": "03-06-2014"
    },
    {
      "id": "PER",
      "alpha": "PE",
      "name": "Peru",
      "date": "04-03-2008"
    },
    {
      "id": "PHL",
      "alpha": "PH",
      "name": "Philippines",
      "date": "10-08-2011"
    },
    {
      "id": "PCN",
      "alpha": "PN",
      "name": "Pitcairn",
      "date": "29-02-2012"
    },
    {
      "id": "POL",
      "alpha": "PL",
      "name": "Poland",
      "date": "15-07-2009"
    },
    {
      "id": "PRT",
      "alpha": "PT",
      "name": "Portugal",
      "date": "12-03-2014"
    },
    {
      "id": "PRI",
      "alpha": "PR",
      "name": "Puerto Rico",
      "date": "28-04-2007"
    },
    {
      "id": "QAT",
      "alpha": "QA",
      "name": "Qatar",
      "date": "17-10-2010"
    },
    {
      "id": "REU",
      "alpha": "RE",
      "name": "Réunion",
      "date": "11-10-2013"
    },
    {
      "id": "ROU",
      "alpha": "RO",
      "name": "Romania",
      "date": "20-09-2008"
    },
    {
      "id": "RUS",
      "alpha": "RU",
      "name": "Russian Federation",
      "date": "08-03-2011"
    },
    {
      "id": "RWA",
      "alpha": "RW",
      "name": "Rwanda",
      "date": "14-12-2004"
    },
    {
      "id": "BLM",
      "alpha": "BL",
      "name": "Saint Barthélemy",
      "date": "02-10-2009"
    },
    {
      "id": "SHN",
      "alpha": "SH",
      "name": "Saint Helena,  Ascension and Tristan da Cunha",
      "date": "29-08-2004"
    },
    {
      "id": "KNA",
      "alpha": "KN",
      "name": "Saint Kitts and Nevis",
      "date": "29-03-2005"
    },
    {
      "id": "LCA",
      "alpha": "LC",
      "name": "Saint Lucia",
      "date": "16-12-2008"
    },
    {
      "id": "MAF",
      "alpha": "MF",
      "name": "Saint Martin (French part)",
      "date": "06-09-2004"
    },
    {
      "id": "SPM",
      "alpha": "PM",
      "name": "Saint Pierre and Miquelon",
      "date": "16-07-2006"
    },
    {
      "id": "VCT",
      "alpha": "VC",
      "name": "Saint Vincent and the Grenadines",
      "date": "02-11-2010"
    },
    {
      "id": "WSM",
      "alpha": "WS",
      "name": "Samoa",
      "date": "26-01-2005"
    },
    {
      "id": "SMR",
      "alpha": "SM",
      "name": "San Marino",
      "date": "18-01-2008"
    },
    {
      "id": "STP",
      "alpha": "ST",
      "name": "Sao Tome and Principe",
      "date": "17-12-2009"
    },
    {
      "id": "SAU",
      "alpha": "SA",
      "name": "Saudi Arabia",
      "date": "14-07-2014"
    },
    {
      "id": "SEN",
      "alpha": "SN",
      "name": "Senegal",
      "date": "15-05-2015"
    },
    {
      "id": "SRB",
      "alpha": "RS",
      "name": "Serbia",
      "date": "26-04-2012"
    },
    {
      "id": "SYC",
      "alpha": "SC",
      "name": "Seychelles",
      "date": "31-07-2008"
    },
    {
      "id": "SLE",
      "alpha": "SL",
      "name": "Sierra Leone",
      "date": "27-08-2007"
    },
    {
      "id": "SGP",
      "alpha": "SG",
      "name": "Singapore",
      "date": "02-06-2004"
    },
    {
      "id": "SXM",
      "alpha": "SX",
      "name": "Sint Maarten (Dutch part)",
      "date": "11-02-2006"
    },
    {
      "id": "SVK",
      "alpha": "SK",
      "name": "Slovakia",
      "date": "13-12-2007"
    },
    {
      "id": "SVN",
      "alpha": "SI",
      "name": "Slovenia",
      "date": "20-09-2013"
    },
    {
      "id": "SLB",
      "alpha": "SB",
      "name": "Solomon Islands",
      "date": "21-03-2014"
    },
    {
      "id": "SOM",
      "alpha": "SO",
      "name": "Somalia",
      "date": "14-02-2005"
    },
    {
      "id": "ZAF",
      "alpha": "ZA",
      "name": "South Africa",
      "date": "02-04-2006"
    },
    {
      "id": "SGS",
      "alpha": "GS",
      "name": "South Georgia and the South Sandwich Islands",
      "date": "12-04-2007"
    },
    {
      "id": "SSD",
      "alpha": "SS",
      "name": "South Sudan",
      "date": "28-09-2012"
    },
    {
      "id": "ESP",
      "alpha": "ES",
      "name": "Spain",
      "date": "26-02-2005"
    },
    {
      "id": "LKA",
      "alpha": "LK",
      "name": "Sri Lanka",
      "date": "12-10-2011"
    },
    {
      "id": "SDN",
      "alpha": "SD",
      "name": "Sudan",
      "date": "10-03-2007"
    },
    {
      "id": "SUR",
      "alpha": "SR",
      "name": "Suriname",
      "date": "02-06-2014"
    },
    {
      "id": "SJM",
      "alpha": "SJ",
      "name": "Svalbard and Jan Mayen",
      "date": "08-02-2011"
    },
    {
      "id": "SWZ",
      "alpha": "SZ",
      "name": "Swaziland",
      "date": "24-08-2009"
    },
    {
      "id": "SWE",
      "alpha": "SE",
      "name": "Sweden",
      "date": "21-08-2008"
    },
    {
      "id": "CHE",
      "alpha": "CH",
      "name": "Switzerland",
      "date": "18-09-2005"
    },
    {
      "id": "SYR",
      "alpha": "SY",
      "name": "Syrian Arab Republic",
      "date": "30-10-2004"
    },
    {
      "id": "TWN",
      "alpha": "TW",
      "name": "Taiwan",
      "date": "19-08-2008"
    },
    {
      "id": "TJK",
      "alpha": "TJ",
      "name": "Tajikistan",
      "date": "09-01-2013"
    },
    {
      "id": "TZA",
      "alpha": "TZ",
      "name": "Tanzania",
      "date": "02-09-2007"
    },
    {
      "id": "THA",
      "alpha": "TH",
      "name": "Thailand",
      "date": "29-09-2006"
    },
    {
      "id": "TLS",
      "alpha": "TL",
      "name": "Timor-Leste",
      "date": "08-04-2007"
    },
    {
      "id": "TGO",
      "alpha": "TG",
      "name": "Togo",
      "date": "05-01-2012"
    },
    {
      "id": "TKL",
      "alpha": "TK",
      "name": "Tokelau",
      "date": "31-08-2005"
    },
    {
      "id": "TON",
      "alpha": "TO",
      "name": "Tonga",
      "date": "26-02-2015"
    },
    {
      "id": "TTO",
      "alpha": "TT",
      "name": "Trinidad and Tobago",
      "date": "18-09-2008"
    },
    {
      "id": "TUN",
      "alpha": "TN",
      "name": "Tunisia",
      "date": "26-03-2013"
    },
    {
      "id": "TUR",
      "alpha": "TR",
      "name": "Turkey",
      "date": "23-01-2004"
    },
    {
      "id": "TKM",
      "alpha": "TM",
      "name": "Turkmenistan",
      "date": "21-08-2008"
    },
    {
      "id": "TCA",
      "alpha": "TC",
      "name": "Turks and Caicos Islands",
      "date": "02-08-2010"
    },
    {
      "id": "TUV",
      "alpha": "TV",
      "name": "Tuvalu",
      "date": "08-01-2007"
    },
    {
      "id": "UGA",
      "alpha": "UG",
      "name": "Uganda",
      "date": "01-09-2011"
    },
    {
      "id": "UKR",
      "alpha": "UA",
      "name": "Ukraine",
      "date": "21-08-2014"
    },
    {
      "id": "ARE",
      "alpha": "AE",
      "name": "United Arab Emirates",
      "date": "09-08-2005"
    },
    {
      "id": "GBR",
      "alpha": "GB",
      "name": "United Kingdom",
      "date": "19-07-2008"
    },
    {
      "id": "USA",
      "alpha": "US",
      "name": "United States",
      "date": "08-12-2007"
    },
    {
      "id": "UMI",
      "alpha": "UM",
      "name": "United States Minor Outlying Islands",
      "date": "05-10-2009"
    },
    {
      "id": "URY",
      "alpha": "UY",
      "name": "Uruguay",
      "date": "09-05-2012"
    },
    {
      "id": "UZB",
      "alpha": "UZ",
      "name": "Uzbekistan",
      "date": "13-12-2013"
    },
    {
      "id": "VUT",
      "alpha": "VU",
      "name": "Vanuatu",
      "date": "18-02-2006"
    },
    {
      "id": "VEN",
      "alpha": "VE",
      "name": "Venezuela",
      "date": "05-09-2012"
    },
    {
      "id": "VNM",
      "alpha": "VN",
      "name": "Viet Nam",
      "date": "25-06-2004"
    },
    {
      "id": "VGB",
      "alpha": "VG",
      "name": "Virgin Islands",
      "date": "26-12-2005"
    },
    {
      "id": "VIR",
      "alpha": "VI",
      "name": "Virgin Islands, U.S.",
      "date": "29-06-2005"
    },
    {
      "id": "WLF",
      "alpha": "WF",
      "name": "Wallis and Futuna",
      "date": "07-11-2006"
    },
    {
      "id": "ESH",
      "alpha": "EH",
      "name": "Western Sahara",
      "date": "30-06-2009"
    },
    {
      "id": "YEM",
      "alpha": "YE",
      "name": "Yemen",
      "date": "13-02-2006"
    },
    {
      "id": "ZMB",
      "alpha": "ZM",
      "name": "Zambia",
      "date": "01-08-2006"
    },
    {
      "id": "ZWE",
      "alpha": "ZW",
      "name": "Zimbabwe",
      "date": "06-03-2009"
    }
  ]);

var filterableProductTable = React.render(
  <FilterableProductTable categories={Categories}
    products={Products}
    countries={Countries}
  />,
  document.querySelector('#products')
);

Products.on('update', function (updatedProducts) {
  filterableProductTable.setState({
    categories: Categories,
    products: updatedProducts,
    countries: Countries
  });
});
