function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(city + " is located in " + country);
}
describe_city('Rawalpindi');
describe_city('Islamabad');
describe_city('new york', 'USA');
