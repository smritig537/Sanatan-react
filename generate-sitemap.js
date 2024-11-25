
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');

// Create a list of URLs (you might fetch these dynamically from a database or API)
const urls = [
{ url: '/', changefreq: 'daily', priority: 1.0 },
{ url: '/about', changefreq: 'monthly', priority: 0.8 },
{ url: '/kumbhmela', changefreq: 'monthly', priority: 0.8 },
{ url: '/sanatanadharma', changefreq: 'monthly', priority: 0.8 },
{ url: '/supporters', changefreq: 'monthly', priority: 0.8 },
{ url: '/Locations-in-india', changefreq: 'monthly', priority: 0.8 },
{ url: '/gallery', changefreq: 'monthly', priority: 0.8 },
{ url: '/blogs', changefreq: 'monthly', priority: 0.8 },
{ url: '/blogs/reviving-ancient-wisdom', changefreq: 'monthly', priority: 0.8 },
{ url: '/blogs/Hindu-Religious-Texts-and-Scriptures', changefreq: 'monthly', priority: 0.8 },
{ url: '/blogs/indian-culture-and-traditions', changefreq: 'monthly', priority: 0.8 },

];

// Create a write stream for sitemap.xml
const sitemapStream = new SitemapStream({ hostname: 'https://sanatanadharmafoundation.co' });
const writeStream = fs.createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));

// Pipe the sitemap stream to the write stream
sitemapStream.pipe(createGzip()).pipe(writeStream);

// Add URLs to the sitemap
urls.forEach(url => sitemapStream.write(url));
sitemapStream.end();

// Notify when the sitemap is created
writeStream.on('finish', () => {
console.log('Sitemap created successfully!');
});