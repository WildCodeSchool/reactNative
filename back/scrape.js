const cheerio = require('cheerio');
const parseDomain = require('parse-domain');
const request = require('request-promise');

const getHostName = url => {
  const urlParsed = parseDomain(url);
  const domainAndTld = `${urlParsed.domain}.${urlParsed.tld}`;

  return urlParsed.subdomain
    ? `${urlParsed.subdomain}.${domainAndTld}`
    : domainAndTld;
};

const getDocumentData = async (url, uid, name) => {
  const response = await request.get(url);
  const $ = cheerio.load(response);
  const canonicalUrl = $('link[rel=canonical]').attr('href') || url;
  const description =
    $('meta[property="og:description"]').attr('content') ||
    $('meta[name=description]').attr('content');

  return {
    name,
    uid,
    url,
    title: $('title').text(),
    description,
    imageUrl: $('meta[property="og:image"]').attr('content'),
    host: getHostName(canonicalUrl),
  };
};

module.exports = { getDocumentData };
